import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import {
  integrationCategories,
  getCategorySlug,
  categoryDescriptions,
  getIconPath,
} from '../data/integrations.jsx'
import './IntegrationsPage.css'

const categories = Object.keys(integrationCategories)
const totalCount = Object.values(integrationCategories).reduce(
  (sum, arr) => sum + arr.length,
  0
)

export default function IntegrationsPage() {
  // Build one flat list of all integrations
  const allIntegrations = categories.flatMap((cat) =>
    integrationCategories[cat].map((name) => ({ name, category: cat }))
  )

  return (
    <div className="page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <h1 className="integ-page-title">
              Connect to {totalCount}+ Data Sources
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="integ-page-subtitle">
              Omega integrates seamlessly with your existing tools and data
              infrastructure. All connections run privately on your premises.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category Cards */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">Browse by Category</h2>
              <p className="section-subtitle">
                Explore {categories.length} categories of integrations across your entire tech stack
              </p>
            </div>
          </Reveal>
          <div className="integ-categories-grid">
            {categories.map((category, i) => {
              const slug = getCategorySlug(category)
              const items = integrationCategories[category]
              const previewItems = items.slice(0, 6)

              return (
                <Reveal key={category} delay={i * 0.07}>
                  <Link
                    to={`/integrations/${slug}`}
                    className="integ-category-card"
                  >
                    <div className="integ-category-header">
                      <div>
                        <h2 className="integ-category-name">{category}</h2>
                        <span className="integ-category-count">
                          {items.length} integrations
                        </span>
                      </div>
                    </div>

                    <p className="integ-category-desc">
                      {categoryDescriptions[category]}
                    </p>

                    {/* Icon preview strip */}
                    <div className="integ-icon-preview">
                      {previewItems.map((name) => {
                        const iconPath = getIconPath(name)
                        return (
                          <div className="integ-preview-icon" key={name} title={name}>
                            {iconPath ? (
                              <img src={iconPath} alt={name} loading="lazy" />
                            ) : (
                              <span className="integ-preview-placeholder">
                                {name.charAt(0)}
                              </span>
                            )}
                          </div>
                        )
                      })}
                      {items.length > 6 && (
                        <div className="integ-preview-more">
                          +{items.length - 6}
                        </div>
                      )}
                    </div>

                    <div className="integ-category-arrow">
                      View all
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Integrations Grid */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">All Integrations</h2>
              <p className="section-subtitle">
                {totalCount}+ data sources across every category — all running privately on your premises
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} threshold={0.01}>
            <div className="integ-all-grid">
              {allIntegrations.map(({ name }) => {
                const iconPath = getIconPath(name)
                return (
                  <div className="integ-all-card" key={name}>
                    <div className="integ-all-card-icon">
                      {iconPath ? (
                        <img src={iconPath} alt={name} loading="lazy" />
                      ) : (
                        <div className="integ-all-card-placeholder">
                          {name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <span className="integ-all-card-name">{name}</span>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section integ-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="section-title">Don't See Your Tool?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Omega supports custom integrations via REST APIs and Python SDKs.
              Contact us to discuss your specific needs.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
