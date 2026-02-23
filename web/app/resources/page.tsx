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
            <Image src="/agentpay-logo.svg" alt="AgentPay" width={120} height={32} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Resources</h1>
          <p className="text-muted">Everything you need to build your AgentPay project</p>
        </div>

        <div className="space-y-8">
          {/* Core Tools */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Core Tools</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="https://github.com/bitcoin-sv/ts-sdk" target="_blank" rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 hover:border-accent/20 transition-all group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">@bsv/simple</h3>
                <p className="text-sm text-muted mb-3">
                  The main library for building BSV applications. Handles wallets, payments, tokens, credentials, messaging, and more.
                </p>
                <code className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">npm install @bsv/simple</code>
              </a>

              <a href="https://github.com/MatiasJF/simple-mcp" target="_blank" rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 hover:border-accent/20 transition-all group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">simple-mcp</h3>
                <p className="text-sm text-muted mb-3">
                  MCP server that gives your AI coding assistant deep knowledge of the BSV stack. 11 resources, 9 tools, 3 prompts.
                </p>
                <code className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">git clone &amp; npm run build</code>
              </a>

              <a href="https://desktop.bsvb.tech" target="_blank" rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 hover:border-accent/20 transition-all group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">BSV Desktop Wallet</h3>
                <p className="text-sm text-muted mb-3">
                  Full-featured desktop wallet. Use it to fund your agent wallets and sign transactions during development.
                </p>
                <code className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">desktop.bsvb.tech</code>
              </a>

              <div className="glass-card rounded-xl p-6 border-dashed border-white/10">
                <h3 className="text-lg font-bold mb-2">Starter Templates</h3>
                <p className="text-sm text-muted mb-3">
                  Pre-built Next.js templates with wallet integration, agent loops, and MCP config. Three levels of complexity.
                </p>
                <span className="inline-block text-xs font-mono text-accent-warm bg-accent-warm/10 px-2 py-1 rounded">Available March 7</span>
              </div>
            </div>
          </section>

          {/* MCP Setup Guide */}
          <section>
            <h2 className="text-2xl font-bold mb-6">MCP Server Setup</h2>
            <div className="glass-card rounded-xl p-6 sm:p-8">
              <p className="text-muted text-sm mb-4">
                The MCP server gives your AI coding assistant (Claude Code, Cursor, Windsurf, etc.) deep knowledge of the BSV stack. Follow these steps to set it up:
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">1. Clone and build</h4>
                  <pre className="bg-dark-bg rounded-lg p-4 text-sm font-mono text-accent overflow-x-auto">
{`git clone git@github.com:MatiasJF/simple-mcp.git
cd simple-mcp
npm install
npm run build`}
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">2. Configure your AI tool</h4>
                  <p className="text-muted text-xs mb-2">For Claude Code, add to <code className="text-accent">~/.claude/settings.json</code>:</p>
                  <pre className="bg-dark-bg rounded-lg p-4 text-sm font-mono text-accent overflow-x-auto">
{`{
  "mcpServers": {
    "simple": {
      "command": "node",
      "args": ["/path/to/simple-mcp/dist/index.js"]
    }
  }
}`}
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">3. Verify it works</h4>
                  <p className="text-muted text-sm">
                    Start your AI tool and ask it about BSV payments or wallet creation. It should have access to all @bsv/simple documentation and code generation tools.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Start Guide */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Quick Start: Agent Wallet in 20 Lines</h2>
            <div className="glass-card rounded-xl p-6 sm:p-8">
              <pre className="bg-dark-bg rounded-lg p-4 text-sm font-mono text-accent overflow-x-auto">
{`import { WalletClient } from '@bsv/sdk'
import { Services, StorageClient } from '@bsv/wallet-toolbox'

// Create a server-side agent wallet
const services = new Services('mainnet')
const storage = new StorageClient(services, 'agent-wallet.db')
const wallet = new WalletClient(storage)

// Agent sends a payment
const { txid } = await wallet.createAction({
  description: 'Agent payment for data access',
  outputs: [{
    satoshis: 100,  // ~$0.003
    lockingScript: recipientScript,
    outputDescription: 'payment',
  }],
})

console.log('Payment sent:', txid)`}
              </pre>
              <p className="text-xs text-muted mt-3">
                This is a simplified example. See the full @bsv/simple documentation for complete patterns including P2P messaging, identity, and credentials.
              </p>
            </div>
          </section>

          {/* Key Concepts */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Key Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Agent Wallets',
                  desc: 'Each AI agent needs its own BSV wallet (server-side). Use @bsv/wallet-toolbox for backend wallets with SQLite storage.',
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

          {/* Reference Implementations */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Reference Implementations</h2>
            <p className="text-muted text-sm mb-4">
              Three existing challenge solutions from the BSV-Simplify project are available as reference:
            </p>
            <div className="space-y-3">
              {[
                { name: 'Proof of Receipt', desc: 'Payment verification with on-chain receipts' },
                { name: 'Peer Tip Jar', desc: 'P2P payments with identity registry and DID resolution' },
                { name: 'Verified Freelancer Marketplace', desc: 'Credentials, identity, and payments in a marketplace' },
              ].map((ref) => (
                <div key={ref.name} className="glass-card rounded-lg p-4 flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">{ref.name}</div>
                    <div className="text-xs text-muted">{ref.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Starter Templates */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Starter Templates</h2>
            <p className="text-muted text-sm mb-4">Three template levels to get you started fast (available March 7):</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: 'Minimal', desc: 'Next.js + Tailwind + wallet connect + MCP config', level: 'Level 1' },
                { name: 'Agent', desc: 'Minimal + 2 server wallets + identity registry + agent loop skeleton', level: 'Level 2' },
                { name: 'Full-Stack', desc: 'Agent + credentials + tokens + MessageBox + multi-agent orchestration', level: 'Level 3' },
              ].map((template) => (
                <div key={template.name} className="glass-card rounded-xl p-5 border-dashed border-white/10">
                  <div className="text-xs font-mono text-accent mb-2">{template.level}</div>
                  <h3 className="font-bold mb-1">{template.name}</h3>
                  <p className="text-xs text-muted">{template.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Help */}
          <section className="glass-card rounded-xl p-6 sm:p-8 border-primary/20 text-center">
            <h2 className="text-xl font-bold mb-3">Need Help?</h2>
            <p className="text-muted text-sm mb-4">
              Join the Discord server for technical support, team formation, and to connect with other participants.
            </p>
            <a
              href="https://discord.gg/bsvblockchain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
            >
              Join Discord
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}
