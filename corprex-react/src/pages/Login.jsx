import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx'
import HeadMeta from '../components/HeadMeta.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  const navigate = useNavigate()
  const { login } = useAuth()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      await login(email, password)
      navigate('/portal')
    } catch (err) {
      setError(err.message || 'An error occurred during login')
    } finally {
      setIsLoading(false)
    }
  }

  // Responsive check
  const isMobile = window.innerWidth <= 640
  const isTablet = window.innerWidth <= 1024

  // Styles
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      padding: '1rem',
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.05,
      background: `
        radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%),
        radial-gradient(circle at 40% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)
      `,
      pointerEvents: 'none'
    },
    card: {
      background: '#ffffff',
      borderRadius: isMobile ? '16px' : '24px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
      padding: isMobile ? '1rem' : isTablet ? '1.5rem' : '2rem',
      paddingTop: isMobile ? '0.5rem' : '0.75rem',
      width: '100%',
      maxWidth: '520px',
      position: 'relative',
      border: '1px solid #e5e5e5',
      transform: mounted ? 'translateY(0)' : 'translateY(20px)',
      opacity: mounted ? 1 : 0,
      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      margin: isMobile ? '0 0.5rem' : '0'
    },
    logoSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.25rem'
    },
    logoImage: {
      width: isMobile ? '180px' : '200px',
      height: isMobile ? '180px' : '200px',
      objectFit: 'contain'
    },
    header: {
      textAlign: 'center',
      marginBottom: '1rem'
    },
    title: {
      fontSize: isMobile ? '1.5rem' : '1.75rem',
      fontWeight: '700',
      color: '#000000',
      marginBottom: '0.5rem'
    },
    subtitle: {
      fontSize: isMobile ? '0.875rem' : '0.95rem',
      color: '#666666'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.875rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.375rem'
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#333333'
    },
    inputWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    inputIcon: {
      position: 'absolute',
      left: '1rem',
      color: '#999999',
      pointerEvents: 'none',
      zIndex: 1
    },
    input: {
      width: '100%',
      padding: '0.875rem 3rem',
      fontSize: '0.95rem',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      outline: 'none',
      transition: 'all 0.3s ease',
      backgroundColor: '#fafafa'
    },
    inputFocus: {
      borderColor: '#000000',
      backgroundColor: '#ffffff',
      boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.1)'
    },
    passwordToggle: {
      position: 'absolute',
      right: '1rem',
      background: 'none',
      border: 'none',
      color: '#999999',
      cursor: 'pointer',
      padding: '0.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '6px',
      transition: 'all 0.2s ease'
    },
    formOptions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '0.5rem'
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.875rem',
      color: '#666666',
      cursor: 'pointer'
    },
    checkbox: {
      width: '18px',
      height: '18px',
      cursor: 'pointer',
      accentColor: '#000000'
    },
    forgotLink: {
      fontSize: '0.875rem',
      color: '#333333',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'color 0.2s ease'
    },
    submitButton: {
      marginTop: '1rem',
      padding: '1rem',
      fontSize: '1rem',
      fontWeight: '600',
      color: 'white',
      background: '#000000',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      position: 'relative',
      overflow: 'hidden'
    },
    submitButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      background: '#333333'
    },
    submitButtonDisabled: {
      opacity: 0.7,
      cursor: 'not-allowed'
    },
    footer: {
      textAlign: 'center',
      fontSize: '0.875rem',
      color: '#666666',
      marginTop: '1rem'
    },
    footerLink: {
      color: '#000000',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'color 0.2s ease'
    },
    footerLinks: {
      marginTop: '0.75rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem'
    },
    errorMessage: {
      background: '#ffebee',
      color: '#c62828',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      fontSize: '0.875rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem'
    }
  }

  return (
    <>
      <HeadMeta 
        title="Client Login | Corprex" 
        description="Access your Corprex client portal to manage your account, billing, and services." 
      />
      
      <div style={styles.container}>
        <div style={styles.backgroundPattern}></div>
        
        <div style={styles.card}>
          <div style={styles.logoSection}>
            <img 
              src="/corprex-logo.png" 
              alt="Corprex" 
              style={styles.logoImage}
            />
          </div>
          
          <div style={styles.header}>
            <h2 style={styles.title}>Welcome Back</h2>
            <p style={styles.subtitle}>Sign in to access your client portal</p>
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            {error && (
              <div style={styles.errorMessage}>
                <ErrorIcon />
                <span>{error}</span>
              </div>
            )}

            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email Address</label>
              <div style={styles.inputWrapper}>
                <div style={styles.inputIcon}>
                  <EmailIcon />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                  style={styles.input}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#000000'
                    e.target.style.backgroundColor = '#ffffff'
                    e.target.style.boxShadow = '0 0 0 3px rgba(0, 0, 0, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e0e0e0'
                    e.target.style.backgroundColor = '#fafafa'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>Password</label>
              <div style={styles.inputWrapper}>
                <div style={styles.inputIcon}>
                  <LockIcon />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                  style={styles.input}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#000000'
                    e.target.style.backgroundColor = '#ffffff'
                    e.target.style.boxShadow = '0 0 0 3px rgba(0, 0, 0, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e0e0e0'
                    e.target.style.backgroundColor = '#fafafa'
                    e.target.style.boxShadow = 'none'
                  }}
                />
                <button
                  type="button"
                  style={styles.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <div style={styles.formOptions}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={styles.checkbox}
                />
                <span>Remember me</span>
              </label>
              <a 
                href="#" 
                style={styles.forgotLink}
                onMouseEnter={(e) => e.target.style.color = '#666666'}
                onMouseLeave={(e) => e.target.style.color = '#333333'}
              >
                Forgot password?
              </a>
            </div>

            <button 
              type="submit" 
              style={{
                ...styles.submitButton,
                ...(isLoading && styles.submitButtonDisabled)
              }}
              disabled={isLoading}
              onMouseEnter={(e) => !isLoading && Object.assign(e.target.style, styles.submitButtonHover)}
              onMouseLeave={(e) => !isLoading && (e.target.style.transform = 'translateY(0)', e.target.style.boxShadow = 'none')}
            >
              {isLoading ? (
                <>
                  <LoadingIcon />
                  <span>Signing in...</span>
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div style={styles.footer}>
            <p>
              Don't have an account?{' '}
              <Link 
                to="/contact" 
                style={styles.footerLink}
                onMouseEnter={(e) => e.target.style.color = '#666666'}
                onMouseLeave={(e) => e.target.style.color = '#000000'}
              >
                Contact Sales
              </Link>
            </p>
            <div style={styles.footerLinks}>
              <Link 
                to="/compliance" 
                style={styles.footerLink}
                onMouseEnter={(e) => e.target.style.color = '#666666'}
                onMouseLeave={(e) => e.target.style.color = '#000000'}
              >
                Security
              </Link>
              <span style={{ color: '#cccccc' }}>•</span>
              <Link 
                to="/about" 
                style={styles.footerLink}
                onMouseEnter={(e) => e.target.style.color = '#666666'}
                onMouseLeave={(e) => e.target.style.color = '#000000'}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Icon Components
const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 5L2 7" />
  </svg>
)

const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
)

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
    <path d="M1 1l22 22" />
  </svg>
)

const ErrorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4M12 16h.01" />
  </svg>
)

const LoadingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="spinning">
    <path d="M21 12a9 9 0 11-6.219-8.56" />
  </svg>
)
