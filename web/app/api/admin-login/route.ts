import { NextRequest, NextResponse } from 'next/server'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'APHADMIN2026'
const COOKIE_NAME = 'aph-admin'

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const password = String(form.get('password') ?? '')

  const target = new URL('/admin', req.url)
  if (password !== ADMIN_PASSWORD) {
    target.searchParams.set('error', '1')
    return NextResponse.redirect(target, 303)
  }

  const res = NextResponse.redirect(target, 303)
  res.cookies.set(COOKIE_NAME, 'ok', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 8,
    path: '/',
  })
  return res
}
