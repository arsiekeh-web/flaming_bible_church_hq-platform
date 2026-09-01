import Image from 'next/image'

export const metadata = {
  title: 'About Us',
  description:
    'Meet the leadership of Flaming Evangelical Ministries HQ in Ascension Town, Freetown — Bishop Dr. Frederick Abu Sidique Koroma, Rev. Dr. Lady Patricia Koroma, and Head Pastor Rev. Olamide Macculey.',
}

export default function AboutPage() {
  return (
    <main>
      <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-deep))', color: '#fff', padding: '48px' }}>
        <h1 style={{ color: '#fff', fontSize: 30 }}>About Us</h1>
        <p style={{ color: '#cfd8ee', marginTop: 8, fontSize: 14.5, maxWidth: 640 }}>
          Flaming Evangelical Ministries HQ, in Ascension Town, Freetown, Sierra Leone.
        </p>
      </div>

      {/* --- About the Church --- */}
      <div className="section">
        <h2 style={{ fontSize: 22, marginBottom: 14 }}>Our Church</h2>
        <p style={{ lineHeight: 1.8, maxWidth: 720, color: 'var(--gray)' }}>
          Flaming Evangelical Ministries International is a Christ-centred ministry founded and led by Bishop
          Dr. Frederick Abu Sidique Koroma, headquartered here in Ascension Town, Freetown. Under his
          leadership, the Ministry has planted over 100 churches across Sierra Leone, with sister churches in
          Liberia, the Gambia, Ivory Coast, Ghana, Britain, the United States, Italy, Jamaica, and Australia.
          Beyond church planting, the Ministry runs primary and secondary schools, a community clinic, a
          radio station, and an orphanage, with a youth empowerment centre and television station in
          development.
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <LeaderCard
            name="Bishop Dr. Frederick Abu Sidique Koroma"
            role="Founder & General Overseer"
            bio="Born in 1961 at Congo Town, Freetown, Bishop Koroma graduated from Fourah Bay College, University of Sierra Leone, in 1988 with a B.A. in Political Science and Biblical Religious Studies. He is the Founder and General Overseer of Flaming Evangelical Ministries International, the first interim President of the Pentecostal Fellowship of Sierra Leone, and currently President and Chairperson of the Strategic Evangelistic Network, a body of over 150 independent churches and ministries. He has authored three books — Exposing and Destroying the Dark Satanic Kingdom, The Secret of A Happy Marriage, and Home Sweet Home. He holds honorary doctorates in Humanities (Commonwealth University, UK), Divinity (St Thomas Christian University, Florida, and IATA, India), and Public Administration (West Africa Institute in Public Administration, Ghana). His honours include the Order of the Rokel from former President Dr. Ernest Bai Koroma (2011), recognition from the Council of Texas, Senate, Mayor and Governor Rick Perry (2013), and the Africa Achievers Award for Leadership & Philanthropy (2019), among others. He is married to Rev. Dr. Lady Patricia Koroma, and they are blessed with a son, Joseph Garber-Koroma."
          />
          <LeaderCard
            name="Rev. Dr. Lady Patricia Koroma"
            role="General Overseer"
            bio="Rev. Dr. Lady Patricia Koroma serves alongside Bishop Dr. Frederick Abu Sidique Koroma as General Overseer of Flaming Evangelical Ministries International. She hosts Reverence, the Ministry's annual worship celebration, and is known within the Ministry as a dedicated worshipper whose personal devotion shapes the vision behind the programme. [More biography detail to be added as it becomes available.]"
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
