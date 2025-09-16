import React, { useEffect, useState } from 'react'

// Attempts to fetch the page HTML via AllOrigins (CORS-friendly) and extract an image URL
// Priority: og:image > twitter:image > first <img>
export default function LinkPreviewImage({ url, alt }) {
  const [imgSrc, setImgSrc] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    async function load() {
      try {
        const proxied = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
        const res = await fetch(proxied)
        if (!res.ok) throw new Error(`Preview fetch failed: ${res.status}`)
        const data = await res.json()
        const parser = new DOMParser()
        const doc = parser.parseFromString(data.contents, 'text/html')
        const og = doc.querySelector('meta[property="og:image"], meta[name="og:image"]')
        const tw = doc.querySelector('meta[name="twitter:image"], meta[property="twitter:image"]')
        let src = og?.getAttribute('content') || tw?.getAttribute('content')
        if (!src) {
          const firstImg = doc.querySelector('img[src]')
          src = firstImg?.getAttribute('src') || ''
        }
        if (src && isMounted) {
          // Resolve relative URLs against the article URL
          try {
            src = new URL(src, url).toString()
          } catch (_) {}
          setImgSrc(src)
        }
      } catch (e) {
        // Fallback to site favicon
        try {
          const favicon = new URL('/favicon.ico', url).toString()
          if (isMounted) setImgSrc(favicon)
        } catch (_) {}
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    load()
    return () => { isMounted = false }
  }, [url])

  if (loading) return <div className="preview-skeleton" />
  if (!imgSrc) return null
  return <img src={imgSrc} alt={alt || ''} />
}


