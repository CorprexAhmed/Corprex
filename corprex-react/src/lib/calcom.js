export function injectCalStyles() {
  if (document.getElementById('calcom-custom-style')) return
  const style = document.createElement('style')
  style.id = 'calcom-custom-style'
  style.textContent = `
    .cal-embed {
      --cal-bg-color: #0a0a0a !important;
      --cal-bg-subtle: #1a1a1a !important;
      --cal-bg-muted: #2a2a2a !important;
      --cal-bg-emphasis: #333333 !important;
      --cal-border-color: #333333 !important;
      --cal-border-subtle: #2a2a2a !important;
      --cal-border-booker: #333333 !important;
      --cal-text-color: #ffffff !important;
      --cal-text-subtle: #cccccc !important;
      --cal-text-muted: #999999 !important;
      --cal-text-emphasis: #ffffff !important;
      --cal-brand-color: #ffffff !important;
      --cal-brand-text-color: #000000 !important;
      --cal-bg-dark-error: #ff4444 !important;
      --cal-bg-success: #4CAF50 !important;
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    }
    #calcom-embed iframe { width: 100% !important; height: 100% !important; border: none !important; border-radius: 8px; background: #0a0a0a; }
    .cal-embed * { font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important; }
    .cal-embed .booking-confirmed { background: #1a1a1a !important; border: 1px solid #333333 !important; }
    @media (max-width: 768px) { #calcom-embed { height: 500px !important; } }
    @media (max-width: 480px) { #calcom-embed { height: 450px !important; } }
  `
  document.head.appendChild(style)
}

export function ensureCalEmbed() {
  return new Promise((resolve) => {
    if (window.Cal && typeof window.Cal === 'function') return resolve()
    // Ensure CSS
    if (!document.querySelector('link[href^="https://app.cal.com/embed/embed.css"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://app.cal.com/embed/embed.css'
      document.head.appendChild(link)
    }
    // Ensure script
    let script = document.querySelector('script[src^="https://app.cal.com/embed/embed.js"]')
    if (!script) {
      script = document.createElement('script')
      script.src = 'https://app.cal.com/embed/embed.js'
      script.async = true
      document.head.appendChild(script)
    }
    const start = Date.now()
    const check = () => {
      if (window.Cal && typeof window.Cal === 'function') return resolve()
      if (Date.now() - start > 8000) return resolve() // give up but avoid blocking
      setTimeout(check, 100)
    }
    check()
  })
}

export async function mountInlineCal({ selector = '#calcom-embed', calLink = 'corprex/firstlook', config = {} } = {}) {
  injectCalStyles()
  await ensureCalEmbed()
  if (window.Cal) {
    window.Cal('inline', {
      elementOrSelector: selector,
      calLink,
      config: { theme: 'dark', ...config },
    })
  }
}

export function attachBookingListener(onConfirmed) {
  const handler = (e) => {
    if (e.origin !== 'https://cal.com' && e.origin !== 'https://app.cal.com') return
    if (e.data && e.data.type === 'booking_confirmed') {
      try { onConfirmed?.(e.data) } catch (_) {}
    }
  }
  window.addEventListener('message', handler)
  return () => window.removeEventListener('message', handler)
}


