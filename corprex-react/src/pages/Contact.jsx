import React, { useEffect, useRef, useState } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { mountInlineCal, attachBookingListener } from '../lib/calcom.js'

export default function Contact() {
  const [overlayOpen, setOverlayOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const submitTextRef = useRef(null)
  const spinnerRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = overlayOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [overlayOpen])

  function openScheduler(e) {
    if (e) e.preventDefault()
    setOverlayOpen(true)
    mountInlineCal({ selector: '#calcom-embed', calLink: 'corprex/firstlook', config: { styles: { branding: { brandColor: '#000000' } }, hideEventTypeDetails: false, layout: 'month_view' } })
    if (!window.__calListenerCleanup) {
      window.__calListenerCleanup = attachBookingListener(() => {
        // Auto-close after booking
        setTimeout(() => closeScheduler(), 1500)
      })
    }
  }

  function closeScheduler() {
    setOverlayOpen(false)
    const embed = document.getElementById('calcom-embed')
    if (embed) embed.innerHTML = ''
    if (window.__calListenerCleanup) { window.__calListenerCleanup(); window.__calListenerCleanup = null }
  }

  function onSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    if (submitTextRef.current) submitTextRef.current.textContent = 'Sending...'
    if (spinnerRef.current) spinnerRef.current.classList.add('active')
    setTimeout(() => {
      if (submitTextRef.current) submitTextRef.current.textContent = 'Message Sent!'
      if (spinnerRef.current) spinnerRef.current.classList.remove('active')
      setTimeout(() => {
        setSubmitting(false)
        if (submitTextRef.current) submitTextRef.current.textContent = 'Send Message'
      }, 2000)
      e.target.reset()
    }, 1500)
  }

  return (
    <>
      <Nav active="contact" ctaHref="#demo" />
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <span className="section-badge">Get in Touch</span>
            <h1 className="section-title">Let's Transform Your AI Infrastructure</h1>
            <p className="section-subtitle">Ready to cut costs and boost efficiency? We're here to help you build the future of private AI.</p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="info-section">
                <h3 className="info-title">Schedule a Meeting</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Book a short consultation to discuss your AI infrastructure needs.</p>
                <button className="schedule-button" onClick={openScheduler}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Schedule Meeting
                </button>
              </div>

              <div className="info-section">
                <h3 className="info-title">Get in Touch</h3>
                <div className="info-items">
                  <div className="info-item">
                    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <div className="info-content">
                      <h4>Email</h4>
                      <p><a href="mailto:sales@corprex.com">sales@corprex.com</a></p>
                    </div>
                  </div>
                  <div className="info-item">
                    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                    <div className="info-content">
                      <h4>Phone</h4>
                      <p><a href="tel:+1234567890">Coming Soon</a></p>
                    </div>
                  </div>
                  <div className="info-item">
                    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <div className="info-content">
                      <h4>Location</h4>
                      <p>Cleveland, Ohio, United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper" id="demo">
              <h3 className="form-title">Send us a message</h3>
              <p className="form-description">Tell us about your AI challenges and we'll get back to you within 24 hours.</p>
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" placeholder="Tell us about your AI infrastructure needs..." required />
                </div>
                <button type="submit" className="btn btn--primary" disabled={submitting}>
                  <span ref={submitTextRef}>Send Message</span>
                  <div className="contact-loading-spinner" ref={spinnerRef}></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className={`contact-overlay ${overlayOpen ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) closeScheduler() }}>
        <div className="contact-scheduler-container">
          <div className="contact-scheduler-header">
            <h2 className="contact-scheduler-title">Schedule a Meeting</h2>
            <button className="contact-close-btn" onClick={closeScheduler}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
          <div className="contact-scheduler-body">
            <div id="calcom-embed"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}


