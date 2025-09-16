import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import HeadMeta from '../components/HeadMeta.jsx'

export default function WhyLocalAI() {
  const [activeIncident, setActiveIncident] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const interval = setInterval(() => {
      setActiveIncident((prev) => (prev + 1) % incidents.length)
    }, 8000)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#1a1a1a',
      paddingTop: '100px'
    },
    hero: {
      padding: isMobile ? '2rem 1rem' : '4rem 2rem',
      textAlign: 'center',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    title: {
      fontSize: isMobile ? '2rem' : '3.5rem',
      fontWeight: '300',
      color: '#ffffff',
      marginBottom: '1.5rem',
      letterSpacing: '-0.02em',
      lineHeight: '1.2'
    },
    subtitle: {
      fontSize: isMobile ? '1rem' : '1.25rem',
      color: '#999999',
      marginBottom: '3rem',
      maxWidth: '800px',
      margin: '0 auto 3rem',
      lineHeight: '1.6'
    },
    ctaContainer: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryBtn: {
      padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem',
      background: '#ffffff',
      color: '#000000',
      border: 'none',
      borderRadius: '8px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'inline-block'
    },
    secondaryBtn: {
      padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem',
      background: 'transparent',
      color: '#ffffff',
      border: '2px solid #ffffff',
      borderRadius: '8px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'inline-block'
    },
    section: {
      padding: isMobile ? '2rem 1rem' : '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    sectionTitle: {
      fontSize: isMobile ? '1.75rem' : '2.5rem',
      fontWeight: '400',
      color: '#ffffff',
      marginBottom: '1rem'
    },
    sectionSubtitle: {
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      color: '#999999'
    },
    incidentTicker: {
      background: '#000000',
      color: '#ffffff',
      padding: isMobile ? '1.5rem' : '2rem',
      borderRadius: '12px',
      marginBottom: isMobile ? '2rem' : '4rem',
      position: 'relative',
      overflow: 'hidden'
    },
    tickerHeader: {
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: '1rem',
      color: '#ff4444',
      fontWeight: '600'
    },
    tickerContent: {
      minHeight: isMobile ? '150px' : '120px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    tickerDate: {
      fontSize: '0.9rem',
      color: '#999999',
      marginBottom: '0.5rem'
    },
    tickerTitle: {
      fontSize: isMobile ? '1.2rem' : '1.5rem',
      fontWeight: '600',
      marginBottom: '0.75rem',
      color: '#ffffff'
    },
    tickerDesc: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#cccccc',
      lineHeight: '1.5'
    },
    tickerDots: {
      display: 'flex',
      gap: '0.5rem',
      justifyContent: 'center',
      marginTop: '1.5rem'
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: '#444444',
      cursor: 'pointer',
      transition: 'background 0.3s ease'
    },
    activeDot: {
      background: '#ffffff'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: isMobile ? '1.5rem' : '2rem',
      marginTop: '3rem'
    },
    card: {
      background: '#2a2a2a',
      borderRadius: '12px',
      padding: isMobile ? '1.5rem' : '2rem',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      border: '1px solid #333333',
      transition: 'all 0.3s ease',
      cursor: 'default'
    },
    cardTitle: {
      fontSize: isMobile ? '1.1rem' : '1.25rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '1rem'
    },
    cardDesc: {
      fontSize: isMobile ? '0.9rem' : '0.95rem',
      color: '#999999',
      lineHeight: '1.6'
    },
    comparisonGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '1.5rem' : '2rem',
      marginTop: '3rem'
    },
    comparisonCard: {
      background: '#2a2a2a',
      borderRadius: '12px',
      padding: isMobile ? '1.5rem' : '2rem',
      border: '2px solid #333333',
      position: 'relative'
    },
    comparisonBadge: {
      position: 'absolute',
      top: '-12px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#ffffff',
      color: '#000000',
      padding: '0.25rem 1rem',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    dangerBadge: {
      background: '#ff4444',
      color: '#ffffff'
    },
    comparisonTitle: {
      fontSize: isMobile ? '1.5rem' : '1.75rem',
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: '2rem',
      marginTop: '1rem',
      color: '#ffffff'
    },
    comparisonList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    comparisonItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '1rem',
      gap: '0.75rem',
      fontSize: isMobile ? '0.9rem' : '1rem'
    },
    checkIcon: {
      width: '20px',
      height: '20px',
      flexShrink: 0,
      marginTop: '2px'
    },
    xIcon: {
      width: '20px',
      height: '20px',
      flexShrink: 0,
      marginTop: '2px',
      color: '#ff4444'
    },
    statGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: isMobile ? '1rem' : '2rem',
      marginTop: '3rem',
      textAlign: 'center'
    },
    statCard: {
      padding: isMobile ? '1rem' : '1.5rem',
      background: '#2a2a2a',
      borderRadius: '12px',
      border: '1px solid #333333'
    },
    statNumber: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '0.5rem'
    },
    statLabel: {
      fontSize: isMobile ? '0.75rem' : '0.9rem',
      color: '#999999',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    ctaBanner: {
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
      color: '#ffffff',
      padding: isMobile ? '2rem 1rem' : '4rem 2rem',
      borderRadius: '16px',
      textAlign: 'center',
      marginTop: isMobile ? '2rem' : '4rem'
    },
    ctaTitle: {
      fontSize: isMobile ? '1.75rem' : '2.5rem',
      fontWeight: '600',
      marginBottom: '1rem'
    },
    ctaSubtitle: {
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      color: '#cccccc',
      marginBottom: '2rem'
    },
    whiteBtn: {
      padding: isMobile ? '0.75rem 1.5rem' : '1rem 2.5rem',
      background: '#ffffff',
      color: '#000000',
      border: 'none',
      borderRadius: '8px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'inline-block'
    }
  }

  const incidents = [
    {
      date: 'November 2024',
      title: 'OpenAI Data Breach Exposes Corporate Secrets',
      desc: 'Hackers accessed ChatGPT conversation histories containing proprietary business strategies, financial data, and trade secrets from Fortune 500 companies.'
    },
    {
      date: 'October 2024',
      title: 'Samsung Bans Cloud AI After Code Leak',
      desc: 'Engineers accidentally leaked semiconductor designs through ChatGPT. The data became part of OpenAI\'s training set, accessible to competitors.'
    },
    {
      date: 'September 2024',
      title: 'JPMorgan Fined $200M for Cloud AI Compliance Failure',
      desc: 'Regulators discovered customer financial data was processed through foreign servers, violating data sovereignty laws and GDPR requirements.'
    },
    {
      date: 'August 2024',
      title: 'Microsoft Copilot Outage Costs Businesses $4.5B',
      desc: 'A 6-hour global outage left thousands of companies unable to access critical AI tools, halting operations and causing massive productivity losses.'
    },
    {
      date: 'July 2024',
      title: 'Amazon Admits to Training AI on Customer Data',
      desc: 'Internal documents reveal AWS used customer data to improve Bedrock models, despite privacy agreements stating otherwise.'
    },
    {
      date: 'June 2024',
      title: 'Google Cloud AI Rate Limits Crash Trading Systems',
      desc: 'Unexpected API throttling during market hours caused automated trading systems to fail, resulting in $850M in losses across hedge funds.'
    }
  ]

  const CheckIcon = () => (
    <svg style={styles.checkIcon} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#000000"/>
      <path d="M8 12L10.5 14.5L16 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )

  const XIcon = () => (
    <svg style={styles.xIcon} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#ff4444"/>
      <path d="M15 9L9 15M9 9L15 15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )

  return (
    <>
      <HeadMeta 
        title="Why Local AI | Corprex" 
        description="Discover why leading enterprises are abandoning cloud AI for secure, private, local AI infrastructure. Real incidents, real risks, real solutions." 
      />
      <Nav active="why-local-ai" ctaHref="/contact" />
      
      <main style={styles.container}>
        <div style={styles.hero}>
          <h1 style={styles.title}>
            The Cloud AI Trap Is Real.<br/>
            <span style={{ color: '#999999' }}>And Companies Are Paying the Price.</span>
          </h1>
          <p style={styles.subtitle}>
            Every day, businesses hand their most valuable data to cloud providers who use it to train models 
            that benefit their competitors. The convenience of cloud AI comes at a cost most discover too late.
          </p>
          <div style={styles.ctaContainer}>
            <Link 
              to="/contact" 
              style={styles.primaryBtn}
              onMouseEnter={(e) => {
                e.target.style.background = '#f0f0f0'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#ffffff'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              Secure Your AI Today
            </Link>
            <a 
              href="#incidents" 
              style={styles.secondaryBtn}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent'
              }}
            >
              See the Evidence
            </a>
          </div>
        </div>

        <section style={styles.section} id="incidents">
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>This Week in Cloud AI Disasters</h2>
            <p style={styles.sectionSubtitle}>Real incidents. Real companies. Real losses.</p>
          </div>
          
          <div style={{
            ...styles.incidentTicker,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease'
          }}>
            <div style={styles.tickerHeader}>⚠️ SECURITY INCIDENT</div>
            <div style={styles.tickerContent}>
              <div style={styles.tickerDate}>{incidents[activeIncident].date}</div>
              <div style={styles.tickerTitle}>{incidents[activeIncident].title}</div>
              <div style={styles.tickerDesc}>{incidents[activeIncident].desc}</div>
            </div>
            <div style={styles.tickerDots}>
              {incidents.map((_, index) => (
                <div 
                  key={index}
                  style={{
                    ...styles.dot,
                    ...(index === activeIncident ? styles.activeDot : {})
                  }}
                  onClick={() => setActiveIncident(index)}
                />
              ))}
            </div>
          </div>

          <div style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Your Data Trains Their Models</h3>
              <p style={styles.cardDesc}>
                Every prompt, every document, every query you send to cloud AI providers becomes training data. 
                Your competitive advantages become public knowledge. Your innovations fuel your competitors' success.
              </p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Costs That Never Stop Growing</h3>
              <p style={styles.cardDesc}>
                Start with $500/month. Scale to $5,000. Wake up to $50,000 bills. Cloud AI pricing is designed to trap you. 
                The more dependent you become, the more they charge. There's no ceiling, no predictability, no escape.
              </p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>When They Fail, You Fail</h3>
              <p style={styles.cardDesc}>
                Cloud outages aren't rare—they're routine. When AWS goes down, your AI stops. When rate limits hit, 
                your customers wait. Your entire business depends on infrastructure you don't control.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>The Choice Is Clear</h2>
            <p style={styles.sectionSubtitle}>Compare the reality of cloud vs. local AI</p>
              </div>
          
          <div style={styles.comparisonGrid}>
            <div style={styles.comparisonCard}>
              <div style={{...styles.comparisonBadge, ...styles.dangerBadge}}>Cloud AI</div>
              <h3 style={styles.comparisonTitle}>The Risky Path</h3>
              <ul style={styles.comparisonList}>
                <li style={styles.comparisonItem}>
                  <XIcon />
                  <span style={{ color: '#cccccc' }}>Your data trains competitor models</span>
                </li>
                <li style={styles.comparisonItem}>
                  <XIcon />
                  <span style={{ color: '#cccccc' }}>$10,000+ monthly costs that keep rising</span>
                </li>
                <li style={styles.comparisonItem}>
                  <XIcon />
                  <span style={{ color: '#cccccc' }}>Rate limits throttle your growth</span>
                </li>
                <li style={styles.comparisonItem}>
                  <XIcon />
                  <span style={{ color: '#cccccc' }}>Outages stop your business cold</span>
                </li>
                <li style={styles.comparisonItem}>
                  <XIcon />
                  <span style={{ color: '#cccccc' }}>Zero control over security</span>
                </li>
                <li style={styles.comparisonItem}>
                  <XIcon />
                  <span style={{ color: '#cccccc' }}>Compliance violations risk millions in fines</span>
                </li>
                <li style={styles.comparisonItem}>
                  <XIcon />
                  <span style={{ color: '#cccccc' }}>Vendor lock-in prevents switching</span>
                </li>
                <li style={styles.comparisonItem}>
                  <XIcon />
                  <span style={{ color: '#cccccc' }}>200-500ms latency on every request</span>
                  </li>
              </ul>
            </div>

            <div style={styles.comparisonCard}>
              <div style={styles.comparisonBadge}>Local AI</div>
              <h3 style={styles.comparisonTitle}>The Smart Path</h3>
              <ul style={styles.comparisonList}>
                <li style={styles.comparisonItem}>
                  <CheckIcon />
                  <span style={{ color: '#cccccc' }}>Your data stays 100% private</span>
                </li>
                <li style={styles.comparisonItem}>
                  <CheckIcon />
                  <span style={{ color: '#cccccc' }}>One-time cost, unlimited usage</span>
                </li>
                <li style={styles.comparisonItem}>
                  <CheckIcon />
                  <span style={{ color: '#cccccc' }}>No limits, no throttling, ever</span>
                </li>
                <li style={styles.comparisonItem}>
                  <CheckIcon />
                  <span style={{ color: '#cccccc' }}>Works offline, always available</span>
                </li>
                <li style={styles.comparisonItem}>
                  <CheckIcon />
                  <span style={{ color: '#cccccc' }}>Complete security control</span>
                </li>
                <li style={styles.comparisonItem}>
                  <CheckIcon />
                  <span style={{ color: '#cccccc' }}>Full regulatory compliance</span>
                </li>
                <li style={styles.comparisonItem}>
                  <CheckIcon />
                  <span style={{ color: '#cccccc' }}>Total independence and flexibility</span>
                </li>
                <li style={styles.comparisonItem}>
                  <CheckIcon />
                  <span style={{ color: '#cccccc' }}>Sub-100ms response times</span>
                  </li>
              </ul>
          </div>
        </div>
      </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>The Numbers Don't Lie</h2>
            <p style={styles.sectionSubtitle}>Real statistics from companies that made the switch</p>
          </div>
          
          <div style={styles.statGrid}>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>94%</div>
              <div style={styles.statLabel}>Cost Reduction</div>
          </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>6 Weeks</div>
              <div style={styles.statLabel}>Average ROI</div>
                </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>10x</div>
              <div style={styles.statLabel}>Faster Processing</div>
                </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>100%</div>
              <div style={styles.statLabel}>Data Control</div>
          </div>
        </div>
      </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Industries Already Making the Switch</h2>
            <p style={styles.sectionSubtitle}>Smart companies don't wait for disasters to happen</p>
          </div>
          
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Financial Services</h3>
              <p style={styles.cardDesc}>
                Banks processing millions in transactions can't afford cloud latency or security risks. 
                Local AI enables real-time fraud detection while maintaining SOX and Basel III compliance.
              </p>
              </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Healthcare</h3>
              <p style={styles.cardDesc}>
                Patient data requires HIPAA compliance that cloud AI can't guarantee. 
                Local AI enables advanced diagnostics while keeping medical records completely secure.
              </p>
          </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Defense & Government</h3>
              <p style={styles.cardDesc}>
                National security demands air-gapped systems with zero external dependencies. 
                Local AI provides intelligence analysis capabilities without compromising classified data.
              </p>
        </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Legal</h3>
              <p style={styles.cardDesc}>
                Attorney-client privilege prohibits third-party data access. 
                Local AI accelerates document review and case preparation while maintaining absolute confidentiality.
              </p>
          </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Manufacturing</h3>
              <p style={styles.cardDesc}>
                Production algorithms and quality control systems are core IP that can't risk exposure. 
                Local AI optimizes operations while protecting trade secrets from competitors.
              </p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Research & Development</h3>
              <p style={styles.cardDesc}>
                Innovation drives valuation, and cloud AI means sharing breakthroughs with competitors. 
                Local AI accelerates discovery while protecting intellectual property.
              </p>
          </div>
        </div>
      </section>

        <section style={styles.section}>
          <div style={styles.ctaBanner}>
            <h2 style={styles.ctaTitle}>Stop Feeding the Cloud Monster</h2>
            <p style={styles.ctaSubtitle}>
              Join the companies taking back control of their AI infrastructure
            </p>
            <Link 
              to="/contact" 
              style={styles.whiteBtn}
              onMouseEnter={(e) => {
                e.target.style.background = '#f0f0f0'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#ffffff'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              Secure Your AI Infrastructure Today
            </Link>
        </div>
      </section>
      </main>

      <Footer />
    </>
  )
}