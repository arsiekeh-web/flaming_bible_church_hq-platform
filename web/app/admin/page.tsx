import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { requireStaff } from './require-staff'

export default async function AdminOverview() {
  await requireStaff()
  const supabase = await createClient()

  const [{ count: memberCount }, { count: eventCount }, { count: sermonCount }] = await Promise.all([
    supabase.from('members').select('*', { count: 'exact', head: true }),
    supabase.from('events').select('*', { count: 'exact', head: true }),
    supabase.from('sermons').select('*', { count: 'exact', head: true }),
  ])

  return (
    <div>
      <h1 style={{ fontSize: 24, marginBottom: 20 }}>Overview</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        <StatCard label="Members" value={memberCount ?? 0} href="/admin/members" />
        <StatCard label="Events" value={eventCount ?? 0} href="/admin/events" />
        <StatCard label="Sermons" value={sermonCount ?? 0} href="/admin/sermons" />
      </div>
    </div>
  )
}

function StatCard({ label, value, href }: { label: string; value: number; href: string }) {
  return (
    <Link href={href} className="card" style={{ padding: 20, display: 'block' }}>
      <div style={{ fontSize: 32, fontFamily: 'var(--font-fraunces)', fontWeight: 700 }}>{value}</div>
      <div className="meta">{label}</div>
    </Link>
  )
}
