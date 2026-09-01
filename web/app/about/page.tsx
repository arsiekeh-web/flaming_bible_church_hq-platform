import { LeaderCard } from '@/components/LeaderModal'
import { LEADERS } from '@/lib/leaders'

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
        <p style={{ fontSize: 12.5, color: 'var(--gray)', marginBottom: 20 }}>Tap a card to read the full biography.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
          <LeaderCard photo={LEADERS.bishop.photo} leader={LEADERS.bishop} />
          <LeaderCard photo={LEADERS.patricia.photo} leader={LEADERS.patricia} />
        </div>
      </div>

      {/* --- Head Pastor --- */}
      <div className="section" style={{ paddingTop: 0 }}>
        <h2 style={{ fontSize: 22, marginBottom: 20 }}>Head Pastor</h2>
        <div style={{ maxWidth: 480 }}>
          <LeaderCard photo={LEADERS.pastor.photo} leader={LEADERS.pastor} />
        </div>
      </div>
    </main>
  )
      }
