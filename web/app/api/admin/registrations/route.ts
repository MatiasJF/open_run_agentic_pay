import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import { validateAdmin } from '@/lib/admin-auth'
import type { Registration } from '@/lib/types'

export async function GET(request: NextRequest) {
  const authError = validateAdmin(request)
  if (authError) return authError

  const url = new URL(request.url)
  const country = url.searchParams.get('country')
  const team = url.searchParams.get('team') // 'yes' | 'no'
  const from = url.searchParams.get('from') // ISO date
  const to = url.searchParams.get('to') // ISO date

  let query = 'SELECT * FROM registrations WHERE 1=1'
  const params: unknown[] = []

  if (country) {
    query += ' AND country = ?'
    params.push(country)
  }
  if (team === 'yes') {
    query += ' AND id IN (SELECT registration_id FROM team_members)'
  } else if (team === 'no') {
    query += ' AND id NOT IN (SELECT registration_id FROM team_members)'
  }
  if (from) {
    query += ' AND timestamp >= ?'
    params.push(from)
  }
  if (to) {
    query += ' AND timestamp <= ?'
    params.push(to)
  }

  query += ' ORDER BY timestamp DESC'

  const registrations = db.prepare(query).all(...params) as Registration[]

  return NextResponse.json({
    count: registrations.length,
    registrations,
  })
}
