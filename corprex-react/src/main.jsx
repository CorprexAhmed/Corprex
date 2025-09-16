import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Automations from './pages/Automations.jsx'
import N8nGuide from './pages/N8nGuide.jsx'
import Contact from './pages/Contact.jsx'
import Industries from './pages/Industries.jsx'
import News from './pages/News.jsx'
import Product from './pages/Product.jsx'
import WhyLocalAI from './pages/WhyLocalAI.jsx'
import MakeGuide from './pages/MakeGuide.jsx'
import CorprexScheduler from './pages/CorprexScheduler.jsx'
import Compliance from './pages/Compliance.jsx'
import Pricing from './pages/Pricing.jsx'
import Login from './pages/Login.jsx'
import ClientPortal from './pages/ClientPortal.jsx'
import './styles.css'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/automations', element: <Automations /> },
  { path: '/n8n-guide', element: <N8nGuide /> },
  { path: '/contact', element: <Contact /> },
  { path: '/industries', element: <Industries /> },
  { path: '/news', element: <News /> },
  { path: '/product', element: <Product /> },
  { path: '/why-local-ai', element: <WhyLocalAI /> },
  { path: '/make-guide', element: <MakeGuide /> },
  { path: '/scheduler', element: <CorprexScheduler /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/compliance', element: <Compliance /> },
  { path: '/login', element: <Login /> },
  { path: '/portal', element: <ProtectedRoute><ClientPortal /></ProtectedRoute> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)


