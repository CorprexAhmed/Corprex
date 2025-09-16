import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext.jsx'

export default function PortalHeader({ onToggleSidebar }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  
  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.portal-profile-section')) {
        setShowProfileMenu(false)
      }
      if (!e.target.closest('.portal-notifications')) {
        setShowNotifications(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const notifications = [
    { id: 1, type: 'info', message: 'New automation package available', time: '2 hours ago', unread: true },
    { id: 2, type: 'success', message: 'Payment processed successfully', time: '1 day ago', unread: false },
    { id: 3, type: 'warning', message: 'API rate limit approaching', time: '2 days ago', unread: false }
  ]

  return (
    <header className="portal-compact-header">
      <div className="portal-header-container">
        {/* Logo + Controls */}
        <div className="portal-brand">
          <button className="portal-icon-btn menu-toggle" title="Menu" onClick={onToggleSidebar}>
            <MenuIcon />
          </button>
          <img 
            src="/corprex-logo.png" 
            alt="Corprex Logo" 
            className="portal-logo-img"
            style={{ 
              width: '32px', 
              height: '32px', 
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)'
            }}
          />
          <span className="portal-brand-text" style={{ color: '#ffffff', fontWeight: '600' }}>Corprex</span>
        </div>

        {/* Center Search - More subtle */}
        <div className={`portal-search-compact ${searchFocused ? 'focused' : ''}`}>
          <SearchIcon />
          <input 
            type="text" 
            placeholder="Search..." 
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <kbd className="search-shortcut">⌘K</kbd>
        </div>

        {/* Right Actions - Streamlined */}
        <div className="portal-actions-compact">
          <button className="portal-icon-btn" title="Help & Documentation">
            <HelpIcon />
          </button>
          
          <div className="portal-notifications">
            <button 
              className="portal-icon-btn has-badge"
              onClick={(e) => {
                e.stopPropagation()
                setShowNotifications(!showNotifications)
              }}
            >
              <BellIcon />
              {notifications.some(n => n.unread) && <span className="icon-badge"></span>}
            </button>

            {showNotifications && (
              <div className="notifications-dropdown">
                <div className="notifications-header">
                  <h3>Notifications</h3>
                  <button className="mark-all-read">Mark all read</button>
                </div>
                <div className="notifications-list">
                  {notifications.map(notif => (
                    <div key={notif.id} className={`notification-item ${notif.unread ? 'unread' : ''}`}>
                      <div className={`notif-icon ${notif.type}`}>
                        {notif.type === 'info' && <InfoIcon />}
                        {notif.type === 'success' && <CheckIcon />}
                        {notif.type === 'warning' && <AlertIcon />}
                      </div>
                      <div className="notif-content">
                        <p>{notif.message}</p>
                        <span className="notif-time">{notif.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="notifications-footer">
                  <button className="view-all-notifs">View all notifications</button>
                </div>
              </div>
            )}
          </div>

          <div className="portal-profile-section">
            <button 
              className="portal-user-compact"
              onClick={(e) => {
                e.stopPropagation()
                setShowProfileMenu(!showProfileMenu)
              }}
            >
              <div className="user-avatar-compact">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <ChevronIcon className={showProfileMenu ? 'rotated' : ''} />
            </button>

            {showProfileMenu && (
              <div className="profile-dropdown-compact">
                <div className="profile-dropdown-user">
                  <div className="profile-user-avatar">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                  <div className="profile-user-info">
                    <div className="profile-user-name">{user?.name || 'User'}</div>
                    <div className="profile-user-email">{user?.email || 'email@company.com'}</div>
                  </div>
                </div>
                
                <div className="profile-dropdown-menu">
                  <button className="profile-menu-item">
                    <UserIcon />
                    <span>Profile Settings</span>
                  </button>
                  <button className="profile-menu-item">
                    <BillingIcon />
                    <span>Billing</span>
                  </button>
                  <button className="profile-menu-item">
                    <PreferencesIcon />
                    <span>Preferences</span>
                  </button>
                </div>
                
                <div className="profile-dropdown-footer">
                  <button className="profile-menu-item logout" onClick={handleLogout}>
                    <LogoutIcon />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

// Icon Components
const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

/* collapse/expand removed for hamburger-only UX */
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
)

const HelpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
  </svg>
)

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
  </svg>
)

const ChevronIcon = ({ className }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
)

const BillingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
)

const SecurityIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l-10 5v7c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
  </svg>
)

const PreferencesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 1.54l4.24 4.24M21 12h-6m-6 0H3" />
  </svg>
)

const LogoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
  </svg>
)

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const AlertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" />
  </svg>
)
