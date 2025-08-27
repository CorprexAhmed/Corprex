import React from 'react'

export default function Comparison() {
  return (
    <section className="section comparison-section">
      <div className="container">
        <div className="section-header">
          <h2>Omega vs. Cloud AI</h2>
          <p>See the difference ownership makes</p>
        </div>
        <div className="comparison-table">
          <div className="comparison-header">
            <div>Feature</div>
            <div>Corprex Omega</div>
            <div>Cloud AI</div>
          </div>
          <div className="comparison-row">
            <div>Data Privacy</div>
            <div className="check">✓ 100% Private</div>
            <div className="cross">✗ Data Leaves Premises</div>
          </div>
          <div className="comparison-row">
            <div>Monthly Cost</div>
            <div className="check">✓ $0 After Purchase</div>
            <div className="cross">✗ $500-$10,000+/mo</div>
          </div>
          <div className="comparison-row">
            <div>Usage Limits</div>
            <div className="check">✓ Unlimited</div>
            <div className="cross">✗ Token Limits</div>
          </div>
          <div className="comparison-row">
            <div>Response Time</div>
            <div className="check">✓ &lt;1 Second</div>
            <div className="cross">✗ Variable Latency</div>
          </div>
          <div className="comparison-row">
            <div>Customization</div>
            <div className="check">✓ Full Control</div>
            <div className="cross">✗ Limited Options</div>
          </div>
          <div className="comparison-row">
            <div>Compliance</div>
            <div className="check">✓ HIPAA/SOX/FedRAMP</div>
            <div className="cross">✗ Shared Infrastructure</div>
          </div>
          <div className="comparison-row">
            <div>Availability</div>
            <div className="check">✓ 100% Uptime</div>
            <div className="cross">✗ Internet Dependent</div>
          </div>
        </div>
      </div>
    </section>
  )
}


