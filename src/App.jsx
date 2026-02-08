import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import WhyLocalAI from './pages/WhyLocalAI'
import News from './pages/News'
import IntegrationsPage from './pages/IntegrationsPage'
import IntegrationCategoryPage from './pages/IntegrationCategoryPage'
import PrivateSearchPage from './pages/PrivateSearchPage'
import MCPServersPage from './pages/MCPServersPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why-local-ai" element={<WhyLocalAI />} />
          <Route path="/news" element={<News />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/integrations/:slug" element={<IntegrationCategoryPage />} />
          <Route path="/private-search" element={<PrivateSearchPage />} />
          <Route path="/mcp-servers" element={<MCPServersPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
