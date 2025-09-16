import React from 'react'

export default function Section({ id, title, subtitle, badge, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {(title || subtitle || badge) && (
          <div className="section-header">
            {badge && <span className="badge">{badge}</span>}
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}


