import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import { validateAdmin } from '@/lib/admin-auth'

interface TeamRow {
  id: number
  name: string
  invite_code: string
  created_by: string
  created_at: string
}

interface MemberRow {
  registration_id: string
  member_name: string
  email: string
  country: string
}

export async function GET(request: NextRequest) {
  const authError = validateAdmin(request)
  if (authError) return authError

  const teams = db.prepare('SELECT * FROM teams ORDER BY created_at DESC').all() as TeamRow[]

  const teamsWithMembers = teams.map((team) => {
    const members = db.prepare(`
      SELECT tm.registration_id, r.name as member_name, r.email, r.country
      FROM team_members tm
      JOIN registrations r ON r.id = tm.registration_id
      WHERE tm.team_id = ?
    `).all(team.id) as MemberRow[]

    return {
      ...team,
      member_count: members.length,
      members,
    }
  })

  return NextResponse.json({
    count: teamsWithMembers.length,
    teams: teamsWithMembers,
  })
}
