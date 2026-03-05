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
      color: 'from-gray-300 to-gray-500',
      border: 'border-gray-400/30',
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-fr">
          {prizes.map((prize) => (
            <div
              key={prize.place}
              className={`glass-card rounded-xl p-6 border ${prize.border} flex flex-col items-center text-center ${
                prize.grand ? 'sm:col-span-2 lg:col-span-1 ring-1 ring-accent-warm/40 shadow-lg shadow-accent-warm/10' : ''
              }`}
            >
              <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                {prize.place}
              </h3>
              <div className={`text-4xl font-black font-mono text-accent-warm ${prize.grand ? 'text-5xl' : ''}`}>
                {prize.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
