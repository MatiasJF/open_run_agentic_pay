import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Challenge from '@/components/Challenge'
import TechStack from '@/components/TechStack'
import Prizes from '@/components/Prizes'
import Timeline from '@/components/Timeline'
import Judges from '@/components/Judges'
import Partners from '@/components/Partners'
import FAQ from '@/components/FAQ'
import RegistrationCTA from '@/components/RegistrationCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Challenge />
        <TechStack />
        <Prizes />
        <Timeline />
        <Judges />
        <Partners />
        <FAQ />
        <RegistrationCTA />
      </main>
      <Footer />
    </>
  )
}
