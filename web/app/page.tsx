import Image from 'next/image'
import Link from 'next/link'
import MapEmbed from '@/components/MapEmbed'
import { LeaderCard } from '@/components/LeaderModal'
import { LEADERS } from '@/lib/leaders'

export const metadata = {
  title: 'Flaming Bible Church HQ | Freetown, Sierra Leone',
  description:
    'Flaming Bible Church HQ (Flaming Evangelical Ministries International) is a Bible-believing church in Ascension Town, Freetown, Sierra Leone. Join us for Sunday Bible Exposition & Divine Service, Mid-Week Breakthrough Explosion Service, Friday Holy Ghost Prayer, and more. “How shall they hear without a preacher?” — Romans 10:14.',
}

const DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=Syke+Street,+Ascension+Town,+Freetown,+Sierra+Leone'

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <Image
          src="/home-worship.jpg"
          alt="The congregation gathered for worship at Flaming Bible Church HQ"
          fill
          priority
          sizes="100vw"
          className="home-hero-image"
        />
        <div className="home-hero-shade" />
        <div className="home-hero-content">
          <div className="eyebrow home-hero-eyebrow">Freetown, Sierra Leone</div>
          <h1>Flaming Bible Church HQ</h1>
          <p className="home-hero-ministry">Flaming Evangelical Ministries International</p>
          <p className="home-hero-address">Ascension Town / Syke Street, Freetown, Sierra Leone</p>
          <p className="home-hero-motto">“How shall they hear without a preacher?” — Romans 10:14</p>
          <div className="home-hero-actions">
            <Link href="/sermons" className="btn btn-gold">Watch &amp; Listen</Link>
            <Link href="#visit" className="btn btn-outline">Plan Your Visit</Link>
          </div>
        </div>
        <span className="home-hero-rule" aria-hidden="true" />
      </section>

      <section className="section home-intro">
        <div className="eyebrow">A church in the heart of Freetown</div>
        <h2>A Bible-Believing Church in Freetown, Sierra Leone</h2>
        <p>
          Flaming Bible Church HQ (Flaming Evangelical Ministries International) is an evangelical,
          Bible-believing church located in Ascension Town, Freetown, Sierra Leone. Whether you're
          searching for a church near Ascension Town, a place of evangelism and deliverance ministry
          in Freetown, or simply a spiritual home, our doors are open. From Sunday worship and Bible
          study to midweek prayer meetings, we welcome believers and seekers alike to experience the
          Gospel of Jesus Christ preached without compromise.
        </p>
      </section>

      <section className="home-worship">
        <div className="home-worship-photo">
          <Image
            src="/events/reverence/worship-team.jpg"
            alt="Worship team leading a Reverence gathering"
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center 38%' }}
          />
        </div>
        <div className="home-worship-copy">
          <div className="eyebrow">Worship &amp; church life</div>
          <h2>Gather with us</h2>
          <p>Join us for worship, Bible teaching, and prayer throughout the week.</p>
          <div className="service-list">
            <ServiceTime title="Sunday · 8:30 – 10:30 AM" label="Divine Service" featured />
            <ServiceTime title="Sunday · 8:00 – 8:25 AM" label="Bible Exposition" />
            <ServiceTime title="Wednesday · 5:30 PM" label="Mid-Week Breakthrough Explosion Service" />
            <ServiceTime title="Friday · 5:30 PM" label="Holy Ghost Prayer" />
            <ServiceTime title="Last Wednesday of Every Month · 5:30 PM" label="Solution on a Wednesday Night" />
            <ServiceTime title="Every 3rd Friday · 11:00 PM – 5:30 AM" label="All-Night of Prevailing Prayers" />
          </div>
          <Link href="/fellowship" className="text-link">Explore church life and fellowship <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section home-ministries">
        <div className="home-section-heading">
          <div>
            <div className="eyebrow">Find your place</div>
            <h2>Ministries &amp; fellowship</h2>
          </div>
          <Link href="/fellowship" className="text-link">Explore YDY <span aria-hidden="true">→</span></Link>
        </div>
        <div className="path-card-grid">
          <PathCard href="/about" index="01" title="Our Church" text="Learn about our church, mission, and leadership." />
          <PathCard href="/fellowship" index="02" title="Fellowship" text="Meet the Young Dynamic Youth Fellowship and explore its activities." />
          <PathCard href="#visit" index="03" title="Plan Your Visit" text="Find our headquarters and service times in Freetown." />
        </div>
        <div className="home-leadership-heading">
          <h3>Leadership</h3>
          <Link href="/about" className="text-link">Meet our leaders <span aria-hidden="true">→</span></Link>
        </div>
        <div className="home-leader-grid">
          <LeaderCard photo={LEADERS.bishop.photo} leader={LEADERS.bishop} />
          <LeaderCard photo={LEADERS.patricia.photo} leader={LEADERS.patricia} />
          <LeaderCard photo={LEADERS.pastor.photo} leader={LEADERS.pastor} />
        </div>
      </section>

      <section className="home-media">
        <div className="home-media-inner">
          <div className="home-section-heading">
            <div>
              <div className="eyebrow">Messages and services</div>
              <h2>Watch &amp; Listen</h2>
            </div>
            <Link href="/sermons" className="text-link">All ways to watch <span aria-hidden="true">→</span></Link>
          </div>
          <div className="media-card-grid">
            <a href="https://www.facebook.com/share/1C8zu2wYax/" target="_blank" rel="noopener noreferrer" className="media-card">
              <span className="media-card-icon" aria-hidden="true">f</span>
              <span className="media-card-label">Facebook</span>
              <strong>Live services, photos, and updates</strong>
              <span className="media-card-cta">Visit Facebook <span aria-hidden="true">↗</span></span>
            </a>
            <a href="https://www.youtube.com/live/4AQhTvm6N74?si=oiY_r_gZvxils_5z" target="_blank" rel="noopener noreferrer" className="media-card">
              <span className="media-card-icon media-card-play" aria-hidden="true">▶</span>
              <span className="media-card-label">YouTube video</span>
              <strong>Watch a service and explore more messages</strong>
              <span className="media-card-cta">Watch on YouTube <span aria-hidden="true">↗</span></span>
            </a>
          </div>
          <p className="home-media-note">These links open in a new tab.</p>
        </div>
      </section>

      <section className="section home-events">
        <div className="home-section-heading">
          <div>
            <div className="eyebrow">Come together</div>
            <h2>Events</h2>
          </div>
          <Link href="/events" className="text-link">All events <span aria-hidden="true">→</span></Link>
        </div>
        <Link href="/events/reverence" className="featured-event">
          <div className="featured-event-image">
            <Image src="/events/reverence/hero.jpg" alt="Reverence worship gathering" fill sizes="(max-width: 860px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className="featured-event-copy">
            <span className="eyebrow">Featured gathering</span>
            <h3>Reverence</h3>
            <p>An annual worship gathering of Flaming Evangelical Ministries, directing worship to the Lord.</p>
            <span className="text-link">Discover Reverence <span aria-hidden="true">→</span></span>
          </div>
        </Link>
        <p className="home-events-note">No other upcoming events are listed right now. Check back for announcements.</p>
      </section>

      <section id="visit" className="home-visit">
        <div className="home-visit-inner">
          <div className="home-visit-details">
            <div className="eyebrow">Visit &amp; connect</div>
            <h2>We’d be glad to welcome you.</h2>
            <p className="home-visit-address">Syke Street, Ascension Town<br />Freetown, Sierra Leone</p>
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get Directions <span aria-hidden="true">↗</span></a>
            <a className="home-contact" href="mailto:flamingbiblechurchhq@yahoo.com">flamingbiblechurchhq@yahoo.com</a>
          </div>
          <div className="home-visit-map">
            <MapEmbed
              title="Map to Flaming Bible Church HQ"
              src="https://www.google.com/maps?q=Syke+Street,+Ascension+Town,+Freetown,+Sierra+Leone&output=embed"
              height={320}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceTime({ title, label, featured = false }: { title: string; label: string; featured?: boolean }) {
  return (
    <div className={`service-time${featured ? ' service-time-featured' : ''}`}>
      <span className="service-time-day">{title}</span>
      <span className="service-time-name">{label}</span>
    </div>
  )
}

function PathCard({ href, index, title, text }: { href: string; index: string; title: string; text: string }) {
  return (
    <Link href={href} className="path-card">
      <span className="path-card-index">{index}</span>
      <strong>{title}</strong>
      <span>{text}</span>
      <span className="path-card-arrow" aria-hidden="true">↗</span>
    </Link>
  )
}
