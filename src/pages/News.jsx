import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import '../pages/Pages.css'

const articles = [
  {
    date: 'January 2026',
    tag: 'Industry',
    title: 'Major Enterprises Facing Data Breaches and Soaring AI Costs',
    summary: 'See why Fortune 500 companies are switching to private AI infrastructure to protect their data and control costs.',
  },
  {
    date: 'December 2025',
    tag: 'Product',
    title: 'Corprex Omega: Next-Generation AI Hardware',
    summary: 'Introducing the latest Omega configuration with support for the newest open-source models and expanded concurrent user capacity.',
  },
  {
    date: 'November 2025',
    tag: 'Compliance',
    title: 'HIPAA-Compliant AI: What Healthcare Providers Need to Know',
    summary: 'A comprehensive guide to implementing AI in healthcare environments while maintaining full regulatory compliance.',
  },
  {
    date: 'October 2025',
    tag: 'Case Study',
    title: 'How Private AI Cut Legal Document Review Time by 80%',
    summary: 'A law firm\'s journey from cloud AI to on-premises AI processing for sensitive legal documents.',
  },
]

export default function News() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <h1 className="page-hero-title">
              Latest from Corprex
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="page-hero-subtitle">
              Stay updated with the latest developments in private AI
              infrastructure, industry news, and Corprex announcements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Articles */}
      <section className="section">
        <div className="container">
          <div className="news-grid">
            {articles.map((article, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="news-card">
                  <div className="news-meta">
                    <span className="news-date">{article.date}</span>
                    <span className="news-tag">{article.tag}</span>
                  </div>
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-summary">{article.summary}</p>
                  <span className="news-read-more">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section page-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="section-title">Want to Learn More?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Get in touch to discuss how private AI can benefit your organization.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
