import { NextRequest, NextResponse } from 'next/server'
import { appendCertLog } from '@/lib/cert-log'

const TXID_RE = /^[0-9a-fA-F]{64}$/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    if (typeof body?.txid !== 'string' || !TXID_RE.test(body.txid)) {
      return NextResponse.json({ success: false, error: 'Invalid txid' }, { status: 400 })
    }
    if (typeof body?.recipient !== 'string' || !body.recipient.trim()) {
      return NextResponse.json({ success: false, error: 'recipient required' }, { status: 400 })
    }
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      undefined
    const userAgent = req.headers.get('user-agent') ?? undefined

    await appendCertLog({
      txid: body.txid,
      recipient: String(body.recipient).slice(0, 200),
      projectName: body.projectName ? String(body.projectName).slice(0, 200) : undefined,
      teamName: body.teamName ? String(body.teamName).slice(0, 200) : undefined,
      event: String(body.event ?? '').slice(0, 200),
      role: body.role ? String(body.role).slice(0, 80) : undefined,
      date: String(body.date ?? '').slice(0, 40),
      issuer: String(body.issuer ?? '').slice(0, 200),
      identityKey: String(body.identityKey ?? '').slice(0, 200),
      signingPubKey: body.signingPubKey ? String(body.signingPubKey).slice(0, 200) : undefined,
      imageSha256: body.imageSha256 ? String(body.imageSha256).slice(0, 200) : undefined,
      issuedAt: String(body.issuedAt ?? '').slice(0, 40),
      loggedAt: new Date().toISOString(),
      clientIp: ip,
      userAgent,
    })
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ success: false, error: (e as Error).message }, { status: 500 })
  }
}
