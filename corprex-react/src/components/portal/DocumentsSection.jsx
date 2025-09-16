import React from 'react'

export default function DocumentsSection() {
  const documents = [
    { name: 'Service Agreement 2024.pdf', size: '2.4 MB', modified: 'Dec 1, 2024', type: 'contract' },
    { name: 'API Documentation.pdf', size: '8.1 MB', modified: 'Nov 28, 2024', type: 'technical' },
    { name: 'Security Compliance Report.pdf', size: '1.8 MB', modified: 'Nov 15, 2024', type: 'compliance' },
    { name: 'Implementation Guide.pdf', size: '4.2 MB', modified: 'Nov 10, 2024', type: 'guide' }
  ]

  return (
    <div className="documents-section">
      <div className="section-header">
        <h1>Documents & Resources</h1>
        <button className="btn-primary">Upload Document</button>
      </div>
      
      <div className="documents-grid">
        {documents.map((doc, index) => (
          <div key={index} className="document-card">
            <div className="document-icon">
              <FileIcon />
            </div>
            <div className="document-info">
              <h3>{doc.name}</h3>
              <div className="document-meta">
                <span>{doc.size}</span>
                <span>Modified {doc.modified}</span>
              </div>
            </div>
            <button className="download-btn">
              <DownloadIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

const FileIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
)
