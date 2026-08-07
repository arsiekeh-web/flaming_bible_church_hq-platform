import Link from 'next/link'
import { requireStaff } from './require-staff'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { member } = await requireStaff()

  return (
    <div>
      <div style={{ background: 'var(--navy-deep)', color: '#fff', padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>Staff Admin</div>
          <div style={{ fontSize: 14 }}>Signed in as {member.full_name}</div>
        </div>
        <Link href="/portal" style={{ fontSize: 13, color: 'var(--gold-light)' }}>
          ← Back to site
        </Link>
      </div>

      <div style={{ display: 'flex', gap: 6, padding: '14px 32px', borderBottom: '1px solid var(--line)', flexWrap: 'wrap' }}>
        <NavLink href="/admin">Overview</NavLink>
        <NavLink href="/admin/events">Events</NavLink>
        <NavLink href="/admin/sermons">Sermons</NavLink>
        <NavLink href="/admin/speakers">Speakers</NavLink>
        <NavLink href="/admin/series">Series</NavLink>
        <NavLink href="/admin/fellowship">Fellowship</NavLink>
        <NavLink href="/admin/members">Members</NavLink>
      </div>

      <div style={{ padding: '32px' }}>{children}</div>
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} style={{ padding: '8px 14px', fontSize: 13.5, fontWeight: 600, color: 'var(--navy)', background: 'var(--cream)', borderRadius: 4, border: '1px solid var(--line)' }}>
      {children}
    </Link>
  )
}
