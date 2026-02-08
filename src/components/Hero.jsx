import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className={`hero-content ${loaded ? 'hero-animate' : ''}`}>
          <h1 className="hero-title">
            Don't think outside the box.
            <span className="hero-title-accent">Think with it.</span>
          </h1>
          <p className="hero-description">
            The Omega is your complete AI infrastructure in a single device.
            Starting at 384 GB of VRAM. No cloud. No data leaving your
            building. Ever.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Request Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/integrations" className="btn btn-secondary">
              Learn About Our Integrations
            </Link>
          </div>
        </div>
        <div className={`hero-visual ${loaded ? 'hero-animate-visual' : ''}`}>
          <div className="hero-image-wrapper">
            <img
              src="/Omega-Front.png"
              alt="The Corprex Omega — Private AI Server"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
