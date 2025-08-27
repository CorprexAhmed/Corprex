import React, { useEffect, useRef, useState } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function Automations() {
  const [activeIndustry, setActiveIndustry] = useState(null)
  const containersRef = useRef({})

  useEffect(() => {
    // Default to first industry on mount
    setActiveIndustry('law')
  }, [])

  useEffect(() => {
    // Scroll into view when activeIndustry changes
    if (activeIndustry && containersRef.current[activeIndustry]) {
      containersRef.current[activeIndustry].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [activeIndustry])

  const handleSelect = (industry) => (e) => {
    e.preventDefault()
    setActiveIndustry(industry)
  }

  return (
    <>
      <Nav logoWeight={600} />
      <div className="main-content">
        <div className="page-header">
          <h1>Industry-Specific Automation Solutions</h1>
          <p>Select your industry to explore detailed automation examples tailored to your field's unique challenges and requirements</p>
        </div>

        <div className="industry-selector">
          <button className={`industry-btn ${activeIndustry === 'law' ? 'active' : ''}`} onClick={handleSelect('law')}>
            <div className="industry-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8L8 14V18H32V14L20 8Z" stroke="white" strokeWidth="1.5"/>
                <rect x="10" y="18" width="2" height="10" fill="white"/>
                <rect x="19" y="18" width="2" height="10" fill="white"/>
                <rect x="28" y="18" width="2" height="10" fill="white"/>
                <rect x="6" y="28" width="28" height="2" fill="white"/>
                <path d="M20 5V8" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="industry-name">Law</div>
          </button>

          <button className={`industry-btn ${activeIndustry === 'government' ? 'active' : ''}`} onClick={handleSelect('government')}>
            <div className="industry-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L6 12V14H34V12L20 6Z" stroke="white" strokeWidth="1.5"/>
                <rect x="8" y="14" width="3" height="12" fill="white"/>
                <rect x="14" y="14" width="3" height="12" fill="white"/>
                <rect x="23" y="14" width="3" height="12" fill="white"/>
                <rect x="29" y="14" width="3" height="12" fill="white"/>
                <rect x="4" y="26" width="32" height="3" fill="white"/>
                <rect x="4" y="29" width="32" height="2" fill="white"/>
              </svg>
            </div>
            <div className="industry-name">Government</div>
          </button>

          <button className={`industry-btn ${activeIndustry === 'healthcare' ? 'active' : ''}`} onClick={handleSelect('healthcare')}>
            <div className="industry-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="16" y="8" width="8" height="24" rx="1" fill="white"/>
                <rect x="8" y="16" width="24" height="8" rx="1" fill="white"/>
              </svg>
            </div>
            <div className="industry-name">Healthcare</div>
          </button>

          <button className={`industry-btn ${activeIndustry === 'finance' ? 'active' : ''}`} onClick={handleSelect('finance')}>
            <div className="industry-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="16" width="24" height="16" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M12 16V14C12 11 14 8 20 8C26 8 28 11 28 14V16" stroke="white" strokeWidth="1.5"/>
                <circle cx="20" cy="24" r="3" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M20 24V26" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="industry-name">Finance</div>
          </button>

          <button className={`industry-btn ${activeIndustry === 'manufacturing' ? 'active' : ''}`} onClick={handleSelect('manufacturing')}>
            <div className="industry-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="18" width="10" height="14" stroke="white" strokeWidth="1.5" fill="none"/>
                <rect x="16" y="14" width="8" height="18" stroke="white" strokeWidth="1.5" fill="none"/>
                <rect x="24" y="10" width="10" height="22" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M8 18V12L11 8L14 12V18" stroke="white" strokeWidth="1.5"/>
                <path d="M26 10V6L29 4L32 6V10" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="industry-name">Manufacturing</div>
          </button>

          <button className={`industry-btn ${activeIndustry === 'retail' ? 'active' : ''}`} onClick={handleSelect('retail')}>
            <div className="industry-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12L8 20H32L30 12" stroke="white" strokeWidth="1.5"/>
                <path d="M8 20V30C8 31 9 32 10 32H30C31 32 32 31 32 30V20" stroke="white" strokeWidth="1.5"/>
                <path d="M14 12V10C14 8 16 6 20 6C24 6 26 8 26 10V12" stroke="white" strokeWidth="1.5"/>
                <rect x="16" y="24" width="8" height="4" fill="white"/>
              </svg>
            </div>
            <div className="industry-name">Retail</div>
          </button>
        </div>

        {/* Industry sections content copied structurally to match original.
            For brevity in this edit, we mount the original HTML from public and keep styles identical.
        */}
        <IndustrySections activeIndustry={activeIndustry} containersRef={containersRef} />
      </div>
      <Footer />
    </>
  )
}

function IndustrySections({ activeIndustry, containersRef }) {
  const [html, setHtml] = useState('')
  useEffect(() => {
    fetch('/automations.html')
      .then((r) => r.text())
      .then((text) => {
        // Extract only the automations containers' HTML from the original file
        const parser = new DOMParser()
        const doc = parser.parseFromString(text, 'text/html')
        const containers = doc.querySelectorAll('.automations-container')
        const wrapper = document.createElement('div')
        containers.forEach((c) => wrapper.appendChild(c.cloneNode(true)))
        setHtml(wrapper.innerHTML)
      })
      .catch(() => setHtml(''))
  }, [])

  useEffect(() => {
    // After injecting, connect refs and show/hide like original
    const root = document.getElementById('auto-root')
    if (!root) return
    const nodes = root.querySelectorAll('.automations-container')
    nodes.forEach((node) => {
      const id = node.id?.replace('-automations', '')
      containersRef.current[id] = node
      if (activeIndustry && id === activeIndustry) node.classList.add('active')
      else node.classList.remove('active')
    })
  }, [html, activeIndustry])

  return <div id="auto-root" dangerouslySetInnerHTML={{ __html: html }} />
}


