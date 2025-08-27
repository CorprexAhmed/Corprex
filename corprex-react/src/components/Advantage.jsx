import React from 'react'

export default function Advantage() {
  return (
    <section className="section advantage-section" id="omega">
      <div className="container">
        <div className="section-header">
          <h2>The Omega Advantage</h2>
          <p>See why industry leaders choose Corprex</p>
        </div>
        <div className="advantage-grid">
          <div className="advantage-content">
            <h3>A complete AI infrastructure, not just hardware.</h3>
            <ul className="advantage-list">
              <li className="advantage-item">
                <span className="advantage-icon">✓</span>
                <div className="advantage-text">
                  <h4>Advanced Automation Suite</h4>
                  <p>We design and implement custom AI-powered workflows tailored to your business needs. Build complex automations without coding. Automate document processing, data analysis, and business processes with our expert guidance.</p>
                </div>
              </li>
              <li className="advantage-item">
                <span className="advantage-icon">✓</span>
                <div className="advantage-text">
                  <h4>Managed AI Operations</h4>
                  <p>We run your AI infrastructure so you don't have to. Complete operational management, performance tuning, and strategic consulting included.</p>
                </div>
              </li>
              <li className="advantage-item">
                <span className="advantage-icon">✓</span>
                <div className="advantage-text">
                  <h4>Future-Proof Design</h4>
                  <p>Modular architecture allows GPU upgrades as new models emerge. Your investment grows with AI advancement.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="specs-preview">
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Starting Configuration</h4>
            <div className="spec-row">
              <span className="spec-label">GPU Options</span>
              <span className="spec-value">RTX 4060 Ti → H100</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">RAM</span>
              <span className="spec-value">32GB → 1TB DDR5</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Storage</span>
              <span className="spec-value">1TB → 32TB NVMe</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Models</span>
              <span className="spec-value">All Open Source + Custom</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Users</span>
              <span className="spec-value">2 → 200+ Concurrent</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Starting From</span>
              <span className="spec-value">Contact for Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


