import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import { generateInviteCode } from '@/lib/invite-code'
import type { RegistrationInput } from '@/lib/types'
import {
  sendRegistrationConfirmation,
  sendTeamCreatedEmail,
  sendTeamJoinNotification,
} from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body: RegistrationInput = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.country) {
      return NextResponse.json({ error: 'Name, email, and country are required' }, { status: 400 })
    }
    if (!body.acceptRules || !body.acceptCoC) {
      return NextResponse.json({ error: 'You must accept the rules and code of conduct' }, { status: 400 })
    }
    if (body.teamPreference === 'create' && !body.teamName?.trim()) {
      return NextResponse.json({ error: 'Team name is required when creating a team' }, { status: 400 })
    }
    if (body.teamPreference === 'join' && (!body.teamCode || body.teamCode.length !== 6)) {
      return NextResponse.json({ error: 'A valid 6-character invite code is required to join a team' }, { status: 400 })
    }

    const registrationId = crypto.randomUUID()
    const timestamp = new Date().toISOString()
    let teamInviteCode: string | undefined
    let teamName: string | undefined

    const registerTransaction = db.transaction(() => {
      // Insert registration
      db.prepare(`
        INSERT INTO registrations (
          id, timestamp, name, email, country, github, x_handle, discord,
          dev_level, bsv_experience, ai_tool, primary_language,
          team_preference, looking_for_team, accept_rules, accept_coc,
          email_consent, partner_data_sharing
        ) VALUES (
          ?, ?, ?, ?, ?, ?, ?, ?,
          ?, ?, ?, ?,
          ?, ?, ?, ?,
          ?, ?
        )
      `).run(
        registrationId, timestamp, body.name, body.email, body.country,
        body.github || '', body.xHandle || '', body.discord || '',
        body.devLevel || '', body.bsvExperience || '', body.aiTool || '', body.primaryLanguage || '',
        body.teamPreference || 'solo', body.lookingForTeam ? 1 : 0,
        body.acceptRules ? 1 : 0, body.acceptCoC ? 1 : 0,
        body.emailConsent ? 1 : 0, body.partnerDataSharing ? 1 : 0
      )

      // Handle team creation
      if (body.teamPreference === 'create') {
        // Generate a unique invite code
        let code: string
        const checkCode = db.prepare('SELECT 1 FROM teams WHERE invite_code = ?')
        do {
          code = generateInviteCode()
        } while (checkCode.get(code))

        db.prepare(`
          INSERT INTO teams (name, invite_code, created_by, created_at)
          VALUES (?, ?, ?, ?)
        `).run(body.teamName!.trim(), code, registrationId, timestamp)

        const team = db.prepare('SELECT id FROM teams WHERE invite_code = ?').get(code) as { id: number }
        db.prepare('INSERT INTO team_members (team_id, registration_id) VALUES (?, ?)').run(team.id, registrationId)

        teamInviteCode = code
        teamName = body.teamName!.trim()
      }

      // Handle joining a team
      if (body.teamPreference === 'join') {
        const code = body.teamCode!.toUpperCase()
        const team = db.prepare('SELECT id, name FROM teams WHERE invite_code = ?').get(code) as { id: number; name: string } | undefined

        if (!team) {
          throw new Error('INVALID_CODE')
        }

        const memberCount = db.prepare('SELECT COUNT(*) as count FROM team_members WHERE team_id = ?').get(team.id) as { count: number }
        if (memberCount.count >= 4) {
          throw new Error('TEAM_FULL')
        }

        db.prepare('INSERT INTO team_members (team_id, registration_id) VALUES (?, ?)').run(team.id, registrationId)
        teamName = team.name
        teamInviteCode = code
      }
    })

    try {
      registerTransaction()
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : ''
      if (message === 'INVALID_CODE') {
        return NextResponse.json({ error: 'Invalid invite code. Please check and try again.' }, { status: 400 })
      }
      if (message === 'TEAM_FULL') {
        return NextResponse.json({ error: 'This team is already full (max 4 members).' }, { status: 400 })
      }
      if (message.includes('UNIQUE constraint failed: registrations.email')) {
        return NextResponse.json({ error: 'This email is already registered' }, { status: 409 })
      }
      throw err
    }

    // Fire-and-forget emails
    sendRegistrationConfirmation(body.name, body.email).catch(console.error)

    if (body.teamPreference === 'create' && teamInviteCode && teamName) {
      sendTeamCreatedEmail(body.name, body.email, teamName, teamInviteCode).catch(console.error)
    }

    if (body.teamPreference === 'join' && teamInviteCode) {
      sendTeamJoinNotification(registrationId, teamInviteCode).catch(console.error)
    }

    return NextResponse.json({
      success: true,
      id: registrationId,
      message: `Welcome to Open Run Agentic Pay, ${body.name}!`,
      ...(teamInviteCode && { teamInviteCode }),
      ...(teamName && { teamName }),
    })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  const registrations = db.prepare(`
    SELECT country, team_preference FROM registrations
  `).all() as { country: string; team_preference: string }[]

  const byCountry: Record<string, number> = {}
  const byTeamPreference: Record<string, number> = {}

  for (const r of registrations) {
    byCountry[r.country] = (byCountry[r.country] || 0) + 1
    byTeamPreference[r.team_preference] = (byTeamPreference[r.team_preference] || 0) + 1
  }

  return NextResponse.json({
    count: registrations.length,
    byCountry,
    byTeamPreference,
  })
}
