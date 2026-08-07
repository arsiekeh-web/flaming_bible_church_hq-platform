import { createClient } from '@/lib/supabase/server'
import { requireStaff } from '../require-staff'
import { setMemberRole } from '../actions'

export default async function AdminMembersPage() {
  await requireStaff()
  const supabase = await createClient()

  const { data: members } = await supabase
    .from('members')
    .select('id, full_name, role, created_at')
    .order('created_at', { ascending: false })

  return (
    <div>
      <h1 style={{ fontSize: 22, marginBottom: 6 }}>Members</h1>
      <p className="meta" style={{ marginBottom: 20 }}>
        There is no self-service way to become staff — promotion only happens here, by an existing staff member. Be careful who you promote.
      </p>

      {!members || members.length === 0 ? (
        <p className="meta">No members yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {members.map((m) => (
            <div key={m.id} className="card" style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{m.full_name}</strong>
                <div className="meta">
                  Joined {new Date(m.created_at).toLocaleDateString('en-GB', { dateStyle: 'medium' })} · <span className={m.role === 'staff' ? 'pill pill-member' : 'pill pill-public'}>{m.role}</span>
                </div>
              </div>
              <form>
                <input type="hidden" name="id" value={m.id} />
                <input type="hidden" name="role" value={m.role === 'staff' ? 'member' : 'staff'} />
                <button formAction={setMemberRole} className="btn btn-ghost" style={{ fontSize: 12.5, padding: '8px 14px' }}>
                  {m.role === 'staff' ? 'Demote to Member' : 'Promote to Staff'}
                </button>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
