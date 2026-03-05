export default function Challenge() {
  const requirements = [
    'At least 2 AI agents with their own BSV wallets',
    'At least 1.5M transactions on a 24-hour designated window for eligibility — transactions must be meaningful to the application\'s functionality',
    'Agents discover each other using BRC-100 wallets and identity',
    'Agents transact autonomously (MessageBox P2P or direct payments)',
    'Solves a real, identifiable problem',
    'Human-facing web UI showing agent activity',
  ]

  const ideas = [
    {
      title: 'Data Marketplace',
      desc: 'Agents buy and sell datasets, paying per query or per record.',
    },
    {
      title: 'AI Service Broker',
      desc: 'A router agent pays specialist agents per task — translation, summarization, code review.',
    },
    {
      title: 'Compute Settlement',
      desc: 'Distributed compute nodes settle micro-payments for GPU/CPU time.',
    },
  ]

  return (
    <section id="challenge" className="section-padding bg-gradient-to-b from-dark-bg via-card-bg/30 to-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Challenge</h2>
        </div>

        {/* Challenge statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <blockquote className="text-xl sm:text-2xl font-semibold text-center leading-relaxed border-l-4 border-accent pl-6 sm:pl-8 text-left">
            &ldquo;Build an application where two or more AI agents autonomously discover each other, negotiate, and exchange value through BSV micro-payments — solving a real-world problem.&rdquo;
          </blockquote>
        </div>

        {/* Requirements */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-xl font-bold mb-6">Requirements</h3>
          <div className="space-y-3">
            {requirements.map((req, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-muted">{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scale requirement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card rounded-xl p-6 sm:p-8 border-accent-warm/20 bg-accent-warm/5">
            <p className="text-muted text-sm">
              <strong className="text-white">Scale requirement:</strong> For eligibility, agents must demonstrate <strong className="text-accent">at least 1.5 million transactions recorded on-chain within a designated 24-hour window</strong>. Transactions must be meaningful to the application&apos;s functionality — artificial inflation will result in disqualification.
            </p>
          </div>
        </div>

        {/* Ideas */}
        <div>
          <h3 className="text-xl font-bold mb-8 text-center">Example Project Ideas</h3>
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ideas.map((idea) => (
              <div key={idea.title} className="glass-card rounded-xl p-6 hover:border-accent/20 transition-all">
                <h4 className="font-semibold mb-1">{idea.title}</h4>
                <p className="text-sm text-muted">{idea.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
