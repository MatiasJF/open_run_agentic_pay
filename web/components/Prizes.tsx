export default function Prizes() {
  const prizes = [
    {
      place: 'Grand Prize',
      color: 'from-accent-warm to-yellow-600',
      border: 'border-accent-warm/30',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-3.77 1.522m0 0a6.003 6.003 0 01-3.77-1.522" />
        </svg>
      ),
      description: 'Best overall multi-agent payment application',
    },
    {
      place: 'Runner Up',
      color: 'from-gray-300 to-gray-500',
      border: 'border-gray-400/30',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
      description: 'Second-place overall submission',
    },
    {
      place: 'Best Solo Builder',
      color: 'from-accent to-blue-600',
      border: 'border-accent/30',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      description: 'Best project built by a solo participant',
    },
    {
      place: 'Most Innovative',
      color: 'from-purple-400 to-pink-500',
      border: 'border-purple-400/30',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
      description: 'Most creative or novel use of agent payments',
    },
    {
      place: 'Best MCP Use',
      color: 'from-green-400 to-emerald-600',
      border: 'border-green-400/30',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      description: 'Best integration of the MCP server for AI-assisted development',
    },
  ]

  return (
    <section id="prizes" className="section-padding bg-gradient-to-b from-dark-bg via-primary/5 to-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Prizes</h2>
          <p className="text-muted text-lg">
            Prize amounts to be announced with partner confirmations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-fr">
          {prizes.map((prize) => (
            <div
              key={prize.place}
              className={`glass-card rounded-xl p-6 border ${prize.border} flex flex-col`}
            >
              <div className={`bg-gradient-to-br ${prize.color} bg-clip-text text-transparent mb-4`}>
                {prize.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                {prize.place}
              </h3>
              <p className="text-sm text-muted flex-1">{prize.description}</p>
              <div className="mt-4 text-2xl font-bold font-mono text-accent-warm/60">TBD</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
