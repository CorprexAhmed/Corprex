import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import HeadMeta from '../components/HeadMeta.jsx'
import NewsPopup from '../components/NewsPopup.jsx'
import Hero from '../components/Hero.jsx'
import StatStrip from '../components/ui/StatStrip.jsx'
import LogoMarquee from '../components/ui/LogoMarquee.jsx'
import StickyCTA from '../components/StickyCTA.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const styles = {
    container: {
      background: '#1a1a1a'
    },
    marqueeSection: {
      padding: 'clamp(2rem, 4vw, 3rem) 0',
      background: '#2a2a2a'
    },
    marqueeText: {
      textAlign: 'center',
      fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)',
      color: '#999999',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: '1.5rem',
      fontWeight: '500'
    },
    section: {
      padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionDark: {
      background: '#000000',
      color: '#ffffff'
    },
    sectionGrey: {
      background: '#2a2a2a'
    },
    title: {
      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
      fontWeight: '300',
      color: '#ffffff',
      marginBottom: '2rem',
      letterSpacing: '-0.02em',
      lineHeight: '1.2',
      textAlign: 'center'
    },
    titleWhite: {
      color: '#ffffff'
    },
    subtitle: {
      fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
      color: '#999999',
      marginBottom: '3rem',
      lineHeight: '1.6',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 3rem'
    },
    subtitleWhite: {
      color: '#cccccc'
    },
    warningBox: {
      background: 'linear-gradient(135deg, #333333 0%, #2a2a2a 100%)',
      color: '#ffffff',
      padding: 'clamp(2rem, 4vw, 3rem)',
      borderRadius: '12px',
      marginBottom: '3rem',
      textAlign: 'center',
      border: '1px solid #444444'
    },
    warningTitle: {
      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
      fontWeight: '600',
      marginBottom: '1rem'
    },
    warningText: {
      fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
      lineHeight: '1.6',
      opacity: 0.95
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2rem)',
      marginBottom: '4rem'
    },
    card: {
      background: '#2a2a2a',
      padding: 'clamp(1.5rem, 3vw, 2rem)',
      borderRadius: '8px',
      border: '1px solid #333333',
      transition: 'all 0.3s ease'
    },
    cardDark: {
      background: '#1a1a1a',
      border: '1px solid #333333'
    },
    cardTitle: {
      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '1rem'
    },
    cardTitleWhite: {
      color: '#ffffff'
    },
    cardText: {
      fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
      color: '#999999',
      lineHeight: '1.6'
    },
    cardTextWhite: {
      color: '#999999'
    },
    statGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'clamp(1rem, 2vw, 2rem)',
      marginBottom: '3rem'
    },
    stat: {
      textAlign: 'center',
      padding: 'clamp(1rem, 2vw, 1.5rem)'
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
      fontSize: 'clamp(0.8rem, 1.3vw, 0.9rem)',
      color: '#999999',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
    ctaButton: {
      display: 'inline-block',
      padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)',
      background: '#000000',
      color: '#ffffff',
      textDecoration: 'none',
      borderRadius: '8px',
      fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      textAlign: 'center'
    },
    ctaButtonWhite: {
      background: '#ffffff',
      color: '#000000'
    },
    ctaContainer: {
      textAlign: 'center',
      marginTop: '3rem'
    },
    comparisonGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'clamp(1rem, 2vw, 2rem)',
      marginBottom: '3rem'
    },
    comparisonCard: {
      padding: 'clamp(1.5rem, 3vw, 2rem)',
      borderRadius: '8px',
      textAlign: 'center'
    },
    comparisonBad: {
      background: '#3a2a2a',
      border: '2px solid #666666'
    },
    comparisonGood: {
      background: '#2a3a2a',
      border: '2px solid #666666'
    },
    comparisonTitle: {
      fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)',
      fontWeight: '600',
      marginBottom: '1rem'
    },
    comparisonList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      textAlign: 'left'
    },
    comparisonItem: {
      padding: '0.5rem 0',
      fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)',
      color: '#cccccc',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.5rem'
    },
    checkMark: {
      color: '#00cc00',
      fontWeight: 'bold',
      flexShrink: 0
    },
    xMark: {
      color: '#ff4444',
      fontWeight: 'bold',
      flexShrink: 0
    },
    timelineSection: {
      background: '#1a1a1a',
      padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)'
    },
    timeline: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    timelineItem: {
      display: 'flex',
      gap: '2rem',
      marginBottom: '2rem',
      alignItems: 'flex-start'
    },
    timelineDate: {
      fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)',
      color: '#999999',
      fontWeight: '600',
      minWidth: '100px',
      textAlign: 'right'
    },
    timelineContent: {
      flex: 1,
      paddingBottom: '2rem',
      borderLeft: '2px solid #333333',
      paddingLeft: '2rem',
      position: 'relative'
    },
    timelineDot: {
      position: 'absolute',
      left: '-7px',
      top: '0',
      width: '12px',
      height: '12px',
      background: '#666666',
      borderRadius: '50%'
    },
    timelineTitle: {
      fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
      color: '#ffffff',
      fontWeight: '600',
      marginBottom: '0.5rem'
    },
    timelineDesc: {
      fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)',
      color: '#999999',
      lineHeight: '1.5'
    }
  }

  const cloudRisks = [
    {
      title: "Your Data is Training Their Models",
      text: "Every prompt, every document, every piece of proprietary information you send to cloud AI becomes training data for models your competitors will use."
    },
    {
      title: "The Bills Never Stop Growing",
      text: "Companies report 10x cost increases within months. There's no ceiling. No predictability. Just endless monthly charges that scale with your success."
    },
    {
      title: "One Breach, Everyone's Problem",
      text: "When cloud providers get hacked, millions of companies lose data simultaneously. Your sensitive information becomes collateral damage."
    }
  ]

  const recentIncidents = [
    {
      date: "Nov 2024",
      title: "OpenAI Data Breach",
      desc: "Corporate secrets exposed in ChatGPT conversation histories"
    },
    {
      date: "Oct 2024",
      title: "Samsung Bans Cloud AI",
      desc: "Engineers leaked chip designs through ChatGPT"
    },
    {
      date: "Sept 2024",
      title: "$200M GDPR Fine",
      desc: "JPMorgan penalized for cloud AI compliance failures"
    },
    {
      date: "Aug 2024",
      title: "6-Hour Global Outage",
      desc: "Microsoft Copilot failure costs businesses $4.5B"
    }
  ]

  const stats = [
    { number: "94%", label: "Cost Increase Year 1" },
    { number: "73%", label: "Experience Data Breach" },
    { number: "6hrs", label: "Average Daily Downtime" },
    { number: "$2.4M", label: "Average Compliance Fine" }
  ]

  return (
    <>
      <HeadMeta title="Corprex | Private AI Infrastructure (Omega)" description="Your data is being stolen. Your costs are exploding. Take back control with 100% on-premise AI." />
      <Nav active="home" />
      <NewsPopup />
      
      <main style={styles.container}>
      <Hero />
      <StatStrip />
        
        <section style={styles.marqueeSection}>
          <p style={styles.marqueeText}>These Companies Already Escaped Cloud AI</p>
        <LogoMarquee />
        </section>

        <section style={styles.section}>
          <div style={{
            ...styles.warningBox,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease'
          }}>
            <h2 style={styles.warningTitle}>Your Cloud AI Provider is Using You</h2>
            <p style={styles.warningText}>
              Right now, your most valuable competitive advantage—your data—is training models 
              that your competitors will use against you tomorrow.
            </p>
          </div>

          <div style={styles.grid}>
            {cloudRisks.map((risk, index) => (
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
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'
                  e.currentTarget.style.borderColor = '#666666'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#333333'
                }}
              >
                <h3 style={styles.cardTitle}>{risk.title}</h3>
                <p style={styles.cardText}>{risk.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.timelineSection}>
          <h2 style={{...styles.title, ...styles.titleWhite, marginBottom: '3rem'}}>
            This Week's Cloud AI Disasters
          </h2>
          <div style={styles.timeline}>
            {recentIncidents.map((incident, index) => (
              <div 
                key={index}
                style={{
                  ...styles.timelineItem,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 0.6s ease ${0.15 * index}s`
                }}
              >
                <div style={styles.timelineDate}>{incident.date}</div>
                <div style={styles.timelineContent}>
                  <div style={styles.timelineDot}></div>
                  <h3 style={styles.timelineTitle}>{incident.title}</h3>
                  <p style={styles.timelineDesc}>{incident.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{...styles.section, ...styles.sectionGrey}}>
          <h2 style={styles.title}>The Numbers Don't Lie</h2>
          <div style={styles.statGrid}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                style={{
                  ...styles.stat,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'scale(1)' : 'scale(0.8)',
                  transition: `all 0.6s ease ${0.1 * index}s`
                }}
              >
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
          <p style={styles.subtitle}>
            These aren't projections. These are averages from companies using cloud AI today.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.title}>You Have Two Choices</h2>
          <div style={styles.comparisonGrid}>
            <div style={{
              ...styles.comparisonCard,
              ...styles.comparisonBad,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease'
            }}>
              <h3 style={{...styles.comparisonTitle, color: '#ff9999'}}>Keep Using Cloud AI</h3>
              <ul style={styles.comparisonList}>
                <li style={styles.comparisonItem}>
                  <span style={styles.xMark}>✗</span>
                  <span>Your data trains competitor models</span>
                </li>
                <li style={styles.comparisonItem}>
                  <span style={styles.xMark}>✗</span>
                  <span>Costs increase 10x+ annually</span>
                </li>
                <li style={styles.comparisonItem}>
                  <span style={styles.xMark}>✗</span>
                  <span>Outages stop your business</span>
                </li>
                <li style={styles.comparisonItem}>
                  <span style={styles.xMark}>✗</span>
                  <span>Compliance violations guaranteed</span>
                </li>
                <li style={styles.comparisonItem}>
                  <span style={styles.xMark}>✗</span>
                  <span>Zero control over your AI</span>
                </li>
              </ul>
            </div>
            <div style={{
              ...styles.comparisonCard,
              ...styles.comparisonGood,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.2s'
            }}>
              <h3 style={{...styles.comparisonTitle, color: '#ffffff'}}>Switch to Omega</h3>
              <ul style={styles.comparisonList}>
                <li style={styles.comparisonItem}>
                  <span style={styles.checkMark}>✓</span>
                  <span>Your data stays 100% private</span>
                </li>
                <li style={styles.comparisonItem}>
                  <span style={styles.checkMark}>✓</span>
                  <span>One-time cost, unlimited use</span>
                </li>
                <li style={styles.comparisonItem}>
                  <span style={styles.checkMark}>✓</span>
                  <span>Works offline, always available</span>
                </li>
                <li style={styles.comparisonItem}>
                  <span style={styles.checkMark}>✓</span>
                  <span>Complete regulatory compliance</span>
                </li>
                <li style={styles.comparisonItem}>
                  <span style={styles.checkMark}>✓</span>
                  <span>Total control and ownership</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{...styles.sectionDark}}>
          <div style={styles.section}>
            <h2 style={{...styles.title, ...styles.titleWhite}}>
              Every Day You Wait Costs You More
            </h2>
            <p style={{...styles.subtitle, ...styles.subtitleWhite}}>
              Your competitors are already switching. Your data is already being harvested. 
              Your costs are already spiraling. The question isn't if you'll switch to local AI—it's whether 
              you'll do it before it's too late.
            </p>
            <div style={styles.ctaContainer}>
              <Link 
                to="/contact"
                style={{...styles.ctaButton, ...styles.ctaButtonWhite}}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f0f0f0'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#ffffff'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                Secure Your AI Infrastructure Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </>
  )
}