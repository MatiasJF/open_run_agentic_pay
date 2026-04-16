'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { WalletClient } from '@bsv/sdk'
import {
  CertificatePreview,
  InscribeButton,
  RequestVCButton,
  WalletConnect,
  type AcquiredVC,
  type CertificateData,
} from '@/certificate-kit'

const EVENT = 'Open Run Agentic Pay Hackathon'
const ROLE = 'Builder'
const ISSUER = 'BSV Association'

function todayISO(): string {
  return new Date().toISOString().slice(0, 10)
}

export default function CertificatePage() {
  const [recipient, setRecipient] = useState('')
  const [projectName, setProjectName] = useState('')
  const [teamName, setTeamName] = useState('')
  const [client, setClient] = useState<WalletClient | null>(null)
  const [vc, setVc] = useState<AcquiredVC | null>(null)

  const data: CertificateData = useMemo(
    () => ({
      recipient,
      event: EVENT,
      role: ROLE,
      date: todayISO(),
      issuer: ISSUER,
      projectName,
      teamName,
      note: '',
    }),
    [recipient, projectName, teamName],
  )

  const canAct = recipient.trim().length > 0

  return (
    <main className="min-h-screen">
      <header className="border-b border-white/5 bg-dark-bg/80 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/openrun_logo.svg" alt="Open Run Agentic Pay" width={160} height={40} />
          </Link>
          <Link href="/verify" className="text-sm text-muted hover:text-white">
            Verify a certificate →
          </Link>
        </div>
      </header>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Attendance credential</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              Claim your <span className="text-accent">on-chain</span> certificate
            </h1>
            <p className="mt-4 max-w-2xl text-muted">
              Built by the BSV Association for the {EVENT}. Your certificate is inscribed on BSV as a 1-sat
              ordinal SVG — it lives in your wallet, renders inline on WhatsOnChain, and can be
              independently verified. Optionally acquire it as a Verifiable Credential issued by the BSV
              Association.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
            <div className="glass-card rounded-2xl p-6">
              <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-muted">Your details</h2>

              <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
                <label className="grid gap-1">
                  <span className="text-xs uppercase tracking-widest text-muted">Full name *</span>
                  <input
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="Your name as it should appear"
                    className="rounded-lg border border-white/10 bg-dark-bg px-3 py-2 text-white outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-xs uppercase tracking-widest text-muted">Project name</span>
                  <input
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Optional"
                    className="rounded-lg border border-white/10 bg-dark-bg px-3 py-2 text-white outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-xs uppercase tracking-widest text-muted">Team name</span>
                  <input
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Optional"
                    className="rounded-lg border border-white/10 bg-dark-bg px-3 py-2 text-white outline-none transition-colors focus:border-accent"
                  />
                </label>
              </form>

              <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-white/5 pt-5 text-sm">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Event</dt>
                  <dd className="text-white">{EVENT}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Role</dt>
                  <dd className="text-white">{ROLE}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Issuer</dt>
                  <dd className="text-white">{ISSUER}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">Date</dt>
                  <dd className="text-white">{data.date}</dd>
                </div>
              </dl>

              <div className="mt-6 grid gap-4">
                <WalletConnect onConnected={(c) => setClient(c)} />
                {canAct ? (
                  <InscribeButton
                    client={client}
                    data={data}
                    vcWrap={vc ?? undefined}
                    onIssued={(res) => {
                      void fetch('/api/cert-log', {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify({
                          txid: res.txid,
                          recipient: data.recipient,
                          projectName: data.projectName,
                          teamName: data.teamName,
                          event: data.event,
                          role: data.role,
                          date: data.date,
                          issuer: data.issuer,
                          identityKey: res.metadata.issuerIdentityKey,
                          signingPubKey: res.metadata.issuerPubKey,
                          imageSha256: res.imageSha256,
                          issuedAt: res.metadata.issuedAt,
                        }),
                      }).catch(() => {})
                    }}
                  />
                ) : (
                  <p className="text-xs text-muted">Enter your name to enable inscribe.</p>
                )}
                <div className="border-t border-white/5 pt-4">
                  {canAct && <RequestVCButton data={data} onAcquired={setVc} />}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted">Live preview</h2>
              <div className="glow-accent rounded-2xl">
                <CertificatePreview data={data} />
              </div>
              <p className="text-xs text-muted">
                The exact SVG rendered here becomes the inscription body. Each name, project, and team entry
                changes what is written on-chain.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
