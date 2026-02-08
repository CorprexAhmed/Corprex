import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import './HowItWorks.css'

const steps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M9 22V2M2 9h20" />
      </svg>
    ),
    title: 'The Omega Hardware',
    desc: 'A rack-mounted server starting at 384 GB of VRAM, engineered for heavy AI workloads. Sits in your server room, plugs into your network, and stays completely under your control.',
    link: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: 'MCP Server Layer',
    desc: 'Every capability — data connectors, web search, document access, custom tools — runs as an independent MCP server you can enable or disable at will.',
    link: '/mcp-servers',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Private Search',
    desc: 'When your AI needs live internet data, our search pipeline scrubs every query through Microsoft Presidio to ensure zero intellectual property leakage.',
    link: '/private-search',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Corprex Chat',
    desc: 'Your team interacts through a clean chat interface — just like ChatGPT, but entirely private. Ask questions, query databases, search the web, and get answers instantly.',
    link: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: '350+ Integrations',
    desc: 'Connect to databases, CRMs, ERPs, marketing platforms, accounting software, and more. All connections run privately on your premises.',
    link: '/integrations',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
    title: 'Compliance Auditing',
    desc: 'Built-in audit logging and compliance reporting for HIPAA, SOX, and FedRAMP. Every query, every access event, and every model interaction is tracked and exportable.',
    link: null,
  },
]

export default function HowItWorks() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section hiw-section" id="platform" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How Omega Works</h2>
          <p className="section-subtitle">
            A complete AI platform that lives in your building, connects to your
            tools, and keeps everything private.
          </p>
        </div>

        <div className={`hiw-grid ${visible ? 'hiw-visible' : ''}`}>
          {steps.map((step, i) => (
            <div
              className="hiw-card"
              key={step.title}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="hiw-card-icon">{step.icon}</div>
              <h3 className="hiw-card-title">{step.title}</h3>
              <p className="hiw-card-desc">{step.desc}</p>
              {step.link && (
                <Link to={step.link} className="hiw-card-link">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
