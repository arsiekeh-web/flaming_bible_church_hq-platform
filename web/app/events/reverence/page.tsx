import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Reverence',
  description:
    'Reverence is the annual worship night of Flaming Evangelical Ministries International, hosted by Rev. Dr. Lady Patricia Koroma — directing worship to the Lord in Freetown, Sierra Leone.',
  openGraph: {
    images: [{ url: '/events/reverence/hero.jpg', width: 1200, height: 630, alt: 'Reverence worship night' }],
  },
}

export default function ReverencePage() {
  return (
    <main>
      {/* --- Hero --- */}
      <div style={{ position: 'relative', height: 360, overflow: 'hidden' }}>
        <Image
          src="/events/reverence/hero.jpg"
          alt="Reverence worship night"
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
          <h1 style={{ color: '#fff', fontSize: 34 }}>Reverence</h1>
          <p style={{ color: '#cfd8ee', marginTop: 8, fontSize: 14.5, maxWidth: 560 }}>
            A worship night marking five years of Reverence, directing worship to the Lord and celebrating
            God&apos;s grace over Flaming Evangelical Ministries International.
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
        <p style={{ lineHeight: 1.8, maxWidth: 720, color: 'var(--gray)', marginBottom: 18 }}>
          Reverence was born out of a genuine desire to worship and exalt the Lord. What began as a single
          occasion has grown from the cradle into a national event, drawing worshippers, ministers, and
          musicians from across Sierra Leone and the diaspora. Reverence creates an atmosphere where believers
          can interact with their Creator in a form of worship — the vertical coming together with the
          horizontal, so the Lord can be worshipped in spirit and in truth.
        </p>
        <p style={{ lineHeight: 1.8, maxWidth: 720, color: 'var(--gray)', marginBottom: 18 }}>
          Reverence is hosted by Rev. Dr. Lady Patricia Koroma, with Bishop Dr. Frederick Abu Sidique Suaiman
          Koroma as visioneer. Each year the programme has grown in attendance, attracting key figures across
          Sierra Leonean society who are engaged in praise and worship, and closing with a memorable final
          hour of ministration.
        </p>
        <p style={{ fontFamily: 'var(--font-fraunces)', fontStyle: 'italic', color: 'var(--crimson)', fontSize: 16, marginBottom: 18 }}>
          &ldquo;With Reverence, we worship God. We create an atmosphere where we can worship God in spirit
          and in truth — not something born out of mechanical nature, but something born out of a genuine
          desire of worship.&rdquo;
        </p>
        <p style={{ fontSize: 13, color: 'var(--gray)' }}>— Rev. Dr. Lady Patricia Koroma, Host of Reverence</p>
      </div>

      {/* --- Gallery --- */}
      <div id="gallery" className="section" style={{ paddingTop: 0 }}>
        <h2 style={{ fontSize: 22, marginBottom: 20 }}>Moments from the Night</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <GalleryImage src="/events/reverence/congregation-2025.jpg" alt="Ministers and congregation gathered for Reverence" />
          <GalleryImage src="/events/reverence/award-night.jpg" alt="Recognition and appreciation on the Reverence stage" />
          <GalleryImage src="/events/reverence/singer.jpg" alt="Worship leader ministering on stage" />
          <GalleryImage src="/events/reverence/choir-1.jpg" alt="Choir and worship team leading praise" />
          <GalleryImage src="/events/reverence/worship-team.jpg" alt="Worship team in full praise" />
          <GalleryImage src="/events/reverence/congregation.jpg" alt="Congregation gathered for Reverence" />
        </div>
      </div>

      {/* --- Shop --- */}
      <div id="shop" className="section" style={{ paddingTop: 0 }}>
        <h2 style={{ fontSize: 22, marginBottom: 14 }}>Shop</h2>
        <div style={{ border: '1px dashed var(--line)', borderRadius: 4, padding: 32, textAlign: 'center', color: 'var(--gray)', fontSize: 14, maxWidth: 720 }}>
          Merchandise for Reverence isn&apos;t listed yet. Anniversary t-shirts, wristbands, and event
          keepsakes will appear here once available.
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
