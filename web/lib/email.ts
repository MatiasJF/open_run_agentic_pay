import { Resend } from 'resend'
import db from './db'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const FROM = process.env.RESEND_FROM_EMAIL || 'Open Run AgentPay <hackathon@bsvblockchain.org>'

function canSend(): boolean {
  return resend !== null
}

export async function sendRegistrationConfirmation(name: string, email: string) {
  if (!canSend()) return

  await resend!.emails.send({
    from: FROM,
    to: email,
    subject: 'Welcome to AgentPay Global Hackathon!',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h1 style="color: #2D5BFF;">You're registered, ${name}!</h1>
        <p>Thank you for signing up for the <strong>AgentPay Global Hackathon</strong> by Open Run.</p>
        <h3>Key Dates</h3>
        <ul>
          <li><strong>Registration closes:</strong> March 25, 2026</li>
          <li><strong>Hacking begins:</strong> March 26, 2026 (10:00 UTC)</li>
          <li><strong>Submissions due:</strong> April 9, 2026 (23:59 UTC)</li>
          <li><strong>Winners announced:</strong> April 15, 2026</li>
        </ul>
        <h3>What's Next?</h3>
        <ul>
          <li>Join our <a href="https://discord.gg/bsv">Discord</a> for updates and team coordination</li>
          <li>Check out the <a href="https://agentpay.bsvblockchain.org/resources">Resources page</a> to start learning</li>
          <li>Form or join a team (up to 4 members)</li>
        </ul>
        <p style="margin-top: 24px; color: #666; font-size: 14px;">
          — The Open Run Team
        </p>
      </div>
    `,
  })
}

export async function sendTeamCreatedEmail(
  name: string,
  email: string,
  teamName: string,
  inviteCode: string
) {
  if (!canSend()) return

  await resend!.emails.send({
    from: FROM,
    to: email,
    subject: `Team "${teamName}" created — share your invite code!`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h1 style="color: #2D5BFF;">Team Created!</h1>
        <p>Hi ${name}, your team <strong>${teamName}</strong> is ready.</p>
        <div style="background: #f4f4f8; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
          <p style="margin: 0 0 8px; font-size: 14px; color: #666;">Your Invite Code</p>
          <p style="margin: 0; font-size: 32px; font-weight: bold; letter-spacing: 6px; color: #2D5BFF;">${inviteCode}</p>
        </div>
        <p>Share this code with up to 3 teammates. They'll enter it during registration to join your team.</p>
        <p style="margin-top: 24px; color: #666; font-size: 14px;">
          — The Open Run Team
        </p>
      </div>
    `,
  })
}

export async function sendTeamJoinNotification(newMemberId: string, inviteCode: string) {
  if (!canSend()) return

  const newMember = db.prepare('SELECT name FROM registrations WHERE id = ?').get(newMemberId) as { name: string } | undefined
  if (!newMember) return

  const team = db.prepare('SELECT id, name FROM teams WHERE invite_code = ?').get(inviteCode) as { id: number; name: string } | undefined
  if (!team) return

  // Get all existing team members except the new one
  const members = db.prepare(`
    SELECT r.email, r.name FROM team_members tm
    JOIN registrations r ON r.id = tm.registration_id
    WHERE tm.team_id = ? AND tm.registration_id != ?
  `).all(team.id, newMemberId) as { email: string; name: string }[]

  const memberCount = members.length + 1 // include new member

  for (const member of members) {
    await resend!.emails.send({
      from: FROM,
      to: member.email,
      subject: `${newMember.name} joined your team "${team.name}"`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h1 style="color: #2D5BFF;">New Teammate!</h1>
          <p>Hi ${member.name}, <strong>${newMember.name}</strong> has joined <strong>${team.name}</strong>.</p>
          <p>Your team now has <strong>${memberCount}/4</strong> members.</p>
          ${memberCount < 4 ? `<p>Share your invite code <strong>${inviteCode}</strong> to add more teammates.</p>` : '<p>Your team is now full!</p>'}
          <p style="margin-top: 24px; color: #666; font-size: 14px;">
            — The Open Run Team
          </p>
        </div>
      `,
    })
  }
}

export async function sendBulkEmail(
  recipients: { name: string; email: string }[],
  subject: string,
  html: string
) {
  if (!canSend()) return

  const results = { sent: 0, failed: 0 }

  for (const recipient of recipients) {
    try {
      const personalizedHtml = html.replace(/\{\{name\}\}/g, recipient.name)
      await resend!.emails.send({
        from: FROM,
        to: recipient.email,
        subject,
        html: personalizedHtml,
      })
      results.sent++
    } catch {
      results.failed++
    }
  }

  return results
}
