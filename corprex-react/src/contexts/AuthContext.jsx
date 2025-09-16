import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in (e.g., from localStorage)
    const storedAuth = localStorage.getItem('corprex_auth')
    if (storedAuth) {
      const authData = JSON.parse(storedAuth)
      setIsAuthenticated(true)
      setUser(authData.user)
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    // In a real app, this would make an API call
    // For demo purposes, we'll simulate authentication
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Demo credentials
        if (email === 'demo@corprex.com' && password === 'demo123') {
          const userData = {
            email: email,
            name: 'John Smith',
            company: 'Acme Corporation',
            plan: 'Enterprise',
            accountId: 'ACC-2024-1847'
          }
          setIsAuthenticated(true)
          setUser(userData)
          localStorage.setItem('corprex_auth', JSON.stringify({ user: userData }))
          resolve({ success: true })
        } else {
          reject({ message: 'Invalid email or password' })
        }
      }, 1000)
    })
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem('corprex_auth')
  }

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
