import Image from 'next/image'

export const metadata = {
  title: 'About | Flaming Evangelical Ministries HQ',
}

export default function AboutPage() {
  return (
    <main>
      <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-deep))', color: '#fff', padding: '48px' }}>
        <h1 style={{ color: '#fff', fontSize: 30 }}>About Us</h1>
        <p style={{ color: '#cfd8ee', marginTop: 8, fontSize: 14.5, maxWidth: 640 }}>
          Flaming Evangelical Ministries HQ, in Freetown, Sierra Leone.
        </p>
      </div>

      {/* --- About the Church --- */}
      <div className="section">
        <h2 style={{ fontSize: 22, marginBottom: 14 }}>Our Church</h2>
        <p style={{ lineHeight: 1.8, maxWidth: 720, color: 'var(--gray)' }}>
          [Placeholder — real church history and mission statement needed from leadership. Suggested structure:
          founding story, core mission, what the congregation can expect on a typical Sunday, and the church&apos;s
          place within the wider Flaming Evangelical Ministries HQ network.]
        </p>
        <p style={{ fontFamily: 'var(--font-fraunces)', fontStyle: 'italic', color: 'var(--crimson)', fontSize: 16, marginTop: 18 }}>
          &ldquo;How shall they hear without a preacher?&rdquo; — Romans 10:14
        </p>
      </div>

      {/* --- General Overseers --- */}
      <div className="section" style={{ paddingTop: 0 }}>
        <h2 style={{ fontSize: 22, marginBottom: 20 }}>General Overseers</h2>
        <div style={{ position: 'relative', width: '100%', maxWidth: 720, height: 320, borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: 20 }}>
          <Image src="/about/general-overseers.jpg" alt="General Overseers of Flaming Evangelical Ministries HQ" fill style={{ objectFit: 'cover', objectPosition: 'center 20%' }} />
        </div>
        <p style={{ fontSize: 12, color: 'var(--gray)', marginBottom: 20 }}>
          [Placeholder caption — confirm which is Bishop Koroma and which is Rev. Dr. Koroma in this photo, and swap in individual portraits if you have them.]
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <LeaderCard
            name="Bishop Dr. Frederick Abu Sidique Koroma"
            role="General Overseer"
            bio="[Placeholder — biography needed: background, years in ministry, vision for the church.]"
          />
          <LeaderCard
            name="Rev. Dr. Lady Patricia Koroma"
            role="General Overseer"
            bio="[Placeholder — biography needed: background, years in ministry, areas of focus.]"
          />
        </div>
      </div>

      {/* --- Head Pastor --- */}
      <div className="section" style={{ paddingTop: 0 }}>
        <h2 style={{ fontSize: 22, marginBottom: 20 }}>Head Pastor</h2>
        <div style={{ display: 'flex', gap: 24, maxWidth: 620, flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: 160, height: 160, flexShrink: 0, borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <Image src="/about/head-pastor.jpg" alt="Rev. Olamide Macculey, Head Pastor" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <LeaderCard
            name="Rev. Olamide Macculey"
            role="Head Pastor"
            bio="[Placeholder — biography needed: background, years serving this congregation, pastoral focus.]"
            noPad
          />
        </div>
      </div>
    </main>
  )
}

function LeaderCard({ name, role, bio, wide, noPad }: { name: string; role: string; bio: string; wide?: boolean; noPad?: boolean }) {
  return (
    <div className={noPad ? '' : 'card'} style={{ padding: noPad ? 0 : 24, maxWidth: wide ? 620 : undefined, flex: noPad ? 1 : undefined, minWidth: noPad ? 220 : undefined }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
        {role}
      </div>
      <h3 style={{ fontSize: 18, marginBottom: 10 }}>{name}</h3>
      <p style={{ fontSize: 13.5, lineHeight: 1.7, color: 'var(--gray)' }}>{bio}</p>
    </div>
  )
}
