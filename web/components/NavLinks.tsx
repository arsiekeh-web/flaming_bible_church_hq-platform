'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/sermons', label: 'Watch & Listen' },
  { href: '/events', label: 'Events' },
  { href: '/fellowship', label: 'Fellowship' },
]

export default function NavLinks() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  // Home is exact-match; other links are active for their sub-pages too
  // (e.g. /about/bishop-koroma keeps "About" highlighted).
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/'))

  return (
    <>
      {/* Desktop links — hidden on mobile via .nav-links CSS */}
      <div className="nav-links">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? 'page' : undefined}>
            {l.label}
          </Link>
        ))}
      </div>

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
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} aria-current={isActive(l.href) ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
