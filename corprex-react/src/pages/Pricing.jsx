import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import HeadMeta from '../components/HeadMeta.jsx'
import StickyCTA from '../components/StickyCTA.jsx'
import ChassisViewer from '../components/ChassisViewer.jsx'
import OmegaCube from '../components/OmegaCube.jsx'

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#1a1a1a',
      paddingTop: '100px'
    },
    header: {
      textAlign: 'center',
      padding: isMobile ? '2rem 1rem' : '4rem 2rem 2rem',
      maxWidth: '900px',
      margin: '0 auto'
    },
    title: {
      fontSize: isMobile ? '2rem' : '3.5rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '1rem',
      letterSpacing: '-0.02em'
    },
    subtitle: {
      fontSize: isMobile ? '1rem' : '1.25rem',
      color: '#999999',
      marginBottom: isMobile ? '2rem' : '3rem',
      fontWeight: '400'
    },
    pricingGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: isMobile ? '2rem' : '3rem',
      maxWidth: '1000px',
      margin: '0 auto',
      padding: isMobile ? '1rem' : '2rem',
      marginBottom: isMobile ? '3rem' : '6rem'
    },
    card: {
      background: '#f8f8f8',
      borderRadius: '20px',
      padding: isMobile ? '1.5rem' : '2rem',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
      border: '1px solid #333333',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      transform: mounted ? 'translateY(0)' : 'translateY(20px)',
      opacity: mounted ? 1 : 0,
      minHeight: isMobile ? 'auto' : '600px',
      display: 'flex',
      flexDirection: 'column'
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
    },
    cardHeader: {
      textAlign: 'center',
      marginBottom: isMobile ? '1.5rem' : '2rem'
    },
    planName: {
      fontSize: isMobile ? '1.5rem' : '1.75rem',
      fontWeight: '600',
      color: '#000000',
      marginBottom: '0.5rem'
    },
    planType: {
      fontSize: isMobile ? '0.875rem' : '1rem',
      color: '#999999',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontWeight: '500'
    },
    modelContainer: {
      height: isMobile ? '200px' : '250px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      background: '#000000',
      borderRadius: '12px',
      position: 'relative',
      overflow: 'hidden'
    },
    modelContainerEnterprise: {
      height: isMobile ? '200px' : '250px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      background: '#d3d3d3',
      borderRadius: '12px',
      position: 'relative',
      overflow: 'hidden'
    },
    comingSoonBanner: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(90deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
      color: '#ffffff',
      padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1rem',
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      zIndex: 10,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px'
    },
    enterpriseModel: {
      opacity: 0.3,
      filter: 'grayscale(100%)'
    },
    priceSection: {
      textAlign: 'center',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      paddingBottom: isMobile ? '1.5rem' : '2rem',
      borderBottom: '1px solid #e0e0e0'
    },
    price: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: '700',
      color: '#000000',
      marginBottom: '0.5rem'
    },
    priceContact: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: '500',
      color: '#666666'
    },
    priceLabel: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      color: '#999999',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    features: {
      flex: 1,
      marginBottom: isMobile ? '1.5rem' : '2rem'
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    feature: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: isMobile ? '0.75rem' : '1rem',
      color: '#333333',
      fontSize: isMobile ? '0.875rem' : '0.95rem'
    },
    featureIcon: {
      marginRight: isMobile ? '0.5rem' : '0.75rem',
      color: '#000000',
      flexShrink: 0,
      marginTop: '2px'
    },
    ctaButton: {
      width: '100%',
      padding: isMobile ? '0.875rem' : '1rem',
      background: '#000000',
      color: '#ffffff',
      border: 'none',
      borderRadius: '10px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'block',
      textAlign: 'center'
    },
    ctaButtonHover: {
      background: '#1a1a1a',
      transform: 'translateY(-2px)'
    },
    ctaButtonDisabled: {
      background: '#cccccc',
      cursor: 'not-allowed'
    },
    badge: {
      position: 'absolute',
      top: isMobile ? '15px' : '20px',
      right: isMobile ? '15px' : '20px',
      background: '#000000',
      color: '#ffffff',
      padding: isMobile ? '0.2rem 0.6rem' : '0.25rem 0.75rem',
      borderRadius: '20px',
      fontSize: isMobile ? '0.65rem' : '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    mobileModelWrapper: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: isMobile ? 'scale(0.85)' : 'scale(0.95)'
    },
    cubeWrapper: {
      width: isMobile ? '140px' : '180px',
      height: isMobile ? '140px' : '180px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'scale(0.9)'
    }
  }

  const plans = [
    {
      id: 'small-business',
      name: 'Omega',
      type: 'Small Business',
      price: '$69,999',
      priceLabel: 'One-time purchase',
      badge: 'Most Popular',
      hasModel: true,
      features: [
        'AMD Threadripper 9970X (32 cores/64 threads)',
        '768GB Server-grade RDIMM RAM',
        '4x NVIDIA RTX Pro 6000 Ada (384GB VRAM total)',
        '18TB Enterprise NVMe storage array',
        '10GbE networking onboard',
        '2500W redundant power supply',
        'Silverstone Crown chassis with 360mm cooling',
        'Pre-installed AI frameworks & models',
        '1-year hardware warranty & 24/7 support'
      ],
      cta: 'Order Now',
      ctaLink: '/contact'
    },
    {
      id: 'enterprise',
      name: 'Omega Pro',
      type: 'Enterprise',
      price: 'Contact Us',
      priceLabel: 'Custom configuration',
      isComingSoon: true,
      hasModel: false,
      features: [
        'Dual AMD EPYC 9754 (256 cores/512 threads total)',
        '2TB Server-grade RDIMM RAM',
        '8x NVIDIA H100 (640GB HBM3 total)',
        '100TB Enterprise NVMe storage array',
        '100GbE InfiniBand networking',
        '6000W redundant power supply',
        'Supermicro 4U rackmount chassis',
        'Custom AI model deployment',
        '3-year hardware warranty & dedicated support team'
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact'
    }
  ]

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={styles.featureIcon}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <>
      <HeadMeta 
        title="Pricing | Corprex" 
        description="Simple, transparent pricing for on-premise AI infrastructure. One-time purchase, unlimited usage, no monthly fees." 
      />
      <Nav active="pricing" />
      
      <main style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>
            One Purchase. Unlimited AI.
          </h1>
          <p style={styles.subtitle}>
            No subscriptions. No usage limits. No surprise bills. Just powerful AI that you own forever.
          </p>
        </div>

        <div style={styles.pricingGrid}>
          {plans.map((plan, index) => (
            <div 
              key={plan.id}
              style={{
                ...styles.card,
                transitionDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  Object.assign(e.currentTarget.style, styles.cardHover)
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)'
                }
              }}
            >
              {plan.badge && <div style={styles.badge}>{plan.badge}</div>}
              
              <div style={styles.cardHeader}>
                <h2 style={styles.planName}>{plan.name}</h2>
                <p style={styles.planType}>{plan.type}</p>
              </div>

              <div style={plan.isComingSoon ? styles.modelContainerEnterprise : styles.modelContainer}>
                {plan.hasModel && !plan.isComingSoon ? (
                  <div style={{
                    ...styles.mobileModelWrapper,
                    position: 'relative',
                    left: isMobile ? '6.5%' : '0',
                    top: isMobile ? '10px' : '0'
                  }}>
                    <ChassisViewer />
                  </div>
                ) : (
                  <>
                    {plan.isComingSoon && (
                      <div style={styles.comingSoonBanner}>Coming Soon</div>
                    )}
                    <div style={{
                      ...styles.enterpriseModel,
                      ...styles.cubeWrapper
                    }}>
                      <OmegaCube showPro={false} showOmega={false} />
              </div>
                  </>
                )}
            </div>

              <div style={styles.priceSection}>
                {plan.price === 'Contact Us' ? (
                  <div style={styles.priceContact}>{plan.price}</div>
                ) : (
                  <div style={styles.price}>{plan.price}</div>
                )}
                <div style={styles.priceLabel}>{plan.priceLabel}</div>
          </div>

              <div style={styles.features}>
                <ul style={styles.featuresList}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} style={styles.feature}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
          </div>

              <Link 
                to={plan.ctaLink}
                style={{
                  ...styles.ctaButton,
                  ...(plan.isComingSoon && !plan.price.includes('Contact') ? styles.ctaButtonDisabled : {})
                }}
                onMouseEnter={(e) => {
                  if (!plan.isComingSoon || plan.price.includes('Contact')) {
                    e.target.style.background = '#333333'
                    e.target.style.transform = 'translateY(-2px)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#000000'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                {plan.cta}
              </Link>
            </div>
            ))}
          </div>

        <div style={{
          textAlign: 'center',
          padding: isMobile ? '2rem 1rem' : '3rem 2rem',
          marginBottom: '4rem'
        }}>
          <h3 style={{ 
            fontSize: isMobile ? '1.5rem' : '2rem', 
            marginBottom: '1rem',
            color: '#ffffff'
          }}>
            All Omega packages include
          </h3>
          <p style={{ 
            color: '#999999', 
            fontSize: isMobile ? '0.9rem' : '1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Complete setup & configuration • Pre-installed AI frameworks • 
            Model library access • Hardware warranty • 24/7 technical support • 
            Lifetime software updates • No monthly fees ever
          </p>
        </div>
      </main>

      <Footer />
      <StickyCTA />
    </>
  )
}