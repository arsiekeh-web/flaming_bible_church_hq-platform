import Link from 'next/link'
import Image from 'next/image'

// Static content — no live database. Update these arrays by hand when
// something changes; there's no admin dashboard anymore.
const UPCOMING_EVENTS = [
  { id: 'reverence-5', title: 'Reverence — 5th Anniversary', when: 'Annual — Ascension season', membersOnly: false },
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
            <ServiceTime title="Sunday · 8:30 – 10:00 AM" label="Sunday Service" />
            <ServiceTime title="Wednesday · 5:00 – 8:00 PM" label="Midweek Service" />
          </div>
        </div>
      </div>

      {/* --- Leadership --- */}
      <div className="section">
        <h2 style={{ fontSize: 26, marginBottom: 24 }}>Leadership</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          <div className="card" style={{ display: 'flex', gap: 16, padding: 20, alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 76, height: 76, flexShrink: 0, borderRadius: 'var(--radius)', overflow: 'hidden' }}>
              <Image src="/about/general-overseers.jpg" alt="General Overseers" fill style={{ objectFit: 'cover', objectPosition: 'center 15%' }} />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                General Overseers
              </div>
              <h3 style={{ fontSize: 15.5, marginBottom: 2 }}>Bishop Dr. Frederick Abu Sidique Koroma</h3>
              <h3 style={{ fontSize: 15.5 }}>Rev. Dr. Lady Patricia Koroma</h3>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', gap: 16, padding: 20, alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 76, height: 76, flexShrink: 0, borderRadius: 'var(--radius)', overflow: 'hidden' }}>
              <Image src="/about/head-pastor.jpg" alt="Rev. Olamide Macculey" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                Head Pastor
              </div>
              <h3 style={{ fontSize: 15.5 }}>Rev. Olamide Macculey</h3>
            </div>
          </div>
        </div>
      </div>

      {/* --- Upcoming Events (static) --- */}
      <div className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
          <h2 style={{ fontSize: 24 }}>Upcoming Events</h2>
          <Link href="/events" style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)', borderBottom: '1.5px solid var(--gold)' }}>
            See all events →
          </Link>
        </div>

        <div className="grid3">
          {UPCOMING_EVENTS.map((e) => (
            <Link key={e.id} href="/events" className="card" style={{ display: 'block' }}>
              <div className="card-body">
                <span className={e.membersOnly ? 'pill pill-member' : 'pill pill-public'}>
                  {e.membersOnly ? 'Members Only' : 'Public'}
                </span>
                <h3>{e.title}</h3>
                <div className="meta">{e.when}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* --- Watch & Listen --- */}
      <div className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
          <h2 style={{ fontSize: 24 }}>Watch & Listen</h2>
          <Link href="/sermons" style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)', borderBottom: '1.5px solid var(--gold)' }}>
            All ways to watch →
          </Link>
        </div>
        <p style={{ color: 'var(--gray)', fontSize: 14.5, lineHeight: 1.7, maxWidth: 640 }}>
          Services stream live on our Facebook page and YouTube channel. Catch up on past services and messages any time.
        </p>
      </div>

      <footer style={{ background: 'var(--navy-deep)', color: '#c9d2e8', padding: '40px 48px', fontSize: 13 }}>
        © 2026 Flaming Evangelical Ministries HQ — Freetown, Sierra Leone
      </footer>
    </main>
  )
}

function ServiceTime({ title, label }: { title: string; label: string }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-fraunces)', fontSize: 15, fontWeight: 600, color: 'var(--gold-light)' }}>{title}</div>
      <div style={{ fontSize: 13 }}>{label}</div>
    </div>
  )
        }
