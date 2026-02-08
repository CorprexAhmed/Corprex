import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import './WhyLocalAI.css'

/* ── helper: each section gets its own reveal ── */
function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`wla-reveal ${visible ? 'wla-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

/* ── data ── */
const risks = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Your data is visible to others',
    desc: 'Every prompt you send to a cloud AI service is transmitted to, and processed on, someone else\'s servers. Your contracts, financials, and customer records pass through infrastructure you don\'t own and can\'t audit.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'One outage shuts you down',
    desc: 'Cloud AI depends on the provider\'s uptime and your internet connection. When either fails, your team loses access to every AI-powered workflow at the same time.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Costs scale against you',
    desc: 'Per-token and per-seat pricing means the more value you get from AI, the higher your bill climbs. Growth becomes a cost problem instead of a competitive advantage.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
      </svg>
    ),
    title: 'You\'re locked into their roadmap',
    desc: 'When a provider changes pricing, deprecates a model, or updates their terms of service, you have to comply. Your AI strategy runs on their timeline, not yours.',
  },
]

const benefits = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Complete data sovereignty',
    desc: 'Every query, every document, and every response stays inside your building. Nothing is ever transmitted externally.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Sub-second responses, always',
    desc: 'Processing happens on your local network. No internet round-trips, no variable latency, no API rate limits slowing your team down.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Unlimited users, zero per-seat fees',
    desc: 'Give your entire organization access. There are no user caps, no tiered plans, and no incremental costs as your team grows.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Compliance by architecture',
    desc: 'HIPAA, SOX, FedRAMP — when data never leaves your premises, regulatory compliance becomes a product of your infrastructure, not a layer bolted on afterward.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: 'Full customization',
    desc: 'Fine-tune models on your proprietary data, build custom workflows, and shape the AI to match the exact way your organization works.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: 'Strategic independence',
    desc: 'No vendor lock-in, no surprise price hikes, and no risk of a provider discontinuing a service you depend on. Your AI runs on your terms.',
  },
]

const comparisonRows = [
  { feature: 'Where your data is processed', local: 'Your building', cloud: 'Their data centers' },
  { feature: 'Who can see your prompts', local: 'Only your team', cloud: 'Provider + subprocessors' },
  { feature: 'Internet required', local: 'No', cloud: 'Yes, always' },
  { feature: 'Response speed', local: 'Sub-second (LAN)', cloud: 'Variable (internet)' },
  { feature: 'Pricing model', local: 'Fixed, one-time', cloud: 'Per-token / per-seat' },
  { feature: 'User limits', local: 'Unlimited', cloud: 'Pay per seat' },
  { feature: 'Compliance', local: 'Built in by design', cloud: 'Shared responsibility' },
  { feature: 'Vendor dependency', local: 'None', cloud: 'High' },
]

const industries = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    name: 'Healthcare',
    detail: 'Patient records, clinical notes, and PHI stay on-premise.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    name: 'Finance',
    detail: 'Trading data, portfolios, and audit trails never leave your network.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    name: 'Legal',
    detail: 'Contracts, case files, and privileged communications stay confidential.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    name: 'Education',
    detail: 'Student data and research IP are processed without third-party exposure.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    name: 'Government',
    detail: 'Classified and sensitive data handled under FedRAMP-ready infrastructure.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    name: 'Technology',
    detail: 'Source code, product roadmaps, and proprietary algorithms stay internal.',
  },
]

export default function WhyLocalAI() {
  return (
    <div className="page wla-page">
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── The Problem ── */}
      <ProblemSection />

      {/* ── Side-by-side ── */}
      <ComparisonSection />

      {/* ── Benefits ── */}
      <BenefitsSection />

      {/* ── Industries ── */}
      <IndustriesSection />

      {/* ── CTA ── */}
      <CTASection />
    </div>
  )
}

/* ════════════════════════════════════════════
   HERO
   ════════════════════════════════════════════ */
function HeroSection() {
  const [ref, visible] = useScrollReveal({ threshold: 0.05 })

  return (
    <section className="wla-hero" ref={ref}>
      <div className="container">
        <div className={`wla-hero-inner ${visible ? 'wla-visible' : ''}`}>
          <h1 className="wla-hero-title">
            Your AI should work for you.
            <span className="wla-hero-accent">Not expose you.</span>
          </h1>
          <p className="wla-hero-subtitle">
            Every time your team uses cloud AI, sensitive data leaves your
            building. On-premise AI keeps everything — your questions, your
            documents, and your answers — completely inside your network.
          </p>
          <div className="wla-hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Talk to Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a href="#problem" className="btn btn-secondary">
              See the Risk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   THE PROBLEM
   ════════════════════════════════════════════ */
function ProblemSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section wla-problem-section" id="problem" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Problem with Cloud AI</h2>
          <p className="section-subtitle">
            Cloud AI is convenient. But convenience comes at a cost most
            organizations don't fully see until it's too late.
          </p>
        </div>

        <div className={`wla-risk-grid ${visible ? 'wla-visible' : ''}`}>
          {risks.map((risk, i) => (
            <div
              className="wla-risk-card"
              key={risk.title}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="wla-risk-icon">{risk.icon}</div>
              <h3 className="wla-risk-title">{risk.title}</h3>
              <p className="wla-risk-desc">{risk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   COMPARISON TABLE
   ════════════════════════════════════════════ */
function ComparisonSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section section-alt wla-compare-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Cloud AI vs. On-Premise AI</h2>
          <p className="section-subtitle">
            A side-by-side look at what changes when you bring AI in-house.
          </p>
        </div>

        <div className={`wla-compare-table ${visible ? 'wla-visible' : ''}`}>
          <div className="wla-compare-header">
            <div className="wla-compare-cell wla-compare-feature">Feature</div>
            <div className="wla-compare-cell wla-compare-local">On-Premise</div>
            <div className="wla-compare-cell wla-compare-cloud">Cloud AI</div>
          </div>
          {comparisonRows.map((row, i) => (
            <div
              className="wla-compare-row"
              key={row.feature}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="wla-compare-cell wla-compare-feature">{row.feature}</div>
              <div className="wla-compare-cell wla-compare-local">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {row.local}
              </div>
              <div className="wla-compare-cell wla-compare-cloud">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                {row.cloud}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   BENEFITS
   ════════════════════════════════════════════ */
function BenefitsSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section wla-benefits-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What You Gain</h2>
          <p className="section-subtitle">
            On-premise AI isn't just about avoiding risk. It's a better
            foundation for everything your organization does with AI.
          </p>
        </div>

        <div className={`wla-benefits-grid ${visible ? 'wla-visible' : ''}`}>
          {benefits.map((b, i) => (
            <div
              className="wla-benefit-card"
              key={b.title}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="wla-benefit-icon">{b.icon}</div>
              <h3 className="wla-benefit-title">{b.title}</h3>
              <p className="wla-benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   INDUSTRIES
   ════════════════════════════════════════════ */
function IndustriesSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section section-alt wla-industries-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Built for Regulated Industries</h2>
          <p className="section-subtitle">
            Any organization that handles sensitive data benefits from
            on-premise AI. These industries see the most immediate impact.
          </p>
        </div>

        <div className={`wla-industries-grid ${visible ? 'wla-visible' : ''}`}>
          {industries.map((ind, i) => (
            <div
              className="wla-industry-card"
              key={ind.name}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="wla-industry-icon">{ind.icon}</div>
              <h4 className="wla-industry-name">{ind.name}</h4>
              <p className="wla-industry-detail">{ind.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════
   CTA
   ════════════════════════════════════════════ */
function CTASection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className={`wla-cta-section ${visible ? 'wla-visible' : ''}`} ref={ref}>
      <div className="container">
        <div className="wla-cta-inner">
          <h2 className="wla-cta-title">Ready to Take AI Off the Cloud?</h2>
          <p className="wla-cta-subtitle">
            See how the Corprex Omega gives your organization full AI
            capability without a single byte of data leaving your building.
          </p>
          <div className="wla-cta-actions">
            <Link to="/contact" className="btn btn-light">
              Request a Demo
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
