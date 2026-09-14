import Image from 'next/image'
import { LeaderCard } from '@/components/LeaderModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import PhotoGallery from '@/components/PhotoGallery'

const BENJAMIN_TUCKER = {
  name: 'Rev. Benjamin Eugene Ifayomi Tucker',
  role: 'Co-Coordinator',
  photo: '/fellowship/ydy/coordinators/benjamin-tucker.jpg',
  bio: 'Rev. Benjamin Eugene Ifayomi Tucker served in the Young Dynamic Youth Fellowship from 2006 to 2017, including eight years as President. During his tenure, he initiated the Juvenile Delinquency Support Project to rehabilitate and reintegrate at-risk youth. Since 2017, he has served as Co-Coordinator of the Fellowship. Rev. Tucker holds a Bachelor\u2019s degree in Civil Engineering. He currently teaches Mathematics at Flaming High School and also works in the Administrative Office of Flaming Evangelical Ministries.',
}

const PATRICIA_AMARA = {
  name: 'Patricia Amara',
  role: 'Present Coordinator',
  photo: '/fellowship/ydy/coordinators/patricia-amara.jpg',
  bio: 'Patricia Amara is a fervent lover of God and Christ. She works as a procurement, supply chain, and logistics professional, holding an MSc in Supply Chain, Procurement and Logistics from the University of Salford and a CIPS diploma from the Chartered Institute of Procurement & Supply. She has served as YDY coordinator for nine years, with a particular passion for mentoring young people, and also worships in the church choir. Outside the church, she runs an online ministry, Woman of Purpose! My Smile My Brand, through which she preaches the Gospel and works to encourage others and build their faith and hope.',
}

const EXECUTIVES = [
  { name: 'Julian Palmer', role: 'President', phone: '077375815', photo: '/fellowship/ydy/executives/julian-palmer.jpg' },
  { name: 'Amanda Kargbo', role: 'Vice President', phone: '079873767', photo: '/fellowship/ydy/executives/amanda-kargbo.jpg' },
  { name: 'Joseph Fofanah', role: 'Organizing Secretary', phone: '088685222', photo: '/fellowship/ydy/executives/joseph-fofanah.jpg' },
  { name: 'Siebatu Ruth Mbayoh', role: 'Secretary General', phone: '032676585', photo: '/fellowship/ydy/executives/ruth-mbayo.jpg' },
  { name: 'Faith Coker', role: 'Treasurer', phone: '080725315', photo: '/fellowship/ydy/executives/faith-coker.jpg' },
]

