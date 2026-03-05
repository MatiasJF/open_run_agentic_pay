import { NextRequest, NextResponse } from 'next/server'

export function validateAdmin(request: NextRequest): NextResponse | null {
  const key = request.headers.get('X-Admin-Key')
  const expected = process.env.ADMIN_API_KEY

  if (!expected) {
    return NextResponse.json({ error: 'Admin API not configured' }, { status: 503 })
  }

  if (key !== expected) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return null // authorized
}
