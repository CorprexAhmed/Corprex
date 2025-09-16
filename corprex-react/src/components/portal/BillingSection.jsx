import React, { useState } from 'react'

export default function BillingSection() {
  const [selectedPeriod, setSelectedPeriod] = useState('all')
  
  const billingInfo = {
    nextBillDate: 'December 15, 2024',
    nextBillAmount: '$4,999.00',
    paymentMethod: '**** **** **** 4242',
    billingEmail: 'billing@acme.com'
  }

  const invoices = [
    { id: 'INV-2024-0847', date: 'Nov 15, 2024', amount: '$4,999.00', status: 'paid', downloadUrl: '#' },
    { id: 'INV-2024-0798', date: 'Oct 15, 2024', amount: '$4,999.00', status: 'paid', downloadUrl: '#' },
    { id: 'INV-2024-0745', date: 'Sep 15, 2024', amount: '$4,999.00', status: 'paid', downloadUrl: '#' },
    { id: 'INV-2024-0692', date: 'Aug 15, 2024', amount: '$4,999.00', status: 'paid', downloadUrl: '#' },
    { id: 'INV-2024-0641', date: 'Jul 15, 2024', amount: '$4,999.00', status: 'paid', downloadUrl: '#' },
    { id: 'INV-2024-0589', date: 'Jun 15, 2024', amount: '$4,999.00', status: 'paid', downloadUrl: '#' }
  ]

  const paymentMethods = [
    { id: 1, type: 'card', last4: '4242', brand: 'Visa', expiry: '12/25', isDefault: true },
    { id: 2, type: 'card', last4: '5555', brand: 'Mastercard', expiry: '08/26', isDefault: false },
    { id: 3, type: 'bank', last4: '6789', bank: 'Chase', accountType: 'Checking', isDefault: false }
  ]

  return (
    <div className="billing-section">
      <div className="section-header">
        <h1>Billing & Invoices</h1>
        <div className="header-actions">
          <button className="btn-secondary">Export Invoices</button>
          <button className="btn-primary">Update Billing Info</button>
        </div>
      </div>

      <div className="billing-overview">
        <div className="billing-card">
          <div className="billing-card-header">
            <h3>Current Billing Cycle</h3>
            <span className="status-badge active">Active</span>
          </div>
          <div className="billing-details">
            <div className="billing-row">
              <span className="billing-label">Next billing date</span>
              <span className="billing-value">{billingInfo.nextBillDate}</span>
            </div>
            <div className="billing-row">
              <span className="billing-label">Amount due</span>
              <span className="billing-value amount">{billingInfo.nextBillAmount}</span>
            </div>
            <div className="billing-row">
              <span className="billing-label">Payment method</span>
              <span className="billing-value">{billingInfo.paymentMethod}</span>
            </div>
            <div className="billing-row">
              <span className="billing-label">Billing email</span>
              <span className="billing-value">{billingInfo.billingEmail}</span>
            </div>
          </div>
        </div>

        <div className="billing-card">
          <h3>Billing Summary</h3>
          <div className="summary-stats">
            <div className="summary-stat">
              <span className="stat-label">Total YTD</span>
              <span className="stat-value">$59,988.00</span>
            </div>
            <div className="summary-stat">
              <span className="stat-label">Average Monthly</span>
              <span className="stat-value">$4,999.00</span>
            </div>
            <div className="summary-stat">
              <span className="stat-label">Last Payment</span>
              <span className="stat-value">Nov 15, 2024</span>
            </div>
          </div>
          <div className="cost-breakdown">
            <h4>Cost Breakdown</h4>
            <div className="breakdown-item">
              <span>Enterprise Subscription</span>
              <span>$3,999.00</span>
            </div>
            <div className="breakdown-item">
              <span>Additional Storage (500GB)</span>
              <span>$500.00</span>
            </div>
            <div className="breakdown-item">
              <span>Premium Support</span>
              <span>$500.00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-methods-section">
        <div className="section-header">
          <h2>Payment Methods</h2>
          <button className="btn-secondary">Add Payment Method</button>
        </div>
        <div className="payment-methods-grid">
          {paymentMethods.map(method => (
            <div key={method.id} className={`payment-method-card ${method.isDefault ? 'default' : ''}`}>
              {method.isDefault && <span className="default-badge">Default</span>}
              <div className="payment-method-info">
                {method.type === 'card' ? (
                  <>
                    <CardIcon />
                    <div className="method-details">
                      <span className="method-brand">{method.brand}</span>
                      <span className="method-number">•••• {method.last4}</span>
                      <span className="method-expiry">Expires {method.expiry}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <BankIcon />
                    <div className="method-details">
                      <span className="method-brand">{method.bank}</span>
                      <span className="method-number">{method.accountType} •••• {method.last4}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="payment-method-actions">
                {!method.isDefault && <button className="link-button">Set as Default</button>}
                <button className="link-button">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="invoices-section">
        <div className="section-header">
          <h2>Invoice History</h2>
          <div className="invoice-filters">
            <select 
              value={selectedPeriod} 
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="period-select"
            >
              <option value="all">All Time</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="last90">Last 90 Days</option>
            </select>
          </div>
        </div>
        
        <div className="invoices-table">
          <table>
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map(invoice => (
                <tr key={invoice.id}>
                  <td className="invoice-id">{invoice.id}</td>
                  <td>{invoice.date}</td>
                  <td className="invoice-amount">{invoice.amount}</td>
                  <td>
                    <span className={`status-badge ${invoice.status}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="action-btn">
                        <DownloadIcon />
                        Download
                      </button>
                      <button className="action-btn">
                        <ViewIcon />
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Icon Components
const CardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" />
    <path d="M1 10h22" />
  </svg>
)

const BankIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
)

const ViewIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)
