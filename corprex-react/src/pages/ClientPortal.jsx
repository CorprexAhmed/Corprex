import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext.jsx'
import HeadMeta from '../components/HeadMeta.jsx'
import PortalHeader from '../components/portal/PortalHeader.jsx'
import PortalSidebar from '../components/portal/PortalSidebar.jsx'
import DashboardOverview from '../components/portal/DashboardOverview.jsx'
import BillingSection from '../components/portal/BillingSection.jsx'
import SubscriptionSection from '../components/portal/SubscriptionSection.jsx'
import AutomationPackages from '../components/portal/AutomationPackages.jsx'
import SupportTickets from '../components/portal/SupportTickets.jsx'
import DocumentsSection from '../components/portal/DocumentsSection.jsx'

export default function ClientPortal() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { user } = useAuth()
  
  const [companyData] = useState({
    name: user?.company || 'Acme Corporation',
    plan: user?.plan || 'Enterprise',
    accountId: user?.accountId || 'ACC-2024-1847',
    primaryContact: user?.name || 'John Smith',
    email: user?.email || 'john.smith@acme.com'
  })

  const renderSection = () => {
    switch(activeSection) {
      case 'dashboard':
        return <DashboardOverview companyData={companyData} setActiveSection={setActiveSection} />
      case 'billing':
        return <BillingSection />
      case 'subscription':
        return <SubscriptionSection />
      case 'automations':
        return <AutomationPackages />
      case 'support':
        return <SupportTickets />
      case 'documents':
        return <DocumentsSection />
      default:
        return <DashboardOverview companyData={companyData} setActiveSection={setActiveSection} />
    }
  }

  const getPageTitle = (section) => {
    const titles = {
      dashboard: 'Dashboard',
      billing: 'Billing',
      subscription: 'Plans & Pricing',
      automations: 'Automations',
      support: 'Support',
      documents: 'Documentation'
    }
    return titles[section] || 'Dashboard'
  }

  const getQuickStats = () => {
    return [
      { label: 'Active Automations', value: '24', trend: '+12%' },
      { label: 'Support Tickets', value: '3', trend: '-25%' },
      { label: 'Billing Status', value: 'Active', trend: null },
      { label: 'Uptime', value: '99.9%', trend: null }
    ]
  }

  // Close menu when pressing Escape
  React.useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setIsSidebarOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <HeadMeta 
        title={`${getPageTitle(activeSection)} - Corprex Portal`}
        description="Manage your Corprex services, automations, and account." 
      />
      
      <div className="portal-modern">
        <PortalHeader 
          onToggleSidebar={() => setIsSidebarOpen(v => !v)}
        />
        
        <div className="portal-layout">
          {/* Mobile overlay */}
          {isSidebarOpen && (
            <div 
              className="portal-overlay" 
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          <PortalSidebar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection}
            companyData={companyData}
            isOpen={isSidebarOpen}
            onSelectItem={() => setIsSidebarOpen(false)}
          />
          
          <main className="portal-content">
            {/* Quick Stats Bar */}
            {activeSection === 'dashboard' && (
              <div className="portal-stats-bar">
                {getQuickStats().map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                    {stat.trend && (
                      <span className={`stat-trend ${stat.trend.startsWith('+') ? 'positive' : 'negative'}`}>
                        {stat.trend}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Page Header - Simplified */}
            <div className="portal-content-header">
              <h1 className="portal-page-heading">{getPageTitle(activeSection)}</h1>
              {activeSection === 'automations' && (
                <div className="portal-actions">
                  <button className="btn-icon" title="Filter">
                    <FilterIcon />
                  </button>
                  <button className="btn-primary">
                    <PlusIcon />
                    New Automation
                  </button>
                </div>
              )}
              {activeSection === 'support' && (
                <button className="btn-primary">
                  <PlusIcon />
                  New Ticket
                </button>
              )}
            </div>

            {/* Main Content Area */}
            <div className="portal-content-body">
              {renderSection()}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

// Icon Components
const FilterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
)

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)
