import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import './n8n-guide.css'

export default function N8nGuide() {
  // Replicate subtle scroll/fade behaviors
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.section, .workflow-container, .example-card').forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'all 0.6s ease'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav logoWeight={600} />
      <GuideHero />
      <IntroSection />
      <HowWorks />
      <NodeTypes />
      <Examples />
      <Comparison />
      <GuideCTA />
      <Footer />
    </>
  )
}

function GuideHero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">n8n Open-Source Automation</span>
          <h1>Master <span className="highlight">n8n</span> Workflow Automation</h1>
          <p>
            Build powerful, self-hosted automation workflows with complete control. Connect any API, database, or service with n8n's flexible node-based approach. Your data, your infrastructure, your rules.
          </p>
        </div>
      </div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="section intro-section">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-content">
            <h3>What is n8n?</h3>
            <p>
              n8n is a powerful, self-hosted workflow automation tool that gives you complete control over your automations and data. Unlike cloud-based alternatives, n8n runs on your infrastructure, ensuring privacy and customization.
            </p>
            <p>
              With its intuitive visual interface and extensive node library, n8n lets you connect anything with an API, automate complex processes, and build sophisticated workflows without vendor lock-in.
            </p>
            <ul className="intro-features">
              {['400+ pre-built integrations','Self-hosted for complete data privacy','Code when you need it, visual when you don\'t','Fair-source license with source code access'].map((text) => (
                <li className="intro-feature" key={text}>
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 12L11 14L15 10"/></svg>
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="workflow-container">
            <div className="workflow-canvas">
              <div className="workflow-node node-trigger">
                <div className="node-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7L12 12L22 7L12 2Z"/></svg>
                </div>
                <div className="node-title">Webhook</div>
              </div>
              <div className="workflow-node node-process">
                <div className="node-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2Z"/></svg>
                </div>
                <div className="node-title">Process Data</div>
              </div>
              <div className="workflow-node node-condition">
                <div className="node-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2H6Z"/></svg>
                </div>
                <div className="node-title">IF Condition</div>
              </div>
              <div className="workflow-node node-action1">
                <div className="node-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"/></svg>
                </div>
                <div className="node-title">Send Email</div>
              </div>
              <div className="workflow-node node-action2">
                <div className="node-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7V17C2 19.21 3.79 21 6 21H18C20.21 21 22 19.21 22 17V7L12 2Z"/></svg>
                </div>
                <div className="node-title">Update DB</div>
              </div>
              <div className="connection connection-1"></div>
              <div className="connection connection-2"></div>
              <div className="connection connection-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowWorks() {
  const steps = [
    ['Design Your Workflow','Start with n8n\'s visual canvas. Drag and drop nodes to create your automation flow. Each node represents a trigger, action, or data transformation step.'],
    ['Connect Your Services','Choose from 400+ pre-built integrations or create custom connections. n8n handles authentication, API calls, and data formatting automatically.'],
    ['Transform Your Data','Use built-in functions to filter, merge, split, and transform data between nodes. Add custom JavaScript code when you need advanced logic.'],
    ['Test and Debug','Execute workflows step-by-step to see data flow in real-time. n8n shows you exactly what happens at each node, making debugging simple.'],
    ['Deploy and Monitor','Activate your workflow to run on triggers, schedules, or webhooks. Monitor execution history, handle errors gracefully, and scale as needed.'],
  ]
  return (
    <section className="section how-section">
      <div className="container">
        <div className="section-header">
          <h2>How n8n Works</h2>
          <p>Build automations step-by-step with n8n's intuitive approach</p>
        </div>
        <div className="process-timeline">
          {steps.map(([title, desc], idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-number">{idx + 1}</div>
              <div className="timeline-content">
                <h3 className="timeline-title">{title}</h3>
                <p className="timeline-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NodeTypes() {
  const nodes = [
    ['Trigger Nodes','Start workflows based on events like webhooks, schedules, file changes, or database updates','M8 5V19L19 12L8 5Z'],
    ['App Nodes','Connect to services like Slack, Gmail, Airtable, or any API to read and write data','M13 3V9H21V3M13 21H21V11H13M3 21H11V15H3M3 13H11V3H3V13Z'],
    ['Core Nodes','Transform data, add logic, merge branches, and control workflow execution flow','M12 2L2 7V17C2 19.21 3.79 21 6 21H18C20.21 21 22 19.21 22 17V7L12 2Z'],
    ['Code Nodes','Write custom JavaScript or Python code for complex logic and transformations','M14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6Z'],
  ]
  return (
    <section className="section nodes-section">
      <div className="container">
        <div className="section-header">
          <h2>Understanding n8n Nodes</h2>
          <p>The building blocks of your automation workflows</p>
        </div>
        <div className="nodes-grid">
          {nodes.map(([title, desc, path]) => (
            <div className="node-type-card" key={title}>
              <div className="node-type-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d={path} /></svg>
              </div>
              <h3 className="node-type-title">{title}</h3>
              <p className="node-type-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Examples() {
  const examples = [
    {
      title: 'Customer Onboarding Automation',
      flow: ['Webhook Trigger','Create Account','Send Welcome','Add to CRM','Schedule Demo'],
      desc: 'This workflow automatically handles new customer signups, creates accounts, sends personalized welcome emails, updates your CRM, and schedules onboarding calls - all without manual intervention.'
    },
    {
      title: 'Invoice Processing Pipeline',
      flow: ['Email Trigger','Extract PDF','OCR Process','Validate Data','Update Books'],
      desc: 'Automatically process incoming invoices from email, extract data using OCR, validate against your records, and post to your accounting system - reducing manual data entry by 90%.'
    }
  ]
  return (
    <section className="section examples-section">
      <div className="container">
        <div className="section-header">
          <h2>Real-World Workflow Examples</h2>
          <p>See how n8n transforms business processes</p>
        </div>
        {examples.map((ex) => (
          <div className="example-card" key={ex.title}>
            <div className="example-header">
              <div className="example-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6Z"/></svg>
              </div>
              <h3 className="example-title">{ex.title}</h3>
            </div>
            <div className="example-flow">
              {ex.flow.map((step, i) => (
                <div className="flow-step" key={step}>
                  <div className="step-name">{step}</div>
                  <div className="step-desc">{i===0? 'New signup received': i===1? 'Add to database': i===2? 'Email with credentials': i===3? 'Create contact record': 'Book calendar slot'}</div>
                </div>
              ))}
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{ex.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Comparison() {
  const left = ['Self-hosted - your data never leaves your servers','No execution limits or throttling','Custom node development for proprietary systems','Fair-source license with full code access','No vendor lock-in or pricing surprises']
  const right = ['Your sensitive data processed on third-party servers','Monthly fees that scale with usage','Rate limits and execution caps','Limited customization options','Internet dependency for all operations']
  return (
    <section className="section comparison-section">
      <div className="container">
        <div className="section-header">
          <h2>n8n vs Cloud Alternatives</h2>
          <p>Why self-hosted automation gives you the edge</p>
        </div>
        <div className="comparison-grid">
          <div className="comparison-column">
            <h3>n8n Advantages</h3>
            <ul className="feature-list">
              {left.map((t) => (
                <li className="feature-item" key={t}>
                  <div className="check-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 12L11 14L15 10"/></svg></div>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="comparison-column">
            <h3>Cloud Platform Limitations</h3>
            <ul className="feature-list">
              {right.map((t) => (
                <li className="feature-item" key={t}>
                  <div className="check-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 12L11 14L15 10"/></svg></div>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function GuideCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-section">
          <h2>Ready to Automate with n8n?</h2>
          <p>Let our experts help you deploy and optimize n8n for your infrastructure</p>
          <a href="/contact" className="btn-primary">Get Started with n8n</a>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-gray)' }}>
            Or explore our <a href="/make-guide" style={{ color: 'var(--n8n-red)', textDecoration: 'none' }}>Make.com guide</a> for visual automation
          </p>
        </div>
      </div>
    </section>
  )
}


