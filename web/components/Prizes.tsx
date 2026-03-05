export default function Prizes() {
  const prizes = [
    {
      place: 'Grand Prize',
      color: 'from-accent-warm to-fuchsia-600',
      border: 'border-accent-warm/30',
      amount: '$4,500',
      grand: true,
    },
    {
      place: 'Runner Up',
      color: 'from-or-green to-emerald-500',
      border: 'border-or-green/30',
      amount: '$2,500',
    },
    {
      place: 'Best Solo Builder',
      color: 'from-accent to-cyan-600',
      border: 'border-accent/30',
      amount: '$1,000',
    },
    {
      place: 'Most Innovative',
      color: 'from-accent-warm to-purple-500',
      border: 'border-accent-warm/30',
      amount: '$1,000',
    },
    {
      place: 'Best MCP Use',
      color: 'from-or-green to-emerald-500',
      border: 'border-or-green/30',
      amount: '$1,000',
    },
  ]

  return (
    <section id="prizes" className="section-padding bg-gradient-to-b from-dark-bg via-accent-warm/5 to-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Prizes</h2>
          <p className="text-muted text-lg">
            $10,000 total prize pool
          </p>
        </div>

        {/* Grand Prize — full width */}
        <div className="max-w-md mx-auto mb-6">
          <div className="glass-card rounded-xl p-8 border border-accent-warm/30 flex flex-col items-center text-center ring-1 ring-accent-warm/40 shadow-lg shadow-accent-warm/10">
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-accent-warm to-fuchsia-600 bg-clip-text text-transparent">
              Grand Prize
            </h3>
            <div className="text-5xl font-black font-mono bg-gradient-to-r from-accent-warm to-fuchsia-600 bg-clip-text text-transparent">
              $4,500
            </div>
          </div>
        </div>

        {/* Runner Up + Best Solo Builder */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-6">
          {prizes.filter(p => !p.grand).slice(0, 2).map((prize) => (
            <div
              key={prize.place}
              className={`glass-card rounded-xl p-6 border ${prize.border} flex flex-col items-center text-center`}
            >
              <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                {prize.place}
              </h3>
              <div className={`text-4xl font-black font-mono bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                {prize.amount}
              </div>
            </div>
          ))}
        </div>

        {/* Most Innovative + Best MCP Use */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {prizes.filter(p => !p.grand).slice(2).map((prize) => (
            <div
              key={prize.place}
              className={`glass-card rounded-xl p-6 border ${prize.border} flex flex-col items-center text-center`}
            >
              <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                {prize.place}
              </h3>
              <div className={`text-4xl font-black font-mono bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                {prize.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
