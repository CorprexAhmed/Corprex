import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-column">
          <h4>Solutions</h4>
          <a href="/automations" className="footer-link">Automations</a>
          <a href="/why-local-ai" className="footer-link">Why Local AI?</a>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <a href="/about" className="footer-link">About Us</a>
          <a href="/compliance" className="footer-link">Compliance</a>
          <a href="/news" className="footer-link">News</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">© 2025 Corprex. All rights reserved.</div>
      </div>
    </footer>
  )
}


