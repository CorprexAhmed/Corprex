import React, { useEffect, useRef, useState } from 'react'
import './scheduler.css'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function CorprexScheduler() {
  const [overlayOpen, setOverlayOpen] = useState(true)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const timezoneRef = useRef(null)

  useEffect(() => {
    detectTimezone()
  }, [])

  function detectTimezone() {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const selectEl = timezoneRef.current
    if (!selectEl) return
    Array.from(selectEl.options).forEach((opt) => {
      if (opt.value === userTimezone) opt.selected = true
    })
  }

  function previousMonth() {
    const d = new Date(currentDate)
    d.setMonth(d.getMonth() - 1)
    setCurrentDate(d)
  }
  function nextMonth() {
    const d = new Date(currentDate)
    d.setMonth(d.getMonth() + 1)
    setCurrentDate(d)
  }

  function selectDateHandler(date, e) {
    setSelectedDate(date)
    setSelectedTime(null)
    setShowForm(false)
  }

  function selectTimeHandler(time) {
    setSelectedTime(time)
    setTimeout(() => setShowForm(true), 300)
  }

  function closeScheduler() {
    setOverlayOpen(false)
    setSelectedDate(null)
    setSelectedTime(null)
    setShowForm(false)
  }

  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const today = new Date(); today.setHours(0,0,0,0)

  const weekdayHeaders = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  const slots = ['9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM']

  return (
    <>
      <Nav logoWeight={600} />
      <div className={`scheduler-overlay ${overlayOpen ? 'active' : ''}`} id="schedulerOverlay">
        <div className="scheduler-container">
          <button className="scheduler-close" onClick={closeScheduler}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          <div className="scheduler-sidebar">
            <img src="/corprex-logo.png" alt="Corprex" className="scheduler-logo" />
            <div className="scheduler-header">
              <h1 className="scheduler-title">Schedule Your Consultation</h1>
              <p className="scheduler-subtitle">Let's discuss how Corprex can transform your AI infrastructure</p>
            </div>
            <div className="meeting-info">
              <div className="meeting-type">
                <div className="meeting-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5Z"/></svg>
                </div>
                <div className="meeting-details">
                  <h3>Strategy Session</h3>
                  <span className="meeting-duration">45 minutes</span>
                </div>
              </div>
              <p className="meeting-description">A focused discussion about your AI needs, current challenges, and how our Omega infrastructure can deliver immediate ROI for your organization.</p>
            </div>
            <div className="timezone-selector">
              <label className="timezone-label">Time Zone</label>
              <select className="timezone-select" id="timezoneSelect" ref={timezoneRef}>
                <option value="America/New_York">Eastern Time (ET)</option>
                <option value="America/Chicago">Central Time (CT)</option>
                <option value="America/Denver">Mountain Time (MT)</option>
                <option value="America/Los_Angeles">Pacific Time (PT)</option>
                <option value="Europe/London">London (GMT)</option>
                <option value="Europe/Paris">Central European Time (CET)</option>
                <option value="Asia/Tokyo">Tokyo (JST)</option>
                <option value="Asia/Shanghai">China Standard Time (CST)</option>
              </select>
            </div>
          </div>

          <div className="scheduler-main">
            {!showForm && (
              <div id="calendarView">
                <div className="calendar-header">
                  <div className="calendar-nav">
                    <button className="calendar-nav-btn" onClick={previousMonth}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg></button>
                    <h2 className="calendar-month" id="calendarMonth">{monthNames[month]} {year}</h2>
                    <button className="calendar-nav-btn" onClick={nextMonth}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></button>
                  </div>
                </div>
                <div className="calendar-content">
                  <div className="calendar-grid">
                    <div className="calendar-weekdays">
                      {weekdayHeaders.map((w) => (<div className="weekday" key={w}>{w}</div>))}
                    </div>
                    <div className="calendar-days" id="calendarDays">
                      {Array.from({ length: firstDay }).map((_, i) => (<div className="calendar-day disabled" key={`empty-${i}`}></div>))}
                      {Array.from({ length: daysInMonth }).map((_, idx) => {
                        const day = idx + 1
                        const dayDate = new Date(year, month, day); dayDate.setHours(0,0,0,0)
                        const isPast = dayDate < today
                        const weekday = dayDate.getDay()
                        const isAvailable = weekday >= 1 && weekday <= 5
                        const isSelected = selectedDate && dayDate.getTime() === selectedDate.getTime()
                        const className = [
                          'calendar-day',
                          isPast ? 'disabled' : '',
                          isAvailable ? 'available' : '',
                          isSelected ? 'selected' : '',
                        ].filter(Boolean).join(' ')
                        return (
                          <div className={className} key={day} onClick={isPast ? undefined : (e) => selectDateHandler(dayDate, e)}>
                            <span className="day-number">{day}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="time-slots" id="timeSlots" style={{ display: selectedDate ? 'block' : 'none' }}>
                    <div className="time-slots-header">
                      <h3 className="time-slots-title">Select a time</h3>
                      <p className="selected-date" id="selectedDate">{selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : ''}</p>
                    </div>
                    <div className="time-slots-grid" id="timeSlotsGrid">
                      {slots.map((t) => (
                        <button className={`time-slot ${selectedTime === t ? 'selected' : ''}`} key={t} onClick={() => selectTimeHandler(t)}>{t}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {showForm && (
              <div className="booking-form active" id="bookingForm">
                <div className="form-header">
                  <h2 className="form-title">Enter your details</h2>
                  <p className="booking-summary" id="bookingSummary">{selectedDate && `${selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} at ${selectedTime} ${timezoneRef.current?.selectedOptions[0]?.text || ''}`}</p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); document.getElementById('loadingSpinner').classList.add('active'); setTimeout(() => { document.getElementById('loadingSpinner').classList.remove('active'); document.getElementById('bookingForm').classList.remove('active'); document.getElementById('bookingSuccess').classList.add('active'); }, 1200) }}>
                  <div className="form-grid">
                    <div className="form-group"><label className="form-label">First Name *</label><input type="text" className="form-input" required /></div>
                    <div className="form-group"><label className="form-label">Last Name *</label><input type="text" className="form-input" required /></div>
                    <div className="form-group"><label className="form-label">Email *</label><input type="email" className="form-input" required /></div>
                    <div className="form-group"><label className="form-label">Phone</label><input type="tel" className="form-input" /></div>
                    <div className="form-group full-width"><label className="form-label">Company *</label><input type="text" className="form-input" required /></div>
                    <div className="form-group full-width"><label className="form-label">What would you like to discuss?</label><textarea className="form-textarea" rows="4"></textarea></div>
                  </div>
                  <div className="form-actions">
                    <button type="button" className="btn-secondary" onClick={() => setShowForm(false)}>Back</button>
                    <button type="submit" className="btn-primary" id="submitBtn"><span id="submitText">Schedule Meeting</span></button>
                  </div>
                </form>
                <div className="loading-spinner" id="loadingSpinner"></div>
              </div>
            )}

            <div className={`booking-success ${showForm ? '' : ''}`} id="bookingSuccess">
              {/* Shown via JS when form submitted */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}


