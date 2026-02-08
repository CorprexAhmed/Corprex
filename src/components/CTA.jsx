import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import './CTA.css'

export default function CTA() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="cta-section" ref={ref}>
      <div className="container">
        <div className={`cta-content ${visible ? 'cta-visible' : ''}`}>
          <h2 className="cta-title">Ready to Take Control of Your AI?</h2>
          <p className="cta-subtitle">
            Let's discuss how Corprex can transform your business with secure,
            private AI infrastructure.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-light">
              Request Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
