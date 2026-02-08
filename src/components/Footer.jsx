import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">CORPREX</Link>
            <p className="footer-tagline">
              The infrastructure company for the private AI era.
            </p>
          </div>
          <div className="footer-column">
            <h4>Solutions</h4>
            <Link to="/why-local-ai" className="footer-link">Why Local AI?</Link>
            <Link to="/private-search" className="footer-link">Private Search</Link>
            <Link to="/integrations" className="footer-link">Integrations</Link>
            <Link to="/mcp-servers" className="footer-link">MCP Servers</Link>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/news" className="footer-link">News</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
          <div className="footer-column">
            <h4>Connect</h4>
            <a href="mailto:sales@corprex.com" className="footer-link">sales@corprex.com</a>
            <a href="tel:+12027965245" className="footer-link">(202) 796-5245</a>
            <a href="https://ai.corprex.com" className="footer-link" target="_blank" rel="noopener noreferrer">Client Login</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© {new Date().getFullYear()} Corprex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
