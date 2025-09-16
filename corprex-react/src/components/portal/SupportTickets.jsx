import React from 'react'

export default function SupportTickets() {
  const tickets = [
    { id: 'TKT-2024-0234', subject: 'API Rate Limit Issue', status: 'open', priority: 'high', created: '2 hours ago' },
    { id: 'TKT-2024-0233', subject: 'Automation Configuration Help', status: 'in-progress', priority: 'medium', created: '1 day ago' },
    { id: 'TKT-2024-0232', subject: 'Billing Question', status: 'resolved', priority: 'low', created: '3 days ago' }
  ]

  return (
    <div className="support-tickets">
      <div className="section-header">
        <h1>Support Tickets</h1>
        <button className="btn-primary">Create New Ticket</button>
      </div>
      
      <div className="tickets-list">
        {tickets.map(ticket => (
          <div key={ticket.id} className="ticket-card">
            <div className="ticket-header">
              <span className="ticket-id">{ticket.id}</span>
              <span className={`priority-badge ${ticket.priority}`}>{ticket.priority}</span>
            </div>
            <h3>{ticket.subject}</h3>
            <div className="ticket-meta">
              <span className={`status-badge ${ticket.status}`}>{ticket.status}</span>
              <span className="ticket-time">{ticket.created}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
