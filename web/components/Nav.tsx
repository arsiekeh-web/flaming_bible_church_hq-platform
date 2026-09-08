import Link from 'next/link'
import Image from 'next/image'
import NavLinks from './NavLinks'

export default function Nav() {
  return (
    <div className="nav">
      <Link href="/" className="nav-brand">
        <Image src="/logo.png" alt="Flaming Bible Church HQ crest" width={40} height={40} style={{ objectFit: 'contain', flexShrink: 0 }} />
        <div>
          <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 15, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Flaming Bible Church HQ
          </div>
          <div style={{ fontSize: 10, color: 'var(--gray)', letterSpacing: '0.02em' }}>
            Flaming Evangelical Ministries International
          </div>
        </div>
      </Link>

      <NavLinks />
    </div>
  )
}
