import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import './Capabilities.css'

const capabilities = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: 'Custom MCP Servers',
    desc: 'Every feature is a modular MCP server your team can enable or disable. We build and deploy custom servers tailored to your business.',
    link: '/mcp-servers',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    title: 'Private Search',
    desc: 'Internet access without exposing your intellectual property. Every query is scrubbed through Microsoft Presidio before it leaves your network.',
    link: '/private-search',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: 'Integrations',
    desc: 'Connect to 230+ data sources including databases, CRMs, ERPs, marketing tools, accounting platforms, and more.',
    link: '/integrations',
  },
]

export default function Capabilities() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section cap-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Additional Capabilities</h2>
          <p className="section-subtitle">
            Powerful solutions that deliver greater intelligence, privacy, and
            impact across your organization.
          </p>
        </div>

        <div className={`cap-grid ${visible ? 'cap-visible' : ''}`}>
          {capabilities.map((cap, i) => (
            <Link
              to={cap.link}
              className="cap-card"
              key={cap.title}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="cap-card-icon">{cap.icon}</div>
              <h3 className="cap-card-title">{cap.title}</h3>
              <p className="cap-card-desc">{cap.desc}</p>
              <span className="cap-card-link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
