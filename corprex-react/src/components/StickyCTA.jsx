import React, { useState, useEffect } from 'react'

export default function StickyCTA({ label = 'Request a Demo', href = '/contact' }) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show when at the very top
      if (currentScrollY <= 50) {
        setIsVisible(true)
      } 
      // Hide when scrolling down
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } 
      // Show when scrolling up and near the top
      else if (currentScrollY < lastScrollY && currentScrollY <= 150) {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className={`sticky-cta ${isVisible ? 'visible' : 'hidden'}`} role="region" aria-label="Quick action">
      <a href={href} className="sticky-cta__btn">{label}</a>
    </div>
  )
}


