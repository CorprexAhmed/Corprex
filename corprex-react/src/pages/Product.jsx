import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Section from '../components/ui/Section.jsx'
import PackageCard from '../components/PackageCard.jsx'
import CTABanner from '../components/ui/CTABanner.jsx'
import HeadMeta from '../components/HeadMeta.jsx'
import StickyCTA from '../components/StickyCTA.jsx'

export default function Product() {
  return (
    <>
      <HeadMeta title="Omega Lineup | Corprex" description="Explore Omega Mini, Omega, Omega Pro, and Omega Ultra—engineered for private, on‑prem AI." />
      <Nav logoWeight={600} />
      <section className="hero hero--center hero--compact">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">The Omega Lineup</h1>
            <p className="hero-subtitle">Four packages engineered for private, on‑prem AI—from teams to enterprise scale.</p>
            <div className="hero-cta"><a href="/pricing" className="btn btn--primary">View Pricing</a></div>
          </div>
        </div>
      </section>

      <Section title="Choose your Omega" subtitle="Each package is fully self-hosted, secure, and optimized for your workloads.">
        <div className="pricing-grid">
          {[
            { title: 'Omega Mini', price: '$8,999.99', cpu: '—', gpu: '—', users: ['1 user','3 users','5 users','10 users'] },
            { title: 'Omega', price: '$56,999.99', cpu: '—', gpu: '—', users: ['5 users','10 users','15 users','25 users'] },
            { title: 'Omega Pro', price: '$125,999.00', cpu: '—', gpu: '—', users: ['25 users','50 users','75 users','100 users'] },
            { title: 'Omega Ultra', price: '$195,999.00', cpu: '—', gpu: '—', users: ['100 users','250 users','500 users','1000 users'] },
          ].map((p) => (
            <PackageCard
              key={p.title}
              title={p.title}
              subtitle="Self-hosted"
              price={p.price}
              cpu={p.cpu}
              gpu={p.gpu}
              concurrentUsersLabel={p.users[0]}
              concurrentUsersOptions={p.users}
              showCapabilities={false}
              onSelect={() => { window.location.href = '/contact' }}
            />
          ))}
        </div>
      </Section>

      <Section>
        <CTABanner title="See Omega in action" subtitle="Book a private demo and explore packages tailored to your workloads" />
      </Section>
      <Footer />
      <StickyCTA />
    </>
  )
}


