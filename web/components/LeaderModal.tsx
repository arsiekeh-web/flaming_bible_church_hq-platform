'use client'

import { useState } from 'react'
import Image from 'next/image'

export type BioBlock = { heading?: string; text: string }
export type Leader = {
  name: string
  role: string
  bio: string | BioBlock[]
  photo?: string
}

function getPreviewText(bio: string | BioBlock[]): string {
  const raw = typeof bio === 'string' ? bio : bio.map((b) => b.text).join(' ')
  return raw.length > 160 ? raw.slice(0, 160).trimEnd() + '…' : raw
}

export function LeaderCard({ leader, photo }: { leader: Leader; photo?: string }) {
  const [open, setOpen] = useState(false)
  const preview = getPreviewText(leader.bio)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="card"
        style={{
          padding: 24,
          textAlign: 'left',
          width: '100%',
          background: 'var(--cream)',
          cursor: 'pointer',
        }}
      >
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
          {leader.role}
        </div>
        <h3 style={{ fontSize: 18, marginBottom: 10 }}>{leader.name}</h3>
        <p style={{ fontSize: 13.5, lineHeight: 1.7, color: 'var(--gray)', marginBottom: 12 }}>{preview}</p>
        <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--crimson)' }}>Read full bio →</span>
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(6,28,74,0.72)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              width: '100%',
              maxWidth: 560,
              maxHeight: '85vh',
              overflowY: 'auto',
              borderRadius: '16px 16px 0 0',
              padding: 28,
              position: 'relative',
            }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'var(--line)',
                width: 32,
                height: 32,
                borderRadius: '50%',
                fontSize: 16,
                color: 'var(--ink)',
              }}
            >
              ✕
            </button>

            {photo && (
              <div style={{ position: 'relative', width: 84, height: 84, borderRadius: '50%', overflow: 'hidden', marginBottom: 16 }}>
                <Image src={photo} alt={leader.name} fill style={{ objectFit: 'cover' }} />
              </div>
            )}

            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
              {leader.role}
            </div>
            <h2 style={{ fontSize: 22, marginBottom: 16, paddingRight: 30 }}>{leader.name}</h2>

            {typeof leader.bio === 'string' ? (
              <p style={{ fontSize: 14.5, lineHeight: 1.8, color: 'var(--ink)' }}>{leader.bio}</p>
            ) : (
              leader.bio.map((block, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  {block.heading && (
                    <h3 style={{ fontSize: 15, color: 'var(--crimson)', marginBottom: 6 }}>{block.heading}</h3>
                  )}
                  <p style={{ fontSize: 14.5, lineHeight: 1.8, color: 'var(--ink)' }}>{block.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  )
          }
