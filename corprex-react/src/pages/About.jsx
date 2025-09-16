import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import HeadMeta from '../components/HeadMeta.jsx'

export default function About() {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const scrollerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#1a1a1a',
      paddingTop: '80px',
      overflow: 'hidden'
    },
    hero: {
      padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem)',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto',
      opacity: mounted ? Math.max(0, 1 - scrollY / 500) : 0,
      transform: `translateY(${scrollY * 0.3}px)`
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: '300',
      color: '#ffffff',
      marginBottom: '2rem',
      letterSpacing: '-0.02em',
      lineHeight: '1.2'
    },
    subtitle: {
      fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
      color: '#999999',
      marginBottom: '3rem',
      lineHeight: '1.6',
      fontWeight: '400'
    },
    section: {
      padding: 'clamp(3rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem)',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative'
    },
    sectionDark: {
      background: '#000000',
      width: '100%',
      maxWidth: '100%',
      padding: 'clamp(3rem, 5vw, 4rem) 0',
      overflow: 'hidden'
    },
    sectionTitle: {
      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
      fontWeight: '400',
      color: '#ffffff',
      marginBottom: '2rem',
      textAlign: 'center'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2rem)',
      marginTop: '3rem'
    },
    card: {
      background: '#2a2a2a',
      padding: 'clamp(1.5rem, 3vw, 2rem)',
      borderRadius: '8px',
      border: '1px solid #333333',
      transition: 'all 0.3s ease'
    },
    cardTitle: {
      fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '1rem'
    },
    cardText: {
      fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
      color: '#999999',
      lineHeight: '1.6'
    },
    missionBox: {
      background: 'linear-gradient(135deg, #2a2a2a 0%, #333333 100%)',
      color: '#ffffff',
      padding: 'clamp(2rem, 4vw, 3rem)',
      borderRadius: '12px',
      marginTop: '3rem',
      textAlign: 'center',
      border: '1px solid #444444'
    },
    missionText: {
      fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
      lineHeight: '1.6',
      fontWeight: '300',
      color: '#ffffff'
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
      animation: 'scrollLeft 40s linear infinite',
      width: 'fit-content'
    },
    dangerCard: {
      minWidth: '300px',
      maxWidth: '300px',
      height: '200px',
      padding: '2rem',
      background: '#2a2a2a',
      border: '2px solid #444444',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      transition: 'all 0.3s ease'
    },
    dangerTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '1rem'
    },
    dangerText: {
      fontSize: '0.95rem',
      color: '#999999',
      lineHeight: '1.5'
    },
    statGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'clamp(1rem, 2vw, 2rem)',
      marginTop: '3rem',
      marginBottom: '3rem'
    },
    statCard: {
      textAlign: 'center',
      padding: 'clamp(1.5rem, 2vw, 2rem)',
      background: '#2a2a2a',
      borderRadius: '8px',
      border: '1px solid #333333'
    },
    statNumber: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #ffffff 0%, #999999 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.5rem'
    },
    statLabel: {
      fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
      color: '#999999',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
    ctaSection: {
      padding: 'clamp(4rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem)',
      textAlign: 'center',
      background: '#000000'
    },
    ctaTitle: {
      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
      fontWeight: '400',
      color: '#ffffff',
      marginBottom: '1.5rem'
    },
    ctaText: {
      fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
      color: '#999999',
      marginBottom: '2rem',
      maxWidth: '600px',
      margin: '0 auto 2rem'
    },
    ctaButton: {
      display: 'inline-block',
      padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)',
      background: '#ffffff',
      color: '#000000',
      textDecoration: 'none',
      borderRadius: '8px',
      fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
      fontWeight: '500',
      transition: 'all 0.3s ease'
    },
    sectionSubtitle: {
      textAlign: 'center',
      color: '#999999',
      fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
      marginBottom: '2rem',
      maxWidth: '700px',
      margin: '0 auto 2rem'
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

  const cloudDangers = [
    {
      title: "Data Theft",
      description: "Your proprietary data trains competitor models. Every query becomes their asset."
    },
    {
      title: "Cost Explosion",
      description: "Monthly bills that grow exponentially. No ceiling, no predictability, no control."
    },
    {
      title: "Total Dependency",
      description: "When they fail, you fail. Outages, rate limits, and service changes halt your business."
    },
    {
      title: "Compliance Risk",
      description: "Data crosses borders and jurisdictions. Regulatory fines can destroy companies."
    },
    {
      title: "Security Breaches",
      description: "One breach exposes millions. Your sensitive data becomes everyone's problem."
    },
    {
      title: "Vendor Lock-in",
      description: "Switching becomes impossible. They own your workflows, your data, your future."
    }
  ]

  const values = [
    {
      title: "Privacy First",
      text: "Your data never leaves your premises. Complete sovereignty, always."
    },
    {
      title: "True Ownership",
      text: "Buy once, own forever. No subscriptions, no surprises, no dependencies."
    },
    {
      title: "Unlimited Scale",
      text: "Process infinitely without cost penalties. Your growth shouldn't have limits."
    }
  ]

  // Double the dangers array for seamless scrolling
  const scrollingDangers = [...cloudDangers, ...cloudDangers]

  return (
    <>
      <HeadMeta 
        title="About | Corprex" 
        description="We're on a mission to free businesses from cloud AI dependency. Learn why local AI is the only path to true data sovereignty." 
      />
      <Nav active="about" />
      
      <style>{styles.keyframes}</style>
      
      <main style={styles.container}>
        <section style={styles.hero}>
          <h1 style={{
            ...styles.title,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease'
          }}>
            We Believe AI Should Work for You,<br/>
            <span style={{ color: '#666666' }}>Not the Other Way Around</span>
          </h1>
          <p style={{
            ...styles.subtitle,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.2s'
          }}>
            Every day, businesses hand their most valuable asset—their data—to cloud providers 
            who use it to train models that benefit their competitors. We're here to end that.
          </p>
        </section>

        <section style={{
          ...styles.section,
          opacity: mounted ? Math.max(0.3, 1 - scrollY / 800) : 0,
          transform: `translateY(${Math.min(50, scrollY * 0.1)}px)`
        }}>
          <div style={{
            ...styles.missionBox,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.4s'
          }}>
            <p style={styles.missionText}>
              Our mission is simple: Give businesses complete control over their AI infrastructure. 
              No cloud dependencies. No data leaks. No monthly ransoms. Just powerful, private AI 
              that runs entirely on your premises.
            </p>
          </div>
        </section>

        <section style={styles.sectionDark}>
          <h2 style={{...styles.sectionTitle, padding: '0 1rem'}}>The Cloud AI Trap</h2>
          <p style={{...styles.sectionSubtitle, padding: '0 1rem'}}>
            Cloud AI isn't just expensive—it's dangerous. Here's what they don't tell you:
          </p>
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
              {scrollingDangers.map((danger, index) => (
                <div 
                  key={index}
                  style={styles.dangerCard}
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
                  <h3 style={styles.dangerTitle}>{danger.title}</h3>
                  <p style={styles.dangerText}>{danger.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{
          ...styles.section,
          opacity: Math.max(0.85, 1 - Math.max(0, scrollY - 1200) / 800),
          transform: `translateY(${Math.min(20, Math.max(0, scrollY - 1200) * 0.03)}px)`
        }}>
          <h2 style={styles.sectionTitle}>Our Solution</h2>
          <div style={styles.statGrid}>
            <div style={{
              ...styles.statCard,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.6s ease 0.1s'
            }}>
              <div style={styles.statNumber}>100%</div>
              <div style={styles.statLabel}>On-Premise</div>
            </div>
            <div style={{
              ...styles.statCard,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.6s ease 0.2s'
            }}>
              <div style={styles.statNumber}>Zero</div>
              <div style={styles.statLabel}>Cloud Dependency</div>
            </div>
            <div style={{
              ...styles.statCard,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.6s ease 0.3s'
            }}>
              <div style={styles.statNumber}>One</div>
              <div style={styles.statLabel}>Time Purchase</div>
            </div>
            <div style={{
              ...styles.statCard,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.6s ease 0.4s'
            }}>
              <div style={styles.statNumber}>Forever</div>
              <div style={styles.statLabel}>Ownership</div>
            </div>
          </div>
          
          <div style={styles.grid}>
            {values.map((value, index) => (
              <div 
                key={index}
                style={{
                  ...styles.card,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease ${0.1 * index}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)'
                  e.currentTarget.style.borderColor = '#666666'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#333333'
                }}
              >
                <h3 style={styles.cardTitle}>{value.title}</h3>
                <p style={styles.cardText}>{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>
            Ready to Take Back Control?
          </h2>
          <p style={styles.ctaText}>
            Join the companies that have already escaped the cloud AI trap.
          </p>
          <Link 
            to="/contact"
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.target.style.background = '#f0f0f0'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#ffffff'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Start Your Independence
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}