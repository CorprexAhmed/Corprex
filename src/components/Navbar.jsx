import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { integrationCategories, categoryIcons, getCategorySlug } from '../data/integrations.jsx'
import './Navbar.css'

const categories = Object.keys(integrationCategories)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileIntOpen, setMobileIntOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMobileIntOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path
  const isActivePrefix = (prefix) => location.pathname.startsWith(prefix)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          CORPREX
        </Link>

        <button
          className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/why-local-ai" className={`nav-link ${isActive('/why-local-ai') ? 'active' : ''}`}>
              Why Local AI?
            </Link>
          </li>
          <li>
            <Link to="/private-search" className={`nav-link ${isActive('/private-search') ? 'active' : ''}`}>
              Private Search
            </Link>
          </li>
          <li>
            <Link to="/mcp-servers" className={`nav-link ${isActive('/mcp-servers') ? 'active' : ''}`}>
              MCP Servers
            </Link>
          </li>

          {/* Desktop: hover dropdown — Mobile: expandable accordion */}
          <li className="nav-dropdown">
            <Link
              to="/integrations"
              className={`nav-link nav-dropdown-trigger ${isActivePrefix('/integrations') ? 'active' : ''}`}
            >
              Integrations
              <svg className="nav-dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>

            {/* Desktop dropdown panel */}
            <div className="nav-dropdown-panel">
              <div className="nav-dropdown-inner">
                <div className="nav-dropdown-header">
                  <Link to="/integrations" className="nav-dropdown-viewall">
                    All Integrations
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="nav-dropdown-grid">
                  {categories.map((cat) => (
                    <Link
                      to={`/integrations/${getCategorySlug(cat)}`}
                      className="nav-dropdown-item"
                      key={cat}
                    >
                      <div className="nav-dropdown-item-icon">
                        {categoryIcons[cat]}
                      </div>
                      <div>
                        <span className="nav-dropdown-item-name">{cat}</span>
                        <span className="nav-dropdown-item-count">
                          {integrationCategories[cat].length} integrations
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: toggle sub-links */}
            <button
              className="nav-mobile-expand"
              onClick={(e) => {
                e.preventDefault()
                setMobileIntOpen(!mobileIntOpen)
              }}
              aria-label="Expand integrations"
            >
              <svg
                className={`nav-mobile-expand-icon ${mobileIntOpen ? 'open' : ''}`}
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <ul className={`nav-mobile-sub ${mobileIntOpen ? 'open' : ''}`}>
              <li>
                <Link to="/integrations" className="nav-mobile-sub-link">
                  All Integrations
                </Link>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/integrations/${getCategorySlug(cat)}`}
                    className="nav-mobile-sub-link"
                  >
                    {categoryIcons[cat]}
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link to="/news" className={`nav-link ${isActive('/news') ? 'active' : ''}`}>
              News
            </Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
          <li className="nav-login-mobile">
            <a href="https://ai.corprex.com" className="nav-link">
              Client Login
            </a>
          </li>
          <li>
            <Link to="/contact" className="btn btn-primary nav-cta">
              Request Demo
            </Link>
          </li>
        </ul>

        <a href="https://ai.corprex.com" className="nav-login-desktop">
          Client Login
        </a>
      </div>
    </nav>
  )
}
