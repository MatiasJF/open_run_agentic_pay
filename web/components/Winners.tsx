export default function Winners() {
  const grand = {
    place: 'Grand Prize',
    name: 'John Calhoun',
    project: 'Dolphin Sense',
    link: 'https://drive.google.com/file/d/1s2X742VS-sWmm6JhXt3lYGP2Dyp0GJ5A/view',
    amount: '$4,500',
    color: 'from-accent-warm to-fuchsia-600',
    border: 'border-accent-warm/30',
  }

  const runnerUp = {
    place: 'Runner Up',
    name: 'Brendan Lee',
    project: 'Moldock',
    link: 'https://drive.google.com/file/d/1QUmgzVdAomnoVRVo4Tyn7ANwj-VoEnyn/view?usp=sharing',
    amount: '$2,500',
    color: 'from-or-green to-emerald-500',
    border: 'border-or-green/30',
  }

  const others = [
    {
      place: 'Most Innovative',
      name: 'B0ase',
      project: 'bMovies',
      link: 'https://bmovies.online',
      amount: '$1,000',
      color: 'from-accent-warm to-purple-500',
      border: 'border-accent-warm/30',
    },
    {
      place: 'Best Solo Builder',
      name: 'Francisco',
      project: 'Hormuz Shield',
      link: 'https://youtu.be/uck7aXWKf5Q',
      amount: '$1,000',
      color: 'from-accent to-cyan-600',
      border: 'border-accent/30',
    },
    {
      place: 'Best MCP Use',
      name: 'Thomas Høiby',
      project: 'Peck MCP',
      link: 'https://peck.to',
      amount: '$1,000',
      color: 'from-or-green to-emerald-500',
      border: 'border-or-green/30',
    },
  ]

  return (
    <section id="winners" className="section-padding bg-gradient-to-b from-dark-bg via-accent-warm/5 to-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-accent-warm/40 bg-accent-warm/10">
            <span className="text-xs font-mono tracking-widest text-accent-warm">RESULTS · APR 23</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Winners</h2>
          <p className="text-muted text-lg">
            Congratulations to the builders of Open Run.
          </p>
        </div>

        {/* Grand Prize */}
        <div className="max-w-md mx-auto mb-6">
          <div className={`glass-card rounded-xl p-8 border ${grand.border} flex flex-col items-center text-center ring-1 ring-accent-warm/40 shadow-lg shadow-accent-warm/10`}>
            <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${grand.color} bg-clip-text text-transparent`}>
              {grand.place}
            </h3>
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">
              {grand.name}
            </div>
            <div className="text-sm text-muted mb-4">{grand.project}</div>
            <div className={`text-2xl font-black font-mono mb-5 bg-gradient-to-r ${grand.color} bg-clip-text text-transparent`}>
              {grand.amount}
            </div>
            <a
              href={grand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-accent-warm/40 hover:border-accent-warm text-white text-sm font-semibold rounded-lg transition-all hover:bg-accent-warm/10"
            >
              View Project →
            </a>
          </div>
        </div>

        {/* Runner Up */}
        <div className="max-w-md mx-auto mb-6">
          <div className={`glass-card rounded-xl p-6 border ${runnerUp.border} flex flex-col items-center text-center`}>
            <h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${runnerUp.color} bg-clip-text text-transparent`}>
              {runnerUp.place}
            </h3>
            <div className="text-2xl sm:text-3xl font-black text-white mb-1">
              {runnerUp.name}
            </div>
            <div className="text-sm text-muted mb-3">{runnerUp.project}</div>
            <div className={`text-xl font-black font-mono mb-4 bg-gradient-to-r ${runnerUp.color} bg-clip-text text-transparent`}>
              {runnerUp.amount}
            </div>
            <a
              href={runnerUp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-or-green/40 hover:border-or-green text-white text-sm font-semibold rounded-lg transition-all hover:bg-or-green/10"
            >
              View Project →
            </a>
          </div>
        </div>

        {/* Category winners */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {others.map((w) => (
            <div
              key={w.place}
              className={`glass-card rounded-xl p-6 border ${w.border} flex flex-col items-center text-center`}
            >
              <h3 className={`text-base font-bold mb-2 bg-gradient-to-r ${w.color} bg-clip-text text-transparent`}>
                {w.place}
              </h3>
              <div className="text-xl sm:text-2xl font-black text-white mb-1">
                {w.name}
              </div>
              <div className="text-sm text-muted mb-3">{w.project}</div>
              <div className={`text-lg font-black font-mono mb-4 bg-gradient-to-r ${w.color} bg-clip-text text-transparent`}>
                {w.amount}
              </div>
              <a
                href={w.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 border ${w.border} hover:border-white/60 text-white text-sm font-semibold rounded-lg transition-all hover:bg-white/5`}
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
