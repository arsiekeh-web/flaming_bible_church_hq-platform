import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()

  // Real queries against the real database. No hardcoded mock content —
  // if these tables are empty, the page says so honestly (see EmptyState
  // below) rather than pretending with placeholder data.
  const { data: events } = await supabase
    .from('events')
    .select('id, title, start_time, members_only')
    .gte('start_time', new Date().toISOString())
    .order('start_time', { ascending: true })
    .limit(3)

  const { data: sermons } = await supabase
    .from('sermons')
    .select('id, title, sermon_date, speaker_id, speakers(name)')
    .eq('published', true)
    .order('sermon_date', { ascending: false })
    .limit(3)

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
            Flaming Evangelical Ministries HQ
          </p>
          <p style={{ fontFamily: 'var(--font-fraunces)', fontStyle: 'italic', color: 'var(--gold-light)', fontSize: 16, marginBottom: 28 }}>
            &ldquo;How shall they hear without a preacher?&rdquo; — Romans 10:14
          </p>
          <div style={{ display: 'flex', gap: 14 }}>
            <Link href="/sermons" className="btn btn-gold">
              Watch Latest Sermon
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

      {/* --- Upcoming Events (real data) --- */}
      <div className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
          <h2 style={{ fontSize: 24 }}>Upcoming Events</h2>
          <Link href="/events" style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)', borderBottom: '1.5px solid var(--gold)' }}>
            See all events →
          </Link>
        </div>

        {!events || events.length === 0 ? (
          <EmptyState message="No upcoming events yet. Once staff add events in the admin dashboard, they'll appear here automatically." />
        ) : (
          <div className="grid3">
            {events.map((e) => (
              <Link key={e.id} href="/events" className="card" style={{ display: 'block' }}>
                <div className="card-body">
                  <span className={e.members_only ? 'pill pill-member' : 'pill pill-public'}>
                    {e.members_only ? 'Members Only' : 'Public'}
                  </span>
                  <h3>{e.title}</h3>
                  <div className="meta">{new Date(e.start_time).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* --- Latest Sermons (real data) --- */}
      <div className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
          <h2 style={{ fontSize: 24 }}>Latest Sermons</h2>
          <Link href="/sermons" style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)', borderBottom: '1.5px solid var(--gold)' }}>
            See full archive →
          </Link>
        </div>

        {!sermons || sermons.length === 0 ? (
          <EmptyState message="No sermons published yet. Once staff upload and publish a sermon, it'll show up here." />
        ) : (
          <div className="grid3">
            {sermons.map((s: any) => (
              <Link key={s.id} href="/sermons" className="card" style={{ display: 'block' }}>
                <div className="card-body">
                  <h3>{s.title}</h3>
                  <div className="meta">
                    {s.speakers?.name ?? 'Unknown speaker'} · {new Date(s.sermon_date).toLocaleDateString('en-GB', { dateStyle: 'medium' })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
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

function EmptyState({ message }: { message: string }) {
  return (
    <div style={{ border: '1px dashed var(--line)', borderRadius: 4, padding: 32, textAlign: 'center', color: 'var(--gray)', fontSize: 14 }}>
      {message}
    </div>
  )
}
