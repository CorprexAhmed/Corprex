import React, { useEffect } from 'react'

export default function Modal({ isOpen, title, onClose, children }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose?.()
    }
    if (isOpen) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close" aria-label="Close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}


