import { useParams, Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import {
  integrationCategories,
  categoryIcons,
  categoryDescriptions,
  getCategoryFromSlug,
  getCategorySlug,
  getIconPath,
} from '../data/integrations.jsx'
import './IntegrationsPage.css'

const allCategories = Object.keys(integrationCategories)

export default function IntegrationCategoryPage() {
  const { slug } = useParams()
  const categoryName = getCategoryFromSlug(slug)

  if (!categoryName) {
    return (
      <div className="page">
        <section className="page-hero">
          <div className="container">
            <h1 className="integ-page-title">Category Not Found</h1>
            <p className="integ-page-subtitle">
              The integration category you're looking for doesn't exist.
            </p>
            <Link to="/integrations" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              View All Integrations
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const items = integrationCategories[categoryName]
  const description = categoryDescriptions[categoryName]

  return (
    <div className="page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          {/* Breadcrumb */}
          <Reveal>
            <nav className="integ-breadcrumb">
              <Link to="/integrations">Integrations</Link>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span>{categoryName}</span>
            </nav>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="integ-cat-hero-row">
              <div>
                <h1 className="integ-page-title">{categoryName}</h1>
                <p className="integ-page-subtitle" style={{ marginTop: '0.75rem' }}>
                  {description}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="integ-cat-stat">
              <span className="integ-cat-stat-num">{items.length}</span>
              <span className="integ-cat-stat-label">Integrations Available</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Integration Grid */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="integ-detail-grid">
              {items.map((name) => {
                const iconPath = getIconPath(name)
                return (
                  <div className="integ-detail-card" key={name}>
                    <div className="integ-detail-icon">
                      {iconPath ? (
                        <img src={iconPath} alt={name} loading="lazy" />
                      ) : (
                        <div className="integ-detail-placeholder">
                          {name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <h3 className="integ-detail-name">{name}</h3>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other Categories */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">Explore Other Categories</h2>
              <p className="section-subtitle">
                Browse integrations across all {allCategories.length} categories
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="integ-other-cats">
              {allCategories
                .filter((c) => c !== categoryName)
                .map((cat) => (
                  <Link
                    to={`/integrations/${getCategorySlug(cat)}`}
                    className="integ-other-cat-chip"
                    key={cat}
                  >
                    {categoryIcons[cat]}
                    <span>{cat}</span>
                    <span className="integ-chip-count">
                      {integrationCategories[cat].length}
                    </span>
                  </Link>
                ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section integ-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="section-title">Need a Custom Integration?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Omega supports custom integrations via REST APIs and Python SDKs.
              Contact us to discuss your specific needs.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/integrations" className="btn btn-secondary">
                All Integrations
              </Link>
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
