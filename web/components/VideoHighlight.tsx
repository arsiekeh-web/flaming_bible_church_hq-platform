'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function VideoHighlight({
  src,
  poster,
  title,
  subtitle,
}: {
  src: string
  poster: string
  title: string
  subtitle?: string
}) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4 / 3',
        borderRadius: 14,
        overflow: 'hidden',
        boxShadow: '0 16px 44px rgba(6,28,74,0.28)',
        background: '#000',
      }}
    >
      {playing ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            background: 'none',
          }}
        >
          <Image
            src={poster}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 700px) 100vw, 800px"
            priority
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(6,28,74,0.15) 0%, rgba(6,28,74,0.05) 45%, rgba(6,28,74,0.85) 100%)',
            }}
          />

          <div style={{ position: 'absolute', top: 18, left: 18, display: 'flex', gap: 8 }}>
            <span
              style={{
                display: 'inline-block',
                background: 'var(--navy-deep)',
                color: 'var(--gold-light)',
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '5px 12px',
                borderRadius: 999,
              }}
            >
              Highlights Reel
            </span>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(198,149,47,0.18)',
                border: '1px solid var(--gold-light)',
                color: 'var(--gold-light)',
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.06em',
                padding: '2px 9px',
                borderRadius: 999,
              }}
            >
              2026
            </span>
          </div>

          {/* Play button */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 76,
              height: 76,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 30%, var(--gold-light), var(--gold))',
              boxShadow: '0 0 0 8px rgba(255,255,255,0.14), 0 10px 30px rgba(0,0,0,0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                marginLeft: 6,
                borderTop: '14px solid transparent',
                borderBottom: '14px solid transparent',
                borderLeft: '22px solid var(--navy-deep)',
              }}
            />
          </div>

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 22px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                color: '#fff',
                fontSize: 22,
                marginBottom: subtitle ? 4 : 0,
                textAlign: 'left',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              }}
            >
              {title}
            </h3>
            {subtitle && (
              <p style={{ color: '#e8ecf7', fontSize: 12.5, textAlign: 'left', opacity: 0.9 }}>{subtitle}</p>
            )}
          </div>
        </button>
      )}
    </div>
  )
}
