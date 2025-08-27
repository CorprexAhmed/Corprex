import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import './industries.css'
import { Link } from 'react-router-dom'

export default function Industries() {
  return (
    <>
      <Nav logoWeight={600} />
      <section className="coming-soon">
        <div className="coming-soon-content">
          <h1>Industry Solutions in Development</h1>
          <p>
            We're crafting specialized AI infrastructure solutions for your industry. 
            Our tailored approaches for legal, healthcare, finance, and government sectors will be available soon.
          </p>
          <Link to="/" className="back-home">Return to Homepage</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}


