import Hero from '../components/Hero'
import Stats from '../components/Stats'
import HowItWorks from '../components/HowItWorks'
import ChatShowcase from '../components/ChatShowcase'
import Features from '../components/Features'
import Advantages from '../components/Advantages'
import Capabilities from '../components/Capabilities'
import Comparison from '../components/Comparison'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <ChatShowcase />
      <Features />
      <Advantages />
      <HowItWorks />
      <Comparison />
      <Capabilities />
      <FAQ />
      <CTA />
    </div>
  )
}