// Static event listing — each event's photos live under
// /public/fellowship/ydy/events/<event-folder>/
const EVENTS: {
  category: 'Annual' | 'Past' | 'Upcoming'
  name: string
  note?: string
  photos?: string[]
}[] = [
  {
    category: 'Annual',
    name: 'Monthly Bible Study',
    photos: [
      '/fellowship/ydy/events/bible-study/1.jpg',
      '/fellowship/ydy/events/bible-study/2.jpg',
      '/fellowship/ydy/events/bible-study/3.jpg',
      '/fellowship/ydy/events/bible-study/4.jpg',
    ],
  },
  { category: 'Annual', name: 'Conference' },
  { category: 'Annual', name: 'Thanksgiving' },
  {
    category: 'Past',
    name: 'Annual Cleaning',
    photos: ['/fellowship/ydy/events/annual-cleaning/1.jpg', '/fellowship/ydy/events/annual-cleaning/2.jpg'],
  },
  {
    category: 'Past',
    name: 'Welcome Splash',
    photos: [
      '/fellowship/ydy/events/welcome-splash/1.jpg',
      '/fellowship/ydy/events/welcome-splash/2.jpg',
      '/fellowship/ydy/events/welcome-splash/3.jpg',
      '/fellowship/ydy/events/welcome-splash/4.jpg',
    ],
  },
  {
    category: 'Past',
    name: 'Hiking',
    photos: ['/fellowship/ydy/events/hiking/1.jpg', '/fellowship/ydy/events/hiking/2.jpg', '/fellowship/ydy/events/hiking/3.jpg'],
  },
  {
    category: 'Past',
    name: 'Conference',
    note: '8th Annual Conference — "Arise and Takeover" (Isaiah 60:1–3) · Saturday, Sept 12 · Flaming Church Hall',
    photos: [
      '/fellowship/ydy/events/conference/flyer-2026.jpg',
      '/fellowship/ydy/events/conference/moment-01.jpg',
      '/fellowship/ydy/events/conference/moment-02.jpg',
      '/fellowship/ydy/events/conference/moment-03.jpg',
      '/fellowship/ydy/events/conference/moment-04.jpg',
      '/fellowship/ydy/events/conference/moment-05.jpg',
      '/fellowship/ydy/events/conference/moment-06.jpg',
      '/fellowship/ydy/events/conference/moment-07.jpg',
      '/fellowship/ydy/events/conference/moment-08.jpg',
      '/fellowship/ydy/events/conference/moment-09.jpg',
      '/fellowship/ydy/events/conference/moment-10.jpg',
      '/fellowship/ydy/events/conference/moment-11.jpg',
      '/fellowship/ydy/events/conference/moment-12.jpg',
      '/fellowship/ydy/events/conference/moment-13.jpg',
      '/fellowship/ydy/events/conference/moment-14.jpg',
      '/fellowship/ydy/events/conference/moment-15.jpg',
      '/fellowship/ydy/events/conference/moment-16.jpg',
      '/fellowship/ydy/events/conference/moment-17.jpg',
      '/fellowship/ydy/events/conference/moment-18.jpg',
      '/fellowship/ydy/events/conference/moment-19.jpg',
      '/fellowship/ydy/events/conference/moment-20.jpg',
      '/fellowship/ydy/events/conference/moment-21.jpg',
      '/fellowship/ydy/events/conference/moment-22.jpg',
      '/fellowship/ydy/events/conference/moment-23.jpg',
    ],
  },
  {
    category: 'Past',
    name: 'Thanksgiving',
    note: 'YDY Thanksgiving Service — Sunday, September 13 · Flaming Bible Church HQ (Headquarters Church)',
    photos: [
      '/fellowship/ydy/events/thanksgiving/1.jpg',
      '/fellowship/ydy/events/thanksgiving/2.jpg',
      '/fellowship/ydy/events/thanksgiving/3.jpg',
      '/fellowship/ydy/events/thanksgiving/4.jpg',
      '/fellowship/ydy/events/thanksgiving/5.jpg',
      '/fellowship/ydy/events/thanksgiving/6.jpg',
      '/fellowship/ydy/events/thanksgiving/7.jpg',
      '/fellowship/ydy/events/thanksgiving/8.jpg',
      '/fellowship/ydy/events/thanksgiving/9.jpg',
      '/fellowship/ydy/events/thanksgiving/10.jpg',
      '/fellowship/ydy/events/thanksgiving/11.jpg',
      '/fellowship/ydy/events/thanksgiving/12.jpg',
      '/fellowship/ydy/events/thanksgiving/13.jpg',
      '/fellowship/ydy/events/thanksgiving/14.jpg',
      '/fellowship/ydy/events/thanksgiving/15.jpg',
      '/fellowship/ydy/events/thanksgiving/16.jpg',
    ],
  },
]

export const metadata = {
  title: 'Fellowship — YDY',
  description:
    'The Young Dynamic Youth Fellowship (YDY) at Flaming Bible Church HQ, Ascension Town, Freetown — formed 1998/99 to bridge Children\'s Church and Youth Fellowship. Meet our coordinators and executives.',
}

