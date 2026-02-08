import useScrollReveal from '../hooks/useScrollReveal'
import './Comparison.css'

const rows = [
  { feature: 'Data Privacy', omega: '100% Private', cloud: 'Data Leaves Premises' },
  { feature: 'Monthly Cost', omega: '$0 After Purchase', cloud: '$500-$10,000+/mo' },
  { feature: 'Usage Limits', omega: 'Unlimited', cloud: 'Token Limits' },
  { feature: 'Response Time', omega: '<1 Second', cloud: 'Variable Latency' },
  { feature: 'Customization', omega: 'Full Control', cloud: 'Limited Options' },
  { feature: 'Compliance', omega: 'HIPAA/SOX/FedRAMP', cloud: 'Shared Infrastructure' },
  { feature: 'Availability', omega: '100% Uptime', cloud: 'Internet Dependent' },
]

export default function Comparison() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section comparison-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Omega vs. Cloud AI</h2>
          <p className="section-subtitle">
            See the difference ownership makes for your business
          </p>
        </div>

        <div className={`comparison-table ${visible ? 'comp-visible' : ''}`}>
          <div className="comparison-header-row">
            <div className="comparison-cell">Feature</div>
            <div className="comparison-cell highlight">Corprex Omega</div>
            <div className="comparison-cell">Cloud AI</div>
          </div>
          {rows.map((row, i) => (
            <div
              className="comparison-row"
              key={i}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="comparison-cell feature-name">{row.feature}</div>
              <div className="comparison-cell omega-cell">
                <span className="check-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {row.omega}
              </div>
              <div className="comparison-cell cloud-cell">
                <span className="cross-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
                {row.cloud}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
