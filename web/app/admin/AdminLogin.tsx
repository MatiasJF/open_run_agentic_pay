import Link from 'next/link'
import Image from 'next/image'

export default function AdminLogin({ error }: { error?: boolean }) {
  return (
    <main className="min-h-screen">
      <header className="border-b border-white/5 bg-dark-bg/80 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/openrun_logo.svg" alt="Open Run Agentic Pay" width={160} height={40} />
          </Link>
        </div>
      </header>

      <section className="section-padding">
        <div className="mx-auto max-w-md">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Admin</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Staff only</h1>
          <p className="mt-3 text-muted">
            Enter the admin password to view the certificate issuance log.
          </p>
          <form action="/api/admin-login" method="POST" className="mt-6 grid gap-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoFocus
              required
              className="rounded-lg border border-white/10 bg-dark-bg px-3 py-2 text-white outline-none focus:border-accent"
            />
            {error && (
              <p className="text-sm text-red-400">Wrong password.</p>
            )}
            <button
              type="submit"
              className="rounded-lg bg-accent px-5 py-2 font-semibold text-dark-bg hover:brightness-110"
            >
              Unlock
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
