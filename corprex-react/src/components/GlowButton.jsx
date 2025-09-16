import React from 'react'

export default function GlowButton({ children, onClick, variant = 'primary', size = 'lg', href }) {
  const className = `glow-btn glow-btn--${variant} glow-btn--${size}`
  if (href) {
    return <a className={className} href={href} onClick={onClick}>{children}</a>
  }
  return <button className={className} onClick={onClick}>{children}</button>
}


