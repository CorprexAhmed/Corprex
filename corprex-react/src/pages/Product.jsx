import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import './product.css'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <>
      <Nav logoWeight={600} />
      <section className="coming-soon">
        <div className="coming-soon-content">
          <h1>Product Details in Development</h1>
          <p>
            We're currently finalizing the details of our revolutionary AI infrastructure products. 
            Check back soon for comprehensive specifications, pricing, and availability.
          </p>
          <Link to="/" className="back-home">Return to Homepage</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}


