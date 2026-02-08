import useScrollReveal from '../hooks/useScrollReveal'
import './Features.css'

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'No Usage Limits',
    description:
      'Sub-second latency for mission-critical applications. No internet delays, no API rate limits, no downtime. Your AI is always available when you need it.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: 'Complete Privacy',
    description:
      'Your data never leaves your premises. Process sensitive information with military-grade security and zero cloud exposure. Perfect for legal, medical, and financial data.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: '230+ Integrations',
    description:
      'Connect to databases, CRMs, ERPs, marketing platforms, accounting software, e-commerce tools, and more. Every integration runs privately on your premises.',
  },
]

export default function Features() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section features-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Future of AI is Private</h2>
          <p className="section-subtitle">
            Why leading companies are choosing Corprex for their AI infrastructure
          </p>
        </div>

        <div className={`features-grid ${visible ? 'features-visible' : ''}`}>
          {features.map((feature, i) => (
            <div
              className="feature-card"
              key={i}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
