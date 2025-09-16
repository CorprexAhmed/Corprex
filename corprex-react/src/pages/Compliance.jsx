import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import HeadMeta from '../components/HeadMeta.jsx'

export default function Compliance() {
  const [mounted, setMounted] = useState(false)
  const [activePhase, setActivePhase] = useState(0)
  const scrollerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#1a1a1a',
      paddingTop: '100px'
    },
    hero: {
      padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)',
      textAlign: 'center',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '1.5rem',
      letterSpacing: '-0.02em',
      lineHeight: '1.2'
    },
    gradientText: {
      background: 'linear-gradient(135deg, #ffffff 0%, #999999 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
      color: '#999999',
      marginBottom: '3rem',
      maxWidth: '800px',
      margin: '0 auto 3rem',
      lineHeight: '1.6'
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'clamp(2rem, 4vw, 4rem)',
      flexWrap: 'wrap',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '2rem 0'
    },
    statItem: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.5rem',
      whiteSpace: 'nowrap'
    },
    statNumber: {
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #ffffff 0%, #999999 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    statLabel: {
      fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
      color: '#999999',
      fontWeight: '400'
    },
    section: {
      padding: 'clamp(3rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionDark: {
      background: '#000000',
      width: '100%',
      maxWidth: '100%',
      padding: 'clamp(3rem, 5vw, 4rem) 0',
      overflow: 'hidden'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: 'clamp(2rem, 4vw, 3rem)'
    },
    sectionTitle: {
      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '1rem'
    },
    sectionSubtitle: {
      fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
      color: '#999999'
    },
    scrollerContainer: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      padding: '2rem 0'
    },
    scrollerTrack: {
      display: 'flex',
      gap: '1.5rem',
      animation: 'scrollLeft 50s linear infinite',
      width: 'fit-content'
    },
    principleCard: {
      minWidth: '320px',
      maxWidth: '320px',
      height: '280px',
      background: '#2a2a2a',
      borderRadius: '12px',
      padding: '2rem',
      border: '2px solid #444444',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column'
    },
    principleHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem'
    },
    principleIcon: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #333333 0%, #444444 100%)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: '#ffffff',
      fontSize: '1.25rem',
      fontWeight: '600'
    },
    principleTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#ffffff'
    },
    principleDesc: {
      fontSize: '0.9rem',
      color: '#999999',
      marginBottom: '1rem',
      lineHeight: '1.5',
      flex: 1
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.5rem',
      marginBottom: '0.4rem',
      fontSize: '0.85rem',
      color: '#cccccc'
    },
    checkMark: {
      color: '#666666',
      fontWeight: 'bold',
      flexShrink: 0
    },
    roadmapSection: {
      background: '#2a2a2a',
      padding: 'clamp(3rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)',
      borderRadius: '24px',
      margin: '2rem auto',
      maxWidth: '1200px'
    },
    roadmapContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    },
    roadmapTabs: {
      display: 'flex',
      gap: '0.5rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '2rem'
    },
    roadmapTab: {
      padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem)',
      background: '#333333',
      border: '2px solid #444444',
      borderRadius: '12px',
      fontSize: 'clamp(0.8rem, 1.3vw, 0.9rem)',
      fontWeight: '500',
      color: '#999999',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative'
    },
    roadmapTabActive: {
      background: '#ffffff',
      borderColor: 'transparent',
      color: '#000000'
    },
    roadmapContent: {
      background: '#333333',
      borderRadius: '16px',
      padding: 'clamp(1.5rem, 3vw, 2rem)',
      border: '1px solid #444444'
    },
    phaseHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    phaseIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #444444 0%, #555555 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: '1.5rem',
      fontWeight: '700'
    },
    phaseInfo: {
      flex: 1
    },
    phaseDate: {
      fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)',
      color: '#999999',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '0.25rem'
    },
    phaseTitle: {
      fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
      fontWeight: '600',
      color: '#ffffff'
    },
    phaseDescription: {
      fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
      color: '#cccccc',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    phaseFeatures: {
      display: 'grid',
      gap: '0.75rem'
    },
    phaseFeature: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
      padding: '0.75rem',
      background: '#2a2a2a',
      borderRadius: '8px',
      fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
      color: '#cccccc'
    },
    progressBar: {
      width: '100%',
      height: '6px',
      background: '#444444',
      borderRadius: '3px',
      overflow: 'hidden',
      marginTop: '1.5rem'
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #666666 0%, #999999 100%)',
      borderRadius: '3px',
      transition: 'width 0.5s ease'
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #333333 0%, #2a2a2a 100%)',
      color: '#ffffff',
      padding: 'clamp(3rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)',
      borderRadius: '24px',
      textAlign: 'center',
      margin: '4rem auto 2rem',
      maxWidth: '1000px',
      border: '1px solid #444444'
    },
    ctaTitle: {
      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
      fontWeight: '700',
      marginBottom: '1rem'
    },
    ctaSubtitle: {
      fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
      color: '#cccccc',
      marginBottom: '2rem'
    },
    ctaButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryBtn: {
      padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
      background: '#ffffff',
      color: '#000000',
      border: 'none',
      borderRadius: '12px',
      fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'inline-block'
    },
    secondaryBtn: {
      padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
      background: 'transparent',
      color: '#ffffff',
      border: '2px solid #666666',
      borderRadius: '12px',
      fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'inline-block'
    },
    trustBadges: {
      display: 'flex',
      gap: 'clamp(1rem, 3vw, 2rem)',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '2rem'
    },
    trustBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: 'clamp(0.8rem, 1.3vw, 0.9rem)',
      color: '#999999'
    },
    keyframes: `
      @keyframes scrollLeft {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `
  }

  const trustPrinciples = [
    {
      title: 'Security',
      icon: 'S',
      description: 'Multi-layered defense with encryption, access controls, and monitoring',
      features: [
        'AES-256 encryption at rest',
        'TLS 1.3 for data in transit',
        'Hardware security modules',
        'Zero-trust architecture'
      ]
    },
    {
      title: 'Availability',
      icon: 'A',
      description: '99.9% uptime SLA with redundant systems and failover',
      features: [
        'Automated failover',
        'Load balancing',
        'Disaster recovery',
        'Real-time monitoring'
      ]
    },
    {
      title: 'Processing',
      icon: 'P',
      description: 'Accurate, complete, and authorized data processing',
      features: [
        'Input validation',
        'Processing logs',
        'Error handling',
        'Data lineage tracking'
      ]
    },
    {
      title: 'Confidentiality',
      icon: 'C',
      description: 'Strict data classification and access controls',
      features: [
        'Role-based access',
        'Data classification',
        'NDA enforcement',
        'Secure disposal'
      ]
    },
    {
      title: 'Privacy',
      icon: 'P',
      description: 'Complete data control with on-premise deployment',
      features: [
        'Data minimization',
        'Purpose limitation',
        'Consent management',
        'Right to deletion'
      ]
    }
  ]

  // Double the principles array for seamless scrolling
  const scrollingPrinciples = [...trustPrinciples, ...trustPrinciples]

  const certificationPath = [
    {
      phase: 'Current',
      date: 'Now',
      title: 'SOC 2 Practices',
      description: 'Fully implemented SOC 2 controls and procedures across all operations',
      features: [
        'Complete control framework in place',
        'Regular internal audits',
        'Continuous monitoring active'
      ],
      progress: 100,
      icon: '✓'
    },
    {
      phase: 'Q4 2025',
      date: 'Oct - Dec',
      title: 'Type I Readiness',
      description: 'Internal audit and gap assessment with third-party validation',
      features: [
        'External auditor selection',
        'Documentation review',
        'Control testing preparation'
      ],
      progress: 60,
      icon: '1'
    },
    {
      phase: 'Q1 2026',
      date: 'Jan - Mar',
      title: 'Type I Certification',
      description: 'Formal attestation of control design and implementation',
      features: [
        'Point-in-time assessment',
        'Control design validation',
        'Official report issuance'
      ],
      progress: 30,
      icon: '2'
    },
    {
      phase: 'Q2 2026',
      date: 'Apr - Jun',
      title: 'Type II Certification',
      description: 'Full certification with operating effectiveness validation',
      features: [
        '6-month observation period',
        'Operating effectiveness testing',
        'Comprehensive audit report'
      ],
      progress: 10,
      icon: '3'
    }
  ]

  return (
    <>
      <HeadMeta 
        title="Security & Compliance | Corprex" 
        description="Corprex follows SOC 2 practices and enables compliant on-premise AI deployments. Full data sovereignty with enterprise-grade security controls." 
      />
      <Nav active="compliance" />
      
      <style>{styles.keyframes}</style>
      
      <main style={styles.container}>
        <div style={styles.hero}>
          <h1 style={styles.title}>
            Enterprise Security.<br/>
            <span style={styles.gradientText}>Complete Compliance.</span>
          </h1>
          <p style={styles.subtitle}>
            We implement comprehensive SOC 2 practices across all operations. 
            Your data never leaves your premises, ensuring complete sovereignty and compliance.
          </p>
          
          <div style={styles.statsContainer}>
            <div style={{
              ...styles.statItem,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0s'
            }}>
              <div style={styles.statNumber}>100%</div>
              <div style={styles.statLabel}>On-Premise</div>
            </div>
            <div style={{
              ...styles.statItem,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.1s'
            }}>
              <div style={styles.statNumber}>256-bit</div>
              <div style={styles.statLabel}>Encryption</div>
            </div>
            <div style={{
              ...styles.statItem,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.2s'
            }}>
              <div style={styles.statNumber}>24/7</div>
              <div style={styles.statLabel}>Monitoring</div>
            </div>
            <div style={{
              ...styles.statItem,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.3s'
            }}>
              <div style={styles.statNumber}>Zero</div>
              <div style={styles.statLabel}>Cloud Dependency</div>
            </div>
          </div>
        </div>

        <section style={styles.sectionDark}>
          <div style={{...styles.sectionHeader, padding: '0 1rem'}}>
            <h2 style={styles.sectionTitle}>SOC 2 Trust Services Criteria</h2>
            <p style={styles.sectionSubtitle}>
              Comprehensive implementation across all five trust principles
            </p>
          </div>
          
          <div style={styles.scrollerContainer}>
            <div 
              ref={scrollerRef}
              style={styles.scrollerTrack}
              onMouseEnter={() => {
                if (scrollerRef.current) {
                  scrollerRef.current.style.animationPlayState = 'paused'
                }
              }}
              onMouseLeave={() => {
                if (scrollerRef.current) {
                  scrollerRef.current.style.animationPlayState = 'running'
                }
              }}
            >
              {scrollingPrinciples.map((principle, index) => (
                <div 
                  key={index}
                  style={styles.principleCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#333333'
                    e.currentTarget.style.borderColor = '#666666'
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#2a2a2a'
                    e.currentTarget.style.borderColor = '#444444'
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  <div style={styles.principleHeader}>
                    <div style={styles.principleIcon}>{principle.icon}</div>
                    <h3 style={styles.principleTitle}>{principle.title}</h3>
                  </div>
                  <p style={styles.principleDesc}>{principle.description}</p>
                  <ul style={styles.featureList}>
                    {principle.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} style={styles.featureItem}>
                        <span style={styles.checkMark}>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.roadmapSection}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Our SOC 2 Journey</h2>
            <p style={styles.sectionSubtitle}>
              Transparent roadmap to formal SOC 2 Type II certification
            </p>
          </div>
          
          <div style={styles.roadmapContainer}>
            <div style={styles.roadmapTabs}>
              {certificationPath.map((phase, idx) => (
                <button
                  key={idx}
                  style={{
                    ...styles.roadmapTab,
                    ...(activePhase === idx ? styles.roadmapTabActive : {})
                  }}
                  onClick={() => setActivePhase(idx)}
                  onMouseEnter={(e) => {
                    if (activePhase !== idx) {
                      e.target.style.borderColor = '#666666'
                      e.target.style.color = '#ffffff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activePhase !== idx) {
                      e.target.style.borderColor = '#444444'
                      e.target.style.color = '#999999'
                    }
                  }}
                >
                  {phase.phase}
                </button>
              ))}
            </div>
            
            <div style={{
              ...styles.roadmapContent,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease'
            }}>
              <div style={styles.phaseHeader}>
                <div style={styles.phaseIcon}>
                  {certificationPath[activePhase].icon}
                </div>
                <div style={styles.phaseInfo}>
                  <div style={styles.phaseDate}>{certificationPath[activePhase].date}</div>
                  <h3 style={styles.phaseTitle}>{certificationPath[activePhase].title}</h3>
                </div>
              </div>
              
              <p style={styles.phaseDescription}>
                {certificationPath[activePhase].description}
              </p>
              
              <div style={styles.phaseFeatures}>
                {certificationPath[activePhase].features.map((feature, idx) => (
                  <div key={idx} style={styles.phaseFeature}>
                    <span style={{ color: '#999999', fontWeight: 'bold' }}>→</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div style={styles.progressBar}>
                <div style={{
                  ...styles.progressFill,
                  width: `${certificationPath[activePhase].progress}%`
                }}></div>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.ctaSection}>
            <h2 style={styles.ctaTitle}>Ready for Audit-Grade Security?</h2>
            <p style={styles.ctaSubtitle}>
              Get detailed compliance documentation and implementation guidance
            </p>
            <div style={styles.ctaButtons}>
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
                Schedule Security Review
              </Link>
              <Link 
                to="/pricing" 
                style={styles.secondaryBtn}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.target.style.borderColor = '#ffffff'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.borderColor = '#666666'
                }}
              >
                View Packages
              </Link>
            </div>
            <div style={styles.trustBadges}>
              <span style={styles.trustBadge}>
                Bank-Grade Encryption
              </span>
              <span style={styles.trustBadge}>
                150+ Controls
              </span>
              <span style={styles.trustBadge}>
                Zero Trust Architecture
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}