import React from 'react'

// Shield icon for security/compliance
export const ShieldIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 7V11C4 16 7.5 20.5 12 21.5C16.5 20.5 20 16 20 11V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Lock icon for security
export const LockIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Lightning bolt for availability
export const LightningIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Check circle for processing integrity
export const CheckCircleIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Key icon for access control/confidentiality
export const KeyIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 2L19 4M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11ZM11 11L7 15L3 19L5 21L9 17L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// User icon for privacy
export const UserShieldIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 14C8 14 4 16 4 20V21H20V20C20 16 16 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Database icon for data protection
export const DatabaseIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 5V12C21 13.66 16.97 15 12 15C7.03 15 3 13.66 3 12V5" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 12V19C21 20.66 16.97 22 12 22C7.03 22 3 20.66 3 19V12" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// Network icon
export const NetworkIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2C14.5 5 14.5 9 12 12C9.5 9 9.5 5 12 2Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 22C14.5 19 14.5 15 12 12C9.5 15 9.5 19 12 22Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// Chart icon for monitoring
export const ChartIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 16L12 11L15 14L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Alert icon for incident response
export const AlertIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.29 3.86L1.82 18C1.64 18.33 1.64 18.72 1.82 19.05C2 19.38 2.34 19.58 2.72 19.58H21.28C21.66 19.58 22 19.38 22.18 19.05C22.36 18.72 22.36 18.33 22.18 18L13.71 3.86C13.53 3.53 13.19 3.33 12.81 3.33H11.19C10.81 3.33 10.47 3.53 10.29 3.86Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="16" r="0.5" fill="currentColor"/>
  </svg>
)

// Refresh icon for business continuity
export const RefreshIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 4V10H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 20V14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.49 9C19.79 6.91 18.34 5.18 16.43 4.17C14.52 3.16 12.31 2.96 10.26 3.61C8.21 4.26 6.49 5.71 5.48 7.63C4.47 9.55 4.25 11.78 4.87 13.85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.51 15C4.21 17.09 5.66 18.82 7.57 19.83C9.48 20.84 11.69 21.04 13.74 20.39C15.79 19.74 17.51 18.29 18.52 16.37C19.53 14.45 19.75 12.22 19.13 10.15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Server icon for air-gapped operation
export const ServerIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="2" y="14" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="6" cy="6" r="1" fill="currentColor"/>
    <circle cx="6" cy="18" r="1" fill="currentColor"/>
  </svg>
)

// Search icon for audit
export const SearchIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Target icon for penetration testing
export const TargetIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// Document icon for policy templates
export const DocumentIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 13H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Rocket icon for secure updates
export const RocketIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 16.5C3.5 17.5 3.5 20.5 3.5 20.5S6.5 20.5 7.5 19.5C8.5 18.5 8 17 6.5 15.5C5 14 3.5 15.5 4.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15L8 11L17 2C19 2 21 2 22 3C23 4 23 6 23 8L14 17L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L2 19L5 22L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Users icon for training programs
export const UsersIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Check icon for simple checkmarks
export const CheckIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
