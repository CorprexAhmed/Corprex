import React, { useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function About() {
  useEffect(() => {
    // Observe content sections for fade-in to match original behavior
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.what-we-do, .how-we-work, .value-card')
    elements.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'all 0.6s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav active="about" logoWeight={700} ctaHref="#demo" />
      <section className="hero about-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Your Complete <span className="highlight">AI Infrastructure</span> Partner
            </h1>
            <p>
              We don't just deliver technology. We deliver transformation. From hardware to automation, from setup to support, we're with you every step of your AI journey.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <div className="content-grid">
            <div className="what-we-do">
              <h2 className="section-title">What We Provide</h2>
              <div className="section-content">
                <p>
                  Corprex delivers complete AI infrastructure solutions designed for businesses that demand privacy, control, and performance. We're not just a vendor—we're your technology partner.
                </p>
                <p>
                  Our comprehensive approach means you get everything you need to run powerful AI systems on your own premises, under your complete control.
                </p>
                <ul className="service-list">
                  <li className="service-item">
                    <span className="service-icon"></span>
                    <span>Enterprise AI computers optimized for your workloads</span>
                  </li>
                  <li className="service-item">
                    <span className="service-icon"></span>
                    <span>Pre-configured software stack with all necessary AI models</span>
                  </li>
                  <li className="service-item">
                    <span className="service-icon"></span>
                    <span>Complete secure network setup and configuration</span>
                  </li>
                  <li className="service-item">
                    <span className="service-icon"></span>
                    <span>Custom automation development for your workflows</span>
                  </li>
                  <li className="service-item">
                    <span className="service-icon"></span>
                    <span>Ongoing support and system optimization</span>
                  </li>
                  <li className="service-item">
                    <span className="service-icon"></span>
                    <span>Training and knowledge transfer for your team</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="how-we-work">
              <h2 className="section-title">How We Work</h2>
              <div className="section-content">
                <p>
                  Every business has unique needs. That's why we've developed a proven process that ensures your AI infrastructure is perfectly aligned with your goals.
                </p>
                <div className="process-list">
                  <div className="process-item">
                    <span className="process-number">1</span>
                    <div className="process-content">
                      <h3>Discovery & Planning</h3>
                      <p>We analyze your current workflows, identify opportunities for AI integration, and design a custom solution.</p>
                    </div>
                  </div>
                  <div className="process-item">
                    <span className="process-number">2</span>
                    <div className="process-content">
                      <h3>Hardware Configuration</h3>
                      <p>We prepare your AI computer with the exact specifications needed for your use cases.</p>
                    </div>
                  </div>
                  <div className="process-item">
                    <span className="process-number">3</span>
                    <div className="process-content">
                      <h3>On-Site Deployment</h3>
                      <p>Our team handles complete installation, network setup, and security configuration at your location.</p>
                    </div>
                  </div>
                  <div className="process-item">
                    <span className="process-number">4</span>
                    <div className="process-content">
                      <h3>Automation Development</h3>
                      <p>We build custom automations that integrate AI into your existing business processes.</p>
                    </div>
                  </div>
                  <div className="process-item">
                    <span className="process-number">5</span>
                    <div className="process-content">
                      <h3>Training & Support</h3>
                      <p>We ensure your team is confident using the system and provide ongoing support as you grow.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon"></div>
            <h3 className="value-title">Complete Privacy</h3>
            <p className="value-description">Your data never leaves your premises. Every computation, every model, every byte stays under your control.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"></div>
            <h3 className="value-title">Instant Performance</h3>
            <p className="value-description">No cloud latency. No API limits. Get responses in milliseconds, not seconds.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"></div>
            <h3 className="value-title">Full Support</h3>
            <p className="value-description">From initial setup to ongoing optimization, our team ensures your success at every stage.</p>
          </div>
        </div>
      </section>

      <section className="cta-section" id="demo">
        <h2 className="cta-title">Ready to Take Control of Your AI?</h2>
        <p className="cta-subtitle">
          Let's discuss how Corprex can transform your business with secure, private AI infrastructure.
        </p>
        <a href="/contact" className="btn-primary">Start Your Journey</a>
      </section>

      <Footer />
    </>
  )
}


