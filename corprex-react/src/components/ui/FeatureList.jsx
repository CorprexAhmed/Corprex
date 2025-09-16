import React from 'react'

export default function FeatureList({ items = [] }) {
  return (
    <div className="features-grid">
      {items.map((f, idx) => (
        <div key={idx} className="feature-card u-lift u-shadow-soft">
          <div className="feature-content">
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}


