import Breadcrumbs from '@/components/Breadcrumbs'
import PageMasthead from '@/components/PageMasthead'
import RelatedContent from '@/components/RelatedContent'

export const metadata = {
  title: 'Watch & Listen',
  description:
    'Watch Sunday Service and Midweek Service live from Flaming Bible Church HQ in Freetown, Sierra Leone, on Facebook and YouTube.',
}

export default function SermonsPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Watch & Listen' }]} />
      <PageMasthead
        eyebrow="Messages and services"
        title="Watch & Listen"
        description="Watch live church services and sermons from Flaming Bible Church HQ, Freetown, Sierra Leone. Services stream live and stay available afterward on our Facebook page and YouTube channel."
      />

      <div className="section">
        <div className="watch-destinations-grid">
          <a
            href="https://www.facebook.com/share/1C8zu2wYax/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ display: 'block', padding: 28, textAlign: 'center' }}
          >
            <div style={{ fontSize: 32, marginBottom: 12 }}>📘</div>
            <h3 style={{ fontSize: 17, marginBottom: 6 }}>Facebook Page</h3>
            <p style={{ fontSize: 13, color: 'var(--gray)' }}>
              Live services, photos, and updates
            </p>
          </a>

          <a
            href="https://www.youtube.com/live/4AQhTvm6N74?si=oiY_r_gZvxils_5z"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ display: 'block', padding: 28, textAlign: 'center' }}
          >
            <div style={{ fontSize: 32, marginBottom: 12 }}>▶️</div>
            <h3 style={{ fontSize: 17, marginBottom: 6 }}>YouTube</h3>
            <p style={{ fontSize: 13, color: 'var(--gray)' }}>
              Watch live and past services
            </p>
          </a>
        </div>

        <p style={{ fontSize: 13, color: 'var(--gray)', marginTop: 28, maxWidth: 560 }}>
          Both links open in a new tab. Follow or subscribe to be notified when we go live.
        </p>
      </div>
      <RelatedContent
        items={[
          { href: '/events', title: 'Church Events', description: 'Explore church-wide gatherings and featured events.', action: 'Browse events' },
          { href: '/about', title: 'About the Church', description: 'Learn about Flaming Bible Church HQ and its leadership.', action: 'Meet the church' },
        ]}
      />
    </main>
  )
}