export default function FellowshipPage({
  searchParams,
}: {
  searchParams: { tab?: string }
}) {
  const activeTab = searchParams.tab ?? 'about'

  return (
    <main>
      <Breadcrumbs items={[{ label: 'Fellowship' }]} />
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
              in its first years.
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
          <div>
            <EventGroup title="Annual Events" events={EVENTS.filter((e) => e.category === 'Annual')} />
            <YearBanner year="2026" tagline="A Year of Fellowship, Growth & Faith" />
            <EventGroup title="Past Events" events={EVENTS.filter((e) => e.category === 'Past')} showYear />
            <EventGroup title="Upcoming Events" events={EVENTS.filter((e) => e.category === 'Upcoming')} />
          </div>
        )}

        {activeTab === 'coordinators' && (
          <div>
            <h2 style={{ fontSize: 18, marginBottom: 16 }}>Present Coordinators</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, maxWidth: 700 }}>
              <LeaderCard photo={PATRICIA_AMARA.photo} leader={PATRICIA_AMARA} />
              <LeaderCard photo={BENJAMIN_TUCKER.photo} leader={BENJAMIN_TUCKER} />
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

function YearBanner({ year, tagline }: { year: string; tagline: string }) {
  return (
    <div style={{ textAlign: 'center', margin: '48px 0 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10 }}>
        <span style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
        <span
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 700,
            fontSize: 40,
            letterSpacing: '0.06em',
            color: 'var(--navy-deep)',
          }}
        >
          {year}
        </span>
        <span style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
      </div>
      <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)' }}>
        {tagline}
      </div>
    </div>
  )
}

function YearBadge() {
  return (
    <span
      style={{
        display: 'inline-block',
        background: 'rgba(198,149,47,0.12)',
        border: '1px solid var(--gold)',
        color: 'var(--gold)',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.06em',
        padding: '2px 9px',
        borderRadius: 999,
      }}
    >
      2026
    </span>
  )
}

function EventGroup({
  title,
  events,
  showYear,
}: {
  title: string
  events: { name: string; note?: string; photos?: string[] }[]
  showYear?: boolean
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 18, marginBottom: 14 }}>{title}</h2>
      {events.length === 0 ? (
        <p style={{ color: 'var(--gray)', fontSize: 13.5 }}>Nothing listed here yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {events.map((e) => {
            const isFeatured = e.photos && e.photos.length > 4

            if (isFeatured) {
              return (
                <div
                  key={e.name}
                  style={{
                    background: 'linear-gradient(180deg, var(--cream), #fff)',
                    border: '1px solid var(--line)',
                    borderRadius: 12,
                    padding: '28px 24px',
                    boxShadow: '0 8px 24px rgba(6,28,74,0.08)',
                  }}
                >
                  <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                    <div
                      style={{
                        display: 'inline-block',
                        background: 'var(--navy-deep)',
                        color: 'var(--gold-light)',
                        fontSize: 10.5,
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '5px 12px',
                        borderRadius: 999,
                      }}
                    >
                      Highlights
                    </div>
                    {showYear && <YearBadge />}
                  </div>
                  <h3 style={{ fontSize: 20, marginBottom: 6 }}>{e.name}</h3>
                  {e.note && <p style={{ fontSize: 13.5, color: 'var(--gray)', marginBottom: 18 }}>{e.note}</p>}
                  <PhotoGallery photos={e.photos!} alt={e.name} />
                </div>
              )
            }

            return (
              <div key={e.name} className="card" style={{ padding: '16px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: e.note ? 4 : 0 }}>
                  <h3 style={{ fontSize: 15.5 }}>{e.name}</h3>
                  {showYear && <YearBadge />}
                </div>
                {e.note && <p style={{ fontSize: 13, color: 'var(--gray)' }}>{e.note}</p>}
                {e.photos && e.photos.length === 1 && (
                  <div style={{ position: 'relative', width: '100%', maxWidth: 280, marginTop: 12, borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
                    <Image src={e.photos[0]} alt={e.name} width={810} height={1080} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                )}
                {e.photos && e.photos.length > 1 && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 12 }}>
                    {e.photos.map((src) => (
                      <div key={src} style={{ position: 'relative', width: '100%', paddingTop: '100%', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                        <Image src={src} alt={e.name} fill style={{ objectFit: 'cover' }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
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
