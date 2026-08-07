'use client'

import Link from 'next/link'
import { useState } from 'react'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/events', label: 'Events' },
  { href: '/fellowship', label: 'Fellowship' },
]

export default function NavLinks({ authLink }: { authLink: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop links — hidden on mobile via .nav-links CSS */}
      <div className="nav-links">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </div>
      <div className="nav-desktop-auth">{authLink}</div>

      {/* Mobile hamburger — hidden on desktop via .nav-toggle CSS */}
      <button
        className="nav-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <div className="nav-mobile-menu">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: 8 }}>{authLink}</div>
        </div>
      )}
    </>
  )
}
