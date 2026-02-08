import Reveal from './Reveal'
import './PrivateSearch.css'

const steps = [
  {
    num: '01',
    title: 'User Submits Query',
    desc: 'An employee asks the AI a question that may require up-to-date information from the internet.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'AI Model Rewrites the Query',
    desc: 'A lightweight on-device language model analyzes the request and strips any identifying details — names, account numbers, internal terminology — before it ever leaves your network.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a4 4 0 0 1 4 4v1h2a2 2 0 0 1 2 2v2" />
        <path d="M6 7h12" />
        <rect x="2" y="11" width="20" height="11" rx="2" />
        <path d="M8 11v11" />
        <path d="M16 11v11" />
        <path d="M2 16h20" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Presidio Validates Sanitization',
    desc: 'Microsoft Presidio runs a second pass, detecting and redacting any PII or proprietary data the model may have missed — phone numbers, addresses, financial identifiers, and more.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Sanitized Query Hits the Web',
    desc: 'Only the cleaned, context-preserving query is sent to external search providers. No IP, no PII, no proprietary language — just a generic, safe request.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Results Delivered Privately',
    desc: 'Search results return to your Omega, where the AI synthesizes them into a full answer — all within your private infrastructure.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
]

export default function PrivateSearch() {
  return (
    <section className="section private-search-section" id="private-search">
      <div className="container">
        <div className="ps-layout">
          {/* Left: visual diagram */}
          <Reveal>
            <div className="ps-visual">
              <div className="ps-diagram">
                {/* Query origin */}
                <div className="ps-node ps-node-user">
                  <div className="ps-node-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <span>Your Team</span>
                </div>

                <div className="ps-connector">
                  <div className="ps-connector-line" />
                  <span className="ps-connector-label">Raw query</span>
                </div>

                {/* Omega processing */}
                <div className="ps-node ps-node-omega">
                  <div className="ps-node-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="18" rx="2" />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                  </div>
                  <span>Omega</span>
                  <div className="ps-omega-layers">
                    <div className="ps-layer">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2a4 4 0 0 1 4 4v1h2a2 2 0 0 1 2 2v2" />
                        <rect x="2" y="11" width="20" height="11" rx="2" />
                      </svg>
                      AI Rewriter
                    </div>
                    <div className="ps-layer">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      Presidio
                    </div>
                  </div>
                </div>

                <div className="ps-connector">
                  <div className="ps-connector-line ps-connector-safe" />
                  <span className="ps-connector-label ps-label-safe">Sanitized query</span>
                </div>

                {/* Internet */}
                <div className="ps-node ps-node-internet">
                  <div className="ps-node-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <span>Internet</span>
                </div>
              </div>

              {/* Trust callout */}
              <div className="ps-trust">
                <div className="ps-trust-row">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png"
                    alt="Microsoft"
                    className="ps-trust-logo"
                  />
                  <div>
                    <strong>Microsoft Presidio</strong>
                    <span>Open-source PII detection and anonymization engine, trusted across enterprise and government environments worldwide.</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: step-by-step */}
          <div className="ps-steps">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className="ps-step">
                  <div className="ps-step-num">{step.num}</div>
                  <div className="ps-step-body">
                    <h4 className="ps-step-title">{step.title}</h4>
                    <p className="ps-step-desc">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom highlights */}
        <div className="ps-highlights">
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              ),
              title: 'Zero IP Leakage',
              text: 'Proprietary terms, internal project names, client details, and financial data are all scrubbed before any external request is made.',
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              ),
              title: 'Real-Time Performance',
              text: 'The sanitization pipeline adds less than 200ms of latency. Users experience fast, natural search without noticing the protection layer.',
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
              title: 'Compliance Ready',
              text: 'Meets HIPAA, SOX, and FedRAMP data handling requirements by ensuring no regulated information crosses your network boundary.',
            },
          ].map((h, i) => (
            <Reveal key={h.title} delay={i * 0.1}>
              <div className="ps-highlight">
                <div className="ps-highlight-icon">{h.icon}</div>
                <h4>{h.title}</h4>
                <p>{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
