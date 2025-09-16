import React from 'react'

export default function CTABanner({ title, subtitle, primaryHref = '/contact', primaryLabel = 'Request Demo', secondaryHref = '/pricing', secondaryLabel = 'Explore Packages' }) {
  return (
    <div className="cta-section">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <div className="hero-cta" style={{ justifyContent: 'center' }}>
        <a href={primaryHref} className="btn btn--primary">{primaryLabel}</a>
        <a href={secondaryHref} className="btn btn--secondary">{secondaryLabel}</a>
      </div>
    </div>
  )
}


