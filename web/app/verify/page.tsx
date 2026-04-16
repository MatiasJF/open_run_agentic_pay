'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function VerifyIndex() {
  const [txid, setTxid] = useState('')
  const router = useRouter()

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (txid.trim()) router.push(`/verify/${txid.trim()}`)
  }

  return (
    <main className="min-h-screen">
      <header className="border-b border-white/5 bg-dark-bg/80 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/openrun_logo.svg" alt="Open Run Agentic Pay" width={160} height={40} />
          </Link>
          <Link href="/certificate" className="text-sm text-muted hover:text-white">
            ← Claim a certificate
          </Link>
        </div>
      </header>

      <section className="section-padding">
        <div className="mx-auto max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Verification</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Verify a certificate</h1>
          <p className="mt-3 text-muted">
            Paste the transaction id. We pull the tx from WhatsOnChain, decode the image inscription, and
            check the signature and on-chain metadata.
          </p>
          <form onSubmit={submit} className="mt-6 flex gap-2">
            <input
              value={txid}
              onChange={(e) => setTxid(e.target.value)}
              placeholder="txid"
              className="flex-1 rounded-lg border border-white/10 bg-dark-bg px-3 py-2 font-mono text-sm text-white outline-none transition-colors focus:border-accent"
            />
            <button
              type="submit"
              className="rounded-lg bg-accent px-5 py-2 font-semibold text-dark-bg hover:brightness-110"
            >
              Verify
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
