import { useState } from 'react'
import Reveal from '../components/Reveal'
import '../pages/Pages.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('sent')
    setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <div className="page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <h1 className="page-hero-title">
              Let's Transform Your AI Infrastructure
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="page-hero-subtitle">
              Ready to cut costs and boost efficiency? We're here to help you
              build the future of private AI.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-col">
              <Reveal delay={0.1}>
                <div className="contact-info-card">
                  <h3>Schedule a Meeting</h3>
                  <p>
                    Book a short consultation to discuss your AI infrastructure
                    needs.
                  </p>
                  <a
                    href="https://cal.com/corprex/firstlook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary schedule-btn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Schedule Meeting
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="contact-info-card">
                  <h3>Get in Touch</h3>
                  <div className="contact-info-items">
                    <div className="contact-info-item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <div>
                        <h4>Email</h4>
                        <a href="mailto:sales@corprex.com">sales@corprex.com</a>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                      <div>
                        <h4>Phone</h4>
                        <a href="tel:+12027965245">(202) 796-5245</a>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <div>
                        <h4>Location</h4>
                        <p>1775 Eye Street NW<br/>Washington, DC 20006</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <Reveal delay={0.15}>
              <div className="contact-form-card">
                <h3>Send us a message</h3>
                <p className="form-desc">
                  Tell us about your AI challenges and we'll get back to you
                  within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Tell us about your AI infrastructure needs..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === 'sending'}
                    style={{ width: '100%' }}
                  >
                    {status === 'idle' && 'Send Message'}
                    {status === 'sending' && 'Sending...'}
                    {status === 'sent' && 'Message Sent ✓'}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
