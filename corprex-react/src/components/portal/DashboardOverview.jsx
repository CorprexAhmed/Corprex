import React from 'react'

export default function DashboardOverview({ companyData, setActiveSection }) {
  const stats = [
    { label: 'Active Automations', value: '24', change: '+12%', positive: true },
    { label: 'Support Tickets', value: '3', change: '-25%', positive: true },
    { label: 'Current Plan', value: 'Enterprise', change: 'Active', positive: true },
    { label: 'Next Billing', value: 'Dec 15', change: '30 days', positive: true }
  ]

  const recentActivity = [
    { action: 'Automation deployed', details: 'Customer onboarding workflow v2.1', time: '2 hours ago', status: 'success' },
    { action: 'Invoice paid', details: 'Invoice #INV-2024-0847', time: '1 day ago', status: 'success' },
    { action: 'Support ticket resolved', details: 'Ticket #SUP-2024-1234', time: '3 days ago', status: 'success' },
    { action: 'Documentation updated', details: 'API integration guide', time: '5 days ago', status: 'info' },
    { action: 'Automation failed', details: 'Data sync workflow', time: '1 week ago', status: 'error' }
  ]

  const upcomingTasks = [
    { task: 'Subscription renewal', date: 'Dec 15, 2024', priority: 'high' },
    { task: 'Quarterly business review', date: 'Dec 20, 2024', priority: 'medium' },
    { task: 'Automation maintenance window', date: 'Dec 22, 2024', priority: 'low' }
  ]

  return (
    <div className="dashboard-overview">
      <div className="dashboard-header">
        <div>
          <h1>Welcome back, {companyData.primaryContact}</h1>
          <p className="dashboard-subtitle">Here's what's happening with your Corprex account</p>
        </div>
        <div className="dashboard-actions">
          <button className="btn-secondary">Download Report</button>
          <button className="btn-primary">Quick Actions</button>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-header">
              <span className="stat-label">{stat.label}</span>
              <span className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                {stat.change}
              </span>
            </div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Recent Activity</h2>
            <button className="link-button">View All</button>
          </div>
          <div className="activity-list">
            {recentActivity.map((item, index) => (
              <div key={index} className="activity-item">
                <div className={`activity-indicator ${item.status}`}></div>
                <div className="activity-content">
                  <div className="activity-main">
                    <span className="activity-action">{item.action}</span>
                    <span className="activity-time">{item.time}</span>
                  </div>
                  <span className="activity-details">{item.details}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-section">
          <div className="section-header">
            <h2>Upcoming Tasks</h2>
            <button className="link-button">Manage</button>
          </div>
          <div className="tasks-list">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="task-item">
                <div className={`task-priority ${task.priority}`}></div>
                <div className="task-content">
                  <span className="task-name">{task.task}</span>
                  <span className="task-date">{task.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="quick-links">
            <h3>Quick Access</h3>
            <div className="links-grid">
              <button onClick={() => setActiveSection && setActiveSection('automations')} className="quick-link">
                <AutomationIcon />
                <span>Automations</span>
              </button>
              <button onClick={() => setActiveSection && setActiveSection('billing')} className="quick-link">
                <BillingIcon />
                <span>Billing</span>
              </button>
              <button onClick={() => setActiveSection && setActiveSection('support')} className="quick-link">
                <SupportIcon />
                <span>Support</span>
              </button>
              <button onClick={() => setActiveSection && setActiveSection('documents')} className="quick-link">
                <DocumentIcon />
                <span>Documentation</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

// Icon Components
const AutomationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const BillingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
)

const SupportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <circle cx="12" cy="17" r="0.5" />
  </svg>
)

const DocumentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
)

const GuideIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)

const StatusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
)

const ContactIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)
