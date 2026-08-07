import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export const metadata = {
  title: 'Events | Flaming Evangelical Ministries HQ',
}

export default async function EventsPage() {
  const supabase = await createClient()
  const now = new Date().toISOString()

  // Public read — RLS policy "public_read_events" allows anyone to see every
  // event row; members_only is just a display flag here, not an access
  // restriction, so we don't need to check auth state to list events.
  const { data: upcoming } = await supabase
    .from('events')
    .select('id, title, description, start_time, end_time, location, members_only, rsvp_required')
    .gte('start_time', now)
    .order('start_time', { ascending: true })

  const { data: past } = await supabase
    .from('events')
    .select('id, title, description, start_time, location')
    .lt('start_time', now)
    .order('start_time', { ascending: false })
    .limit(6)

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

        {!upcoming || upcoming.length === 0 ? (
          <EmptyState message="No upcoming events listed yet. Once staff add an event in the admin dashboard, it'll appear here." />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 44 }}>
            {upcoming.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        )}

        {past && past.length > 0 && (
          <>
            <h2 style={{ fontSize: 22, marginBottom: 18 }}>Recent</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {past.map((e) => (
                <div key={e.id} className="card" style={{ padding: '18px 22px', opacity: 0.7 }}>
                  <h3 style={{ fontSize: 16.5, marginBottom: 4 }}>{e.title}</h3>
                  <div className="meta">
                    {new Date(e.start_time).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
                    {e.location ? ` · ${e.location}` : ''}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}

function EventCard({
  event,
}: {
  event: {
    id: string
    title: string
    description: string | null
    start_time: string
    end_time: string | null
    location: string | null
    members_only: boolean
    rsvp_required: boolean
  }
}) {
  return (
    <div className="card" style={{ padding: '18px 22px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6 }}>
        <h3 style={{ fontSize: 16.5 }}>{event.title}</h3>
        <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
          {event.members_only && <span className="pill pill-member">Members only</span>}
          {event.rsvp_required && <span className="pill pill-public">RSVP required</span>}
        </div>
      </div>

      <div className="meta" style={{ marginBottom: event.description ? 8 : 0 }}>
        {new Date(event.start_time).toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' })}
        {event.end_time ? ` – ${new Date(event.end_time).toLocaleTimeString('en-GB', { timeStyle: 'short' })}` : ''}
        {event.location ? ` · ${event.location}` : ''}
      </div>

      {event.description && <p style={{ fontSize: 13.5, lineHeight: 1.6 }}>{event.description}</p>}
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
