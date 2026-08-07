import { createClient } from '@/lib/supabase/server'
import { requireStaff } from '../require-staff'
import { createFellowship, deleteFellowship } from '../actions'

export default async function AdminFellowshipPage() {
  await requireStaff()
  const supabase = await createClient()

  const { data: fellowships } = await supabase
    .from('church_groups')
    .select('id, name, description, meeting_schedule, has_dedicated_page, page_slug')
    .eq('category', 'fellowship')
    .order('name', { ascending: true })

  return (
    <div>
      <h1 style={{ fontSize: 22, marginBottom: 20 }}>Fellowship</h1>

      <form className="card" style={{ padding: 20, marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3 style={{ fontSize: 15 }}>Add a new fellowship</h3>
        <Field label="Name" name="name" required />
        <Field label="Description" name="description" textarea />
        <Field label="Meeting schedule" name="meeting_schedule" placeholder="e.g. Fridays · 6:00 PM · Fellowship Hall" />
        <label style={{ fontSize: 13, display: 'flex', gap: 8, alignItems: 'center' }}>
          <input type="checkbox" name="has_dedicated_page" /> Give this fellowship its own mini-site (tabs page, like YDY)
        </label>
        <Field label="Page slug (only if mini-site checked)" name="page_slug" placeholder="e.g. ydy" />
        <button formAction={createFellowship} className="btn btn-crimson" style={{ alignSelf: 'flex-start' }}>
          Create Fellowship
        </button>
      </form>

      {!fellowships || fellowships.length === 0 ? (
        <p className="meta">No fellowships yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {fellowships.map((f) => (
            <div key={f.id} className="card" style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{f.name}</strong>
                <div className="meta">
                  {f.meeting_schedule ?? 'No schedule set'} {f.has_dedicated_page && `· mini-site at /fellowship/${f.page_slug}`}
                </div>
              </div>
              <form>
                <input type="hidden" name="id" value={f.id} />
                <button formAction={deleteFellowship} className="btn btn-ghost" style={{ fontSize: 12.5, padding: '8px 14px', color: '#a00' }}>
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

function Field({ label, name, required, textarea, placeholder }: { label: string; name: string; required?: boolean; textarea?: boolean; placeholder?: string }) {
  return (
    <label>
      <span style={{ fontSize: 12.5, fontWeight: 600, display: 'block', marginBottom: 5 }}>{label}</span>
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={3} style={{ width: '100%', padding: '9px 11px', border: '1.5px solid var(--line)', borderRadius: 4, fontSize: 13.5, fontFamily: 'inherit' }} />
      ) : (
        <input name={name} required={required} placeholder={placeholder} style={{ width: '100%', padding: '9px 11px', border: '1.5px solid var(--line)', borderRadius: 4, fontSize: 13.5 }} />
      )}
    </label>
  )
}
