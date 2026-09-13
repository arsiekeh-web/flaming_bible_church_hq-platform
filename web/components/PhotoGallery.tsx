'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function PhotoGallery({ photos, alt }: { photos: string[]; alt: string }) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <>
      <div
        style={{
          columnCount: 3,
          columnGap: 12,
        }}
      >
        {photos.map((src, i) => (
          <div
            key={src}
            onClick={() => setActive(src)}
            style={{
              breakInside: 'avoid',
              marginBottom: 12,
              borderRadius: 8,
              overflow: 'hidden',
              cursor: 'zoom-in',
              boxShadow: '0 3px 10px rgba(0,0,0,0.12)',
              position: 'relative',
            }}
          >
            <Image
              src={src}
              alt={`${alt} — photo ${i + 1}`}
              width={500}
              height={500}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              sizes="(max-width: 700px) 33vw, 260px"
            />
          </div>
        ))}
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(6,28,74,0.9)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              width: 40,
              height: 40,
              borderRadius: '50%',
              fontSize: 18,
            }}
          >
            ✕
          </button>
          <div style={{ position: 'relative', width: '100%', maxWidth: 900, maxHeight: '85vh' }}>
            <Image
              src={active}
              alt={alt}
              width={1200}
              height={1200}
              style={{ width: '100%', height: 'auto', maxHeight: '85vh', objectFit: 'contain', borderRadius: 6 }}
            />
          </div>
        </div>
      )}
    </>
  )
}
