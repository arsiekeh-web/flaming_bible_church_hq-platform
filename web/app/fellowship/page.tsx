import Image from 'next/image'

const COORDINATORS = [
  { name: 'Rev. Benjamin Tucker', role: 'Present Coordinator', photo: '/fellowship/ydy/coordinators/benjamin-tucker.jpg' },
  { name: 'Mrs Patricia Amara', role: 'Present Coordinator', photo: '/fellowship/ydy/coordinators/patricia-amara.jpg' },
]

const EXECUTIVES = [
  { name: 'Julian Palmer', role: 'President', phone: '077375815', photo: '/fellowship/ydy/executives/julian-palmer.jpg' },
  { name: 'Amanda Kargbo', role: 'Vice President', phone: '079873767', photo: '/fellowship/ydy/executives/amanda-kargbo.jpg' },
  { name: 'Joseph Fofanah', role: 'Organizing Secretary', phone: '088685222', photo: '/fellowship/ydy/executives/joseph-fofanah.jpg' },
  { name: 'Ruth M. Mbayo', role: 'Secretary General', phone: '032676585', photo: '/fellowship/ydy/executives/ruth-mbayo.jpg' },
  { name: 'Faith Coker', role: 'Treasurer', phone: '080725315', photo: '/fellowship/ydy/executives/faith-coker.jpg' },
]

export const metadata = {
  title: 'Fellowship — YDY',
  description:
    'The Young Dynamic Youth Fellowship (YDY) at Flaming Evangelical Ministries HQ, Ascension Town, Freetown — formed 1998/99 to bridge Children\'s Church and Youth Fellowship. Meet our coordinators and executives.',
}

export default function FellowshipPage({
  searchParams,
}: {
  searchParams: { tab?: string }
}) {
  const activeTab = searchParams.tab ?? 'about'

  return (
    <main>
      <div style={{ position: 'relative', minHeight: 260, overflow: 'hidden' }}>
        <Image
          src="/fellowship/ydy/hero.jpg"
          alt="YDY fellowship members"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          priority
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(122,15,38,0.82), rgba(6,28,74,0.85))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: 48,
          }}
        >
          <span className="pill pill-member" style={{ display: 'inline-block', width: 'fit-content' }}>
            Fellowship
          </span>
          <h1 style={{ color: '#fff', fontSize: 30, margin: '10px 0 4px' }}>Young Dynamic Youth Fellowship (YDY)</h1>
          <p style={{ color: '#cfd8ee', fontSize: 12.5 }}>Ascension Town Young Dynamic Youth Fellowship</p>
        </div>
      </div>

      <div className="section">
        <div style={{ display: 'flex', gap: 6, borderBottom: '2px solid var(--line)', marginBottom: 24, flexWrap: 'wrap' }}>
          <Tab href="/fellowship?tab=about" active={activeTab === 'about'}>
            About
          </Tab>
          <Tab href="/fellowship?tab=events" active={activeTab === 'events'}>
            Events
          </Tab>
          <Tab href="/fellowship?tab=coordinators" active={activeTab === 'coordinators'}>
            Coordinators
          </Tab>
          <Tab href="/fellowship?tab=contact" active={activeTab === 'contact'}>
            Contact
          </Tab>
        </div>

        {activeTab === 'about' && (
          <div>
            <p style={{ lineHeight: 1.8, marginBottom: 16, maxWidth: 720, color: 'var(--gray)' }}>
              The Young Dynamic Youth Fellowship (YDY) was formed in 1998/1999 to bridge the gap between the
              Children&apos;s Church and the Youth Fellowship. At that time, children graduated straight from
              the children&apos;s church into the youth fellowship around age 15, and the age gap between
              younger and older members made it difficult to relate without misunderstandings. Younger ones
              were not yet matured enough to handle the situations of the Youth Fellowship, so the Church
              formed YDY to bridge it — a place for members to grow until they are matured enough to join the
              Youth Fellowship.
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: 20, maxWidth: 720, color: 'var(--gray)' }}>
              YDY was accomplished with the help of Children&apos;s Church teachers who served as coordinators
              in its first years. The current theme of YDY is drawn from John 4:34 —{' '}
              <em>&ldquo;My meat is to do the will of him that sent me, and to finish his work.&rdquo;</em>
            </p>

            <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: 20, marginBottom: 8, maxWidth: 480 }}>
              <p style={{ fontWeight: 600, marginBottom: 6, fontSize: 14 }}>Join YDY</p>
              <p style={{ color: 'var(--gray)', fontSize: 13.5, lineHeight: 1.6 }}>
                Speak with one of the coordinators or executives listed under the Coordinators and Contact
                tabs to join, or come along to a meeting.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <p style={{ color: 'var(--gray)', fontSize: 14 }}>
            No YDY-specific events listed right now. Check the main Events page or follow our Facebook and
            YouTube for announcements.
          </p>
        )}

        {activeTab === 'coordinators' && (
          <div>
            <h2 style={{ fontSize: 18, marginBottom: 16 }}>Present Coordinators</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20, maxWidth: 480 }}>
              {COORDINATORS.map((person) => (
                <PersonCard key={person.name} {...person} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div>
            <p style={{ lineHeight: 1.7, marginBottom: 20 }}>Reach the YDY executives directly, or find us at our next meeting.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
              {EXECUTIVES.map((person) => (
                <PersonCard key={person.name} {...person} phone={person.phone} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

function PersonCard({
  name,
  role,
  photo,
  phone,
}: {
  name: string
  role: string
  photo: string
  phone?: string
}) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative', width: '100%', paddingTop: '100%', borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: 10 }}>
        <Image src={photo} alt={name} fill style={{ objectFit: 'cover' }} />
      </div>
      <p style={{ fontWeight: 600, fontSize: 14 }}>{name}</p>
      <p style={{ color: 'var(--gray)', fontSize: 12.5 }}>{role}</p>
      {phone && (
        <a href={`tel:${phone}`} style={{ color: 'var(--crimson)', fontSize: 12.5, display: 'block', marginTop: 2 }}>
          {phone}
        </a>
      )}
    </div>
  )
}

function Tab({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        padding: '10px 16px',
        fontSize: 13.5,
        fontWeight: 600,
        color: active ? 'var(--crimson)' : 'var(--gray)',
        borderBottom: active ? '2px solid var(--crimson)' : '2px solid transparent',
        marginBottom: -2,
        display: 'inline-block',
      }}
    >
      {children}
    </a>
  )
}
