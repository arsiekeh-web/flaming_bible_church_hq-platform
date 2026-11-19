import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedContent from '@/components/RelatedContent'
import ReverencePhotoStory from '@/components/ReverencePhotoStory'

export const metadata = {
  title: 'Reverence 2026 — Sixth Anniversary | Flaming Bible Church HQ',
  description:
    'Remember Reverence 2026, the Sixth Anniversary gathering themed “In His Presence,” through a curated photo story and the host’s reflection.',
  openGraph: {
    images: [{ url: '/events/reverence/2026/gathering-wide.jpg', width: 1400, height: 1120, alt: 'The Reverence 2026 gathering across the illuminated stage' }],
  },
}

export default function ReverencePage() {
  return (
    <main className="rev-page">
      <Breadcrumbs items={[{ label: 'Events', href: '/events' }, { label: 'Reverence' }]} />

      <section className="rev-hero" aria-labelledby="rev-page-title">
        <div className="rev-hero-media">
          <Image
            src="/events/reverence/2026/gathering-wide.jpg"
            alt="A wide view of the illuminated Reverence stage during the 2026 gathering"
            fill
            priority
            sizes="(max-width: 820px) 100vw, 57vw"
            style={{ objectFit: 'cover', objectPosition: 'center 45%' }}
          />
          <span className="rev-hero-caption">Reverence · Sixth Anniversary</span>
        </div>
        <div className="rev-hero-copy">
          <p className="rev-eyebrow">Flaming Evangelical Ministries International</p>
          <p className="rev-edition">2026 <span aria-hidden="true">/</span> Sixth Anniversary</p>
          <h1 id="rev-page-title">Reverence</h1>
          <p className="rev-theme">In His Presence</p>
          <p className="rev-hero-description">
            A night of worship, remembered through the voices, musicians, and people gathered for Reverence 2026.
          </p>
          <a className="rev-hero-link" href="#photo-story">Enter the photo story <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="rev-facts" aria-label="Reverence 2026 event details">
        <div><span>Gathering</span><strong>Sixth Anniversary</strong></div>
        <div><span>Theme</span><strong>In His Presence</strong></div>
        <div><span>Date &amp; time</span><strong>Sunday, 4 October 2026 · 4 PM</strong></div>
        <div><span>Host</span><strong>Rev. Dr. Lady Patricia Koroma</strong></div>
      </section>

      <nav className="rev-page-nav" aria-label="On this page">
        <a href="#meaning">The meaning</a>
        <a href="#photo-story">Photo story</a>
        <a href="#host-quote">The host’s reflection</a>
        <Link href="/events">All church events <span aria-hidden="true">↗</span></Link>
      </nav>

      <section id="meaning" className="rev-meaning" aria-labelledby="rev-meaning-title">
        <div className="rev-meaning-label">
          <span className="rev-section-kicker">A gathering for worship</span>
          <h2 id="rev-meaning-title">What Reverence means</h2>
        </div>
        <div className="rev-meaning-copy">
          <p>
            Reverence is the annual worship gathering of Flaming Evangelical Ministries, born from a desire for believers to come together to worship, honour, and exalt God. The vision was conceived by Bishop Dr. Frederick Abubakarr Sidique Sulaiman Koroma and entrusted to Rev. Dr. Lady Patricia Koroma, whose passion for worship continues to shape the gathering.
          </p>
          <p>
            Its purpose is to direct worship to the Lord and create space for devotion, surrender, prayer, praise, and fellowship. In 2026, the Sixth Anniversary gathered around the theme <em>In His Presence</em>.
          </p>
        </div>
      </section>

      <section id="photo-story" className="rev-photo-story" aria-labelledby="rev-photo-story-title">
        <div className="rev-story-intro">
          <span className="rev-section-kicker">Reverence · 2026</span>
          <h2 id="rev-photo-story-title">A night in photographs</h2>
          <p>Five short chapters trace the scenes held in this collection. The sequence is editorial, not a minute-by-minute programme.</p>
        </div>
        <ReverencePhotoStory />
      </section>

      <section id="host-quote" className="rev-host-quote" aria-labelledby="rev-quote-title">
        <div className="rev-quote-mark" aria-hidden="true">“</div>
        <div className="rev-quote-copy">
          <span className="rev-section-kicker">A reflection from the host</span>
          <h2 id="rev-quote-title">The heart behind Reverence</h2>
          <blockquote>
            “Reverence was born out of a genuine desire to worship and exalt the Lord. My prayer is that each year’s gathering will exceed expectations and provide an even greater opportunity for believers to encounter God through sincere worship.”
          </blockquote>
          <p className="rev-quote-attribution">Rev. Dr. Lady Patricia Koroma <span>Host of Reverence</span></p>
        </div>
      </section>

      <section className="rev-close" aria-labelledby="rev-close-title">
        <div>
          <span className="rev-section-kicker">Stay connected</span>
          <h2 id="rev-close-title">Continue with the church</h2>
          <p>Explore other church-wide events or watch and listen to existing messages.</p>
        </div>
        <div className="rev-close-actions">
          <Link className="rev-action-primary" href="/events">Church events <span aria-hidden="true">↗</span></Link>
          <Link className="rev-action-secondary" href="/sermons">Watch &amp; listen <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <RelatedContent
        items={[
          { href: '/about', title: 'Our Church', description: 'Learn more about Flaming Evangelical Ministries.', action: 'About the church' },
          { href: '/', title: 'Visit Us', description: 'Find service information and directions to Flaming Bible Church HQ.', action: 'Plan a visit' },
        ]}
      />
    </main>
  )
}
