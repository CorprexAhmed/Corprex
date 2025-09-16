import React, { useState } from 'react'

export default function AutomationPackages() {
  const [filter, setFilter] = useState('all')
  
  const automations = [
    {
      id: 1,
      name: 'Customer Onboarding Workflow',
      version: 'v2.1',
      status: 'active',
      lastRun: '2 hours ago',
      successRate: '98.5%',
      runs: '1,247',
      category: 'customer',
      description: 'Automated customer onboarding with data validation and CRM integration'
    },
    {
      id: 2,
      name: 'Invoice Processing Pipeline',
      version: 'v1.8',
      status: 'active',
      lastRun: '15 minutes ago',
      successRate: '99.2%',
      runs: '3,892',
      category: 'finance',
      description: 'Automated invoice processing with OCR and approval routing'
    },
    {
      id: 3,
      name: 'Data Sync Workflow',
      version: 'v3.0',
      status: 'paused',
      lastRun: '1 day ago',
      successRate: '95.8%',
      runs: '892',
      category: 'data',
      description: 'Bi-directional data synchronization between systems'
    },
    {
      id: 4,
      name: 'Lead Qualification Bot',
      version: 'v1.2',
      status: 'active',
      lastRun: '30 minutes ago',
      successRate: '97.1%',
      runs: '567',
      category: 'sales',
      description: 'AI-powered lead scoring and qualification automation'
    },
    {
      id: 5,
      name: 'Support Ticket Router',
      version: 'v2.5',
      status: 'active',
      lastRun: '5 minutes ago',
      successRate: '99.8%',
      runs: '4,231',
      category: 'support',
      description: 'Intelligent ticket routing based on content analysis'
    }
  ]

  const templates = [
    { name: 'Email Marketing Automation', category: 'marketing', complexity: 'medium' },
    { name: 'HR Onboarding Process', category: 'hr', complexity: 'high' },
    { name: 'Inventory Management', category: 'operations', complexity: 'medium' },
    { name: 'Social Media Scheduler', category: 'marketing', complexity: 'low' }
  ]

  const filteredAutomations = filter === 'all' 
    ? automations 
    : automations.filter(a => a.status === filter)

  return (
    <div className="automation-packages">
      <div className="section-header">
        <h1>Automation Packages</h1>
        <div className="header-actions">
          <button className="btn-secondary">Import Package</button>
          <button className="btn-primary">Create New Automation</button>
        </div>
      </div>

      <div className="automation-stats">
        <div className="stat-card">
          <span className="stat-label">Total Automations</span>
          <span className="stat-value">24</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Active Workflows</span>
          <span className="stat-value">21</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Total Runs Today</span>
          <span className="stat-value">8,472</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Average Success Rate</span>
          <span className="stat-value">97.8%</span>
        </div>
      </div>

      <div className="automations-section">
        <div className="section-controls">
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Automations
            </button>
            <button 
              className={`filter-tab ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button 
              className={`filter-tab ${filter === 'paused' ? 'active' : ''}`}
              onClick={() => setFilter('paused')}
            >
              Paused
            </button>
          </div>
          <div className="search-box">
            <SearchIcon />
            <input type="text" placeholder="Search automations..." />
          </div>
        </div>

        <div className="automations-grid">
          {filteredAutomations.map(automation => (
            <div key={automation.id} className="automation-card">
              <div className="automation-header">
                <div className="automation-title">
                  <h3>{automation.name}</h3>
                  <span className="version-badge">{automation.version}</span>
                </div>
                <span className={`status-indicator ${automation.status}`}>
                  {automation.status === 'active' ? <ActiveIcon /> : <PausedIcon />}
                  {automation.status}
                </span>
              </div>
              
              <p className="automation-description">{automation.description}</p>
              
              <div className="automation-metrics">
                <div className="metric">
                  <span className="metric-label">Last Run</span>
                  <span className="metric-value">{automation.lastRun}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Success Rate</span>
                  <span className="metric-value success">{automation.successRate}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Total Runs</span>
                  <span className="metric-value">{automation.runs}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="templates-section">
        <h2>Available Templates</h2>
        <p className="section-description">Quick-start templates to accelerate your automation development</p>
        <div className="templates-grid">
          {templates.map((template, index) => (
            <div key={index} className="template-card">
              <div className="template-header">
                <h3>{template.name}</h3>
                <span className={`complexity-badge ${template.complexity}`}>
                  {template.complexity}
                </span>
              </div>
              <span className="template-category">{template.category}</span>
              <button className="btn-secondary">Use Template</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Icon Components
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
)

const ActiveIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

const PausedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M10 15V9M14 15V9" />
  </svg>
)
