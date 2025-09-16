import React, { useState } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import HeadMeta from '../components/HeadMeta.jsx'
import StickyCTA from '../components/StickyCTA.jsx'
import { Link } from 'react-router-dom'

export default function Automations() {
  const packages = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small teams getting started with automation',
      features: [
        'Up to 10 active workflows',
        '1,000 executions/month',
        // removed per request
        'Email support'
      ],
      cta: 'Buy Now',
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'For growing businesses with complex automation needs',
      features: [
        'Unlimited workflows',
        '10,000 executions/month',
        // removed per request
        'Priority support',
        'Custom integrations'
      ],
      cta: 'Buy Now',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large-scale operations',
      features: [
        'Unlimited everything',
        'Dedicated success manager',
        'Custom AI model training',
        'On-premise deployment',
        'SLA guarantees',
        '24/7 phone support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <>
      <HeadMeta 
        title="Automation Platform | Corprex" 
        description="Build powerful automation workflows that run 100% locally on your Omega hardware. No cloud dependencies, complete data privacy." 
      />
      <Nav logoWeight={600} />
      
      <div className="main-content">
        {/* Pricing */}
        <section className="automation-pricing" style={{ 
          paddingTop: '120px',
          background: '#1a1a1a',
          minHeight: '100vh'
        }}>
          <div className="section-header" style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 1rem 3rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}>Choose Your Automation Package</h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#999999',
              fontWeight: '400',
              lineHeight: '1.6'
            }}>All packages include the Omega hardware for complete local processing.</p>
          </div>
          <div className="pricing-grid">
            {packages.map(pkg => (
              <div key={pkg.name} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <span className="popular-badge">Most Popular</span>}
                <div className="pricing-header">
                  <h3>{pkg.name}</h3>
                  <div className="pricing-amount">
                    <span className="price">{pkg.price}</span>
                    <span className="period">{pkg.period}</span>
                  </div>
                  <p className="pricing-description">{pkg.description}</p>
                </div>
                <ul className="pricing-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`pricing-cta ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}>
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="automation-cta">
          <div className="cta-container">
            <h2>Ready to Transform Your Operations?</h2>
            <p>Join thousands of organizations automating with complete data privacy</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary btn-large">
                Get Started Today
              </Link>
            </div>
            <div className="cta-guarantee">
              <span className="guarantee-text">No cloud dependencies • Cancel anytime</span>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <StickyCTA />
    </>
  )
}
