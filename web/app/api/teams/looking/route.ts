import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET() {
  const members = db.prepare(`
    SELECT name, country, dev_level, discord
    FROM registrations
    WHERE looking_for_team = 1
    ORDER BY timestamp DESC
  `).all() as { name: string; country: string; dev_level: string; discord: string }[]

  return NextResponse.json({
    count: members.length,
    members,
  })
}
