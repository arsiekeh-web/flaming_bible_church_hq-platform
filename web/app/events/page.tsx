import Link from 'next/link'

export const metadata = {
  title: 'Events',
  description:
    "What's happening at Flaming Evangelical Ministries HQ — including Reverence, our annual worship night celebrating five years of consistent worship in Freetown, Sierra Leone.",
}

// Static — update by hand when events change.
const UPCOMING: {
  title: string
  when: string
  location?: string
  membersOnly?: boolean
  rsvp?: boolean
  description?: string
}[] = []

export default function EventsPage() {
  return (
    <main>
      <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-deep))', color: '#fff', padding: '48px' }}>
        <h1 style={{ color: '#fff', fontSize: 30 }}>Events</h1>
        <p style={{ color: '#cfd8ee', marginTop: 8, fontSize: 14.5 }}>What&apos;s happening at Flaming Evangelical Ministries HQ.</p>
      </div>

      <div className="section" style={{ paddingBottom: 0 }}>
        <Link href="/events/reverence" className="card" style={{ display: 'flex', gap: 20, padding: 20, alignItems: 'center', marginBottom: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Featured
          </div>
          <div>
            <h3 style={{ fontSize: 17 }}>Reverence — 5th Anniversary</h3>
            <p style={{ fontSize: 13, color: 'var(--gray)', marginTop: 4 }}>About, photo gallery, and shop →</p>
          </div>
        </Link>
      </div>

      <div className="section">
        <h2 style={{ fontSize: 22, marginBottom: 18 }}>Upcoming</h2>

        {UPCOMING.length === 0 ? (
          <EmptyState message="No other upcoming events listed right now — check back soon, or follow us on Facebook and YouTube for announcements." />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {UPCOMING.map((e) => (
              <div key={e.title} className="card" style={{ padding: '18px 22px' }}>
                <h3 style={{ fontSize: 16.5, marginBottom: 4 }}>{e.title}</h3>
                <div className="meta">
                  {e.when}
                  {e.location ? ` · ${e.location}` : ''}
                </div>
                {e.description && <p style={{ fontSize: 13.5, lineHeight: 1.6, marginTop: 8 }}>{e.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

function EmptyState({ message }: { message: string }) {
  return (
    <div style={{ border: '1px dashed var(--line)', borderRadius: 4, padding: 32, textAlign: 'center', color: 'var(--gray)', fontSize: 14 }}>
      {message}
    </div>
  )
}
