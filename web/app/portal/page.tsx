import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function PortalPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Proven by the RLS policy "member_read_own" — Postgres enforces this
  // user can only ever see their own row, not app-level filtering.
  const { data: member } = await supabase
    .from('members')
    .select('full_name, role, created_at')
    .eq('id', user.id)
    .single()

  const { data: groups } = await supabase
    .from('member_group')
    .select('role_in_group, church_groups(name)')
    .eq('member_id', user.id)

  return (
    <main>
      <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-deep))', color: '#fff', padding: '40px 48px' }}>
        <h1 style={{ fontSize: 26, color: '#fff' }}>Welcome back, {member?.full_name ?? 'Member'}</h1>
        <p style={{ color: '#cfd8ee', marginTop: 6, fontSize: 14 }}>
          Role: {member?.role ?? 'member'} · Member since {member?.created_at ? new Date(member.created_at).toLocaleDateString('en-GB', { dateStyle: 'medium' }) : '—'}
        </p>
      </div>

      <div className="section">
        <h2 style={{ fontSize: 20, marginBottom: 16 }}>My Groups</h2>
        {!groups || groups.length === 0 ? (
          <EmptyRow message="You haven't joined a fellowship yet." href="/fellowship" cta="Visit YDY" />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {groups.map((g: any, i: number) => (
              <div key={i} className="card" style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between' }}>
                <strong>{g.church_groups?.name}</strong>
                <span className="pill pill-member">{g.role_in_group}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <form>
          <SignOutButton />
        </form>
      </div>
    </main>
  )
}

function EmptyRow({ message, href, cta }: { message: string; href: string; cta: string }) {
  return (
    <div style={{ border: '1px dashed var(--line)', borderRadius: 4, padding: 24, textAlign: 'center', color: 'var(--gray)', fontSize: 14 }}>
      <p style={{ marginBottom: 12 }}>{message}</p>
      <Link href={href} className="btn btn-crimson">
        {cta}
      </Link>
    </div>
  )
}

function SignOutButton() {
  async function signOut() {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/login')
  }
  return (
    <button formAction={signOut} className="btn btn-ghost">
      Log Out
    </button>
  )
}
