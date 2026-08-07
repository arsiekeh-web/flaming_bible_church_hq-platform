import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'
import { joinFellowship } from './actions'

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

const YDY_APP_LINK = 'https://ydy-link-life.base44.app'

export const metadata = {
  title: 'Fellowship | Flaming Evangelical Ministries HQ',
}

export default async function FellowshipPage({
  searchParams,
}: {
  searchParams: { joined?: string; error?: string; tab?: string }
}) {
  const supabase = await createClient()

  // YDY is the only fellowship under this tab, looked up by its page_slug
  // rather than a hardcoded id, so this page keeps working even if the
  // group's database row changes.
  const { data: group } = await supabase
    .from('church_groups')
    .select('id, name, description, meeting_schedule')
    .eq('page_slug', 'ydy')
    .single()

  if (!group) {
    return (
      <main className="section">
        <p>YDY isn&apos;t set up in the database yet. Add a row to <code>church_groups</code> with <code>page_slug = &apos;ydy&apos;</code>.</p>
      </main>
    )
  }

  const activeTab = searchParams.tab ?? 'about'
  const returnPath = '/fellowship'
  const boundJoin = joinFellowship.bind(null, group.id, returnPath)

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
          <h1 style={{ color: '#fff', fontSize: 30, margin: '10px 0 4px' }}>{group.name}</h1>
          <p style={{ color: '#cfd8ee', fontSize: 12.5 }}>Part of Flaming Evangelical Ministries HQ — same login, same account.</p>
        </div>
      </div>

      <div className="section">
        {searchParams.joined && (
          <div style={{ background: 'rgba(198,149,47,.12)', border: '1px solid var(--gold)', padding: '12px 16px', borderRadius: 4, marginBottom: 20, fontSize: 13.5 }}>
            You&apos;re in! The group leader will be notified.
          </div>
        )}
        {searchParams.error && (
          <div style={{ background: '#fdecec', color: '#a00', padding: '12px 16px', borderRadius: 4, marginBottom: 20, fontSize: 13.5 }}>
            {searchParams.error}
          </div>
        )}

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
            {group.meeting_schedule && <div className="meta" style={{ marginBottom: 14 }}>🗓 {group.meeting_schedule}</div>}
            {group.description && <p style={{ lineHeight: 1.7, marginBottom: 20 }}>{group.description}</p>}

            <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: 20, marginBottom: 20, maxWidth: 480 }}>
              <p style={{ fontWeight: 600, marginBottom: 6, fontSize: 14 }}>YDY Members App</p>
              <p style={{ color: 'var(--gray)', fontSize: 13.5, lineHeight: 1.6, marginBottom: 12 }}>
                Catch up on bible studies you missed, read summarized notes, and stay on top of activities — for YDY members only.
              </p>
              <a href={YDY_APP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-block' }}>
                Open YDY App
              </a>
            </div>

            <form action={boundJoin}>
              <button type="submit" className="btn btn-crimson">
                Join YDY
              </button>
            </form>
          </div>
        )}

        {activeTab === 'events' && (
          <p style={{ color: 'var(--gray)', fontSize: 14 }}>
            No YDY-specific events listed yet. Once staff tag events for this group in the admin dashboard, they&apos;ll appear here.
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
    <Link
      href={href}
      style={{
        padding: '10px 16px',
        fontSize: 13.5,
        fontWeight: 600,
        color: active ? 'var(--crimson)' : 'var(--gray)',
        borderBottom: active ? '2px solid var(--crimson)' : '2px solid transparent',
        marginBottom: -2,
      }}
    >
      {children}
    </Link>
  )
}
