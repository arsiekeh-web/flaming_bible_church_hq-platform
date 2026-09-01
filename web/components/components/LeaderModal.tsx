'use client'

import { useState } from 'react'
import Image from 'next/image'

export type Leader = {
  name: string
  role: string
  bio: string
  photo?: string
}

export function LeaderCard({ leader, photo }: { leader: Leader; photo?: string }) {
  const [open, setOpen] = useState(false)
  const preview = leader.bio.length > 160 ? leader.bio.slice(0, 160).trimEnd() + '…' : leader.bio

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
            <p style={{ fontSize: 14.5, lineHeight: 1.8, color: 'var(--ink)' }}>{leader.bio}</p>
          </div>
        </div>
      )}
    </>
  )
}
