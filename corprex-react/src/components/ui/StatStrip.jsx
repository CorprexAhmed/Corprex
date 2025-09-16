import React from 'react'

export default function StatStrip({ stats = [] }) {
  const list = stats.length ? stats : [
    { value: '1–2', label: 'Deploy AI in weeks' },
    { value: '100%', label: 'Data ownership' },
    { value: '24/7', label: 'On-prem reliability' },
    { value: '∞', label: 'Integrations via automations' },
  ]
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {list.map((s, idx) => (
            <div key={idx} className="stat-item">
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


