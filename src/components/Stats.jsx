import { integrationCategories, getIconPath } from '../data/integrations.jsx'
import './Stats.css'

// Gather all integrations that have icons
const allIntegrations = Object.values(integrationCategories)
  .flat()
  .filter((name) => getIconPath(name))

export default function Stats() {
  return (
    <section className="scroller-section">
      <h2 className="scroller-title">Support for 230+ Integrations</h2>
      <div className="scroller-track">
        <div className="scroller-row">
          <div className="scroller-slide">
            {allIntegrations.map((name) => (
              <div className="scroller-item" key={name}>
                <img src={getIconPath(name)} alt={name} loading="lazy" />
                <span className="scroller-item-name">{name}</span>
              </div>
            ))}
          </div>
          <div className="scroller-slide" aria-hidden="true">
            {allIntegrations.map((name) => (
              <div className="scroller-item" key={`dup-${name}`}>
                <img src={getIconPath(name)} alt="" loading="lazy" />
                <span className="scroller-item-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
