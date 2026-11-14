'use client'

import { useState } from 'react'

// Click-to-load map: nothing from Google loads until the visitor asks for it.
// Saves mobile data, avoids third-party requests/cookies on every visit, and
// keeps the page fast. A plain "Get Directions" link sits beside it as the
// primary, always-available route.
export default function MapEmbed({ src, title, height = 220 }: { src: string; title: string; height?: number }) {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <iframe
        title={title}
        src={src}
        height={height}
        style={{ border: 0, display: 'block', width: '100%' }}
        referrerPolicy="no-referrer-when-downgrade"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Load interactive map: ${title}`}
      style={{
        width: '100%',
        height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 16,
        cursor: 'pointer',
        color: '#fff',
        textAlign: 'center',
        background:
          'linear-gradient(rgba(6,28,74,0.55), rgba(6,28,74,0.8)), repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, rgba(255,255,255,0.07) 0 1px, transparent 1px 28px), var(--navy)',
      }}
    >
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Z"
          fill="var(--gold)"
          stroke="var(--gold-light)"
          strokeWidth="1.2"
        />
        <circle cx="12" cy="9" r="2.6" fill="var(--navy-deep)" />
      </svg>
      <span style={{ fontWeight: 600, fontSize: 14.5 }}>Tap to load the map</span>
      <span style={{ fontSize: 12, color: '#cfd8ee' }}>Loads Google Maps · uses a little mobile data</span>
    </button>
  )
}
