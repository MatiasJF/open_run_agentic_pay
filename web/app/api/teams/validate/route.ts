import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code')?.toUpperCase()

  if (!code || code.length !== 6) {
    return NextResponse.json({ error: 'A 6-character invite code is required' }, { status: 400 })
  }

  const team = db.prepare('SELECT id, name FROM teams WHERE invite_code = ?').get(code) as { id: number; name: string } | undefined

  if (!team) {
    return NextResponse.json({ valid: false })
  }

  const memberCount = db.prepare('SELECT COUNT(*) as count FROM team_members WHERE team_id = ?').get(team.id) as { count: number }

  return NextResponse.json({
    valid: true,
    teamName: team.name,
    memberCount: memberCount.count,
    isFull: memberCount.count >= 4,
  })
}
