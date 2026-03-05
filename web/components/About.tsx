export default function About() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
      title: 'Agentic Payments',
      description: 'AI agents that autonomously transact, negotiate, and settle payments on BSV — no human in the loop.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
      title: 'Micro-Transactions',
      description: 'BSV enables sub-cent transactions at scale — perfect for machine-to-machine economies.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: 'AI-Powered Development',
      description: 'The AI coding revolution is here. Use Claude, ChatGPT, Cursor, Copilot, Gemini, open-source models — whatever fits your flow. Fully agent-agnostic.',
    },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What is <span className="text-accent">AgentPay</span>?
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            Open Run AgentPay is an online global competition challenging developers to build applications where AI agents autonomously discover each other, negotiate, and exchange value through micro-payments. The hackathon is positioned as an AI-powered development event — fully agent-agnostic, meaning participants can use any AI coding tool they prefer. While AI-assisted development is encouraged, submissions will be judged on code quality, maintainability, and technical rigor. Solo developers and teams of up to four — this is your chance to pioneer machine-to-machine economies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="glass-card rounded-xl p-8 hover:border-accent/20 transition-all">
              <div className="text-accent mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Who should participate */}
        <div className="mt-16 glass-card rounded-xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Who Should Participate?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'AI-Powered Devs', desc: 'Ship fast with your favourite AI tools' },
              { label: 'AI/ML Engineers', desc: 'Building autonomous agent systems' },
              { label: 'Full-Stack Devs', desc: 'Shipping end-to-end applications' },
              { label: 'Blockchain Devs', desc: 'Exploring BSV micro-payments' },
            ].map((role) => (
              <div key={role.label} className="text-center">
                <div className="text-lg font-semibold text-white mb-1">{role.label}</div>
                <div className="text-sm text-muted">{role.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
