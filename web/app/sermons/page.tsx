export const metadata = {
  title: 'Watch & Listen',
  description:
    'Watch Sunday Service and Midweek Service live from Flaming Evangelical Ministries HQ in Freetown, Sierra Leone, on Facebook and YouTube.',
}

export default function SermonsPage() {
  return (
    <main>
      <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-deep))', color: '#fff', padding: '48px' }}>
        <h1 style={{ color: '#fff', fontSize: 30 }}>Watch & Listen</h1>
        <p style={{ color: '#cfd8ee', marginTop: 8, fontSize: 14.5, maxWidth: 560 }}>
          Services and messages stream live and stay up afterward on our Facebook page and YouTube channel.
        </p>
      </div>

      <div className="section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, maxWidth: 720 }}>
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
    </main>
  )
}
