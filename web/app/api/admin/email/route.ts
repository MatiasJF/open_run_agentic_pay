import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import { validateAdmin } from '@/lib/admin-auth'
import { sendBulkEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  const authError = validateAdmin(request)
  if (authError) return authError

  const body = await request.json()
  const { subject, html, consentOnly, country } = body as {
    subject?: string
    html?: string
    consentOnly?: boolean
    country?: string
  }

  if (!subject || !html) {
    return NextResponse.json({ error: 'subject and html are required' }, { status: 400 })
  }

  let query = 'SELECT name, email FROM registrations WHERE 1=1'
  const params: unknown[] = []

  if (consentOnly) {
    query += ' AND email_consent = 1'
  }
  if (country) {
    query += ' AND country = ?'
    params.push(country)
  }

  const recipients = db.prepare(query).all(...params) as { name: string; email: string }[]

  if (recipients.length === 0) {
    return NextResponse.json({ error: 'No matching recipients' }, { status: 404 })
  }

  const results = await sendBulkEmail(recipients, subject, html)

  return NextResponse.json({
    total: recipients.length,
    ...results,
  })
}
