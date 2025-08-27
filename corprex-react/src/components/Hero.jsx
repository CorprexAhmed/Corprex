import React, { useEffect } from 'react'
import OmegaCube from './OmegaCube.jsx'

export default function Hero() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section')
    sections.forEach((section) => {
      section.style.opacity = '0'
      section.style.transform = 'translateY(20px)'
      section.style.transition = 'all 0.6s ease'
    })
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" style={{ textAlign: 'left' }}>
      <div className="hero-content" style={{ alignItems: 'flex-start' }}>
        <div className="hero-text" style={{ textAlign: 'left' }}>
          <h1 style={{ textAlign: 'left' }}>Don't think outside the box.</h1>
          <h2 style={{ textAlign: 'left' }}>Think in it.</h2>
          <p style={{ textAlign: 'left' }}>
            The Omega is your complete AI infrastructure in one powerful device. No cloud dependencies. No data leaks. Just pure, private computational excellence at your command.
          </p>
          <div className="hero-cta">
            <a href="/contact" className="btn btn--primary">Request Demo</a>
            <a href="#omega" className="btn btn--secondary">Explore the Omega</a>
          </div>
        </div>
        <div className="omega-visual">
          <OmegaCube />
        </div>
      </div>
    </section>
  )
}


