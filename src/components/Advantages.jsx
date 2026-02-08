import useScrollReveal from '../hooks/useScrollReveal'
import './Advantages.css'

export default function Advantages() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section section-alt advantages-section" id="omega" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Enterprise-Grade. Always Included.</h2>
          <p className="section-subtitle">
            Every Omega deployment comes with the full platform — no add-ons, no tiers, no hidden costs.
          </p>
        </div>

        <div className={`ent-grid ${visible ? 'ent-visible' : ''}`}>
          {[
            ['384 GB+ VRAM', 'Starting GPU configuration for production AI workloads'],
            ['Unlimited users', 'No per-seat licensing — your whole team gets access'],
            ['Managed operations', 'We run your AI so you don\'t have to'],
            ['Modular MCP architecture', 'Enable, disable, and add capabilities at will'],
            ['HIPAA / SOX / FedRAMP ready', 'Compliance built into every layer'],
            ['Automatic updates', 'New models and features deployed seamlessly'],
            ['350+ data integrations', 'Databases, CRMs, ERPs, and more out of the box'],
            ['Privacy-respecting search', 'Internet access without exposing sensitive data'],
          ].map(([title, desc], i) => (
            <div
              className="ent-item"
              key={title}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="ent-check">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h4 className="ent-title">{title}</h4>
                <p className="ent-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
