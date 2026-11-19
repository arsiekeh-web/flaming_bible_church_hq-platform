import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageMasthead from '@/components/PageMasthead'
import RelatedContent from '@/components/RelatedContent'

export const metadata = {
  title: 'Events',
  description:
    "What's happening at Flaming Bible Church HQ — including Reverence, our annual worship night of consistent worship in Freetown, Sierra Leone.",
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
      <Breadcrumbs items={[{ label: 'Events' }]} />
      <PageMasthead
        eyebrow="Church gatherings"
        title="Events"
        description="Church events, crusades, and worship nights at Flaming Bible Church HQ in Freetown, Sierra Leone."
      />

      <div className="section" style={{ paddingBottom: 0 }}>
        <Link href="/events/reverence" className="card" style={{ display: 'flex', gap: 20, padding: 20, alignItems: 'center', marginBottom: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Featured
          </div>
          <div>
            <h3 style={{ fontSize: 17 }}>Reverence</h3>
            <p style={{ fontSize: 13, color: 'var(--gray)', marginTop: 4 }}>About and photo gallery →</p>
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
      <RelatedContent
        items={[
          { href: '/about', title: 'About the Church', description: 'Learn about Flaming Bible Church HQ and its leadership.', action: 'Meet the church' },
          { href: '/sermons', title: 'Watch & Listen', description: 'Find the church’s existing Facebook and YouTube destinations.', action: 'Explore messages' },
        ]}
      />
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
