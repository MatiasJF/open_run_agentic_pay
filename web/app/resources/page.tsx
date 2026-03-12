import Link from 'next/link'
import Image from 'next/image'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors text-sm mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <Image src="/openrun/logo-stacked-cyan.svg" alt="Open Run" width={120} height={32} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Resources</h1>
          <p className="text-muted">Everything you need to build your Open Run Agentic Pay project</p>
        </div>

        <div className="space-y-8">
          {/* Core Tools */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Core Tools</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="https://www.npmjs.com/package/@bsv/sdk" target="_blank" rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 hover:border-accent/20 transition-all group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">@bsv/sdk</h3>
                <p className="text-sm text-muted mb-3">
                  Core JS/TS library for BSV developers. The foundation for building BSV applications.
                </p>
                <code className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">npm install @bsv/sdk</code>
              </a>

              <a href="https://www.npmjs.com/package/@bsv/simple" target="_blank" rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 hover:border-accent/20 transition-all group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">@bsv/simple</h3>
                <p className="text-sm text-muted mb-3">
                  Modular library for BSV wallets, payments, tokens, credentials, messaging, and more.
                </p>
                <code className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">npm install @bsv/simple</code>
              </a>

              <a href="https://www.npmjs.com/package/@bsv/simple-mcp" target="_blank" rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 hover:border-accent/20 transition-all group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">@bsv/simple-mcp</h3>
                <p className="text-sm text-muted mb-3">
                  MCP server that gives your AI coding assistant deep knowledge of the BSV stack. 11 resources, 9 tools, 3 prompts.
                </p>
                <code className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">npm install @bsv/simple-mcp</code>
              </a>

              <a href="https://desktop.bsvb.tech" target="_blank" rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 hover:border-accent/20 transition-all group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">BSV Desktop Wallet</h3>
                <p className="text-sm text-muted mb-3">
                  Full-featured desktop wallet. Use it to fund your agent wallets and sign transactions during development.
                </p>
                <code className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">desktop.bsvb.tech</code>
              </a>
            </div>
          </section>

          {/* Key Concepts */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Key Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Agent Wallets',
                  desc: 'Each AI agent needs its own BSV wallet (server-side). Use @bsv/simple/server for backend wallets.',
                },
                {
                  title: 'P2P Messaging',
                  desc: 'Agents communicate through MessageBox — a P2P messaging protocol on BSV. Use it for discovery, negotiation, and coordination.',
                },
                {
                  title: 'Identity & Discovery',
                  desc: 'Agents can register identities and discover each other using the identity registry, DIDs, or overlay lookup services.',
                },
                {
                  title: 'Micro-Payments',
                  desc: 'BSV supports sub-cent transactions. Perfect for pay-per-query, pay-per-task, or streaming payment models between agents.',
                },
                {
                  title: 'Credentials',
                  desc: 'Issue and verify verifiable credentials to establish trust between agents — prove capabilities, certifications, or permissions.',
                },
                {
                  title: 'Tokens',
                  desc: 'Create and transfer tokens on BSV. Useful for representing access rights, reputation scores, or other agent-to-agent assets.',
                },
              ].map((concept) => (
                <div key={concept.title} className="glass-card rounded-xl p-5">
                  <h3 className="font-bold mb-1">{concept.title}</h3>
                  <p className="text-sm text-muted">{concept.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Help */}
          <section className="glass-card rounded-xl p-6 sm:p-8 border-accent/20 text-center">
            <h2 className="text-xl font-bold mb-3">Need Help?</h2>
            <p className="text-muted text-sm mb-4">
              Join the Discord server for technical support, team formation, and to connect with other participants.
            </p>
            <a
              href="https://discord.com/invite/bsv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent-warm hover:bg-accent-warm/80 text-white font-semibold rounded-lg transition-colors"
            >
              Join Discord
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}
