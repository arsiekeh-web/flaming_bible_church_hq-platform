import Link from 'next/link'
import Image from 'next/image'
import NavLinks from './NavLinks'

export default function Nav() {
  return (
    <div className="nav">
      <Link href="/" className="nav-brand">
        <Image src="/logo.png" alt="Flaming Evangelical Ministries HQ crest" width={40} height={40} style={{ objectFit: 'contain', flexShrink: 0 }} />
        <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 15, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
          Flaming Evangelical Ministries HQ
        </div>
      </Link>

      <NavLinks />
    </div>
  )
}
