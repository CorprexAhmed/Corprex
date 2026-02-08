import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PrivateSearch from '../components/PrivateSearch'
import '../pages/Pages.css'

export default function PrivateSearchPage() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <h1 className="page-hero-title">
              Internet Access Without the Exposure
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="page-hero-subtitle">
              Your team needs current information. That shouldn't mean surrendering
              your intellectual property. Omega's search pipeline uses a custom
              software stack with a lightweight AI model and Microsoft Presidio to
              ensure nothing identifiable ever leaves your building.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Reuse the PrivateSearch component content */}
      <PrivateSearch />

      {/* CTA */}
      <section className="section page-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="section-title">Ready to Search Without Risk?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Give your team the power of internet-connected AI without exposing a
              single byte of proprietary data.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Request Demo
              </Link>
              <Link to="/why-local-ai" className="btn btn-secondary">
                Why Local AI?
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
