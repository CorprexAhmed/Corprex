import React from 'react'

export default function SubscriptionSection() {
  const currentPlan = {
    name: 'Enterprise',
    price: '$3,999/month',
    startDate: 'January 15, 2024',
    renewalDate: 'December 15, 2024',
    status: 'active'
  }

  const features = [
    { name: 'Omega Hardware Unit', included: true, usage: '1 unit deployed' },
    { name: 'Automation Workflows', included: true, usage: 'Unlimited' },
    { name: 'API Calls', included: true, usage: '5M/month' },
    { name: 'Team Members', included: true, usage: '18 of 50' },
    { name: 'Storage', included: true, usage: '750 GB of 1 TB' },
    { name: 'Premium Support', included: true, usage: '24/7 Priority' },
    { name: 'Custom Integrations', included: true, usage: 'Unlimited' },
    { name: 'Advanced Analytics', included: true, usage: 'Enabled' },
    { name: 'SLA Guarantee', included: true, usage: '99.9% uptime' },
    { name: 'Dedicated Account Manager', included: true, usage: 'Assigned' }
  ]

  const addOns = [
    { name: 'Additional Storage', description: '500 GB extra storage', price: '$500/month', status: 'active' },
    { name: 'Extended Support', description: 'Premium 24/7 support with 1-hour SLA', price: '$500/month', status: 'active' }
  ]

  const availableAddOns = [
    { name: 'Extra Omega Unit', description: 'Deploy additional hardware unit', price: '$2,999/month' },
    { name: 'White-label Options', description: 'Custom branding for client-facing interfaces', price: '$999/month' },
    { name: 'Advanced Security Pack', description: 'Enhanced security features and monitoring', price: '$799/month' }
  ]

  const plans = [
    { name: 'Starter', price: '$999', features: ['1 Omega Unit', '100k API calls', '5 team members'] },
    { name: 'Professional', price: '$1,999', features: ['1 Omega Unit', '1M API calls', '15 team members'] },
    { name: 'Enterprise', price: '$3,999', features: ['1 Omega Unit', '5M API calls', '50 team members'], current: true },
    { name: 'Custom', price: 'Contact Us', features: ['Multiple Units', 'Unlimited API calls', 'Unlimited team'] }
  ]

  return (
    <div className="subscription-section">
      <div className="section-header">
        <h1>Subscription Management</h1>
        <div className="header-actions">
          <button className="btn-secondary">View Contract</button>
          <button className="btn-primary">Upgrade Plan</button>
        </div>
      </div>

      <div className="current-plan-card">
        <div className="plan-header">
          <div className="plan-info">
            <h2>{currentPlan.name} Plan</h2>
            <span className="plan-price">{currentPlan.price}</span>
          </div>
          <span className="status-badge active">Active</span>
        </div>
        
        <div className="plan-details">
          <div className="detail-row">
            <span className="detail-label">Subscription started</span>
            <span className="detail-value">{currentPlan.startDate}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Next renewal</span>
            <span className="detail-value">{currentPlan.renewalDate}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Auto-renewal</span>
            <span className="detail-value">
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </span>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>Included Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-header">
                <CheckIcon />
                <span className="feature-name">{feature.name}</span>
              </div>
              <span className="feature-usage">{feature.usage}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="addons-section">
        <h2>Active Add-ons</h2>
        <div className="addons-grid">
          {addOns.map((addon, index) => (
            <div key={index} className="addon-card active">
              <div className="addon-header">
                <h3>{addon.name}</h3>
                <span className="addon-price">{addon.price}</span>
              </div>
              <p className="addon-description">{addon.description}</p>
              <div className="addon-actions">
                <button className="link-button">Manage</button>
                <button className="link-button danger">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <h3>Available Add-ons</h3>
        <div className="addons-grid">
          {availableAddOns.map((addon, index) => (
            <div key={index} className="addon-card">
              <div className="addon-header">
                <h3>{addon.name}</h3>
                <span className="addon-price">{addon.price}</span>
              </div>
              <p className="addon-description">{addon.description}</p>
              <button className="btn-secondary">Add to Plan</button>
            </div>
          ))}
        </div>
      </div>

      <div className="plans-comparison">
        <h2>Compare Plans</h2>
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.current ? 'current' : ''}`}>
              {plan.current && <span className="current-badge">Current Plan</span>}
              <h3>{plan.name}</h3>
              <div className="plan-price-display">
                <span className="price">{plan.price}</span>
                {plan.price !== 'Contact Us' && <span className="period">/month</span>}
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              {!plan.current && plan.name !== 'Custom' && (
                <button className="btn-primary">Switch to {plan.name}</button>
              )}
              {plan.name === 'Custom' && (
                <button className="btn-secondary">Contact Sales</button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="usage-alerts">
        <h2>Usage Alerts</h2>
        <div className="alerts-list">
          <div className="alert-item warning">
            <AlertIcon />
            <div className="alert-content">
              <span className="alert-title">Storage usage at 75%</span>
              <span className="alert-description">You're using 750 GB of your 1 TB storage limit</span>
            </div>
            <button className="btn-secondary">Upgrade Storage</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Icon Components
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const AlertIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
)
