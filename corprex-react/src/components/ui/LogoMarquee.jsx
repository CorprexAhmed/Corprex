import React from 'react'

export default function LogoMarquee({ items = [] }) {
  const list = items.length ? items : [
    { name: 'Microsoft' }, 
    { name: 'Zendesk' }, 
    { name: 'Wayfair' }, 
    { name: 'Delivery Hero' }, 
    { name: 'SEAT' }, 
    { name: 'Paddle' }
  ]
  
  // Quadruple the list for smoother infinite scrolling
  const scrollingList = [...list, ...list, ...list, ...list]
  
  return (
    <div className="logo-marquee" aria-label="Trusted by">
      <div className="logo-track">
        {scrollingList.map((it, idx) => (
          <div key={idx} className="logo-item">{it.name}</div>
        ))}
      </div>
    </div>
  )
}