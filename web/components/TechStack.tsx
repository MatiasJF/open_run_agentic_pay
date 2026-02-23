export default function TechStack() {
  const tools = [
    {
      name: '@bsv/simple',
      desc: 'Modular library for BSV wallets, payments, tokens, credentials, messaging, and more.',
      tag: 'npm install @bsv/simple',
      link: 'https://github.com/bitcoin-sv/ts-sdk',
    },
    {
      name: 'simple-mcp',
      desc: 'MCP server for AI-assisted BSV development. 11 resources, 9 code-gen tools, 3 prompts.',
      tag: 'AI Assistant Integration',
      link: 'https://github.com/MatiasJF/simple-mcp',
    },
    {
      name: 'BSV Desktop Wallet',
      desc: 'Full-featured desktop wallet to fund your agents and sign transactions.',
      tag: 'desktop.bsvb.tech',
      link: 'https://desktop.bsvb.tech',
    },
    {
      name: 'Starter Templates',
      desc: 'Pre-built Next.js templates with wallet integration, agent loops, and MCP config.',
      tag: 'Coming Mar 7',
      link: '/resources',
    },
  ]

  return (
    <section id="techstack" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Everything you need to build agentic payment systems on BSV. Bring your own AI tools — we&apos;re fully agent-agnostic.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.link}
              target={tool.link.startsWith('http') ? '_blank' : undefined}
              rel={tool.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="glass-card rounded-xl p-6 hover:border-accent/20 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{tool.name}</h3>
                <svg className="w-4 h-4 text-muted group-hover:text-accent transition-colors mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-sm text-muted mb-3">{tool.desc}</p>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">
                {tool.tag}
              </span>
            </a>
          ))}
        </div>

        {/* Compatible tools */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted mb-4">Vibe-code with whatever tools you love — we&apos;re agent-agnostic</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-mono text-muted">
            {['Claude Code', 'ChatGPT', 'Cursor', 'Windsurf', 'GitHub Copilot', 'Gemini', 'Open-Source LLMs', 'Any AI Tool'].map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-lg border border-white/10 bg-white/5">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
