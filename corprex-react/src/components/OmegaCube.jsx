import React, { useRef, useState, useEffect, useCallback } from 'react'

export default function OmegaCube() {
  const boxRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isGliding, setIsGliding] = useState(false)
  const startXRef = useRef(0)
  const startRyRef = useRef(0)
  const lastXRef = useRef(0)
  const lastTimeRef = useRef(0)
  const velocityRef = useRef(0) // deg per second around Y
  const rafIdRef = useRef(0)

  const getCurrentRy = useCallback(() => {
    const v = boxRef.current?.style.getPropertyValue('--user-ry') || '0deg'
    const match = v.match(/-?\d+(?:\.\d+)?/)
    return match ? parseFloat(match[0]) : 0
  }, [])

  const setRy = useCallback((deg) => {
    if (!boxRef.current) return
    boxRef.current.style.setProperty('--user-ry', `${deg}deg`)
  }, [])

  useEffect(() => {
    setRy(0)
    return () => cancelAnimationFrame(rafIdRef.current)
  }, [setRy])

  const cancelGlide = () => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
    rafIdRef.current = 0
    setIsGliding(false)
    velocityRef.current = 0
  }

  const onPointerDown = (e) => {
    if (!boxRef.current) return
    cancelGlide()
    boxRef.current.setPointerCapture?.(e.pointerId)
    setIsDragging(true)
    startXRef.current = e.clientX
    startRyRef.current = getCurrentRy()
    lastXRef.current = e.clientX
    lastTimeRef.current = performance.now()
  }

  const onPointerMove = (e) => {
    if (!isDragging) return
    const now = performance.now()
    const deltaX = e.clientX - startXRef.current
    const sensitivity = 0.4 // degrees per px
    const next = startRyRef.current + deltaX * sensitivity
    setRy(next)

    // compute instantaneous velocity (deg/s) using movement since last event
    const dxSinceLast = e.clientX - lastXRef.current
    const dtMs = Math.max(1, now - lastTimeRef.current)
    const vDegPerMs = dxSinceLast * sensitivity / dtMs
    velocityRef.current = Math.max(-720, Math.min(720, vDegPerMs * 1000))
    lastXRef.current = e.clientX
    lastTimeRef.current = now
  }

  const endDrag = (e) => {
    if (!isDragging) return
    setIsDragging(false)
    try { boxRef.current?.releasePointerCapture?.(e.pointerId) } catch {}

    // start glide with current velocity
    const startV = velocityRef.current
    if (Math.abs(startV) > 1) {
      setIsGliding(true)
      const friction = 2.5 // larger = stops sooner
      let lastTs = performance.now()
      const step = () => {
        const ts = performance.now()
        const dt = (ts - lastTs) / 1000
        lastTs = ts
        const ry = getCurrentRy() + velocityRef.current * dt
        setRy(ry)
        // exponential decay: v *= e^(-k*dt)
        velocityRef.current *= Math.exp(-friction * dt)
        if (Math.abs(velocityRef.current) <= 1) {
          setIsGliding(false)
          velocityRef.current = 0
          rafIdRef.current = 0
          return
        }
        rafIdRef.current = requestAnimationFrame(step)
      }
      rafIdRef.current = requestAnimationFrame(step)
    }
  }

  return (
    <div
      ref={boxRef}
      className={`omega-box${isDragging ? ' is-dragging' : ''}${isGliding ? ' is-gliding' : ''}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
    >
      <div className="omega-core">
        <div className="omega-face front">
          <img src="/corprex-logo.png" alt="Corprex Logo" className="omega-logo" />
          <div className="omega-subtext">OMEGA</div>
        </div>
        <div className="omega-face back">
          <div className="omega-logo-large">Ω</div>
        </div>
        <div className="omega-face right"></div>
        <div className="omega-face left"></div>
        <div className="omega-face top"></div>
        <div className="omega-face bottom"></div>
      </div>
    </div>
  )
}


