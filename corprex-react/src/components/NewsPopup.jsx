import React, { useEffect, useState } from 'react'

export default function NewsPopup() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('newsPopupClosed') === 'true') {
      setHidden(true)
    }

    const interval = setInterval(() => {
      const lastClosed = localStorage.getItem('newsPopupClosedTime')
      if (lastClosed) {
        const now = Date.now()
        const timeDiff = now - parseInt(lastClosed)
        if (timeDiff > 24 * 60 * 60 * 1000) {
          localStorage.removeItem('newsPopupClosed')
          localStorage.removeItem('newsPopupClosedTime')
          setHidden(false)
        }
      }
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  function closeNewsPopup() {
    setHidden(true)
    localStorage.setItem('newsPopupClosed', 'true')
    localStorage.setItem('newsPopupClosedTime', Date.now().toString())
  }

  return (
    <div className={`news-popup ${hidden ? 'hidden' : ''}`} id="newsPopup">
      <div className="news-popup-header">
        <span className="news-popup-badge">BREAKING</span>
        <button className="news-popup-close" onClick={closeNewsPopup}>✕</button>
      </div>
      <div className="news-popup-content">
        <p className="news-popup-message">
          <strong>Major enterprises facing data breaches and soaring AI costs.</strong>
          See why Fortune 500 companies are switching to private AI infrastructure.
        </p>
      </div>
      <a href="/news" className="news-popup-link">Read Latest News →</a>
    </div>
  )
}


