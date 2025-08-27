import React from 'react'

export default function OmegaCube() {
  return (
    <div className="omega-box">
      <div className="omega-face front">
        <img src="/corprex-logo.png" alt="Corprex Logo" className="omega-logo" />
        <div className="omega-subtext">OMEGA</div>
      </div>
      <div className="omega-face back">
        <div className="omega-logo-large">Ω</div>
      </div>
      <div className="omega-face right"></div>
      <div className="omega-face left"></div>
      <div className="omega-face top"></div>
      <div className="omega-face bottom"></div>
    </div>
  )
}


