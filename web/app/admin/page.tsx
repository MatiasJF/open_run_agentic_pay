import Link from 'next/link'
import Image from 'next/image'
import { cookies } from 'next/headers'
import { readCertLog } from '@/lib/cert-log'
import AdminLogin from './AdminLogin'

export const dynamic = 'force-dynamic'

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams
  const store = await cookies()
  const isAuthed = store.get('aph-admin')?.value === 'ok'

  if (!isAuthed) {
    return <AdminLogin error={error === '1'} />
  }

  const entries = (await readCertLog()).reverse()

  return (
    <main className="min-h-screen">
      <header className="border-b border-white/5 bg-dark-bg/80 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/openrun_logo.svg" alt="Open Run Agentic Pay" width={160} height={40} />
          </Link>
          <form action="/api/admin-logout" method="POST">
            <button type="submit" className="text-sm text-muted hover:text-white">
              Sign out
            </button>
          </form>
        </div>
      </header>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-baseline justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Admin</p>
              <h1 className="mt-2 text-3xl font-bold text-white">
                Issued certificates{' '}
                <span className="font-mono text-muted">({entries.length})</span>
              </h1>
            </div>
          </div>

          {entries.length === 0 ? (
            <div className="glass-card rounded-2xl p-8 text-center text-muted">
              No certificates have been logged yet. Once participants claim their certificate on{' '}
              <Link href="/certificate" className="text-accent hover:underline">
                /certificate
              </Link>
              , entries will appear here.
            </div>
          ) : (
            <div className="glass-card overflow-x-auto rounded-2xl">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="border-b border-white/10 bg-white/[0.02] text-xs uppercase tracking-wider text-muted">
                  <tr>
                    <th className="p-3">When</th>
                    <th className="p-3">Recipient</th>
                    <th className="p-3">Project / Team</th>
                    <th className="p-3">Role</th>
                    <th className="p-3">Identity</th>
                    <th className="p-3">Tx</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((e, i) => (
                    <tr key={`${e.txid}-${i}`} className="border-b border-white/5 align-top">
                      <td className="p-3 font-mono text-xs text-muted">
                        <div>{new Date(e.issuedAt || e.loggedAt).toLocaleString()}</div>
                        <div className="text-[10px] opacity-60">{e.date}</div>
                      </td>
                      <td className="p-3 text-white">{e.recipient}</td>
                      <td className="p-3 text-muted">
                        {e.projectName && <div className="text-white">{e.projectName}</div>}
                        {e.teamName && <div className="text-xs">{e.teamName}</div>}
                        {!e.projectName && !e.teamName && <span className="text-muted">—</span>}
                      </td>
                      <td className="p-3 text-muted">{e.role ?? '—'}</td>
                      <td className="p-3 font-mono text-[11px] text-muted" title={e.identityKey}>
                        {e.identityKey ? `${e.identityKey.slice(0, 12)}…${e.identityKey.slice(-6)}` : '—'}
                      </td>
                      <td className="p-3 font-mono text-[11px]">
                        <a
                          href={`https://whatsonchain.com/tx/${e.txid}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-accent hover:underline"
                          title={e.txid}
                        >
                          {e.txid.slice(0, 10)}…
                        </a>
                        <div className="mt-1">
                          <Link
                            href={`/verify/${e.txid}`}
                            className="text-[10px] text-muted hover:text-white"
                          >
                            verify →
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p className="mt-6 text-xs text-muted">
            Persisted to Netlify Blobs in production (local dev uses <code>web/data/certificates.jsonl</code>).
            The on-chain record is authoritative — entries here are best-effort. Anyone can POST to the
            log endpoint, so treat the identity and IP as hints, not proof.
          </p>
        </div>
      </section>
    </main>
  )
}
