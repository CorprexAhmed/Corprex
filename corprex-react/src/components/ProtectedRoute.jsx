import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    // Show loading spinner while checking auth status
    return (
      <div className="auth-loading">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    )
  }

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />
  }

  return children
}
