import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Reverence',
  description:
    'Reverence is the annual worship gathering of Flaming Evangelical Ministries, hosted by Rev. Dr. Lady Patricia Koroma — directing worship to the Lord in Freetown, Sierra Leone.',
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
            An annual worship gathering of Flaming Evangelical Ministries, directing worship to the Lord.
          </p>
        </div>
      </div>

      {/* --- Quick nav --- */}
      <div style={{ background: 'var(--navy-deep)', display: 'flex', gap: 24, padding: '14px 40px', flexWrap: 'wrap' }}>
        <a href="#about" style={{ color: 'var(--gold-light)', fontSize: 13, fontWeight: 600 }}>About</a>
        <a href="#vision" style={{ color: 'var(--gold-light)', fontSize: 13, fontWeight: 600 }}>The Vision</a>
        <a href="#gallery" style={{ color: 'var(--gold-light)', fontSize: 13, fontWeight: 600 }}>Gallery</a>
        <a href="#years" style={{ color: 'var(--gold-light)', fontSize: 13, fontWeight: 600 }}>Through the Years</a>
        <a href="#shop" style={{ color: 'var(--gold-light)', fontSize: 13, fontWeight: 600 }}>Shop</a>
        <Link href="/events" style={{ color: '#cfd8ee', fontSize: 13, marginLeft: 'auto' }}>← All Events</Link>
      </div>

      {/* --- About --- */}
      <div id="about" className="section">
        <h2 style={{ fontSize: 22, marginBottom: 14 }}>About Reverence</h2>
        <p style={{ lineHeight: 1.8, maxWidth: 720, color: 'var(--gray)', marginBottom: 18 }}>
          Reverence is an annual worship gathering of Flaming Evangelical Ministries, born out of a
          genuine desire to create an atmosphere where believers can come together to worship,
          honour, and exalt God. The vision was conceived by Bishop Dr. Frederick Abubakarr Sidique
          Sulaiman Koroma, General Overseer of Flaming Evangelical Ministries, inspired by his
          experience at a worship gathering deeply centred on worship. From this vision, Reverence
          was established as a dedicated time for believers to set aside the distractions of
          everyday life and focus entirely on God.
        </p>
        <p style={{ lineHeight: 1.8, maxWidth: 720, color: 'var(--gray)' }}>
          Reverend Dr. Lady Patricia Koroma serves as the Face and Host of Reverence. Bishop Koroma
          entrusted her with this vision because of her deep, personal passion for worship — a true
          worshipper uniquely suited to carry the vision of Reverence forward.
        </p>
      </div>

      {/* --- The Vision / Purpose --- */}
      <div
        id="vision"
        className="section"
        style={{ paddingTop: 0 }}
      >
        <h2 style={{ fontSize: 22, marginBottom: 14 }}>The Vision</h2>
        <p style={{ lineHeight: 1.8, maxWidth: 720, color: 'var(--gray)', marginBottom: 18 }}>
          The central vision of Reverence is to direct worship to the Lord and create an atmosphere
          where people can worship God in spirit and in truth. Reverence is founded on the
          understanding that worship is more than music or a programme — it is an expression of
          genuine devotion, surrender, honour, and relationship with God, drawing believers together
          in unity through praise, worship, prayer, and spiritual fellowship.
        </p>
        <p style={{ lineHeight: 1.8, maxWidth: 720, color: 'var(--gray)', marginBottom: 18 }}>
          Reverence teaches an important distinction: praise is an expression of what God has done,
          while worship is an expression of who God is. Together, thanksgiving, praise, and worship
          form an essential part of the believer's spiritual life — not a seasonal activity, but a
          lifestyle of gratitude, obedience, humility, and surrender, drawing from Psalm 100's call
          to enter God's gates with thanksgiving and His courts with praise.
        </p>
        <p style={{ lineHeight: 1.8, maxWidth: 720, color: 'var(--gray)', marginBottom: 18 }}>
          Reverence exists to provide an atmosphere where believers can worship wholeheartedly,
          experience the presence of God, grow deeper in relationship with Him, come together in
          unity and fellowship, express gratitude and praise, and experience spiritual renewal —
          bringing together worshippers, musicians, ministers, pastors, bishops, and young people
          from different backgrounds with one shared purpose: to honour God through worship.
        </p>
        <p style={{ lineHeight: 1.8, maxWidth: 720, color: 'var(--gray)', marginBottom: 18 }}>
          Since its establishment, Reverence has grown from a small vision into a worship gathering
          with national and international recognition, attracting worshippers, musicians, pastors,
          and bishops who share a passion for praise and worship — with its impact reaching people
          in Sierra Leone and abroad, and opening doors for musicians to minister in other countries.
        </p>
        <p style={{ fontFamily: 'var(--font-fraunces)', fontStyle: 'italic', color: 'var(--crimson)', fontSize: 16, marginBottom: 18 }}>
          &ldquo;Reverence was born out of a genuine desire to worship and exalt the Lord. My prayer
          is that each year's gathering will exceed expectations and provide an even greater
          opportunity for believers to encounter God through sincere worship.&rdquo;
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
          <GalleryImage src="/events/reverence/worship-2025.jpg" alt="A worshipper raising hands during Reverence 2025" />
          <GalleryImage src="/events/reverence/patricia-throne.jpg" alt="Rev. Dr. Lady Patricia Koroma, host of Reverence" />
          <GalleryImage src="/events/reverence/team-2025.jpg" alt="Reverence 2025 hosting team on stage" />
        </div>
      </div>

      {/* --- Through the Years --- */}
      <div id="years" className="section" style={{ paddingTop: 0 }}>
        <h2 style={{ fontSize: 22, marginBottom: 20 }}>Through the Years</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          <YearPoster src="/events/reverence/poster-2026.jpg" year="2026" theme="In His Presence" />
          <YearPoster src="/events/reverence/poster-2025.jpg" year="2025" theme="Hallelujah, The Omnipotent God Reigns" />
          <YearPoster src="/events/reverence/poster-2024.jpg" year="2024" theme="God of All Flesh" />
          <YearPoster src="/events/reverence/poster-2022.jpg" year="2022" theme="Be Glorified" />
          <YearPoster src="/events/reverence/poster-2021.jpg" year="2021" theme="Worship and Awards Night" />
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

function YearPoster({ src, year, theme }: { src: string; year: string; theme: string }) {
  return (
    <div>
      <div style={{ position: 'relative', width: '100%', paddingTop: '100%', borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: 8 }}>
        <Image src={src} alt={`Reverence ${year} — ${theme}`} fill style={{ objectFit: 'cover' }} />
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy)' }}>{year}</div>
      <div style={{ fontSize: 12, color: 'var(--gray)' }}>{theme}</div>
    </div>
  )
            }
