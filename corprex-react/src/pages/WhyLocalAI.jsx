import React, { useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function WhyLocalAI() {
  useEffect(() => {
    // Smooth scroll for in-page anchors
    const links = document.querySelectorAll('a[href^="#"]')
    function handler(e) {
      e.preventDefault()
      const id = this.getAttribute('href')
      const target = document.querySelector(id)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    links.forEach((a) => a.addEventListener('click', handler))

    // Fade-in observer for sections and cards
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

    document.querySelectorAll('.section').forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'all 0.6s ease'
      observer.observe(el)
    })
    document.querySelectorAll('.problem-card, .benefit-card, .use-case-card').forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = `all 0.6s ease ${i * 0.1}s`
      observer.observe(el)
    })

    return () => {
      links.forEach((a) => a.removeEventListener('click', handler))
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Nav logoWeight={600} ctaHref="#demo" />

      <section className="hero hero--center">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Why <span className="highlight">Local AI</span> is the Only AI That Matters</h1>
            <p>In an era where your most sensitive data powers your biggest competitive advantages, sending it to third-party clouds isn't just risky—it's business suicide. Here's why smart leaders are bringing AI home.</p>
            <div className="hero-cta">
              <a href="#demo" className="btn btn--primary">See the Difference</a>
              <a href="#problems" className="btn btn--secondary">Learn Why</a>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-hero">
        <div className="container">
          <div className="section-header">
            <h2>Two Paths. One Clear Winner.</h2>
            <p>The fundamental choice every business faces in the AI era</p>
          </div>
          <div className="comparison-grid">
            <div className="comparison-side cloud-side">
              <div className="comparison-icon cloud-icon">
                <svg viewBox="0 0 24 24" fill="white"><path d="M18 10H20A4 4 0 0 1 20 18H6A6 6 0 0 1 6 6C6 4 8 2 10 2A8 8 0 0 1 18 10Z"/><path d="M12 14L16 10L12 6L8 10L12 14Z" fill="#ff4444" stroke="white" strokeWidth="2"/></svg>
              </div>
              <h3 className="comparison-title">Cloud AI</h3>
              <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>The path of convenience... and compromise</p>
              <ul className="comparison-list">
                {[
                  'Your data trains competitors\' models',
                  '$5,000-$50,000+ monthly costs',
                  'Rate limits throttle your growth',
                  'Internet outages = business stops',
                  'Zero control over your AI destiny',
                ].map((t) => (
                  <li className="comparison-item" key={t}>
                    <div className="item-icon"><svg viewBox="0 0 24 24" fill="var(--medium-gray)"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15" stroke="white" strokeWidth="2"/><line x1="9" y1="9" x2="15" y2="15" stroke="white" strokeWidth="2"/></svg></div>
                    <span style={{ color: 'var(--text-secondary)' }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="comparison-side local-side">
              <div className="comparison-icon local-icon">
                <svg viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
              </div>
              <h3 className="comparison-title">Local AI</h3>
              <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>The path of sovereignty and success</p>
              <ul className="comparison-list">
                {[
                  '100% data ownership and privacy',
                  'One-time investment, zero monthly fees',
                  'Unlimited usage, unlimited scale',
                  'Works offline, works always',
                  'Complete control over your AI future',
                ].map((t) => (
                  <li className="comparison-item" key={t}>
                    <div className="item-icon"><svg viewBox="0 0 24 24" fill="var(--text-primary)"><circle cx="12" cy="12" r="10"/><path d="M9 12L11 14L15 10" stroke="var(--primary-black)" strokeWidth="2" fill="none"/></svg></div>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section problems-section" id="problems">
        <div className="container">
          <div className="section-header">
            <h2>The Hidden Costs of Cloud AI</h2>
            <p>What every executive discovers too late about cloud dependency</p>
          </div>
          <div className="problems-grid grid grid-3 gap-md">
            {[
              ['Data Ownership Crisis','Every query you send trains your competitors\' AI. Your proprietary insights become their competitive advantage. Major cloud providers explicitly reserve rights to use your data for model improvement.', 'M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z'],
              ['Runaway Costs','API costs scale exponentially with success. Companies report $100K+ monthly bills that appeared overnight. Token limits force rationing of your own AI capabilities during peak business periods.', 'M11.8 10.9C10.4 10.9 9.2 12.1 9.2 13.5S10.4 16.1 11.8 16.1 14.4 14.9 14.4 13.5 13.2 10.9 11.8 10.9ZM20 12C20 11.4 19.6 11.1 19.1 11.1H17.2C17.1 10.4 16.9 9.7 16.6 9.1L17.9 7.8C18.2 7.5 18.2 7 17.9 6.7L16.3 5.1C16 4.8 15.5 4.8 15.2 5.1L13.9 6.4C13.3 6.1 12.6 5.9 11.9 5.8V3.9C11.9 3.4 11.5 3 11 3H9C8.5 3 8.1 3.4 8.1 3.9V5.8C7.4 5.9 6.7 6.1 6.1 6.4L4.8 5.1C4.5 4.8 4 4.8 3.7 5.1L2.1 6.7C1.8 7 1.8 7.5 2.1 7.8L3.4 9.1C3.1 9.7 2.9 10.4 2.8 11.1H0.9C0.4 11.1 0 11.5 0 12V14C0 14.5 0.4 14.9 0.9 14.9H2.8C2.9 15.6 3.1 16.3 3.4 16.9L2.1 18.2C1.8 18.5 1.8 19 2.1 19.3L3.7 20.9C4 21.2 4.5 21.2 4.8 20.9L6.1 19.6C6.7 19.9 7.4 20.1 8.1 20.2V22.1C8.1 22.6 8.5 23 9 23H11C11.5 23 11.9 22.6 11.9 22.1V20.2C12.6 20.1 13.3 19.9 13.9 19.6L15.2 20.9C15.5 21.2 16 21.2 16.3 20.9L17.9 19.3C18.2 19 18.2 18.5 17.9 18.2L16.6 16.9C16.9 16.3 17.1 15.6 17.2 14.9H19.1C19.6 14.9 20 14.5 20 14V12Z'],
              ['Security Vulnerabilities','Your sensitive data travels through multiple networks, servers, and jurisdictions. Data breaches at cloud providers expose millions of customers simultaneously. You have zero control over security incidents.', 'M13 3C9.23 3 6.19 5.95 6 9.66L4.17 12.1C3.58 13 4.24 14.19 5.34 14.19H7.54C8.67 16.07 10.6 17.3 12.83 17.3C15.06 17.3 16.99 16.07 18.12 14.19H20.32C21.42 14.19 22.08 13 21.49 12.1L19.66 9.66C19.47 5.95 16.43 3 13 3ZM13 7C14.1 7 15 7.9 15 9S14.1 11 13 11 11 10.1 11 9 11.9 7 13 7Z'],
              ['Performance Bottlenecks','Network latency adds 200-500ms to every request. Rate limits throttle performance during high-demand periods. Regional outages can completely halt operations for hours or days.', 'M12 2L1 21H23L12 2ZM12 18H12V16H12V18ZM12 14H12V10H12V14Z'],
              ['Vendor Lock-In','Switching costs become prohibitive as dependence deepens. Proprietary APIs and formats trap you in ecosystems. Pricing power shifts entirely to providers who know you can\'t leave.', 'M18.6 6.62C17.16 6.62 15.8 7.18 14.83 8.15L7.15 15.83C6.18 16.8 4.82 17.36 3.38 17.36C1.54 17.36 0.02 15.84 0.02 14C0.02 12.16 1.54 10.64 3.38 10.64C4.82 10.64 6.18 11.2 7.15 12.17L8.83 10.49C7.36 9.02 5.43 8.16 3.38 8.16C0.26 8.16 -2.46 10.88 -2.46 14C-2.46 17.12 0.26 19.84 3.38 19.84C5.43 19.84 7.36 18.98 8.83 17.51L16.51 9.83C17.48 8.86 18.84 8.3 20.28 8.3C22.12 8.3 23.64 9.82 23.64 11.66C23.64 13.5 22.12 15.02 20.28 15.02C18.84 15.02 17.48 14.46 16.51 13.49L14.83 15.17C16.3 16.64 18.23 17.5 20.28 17.5C23.4 17.5 26.12 14.78 26.12 11.66C26.12 8.54 23.4 5.82 20.28 5.82C19.07 5.82 17.9 6.14 16.87 6.7'],
              ['Compliance Nightmares','GDPR, HIPAA, SOX, and other regulations become impossible to satisfy when data crosses borders. Audit trails disappear into cloud provider black boxes. Regulatory fines can exceed AI savings by 100x.', 'M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 7C9.24 7 7 9.24 7 12S9.24 17 12 17 17 14.76 17 12 14.76 7 12 7ZM12 15C10.34 15 9 13.66 9 12S10.34 9 12 9 15 10.34 15 12 13.66 15 12 15Z'],
            ].map(([title, desc, path]) => (
              <div className="problem-card u-lift u-border-accent u-shadow-soft" key={title}>
                <div className="problem-icon"><svg viewBox="0 0 24 24"><path d={path} /></svg></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>The Local AI Advantage</h2>
            <p>Why smart companies are bringing AI home</p>
          </div>
          <div className="benefits-grid grid grid-2 gap-md">
            {[
              ['Complete Data Sovereignty','Your data never leaves your infrastructure. Process the most sensitive information with zero external exposure. Meet the strictest compliance requirements while maintaining full operational control.', ['100%','Data Retention'], ['Zero','Breach Risk'], ['Full','Compliance'], 'M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z M9 12L11 14L15 10'],
              ['Predictable Economics','Transform unpredictable monthly AI bills into a one-time capital investment. Scale usage without scaling costs. Most organizations achieve full ROI within 2-8 weeks of deployment.', ['$0','Monthly Fees'], ['6 Weeks','Avg. ROI'], ['∞','Usage Limits'], 'M13 1V23 M17 5H9.5A3.5 3.5 0 0 0 6 8.5V8.5A3.5 3.5 0 0 0 9.5 12H14.5A3.5 3.5 0 0 1 18 15.5V15.5A3.5 3.5 0 0 1 14.5 19H6'],
              ['Superior Performance','Eliminate network latency with local processing. Achieve sub-second response times for real-time applications. Scale performance by adding hardware, not paying for more API calls.', ['<100ms','Response Time'], ['10x','Faster Processing'], ['100%','Uptime'], 'M13,2 3,14 12,14 11,22 21,10 12,10'],
              ['Complete Customization','Fine-tune models on your specific data and use cases. Deploy custom architectures optimized for your workflows. Maintain competitive advantages that can\'t be replicated by cloud users.', ['100%','Custom Models'], ['Full','Control'], ['Unique','Advantages'], 'M9.5 2A2.5 2.5 0 0 0 7 4.5V7A2.5 2.5 0 0 0 9.5 9.5H12V7A2.5 2.5 0 0 0 9.5 2Z M14.5 2A2.5 2.5 0 0 1 17 4.5V7A2.5 2.5 0 0 1 14.5 9.5H12V7A2.5 2.5 0 0 1 14.5 2Z M12 9.5V12A2.5 2.5 0 0 1 9.5 14.5A2.5 2.5 0 0 0 7 17V19.5A2.5 2.5 0 0 0 9.5 22A2.5 2.5 0 0 0 12 19.5V17A2.5 2.5 0 0 1 14.5 14.5A2.5 2.5 0 0 0 17 12V9.5H14.5A2.5 2.5 0 0 0 12 12V9.5Z'],
            ].map(([title, desc, stat1, stat2, stat3, path]) => (
              <div className="benefit-card u-lift u-border-accent u-shadow-soft" key={title}>
                <div className="benefit-header">
                  <div className="benefit-icon"><svg viewBox="0 0 24 24"><path d={path} stroke="currentColor" strokeWidth="2" fill="currentColor"/></svg></div>
                  <div className="benefit-title">{title}</div>
                </div>
                <p className="benefit-description">{desc}</p>
                <div className="benefit-stats">
                  {[stat1, stat2, stat3].map(([num, label]) => (
                    <div className="stat-item" key={label}><div className="stat-number">{num}</div><div className="stat-label">{label}</div></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section use-cases">
        <div className="container">
          <div className="section-header">
            <h2>When Local AI is Essential</h2>
            <p>Critical scenarios where cloud AI simply isn't an option</p>
          </div>
          <div className="use-cases-grid grid grid-3 gap-md">
            {[
              ['Legal Document Review','M12 3L20 12H16V20H8V12H4L12 3Z','Attorney-client privilege requires absolute confidentiality. Cloud AI violates this fundamental principle by design. Local AI maintains privilege while accelerating case preparation.'],
              ['Medical Diagnosis','M22 12H18L15 21L9 3L6 12H2','HIPAA compliance demands patient data never leave healthcare networks. Local AI enables advanced diagnostics while maintaining regulatory compliance and patient trust.'],
              ['Financial Trading','M12 1 12 23 M17 5H9.5A3.5 3.5 0 0 0 6 8.5V8.5A3.5 3.5 0 0 0 9.5 12H14.5A3.5 3.5 0 0 1 18 15.5V15.5A3.5 3.5 0 0 1 14.5 19H6','Milliseconds matter in high-frequency trading. Network latency to cloud providers can cost millions. Local AI delivers the speed advantage that defines market winners.'],
              ['Government Intelligence','M3 9L12 2L21 9V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V9Z','National security data cannot risk foreign cloud infrastructure. Local AI enables intelligence analysis while maintaining operational security and classified data protection.'],
              ['Manufacturing IP','M2 20H22V18H20V11H18V18H14V8H12V18H8V13H6V18H2V20Z','Production processes and quality control algorithms represent core competitive advantages. Cloud AI risks intellectual property theft by competitors and foreign actors.'],
              ['R&D Innovation','M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22','Research breakthroughs drive company valuations. Cloud AI means competitors gain access to your innovation pipeline. Local AI protects tomorrow\'s competitive advantages today.'],
            ].map(([title, path, desc]) => (
              <div className="use-case-card u-lift u-border-accent u-shadow-soft" key={title}>
                <div className="use-case-icon"><svg viewBox="0 0 24 24"><path d={path} stroke="currentColor" strokeWidth="2" fill="none"/></svg></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section security-section">
        <div className="container">
          <div className="section-header">
            <h2>Security Architecture</h2>
            <p>Military-grade protection for your most valuable asset: your data</p>
          </div>
          <div className="security-visual">
            <div className="security-content">
              <h3>Defense in Depth</h3>
              <ul className="security-list">
                {[
                  ['Air-Gap Capability','Completely isolate AI processing from external networks when maximum security is required'],
                  ['End-to-End Encryption','AES-256 encryption for data at rest and in transit, with hardware security modules'],
                  ['Zero Trust Architecture','Every request authenticated and authorized, with continuous security monitoring'],
                  ['Compliance Ready','Pre-configured for HIPAA, SOX, FedRAMP, and other regulatory requirements'],
                ].map(([title, desc]) => (
                  <li className="security-item" key={title}>
                    <div className="security-check"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 12L11 14L15 10"/></svg></div>
                    <div className="security-text"><h4>{title}</h4><p>{desc}</p></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="security-diagram">
              <h4 className="diagram-title">Multi-Layer Security Stack</h4>
              <div className="diagram-layers">
                {[
                  ['Physical Security','Hardware encryption, secure boot, tamper detection'],
                  ['Network Security','Firewall, VPN, network segmentation, intrusion detection'],
                  ['Application Security','Role-based access, API security, audit logging'],
                  ['Data Security','Encryption at rest, secure key management, data masking'],
                ].map(([title, desc]) => (
                  <div className="layer" key={title}>
                    <div className="layer-title">{title}</div>
                    <div className="layer-desc">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-section" id="demo">
            <h2>Ready to Take Control of Your AI?</h2>
            <p>Join the companies that have already made the switch to secure, private AI infrastructure</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <a href="/contact" className="btn btn--primary">Schedule a Consultation</a>
              <a href="/" className="btn btn--secondary">Explore Omega</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


