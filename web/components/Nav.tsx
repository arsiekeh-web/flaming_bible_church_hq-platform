import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'
import NavLinks from './NavLinks'

// Server Component — reads the real session on every request, so the
// Login/Portal state you see is real, not a client-side illusion.
export default async function Nav() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const authLink = user ? (
    <Link href="/portal" className="btn btn-outline">
      My Portal
    </Link>
  ) : (
    <Link href="/login" className="btn btn-gold">
      Log In
    </Link>
  )

  return (
    <div className="nav">
      <Link href="/" className="nav-brand">
        <Image src="/logo.png" alt="Flaming Evangelical Ministries HQ crest" width={40} height={40} style={{ objectFit: 'contain', flexShrink: 0 }} />
        <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 15, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
          Flaming Evangelical Ministries HQ
        </div>
      </Link>

      <NavLinks authLink={authLink} />
    </div>
  )
}
