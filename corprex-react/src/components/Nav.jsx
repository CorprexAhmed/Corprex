import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav({ active, logoWeight = 600, ctaHref = '/contact' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navMenuRef = useRef(null)
  const menuBtnRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  useEffect(() => {
    function onScroll() {
      const nav = document.querySelector('nav')
      if (!nav) return
      if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.98)'
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)'
      } else {
        nav.style.background = 'rgba(0, 0, 0, 0.95)'
        nav.style.boxShadow = 'none'
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav>
      <div className="nav-container">
        <div className="logo" style={{ fontWeight: logoWeight }}><Link to="/">CORPREX</Link></div>
        <a href="https://ai.corprex.com" className="client-login-btn">Client Login</a>
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((v) => !v)}
          ref={menuBtnRef}
        >
          ☰
        </button>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu" ref={navMenuRef}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/automations" className={`nav-link ${location.pathname.startsWith('/automations') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Automations</Link>
            <div className="dropdown">
              <Link to="/n8n-guide" className="dropdown-link" onClick={() => setMenuOpen(false)}>n8n Automation Guide</Link>
              <Link to="/make-guide" className="dropdown-link" onClick={() => setMenuOpen(false)}>Make.com Guide</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/why-local-ai" className={`nav-link ${location.pathname.startsWith('/why-local-ai') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Why Local AI?</Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className={`nav-link ${location.pathname.startsWith('/news') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>News</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>About Us</Link>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
          <li className="nav-item mobile-only-item">
            <a href="/client-login" className="nav-link" onClick={() => setMenuOpen(false)}>Client Login</a>
          </li>
          <li className="nav-item">
            <a href={ctaHref} className="nav-cta" onClick={() => setMenuOpen(false)}>Request Demo</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}


