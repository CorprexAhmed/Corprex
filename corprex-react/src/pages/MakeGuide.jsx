import React, { useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function MakeGuide() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)' } })
    }, { threshold: 0.1 })
    document.querySelectorAll('.section, .visual-feature, .template-card, .concept-card').forEach((el) => {
      el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'all 0.6s ease'; observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav logoWeight={600} />
      <section className="hero hero--center">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">Make.com Visual Automation</span>
            <h1>Master <span className="highlight">Make.com</span> Visual Automation</h1>
            <p>Create powerful, visual automation workflows without code. Connect thousands of apps and services with Make's intuitive drag-and-drop interface. Build scenarios that transform your business processes.</p>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h3>What is Make.com?</h3>
              <p>Make (formerly Integromat) is a powerful visual automation platform that lets you design, build, and automate workflows by connecting apps and services with a unique visual interface.</p>
              <p>Unlike traditional automation tools, Make provides a visual canvas where you can see your entire workflow, making it easy to understand data flow and build complex scenarios without writing code.</p>
              <ul className="intro-features">
                {['1500+ pre-built app integrations','Visual scenario builder with real-time execution','Advanced data transformation tools','Error handling and scenario monitoring'].map((t) => (
                  <li className="intro-feature" key={t}>
                    <div className="feature-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 12L11 14L15 10"/></svg></div>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="visual-container">
              <div className="scenario-canvas">
                <div className="module module-trigger"><div className="module-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7L12 12L22 7L12 2Z"/></svg></div></div>
                <div className="module module-action1"><div className="module-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"/></svg></div></div>
                <div className="module module-action2"><div className="module-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7V17C2 19.21 3.79 21 6 21H18C20.21 21 22 19.21 22 17V7L12 2Z"/></svg></div></div>
                <div className="module module-filter"><div className="module-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 4V10H9V4H3ZM15 4V10H21V4H15ZM3 16V22H9V16H3ZM15 16V22H21V16H15Z"/></svg></div></div>
                <div className="connection-line" style={{ left: '110px', top: '50%', width: '180px' }}></div>
                <div className="connection-line" style={{ left: '290px', top: '50%', width: '180px', transform: 'rotate(-30deg)' }}></div>
                <div className="connection-line" style={{ left: '290px', top: '50%', width: '180px', transform: 'rotate(30deg)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section how-section">
        <div className="container">
          <div className="section-header"><h2>How Make.com Works</h2><p>Build automations visually with Make's unique approach</p></div>
          <div className="process-timeline">
            {[
              ['Create a Scenario','Start with a blank canvas where you\'ll build your automation workflow. Each scenario represents a complete automation process that runs independently.'],
              ['Add Modules','Drag and drop modules onto your canvas. Each module represents an app, service, or function. Connect triggers with actions.'],
              ['Configure Connections','Set up secure connections to your apps and services. Make handles authentication and maintains these connections.'],
              ['Map Your Data','Use Make\'s powerful mapping features to transform and route data between modules with visual mapping.'],
              ['Test and Deploy','Run your scenario in test mode and then activate it to run automatically based on triggers or schedule.'],
            ].map(([title, desc], idx) => (
              <div className="timeline-item" key={title}>
                <div className="timeline-number">{idx + 1}</div>
                <div className="timeline-content"><h3 className="timeline-title">{title}</h3><p className="timeline-desc">{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section builder-section">
        <div className="container">
          <div className="section-header"><h2>The Visual Builder Advantage</h2><p>See your entire workflow at a glance and understand complex logic instantly</p></div>
          <div className="builder-showcase">
            <div className="builder-header">
              <div className="builder-controls"><div className="control-dot"></div><div className="control-dot"></div><div className="control-dot"></div></div>
              <span style={{ marginLeft: 'auto', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Make.com Scenario Builder</span>
            </div>
            <div className="builder-canvas"><div className="canvas-grid"></div>
              <div style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>Visual Workflow Design</h3>
                <div className="visual-features-grid">
                  {[
                    ['Visual Logic','See branches, filters, and routers in your workflow','M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z'],
                    ['Real-time Testing','Watch data flow through your scenario live','M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z'],
                    ['Precise Control','Configure every detail of your automation','M12 2L2 7V17C2 19.21 3.79 21 6 21H18C20.21 21 22 19.21 22 17V7L12 2ZM12 11.5L20.5 7L12 2.5L3.5 7L12 11.5ZM4 8.31V17C4 18.1 4.9 19 6 19H18C19.1 19 20 18.1 20 17V8.31L12 13L4 8.31Z'],
                  ].map(([title, subtitle, path]) => (
                    <div className="visual-feature u-lift u-border-accent u-shadow-soft" key={title}>
                      <div className="visual-feature-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d={path}/></svg></div>
                      <h4>{title}</h4>
                      <p>{subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section templates-section">
        <div className="container">
          <div className="section-header"><h2>Popular Automation Templates</h2><p>Get started quickly with pre-built scenarios you can customize</p></div>
          <div className="templates-grid">
            {[
              ['Social Media Publisher','Automatically publish content across multiple social platforms from a single source. Schedule posts, resize images, and track engagement.',['Facebook','Instagram','Twitter','LinkedIn'],'M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6Z'],
              ['CRM Lead Manager','Capture leads from multiple sources, enrich with data, score automatically, and sync with your CRM. Never miss a potential customer.',['HubSpot','Salesforce','Mailchimp'],'M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 5V19H5V5H19ZM12 12C10.35 12 9 13.35 9 15S10.35 18 12 18 15 16.65 15 15 13.65 12 12 12Z'],
              ['Invoice Processor','Extract data from invoices, validate information, update accounting systems, and send payment reminders automatically.',['QuickBooks','Xero','Stripe'],'M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 4 19 4ZM19 19H5V8H19V19Z'],
              ['Project Automator','Create tasks from emails, update project boards, notify team members, and generate reports across your tools.',['Asana','Trello','Slack','Jira'],'M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z'],
              ['HR Onboarding','Streamline employee onboarding with automated account creation, equipment requests, training schedules, and communications.',['Google Workspace','Slack','BambooHR'],'M16 11C17.66 11 18.99 9.66 18.99 8S17.66 5 16 5C14.34 5 13 6.34 13 8S14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8S9.66 5 8 5C6.34 5 5 6.34 5 8S6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z'],
              ['Analytics Reporter','Collect data from multiple sources, create consolidated reports, and distribute insights to stakeholders on schedule.',['Google Analytics','Sheets','Email'],'M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 5V19H5V5H19ZM12 12C10.35 12 9 13.35 9 15S10.35 18 12 18 15 16.65 15 15 13.65 12 12 12Z'],
            ].map(([title, desc, apps, path]) => (
              <div className="template-card u-lift u-border-accent u-shadow-soft" key={title}>
                <div className="template-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d={path}/></svg></div>
                <h3 className="template-title">{title}</h3>
                <p className="template-desc">{desc}</p>
                <div className="template-apps">{apps.map((a) => (<span className="app-tag" key={a}>{a}</span>))}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="container">
          <div className="section-header"><h2>Make.com vs n8n</h2><p>Choose the right automation platform for your needs</p></div>
          <div className="comparison-grid">
            <div className="comparison-column">
              <h3>Make.com Strengths</h3>
              <ul className="feature-list">
                {['Visual scenario builder with real-time data flow','1500+ pre-built integrations','No coding required for most automations','Advanced data transformation tools','Built-in error handling and data storage'].map((t) => (
                  <li className="feature-item" key={t}><div className="check-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 12L11 14L15 10"/></svg></div><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="comparison-column">
              <h3>n8n Strengths</h3>
              <ul className="feature-list">
                {['Self-hosted option for complete data control','Fair-source license with source code access','Custom code support for advanced logic','Build custom nodes for proprietary systems','No usage limits when self-hosted'].map((t) => (
                  <li className="feature-item" key={t}><div className="check-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 12L11 14L15 10"/></svg></div><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2>Ready to Automate with Make?</h2>
            <p>Let our experts help you design and implement powerful visual automations that transform your business</p>
            <a href="/contact" className="btn btn--primary">Get Started with Make</a>
            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-gray)' }}>Or explore our <a href="/n8n-guide" style={{ color: 'var(--make-purple)', textDecoration: 'none' }}>n8n guide</a> for self-hosted automation</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


