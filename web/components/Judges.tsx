import Image from 'next/image'

export default function Judges() {
  const judges = [
    {
      name: 'Matias',
      title: 'AI/ML & Autonomous Systems',
      bio: 'Expert in AI/ML and autonomous systems.',
      image: '/judges/matias.png',
    },
    {
      name: 'Axel',
      title: 'Tech Consultant & Business Development',
      bio: 'Tech consultant and business development specialist.',
      image: '/judges/axel.jpeg',
    },
    {
      name: 'Marcin',
      title: 'Developer Relations Leader',
      bio: 'Developer relations leader and community builder.',
      image: '/judges/marcin.png',
    },
  ]

  return (
    <section id="judges" className="section-padding bg-gradient-to-b from-dark-bg via-card-bg/20 to-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Judges</h2>
          <p className="text-muted text-lg">
            Our panel of expert judges evaluating your projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {judges.map((judge, i) => (
            <div key={i} className="glass-card rounded-xl p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/30 to-accent/30">
                <Image
                  src={judge.image}
                  alt={judge.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">{judge.name}</h3>
              <div className="text-sm text-accent mb-2">{judge.title}</div>
              <p className="text-sm text-muted">{judge.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
