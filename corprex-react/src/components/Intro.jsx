import React from 'react'

export default function Intro() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>The Future of AI is Private</h2>
          <p>Why leading companies are choosing Corprex</p>
        </div>
        <div className="intro-grid">
          <div className="intro-card">
            <h3>One-Time Investment</h3>
            <p>Eliminate monthly AI subscriptions forever. Most clients see complete ROI within 2-8 weeks. One investment, unlimited usage, no surprises.</p>
          </div>
          <div className="intro-card">
            <h3>No Usage Limits</h3>
            <p>Sub-second latency for mission-critical applications. No internet delays, no API rate limits, no downtime. Your AI is always available when you need it.</p>
          </div>
          <div className="intro-card">
            <h3>Complete Privacy</h3>
            <p>Your data never leaves your premises. Process sensitive information with military-grade security and zero cloud exposure. Perfect for legal, medical, and financial data.</p>
          </div>
        </div>
      </div>
    </section>
  )
}


