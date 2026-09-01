import Link from 'next/link'
import Image from 'next/image'
import { LeaderCard } from '@/components/LeaderModal'
import { LEADERS } from '@/lib/leaders'

// Static content — no live database. Update these arrays by hand when
// something changes; there's no admin dashboard anymore.
const UPCOMING_EVENTS = [
  { id: 'reverence-5', title: 'Reverence', when: 'Annual — Ascension season', membersOnly: false },
]

export default function Home() {
  return (
    <main>
      {/* --- Hero --- */}
      <div
        style={{
          position: 'relative',
          minHeight: 420,
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Image
          src="/home-worship.jpg"
          alt="Worship at Flaming Evangelical Ministries HQ"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
          priority
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(160deg, rgba(6,28,74,0.88), rgba(74,7,9,0.82))',
          }}
        />
        <div style={{ position: 'relative', padding: '64px 48px 56px', maxWidth: 720, color: '#fff' }}>
          <div style={{ color: 'var(--gold-light)', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
            🔥 Freetown, Sierra Leone
          </div>
          <h1 style={{ fontSize: 44, lineHeight: 1.05, marginBottom: 6 }}>
            Flaming Evangelical Ministries HQ
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: 14, marginBottom: 18, fontWeight: 500 }}>
            Ascension Town, Freetown, Sierra Leone
          </p>
          <p style={{ fontFamily: 'var(--font-fraunces)', fontStyle: 'italic', color: 'var(--gold-light)', fontSize: 16, marginBottom: 28 }}>
            &ldquo;How shall they hear without a preacher?&rdquo; — Romans 10:14
          </p>
          <div style={{ display: 'flex', gap: 14 }}>
            <Link href="/sermons" className="btn btn-gold">
              Watch & Listen
            </Link>
            <Link href="#visit" className="btn btn-outline">
              Plan Your Visit
            </Link>
          </div>
        </div>
      </div>

      {/* --- Visit Us --- */}
      <div id="visit" style={{ background: 'var(--navy-deep)', padding: 48 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ color: 'var(--gold-light)', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
              📍 Visit Us
            </div>
            <h2 style={{ color: '#fff', fontSize: 24, marginBottom: 14 }}>Ascension Town, Freetown</h2>
            <p style={{ color: '#cfd8ee', fontSize: 14.5, lineHeight: 1.6 }}>
              Ascension Town Road, Ascension Town Community, Freetown, Sierra Leone
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, color: '#cfd8ee' }}>
            <ServiceTime title="Sunday · 8:00 – 8:30 AM" label="Bible Study" />
            <ServiceTime title="Sunday · 8:30 – 10:00 AM
