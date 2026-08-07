import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Reverence | Flaming Evangelical Ministries HQ',
}

export default function ReverencePage() {
  return (
    <main>
      {/* --- Hero --- */}
      <div style={{ position: 'relative', height: 360, overflow: 'hidden' }}>
        <Image
          src="/events/reverence/hero.jpg"
          alt="Reverence 5th Anniversary worship night"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
          priority
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(6,28,74,0.35), rgba(6,28,74,0.85))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: 40,
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
            5th Anniversary
          </div>
          <h1 style={{ color: '#fff', fontSize: 34 }}>Reverence</h1>
          <p style={{ color: '#cfd8ee', marginTop: 8, fontSize: 14.5, maxWidth: 560 }}>
            &ldquo;Hallelujah, the Omnipotent God Reigns&rdquo; — a night of worship marking five years of Flaming
            Evangelical Ministries International.
          </p>
        </div>
      </div>

      {/* --- Quick nav to sections on this page --- */}
      <div style={{ background: 'var(--navy-deep)', display: 'flex', gap: 24, padding: '14px 40px' }}>
        <a href="#about" style={{ color: 'var(--gold-light)', fontSize: 13, fontWeight: 600 }}>About</a>
        <a href="#gallery" style={{ color: 'var(--gold-light)', fontSize: 13, fontWeight: 600 }}>Gallery</a>
        <a href="#shop" style={{ color: 'var(--gold-light)', fontSize: 13, fontWeight: 600 }}>Shop</a>
        <Link href="/events" style={{ color: '#cfd8ee', fontSize: 13, marginLeft: 'auto' }}>← All Events</Link>
      </div>

      {/* --- About --- */}
      <div id="about" className="section">
        <h2 style={{ fontSize: 22, marginBottom: 14 }}>About Reverence</h2>
        <p style={{ lineHeight: 1.8, maxWidth: 720, color: 'var(--gray)' }}>
          [Placeholder — real event description needed from the events team. Suggested structure: what Reverence
          is, why it happens annually, this year&apos;s 5th Anniversary theme, and who ministered on the night —
          worship team, choir, and guest speakers.]
        </p>
      </div>

      {/* --- Gallery --- */}
      <div id="gallery" className="section" style={{ paddingTop: 0 }}>
        <h2 style={{ fontSize: 22, marginBottom: 20 }}>Moments from the Night</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <GalleryImage src="/events/reverence/singer.jpg" alt="Worship leader ministering on stage" />
          <GalleryImage src="/events/reverence/choir-1.jpg" alt="Choir and worship team leading praise" />
          <GalleryImage src="/events/reverence/worship-team.jpg" alt="Worship team in full praise" />
          <GalleryImage src="/events/reverence/choir-2.jpg" alt="Choir raising hands in worship" />
          <GalleryImage src="/events/reverence/congregation.jpg" alt="Congregation gathered for Reverence" />
        </div>
      </div>

      {/* --- Shop --- */}
      <div id="shop" className="section" style={{ paddingTop: 0 }}>
        <h2 style={{ fontSize: 22, marginBottom: 14 }}>Shop</h2>
        <div style={{ border: '1px dashed var(--line)', borderRadius: 4, padding: 32, textAlign: 'center', color: 'var(--gray)', fontSize: 14, maxWidth: 720 }}>
          Merchandise for Reverence isn&apos;t listed yet. [Placeholder — add product name, price, and photo here
          once items — e.g. anniversary t-shirts, wristbands, event DVDs — are ready to sell. This section can
          later connect to a real checkout if the church wants online payment.]
        </div>
      </div>
    </main>
  )
}

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ position: 'relative', width: '100%', paddingTop: '125%', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
      <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
    </div>
  )
}
