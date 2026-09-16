'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setRevealed(true)
      return
    }
    const timer = setTimeout(() => setRevealed(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className={`page-transition-overlay${revealed ? ' is-revealed' : ''}`} aria-hidden="true">
        <div className="page-transition-mark">
          <Image src="/icon-512.png" alt="" width={60} height={60} priority />
        </div>
      </div>
      {children}
    </>
  )
}
