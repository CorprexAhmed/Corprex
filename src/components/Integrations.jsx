import { useState } from 'react'
import { integrationCategories, getIconPath, categoryIcons } from '../data/integrations.jsx'
import './Integrations.css'

const categories = Object.keys(integrationCategories)

export default function Integrations() {
  const [activeCategory, setActiveCategory] = useState('All')

  const displayedCategories =
    activeCategory === 'All' ? categories : [activeCategory]

  const totalCount = Object.values(integrationCategories).reduce(
    (sum, arr) => sum + arr.length,
    0
  )

  return (
    <section className="section integrations-section" id="integrations">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Connect to {totalCount}+ Data Sources
          </h2>
          <p className="section-subtitle">
            Omega integrates seamlessly with your existing tools and data
            infrastructure. All connections run privately on your premises.
          </p>
        </div>

        {/* Category Filter */}
        <div className="integrations-filter">
          <button
            className={`filter-btn ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={() => setActiveCategory('All')}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {categoryIcons[cat]}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Integration Cards by Category */}
        <div className="integrations-categories">
          {displayedCategories.map((category) => (
            <div key={category} className="integration-category">
              <div className="category-header">
                <div className="category-icon">{categoryIcons[category]}</div>
                <h3 className="category-title">{category}</h3>
                <span className="category-count">
                  {integrationCategories[category].length}
                </span>
              </div>
              <div className="integrations-grid">
                {integrationCategories[category].map((name) => {
                  const iconPath = getIconPath(name)
                  return (
                    <div className="integration-card" key={name}>
                      <div className="integration-icon">
                        {iconPath ? (
                          <img
                            src={iconPath}
                            alt={name}
                            loading="lazy"
                          />
                        ) : (
                          <div className="integration-placeholder">
                            {name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <span className="integration-name">{name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
