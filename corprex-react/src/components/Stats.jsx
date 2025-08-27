import React from 'react'

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>100%</h3>
            <p>Data Privacy</p>
          </div>
          <div className="stat-item">
            <h3>&lt;1s</h3>
            <p>Response Time</p>
          </div>
          <div className="stat-item">
            <h3>∞</h3>
            <p>Usage Limits</p>
          </div>
          <div className="stat-item">
            <h3>0</h3>
            <p>Cloud Dependencies</p>
          </div>
        </div>
      </div>
    </section>
  )
}


