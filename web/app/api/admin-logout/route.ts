import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const res = NextResponse.redirect(new URL('/admin', req.url), 303)
  res.cookies.delete('aph-admin')
  return res
}
