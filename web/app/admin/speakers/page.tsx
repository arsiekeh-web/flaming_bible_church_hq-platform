import { createClient } from '@/lib/supabase/server'
import { requireStaff } from '../require-staff'
import { createSpeaker, deleteSpeaker } from '../actions'

export default async function AdminSpeakersPage() {
  await requireStaff()
  const supabase = await createClient()

  const { data: speakers } = await supabase.from('speakers').select('id, name, bio').order('name', { ascending: true })

  return (
    <div>
      <h1 style={{ fontSize: 22, marginBottom: 20 }}>Speakers</h1>

      <form className="card" style={{ padding: 20, marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3 style={{ fontSize: 15 }}>Add a speaker</h3>
        <label>
          <span style={{ fontSize: 12.5, fontWeight: 600, display: 'block', marginBottom: 5 }}>Name</span>
          <input name="name" required style={{ width: '100%', padding: '9px 11px', border: '1.5px solid var(--line)', borderRadius: 4, fontSize: 13.5 }} />
        </label>
        <label>
          <span style={{ fontSize: 12.5, fontWeight: 600, display: 'block', marginBottom: 5 }}>Bio (optional)</span>
          <textarea name="bio" rows={2} style={{ width: '100%', padding: '9px 11px', border: '1.5px solid var(--line)', borderRadius: 4, fontSize: 13.5, fontFamily: 'inherit' }} />
        </label>
        <button formAction={createSpeaker} className="btn btn-crimson" style={{ alignSelf: 'flex-start' }}>
          Add Speaker
        </button>
      </form>

      {!speakers || speakers.length === 0 ? (
        <p className="meta">No speakers yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {speakers.map((s) => (
            <div key={s.id} className="card" style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong>{s.name}</strong>
              <form>
                <input type="hidden" name="id" value={s.id} />
                <button formAction={deleteSpeaker} className="btn btn-ghost" style={{ fontSize: 12.5, padding: '8px 14px', color: '#a00' }}>
                  Delete
                </button>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
