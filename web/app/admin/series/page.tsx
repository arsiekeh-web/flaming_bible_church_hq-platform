import { createClient } from '@/lib/supabase/server'
import { requireStaff } from '../require-staff'
import { createSeries, deleteSeries } from '../actions'

export default async function AdminSeriesPage() {
  await requireStaff()
  const supabase = await createClient()

  const { data: series } = await supabase.from('series').select('id, title, description').order('title', { ascending: true })

  return (
    <div>
      <h1 style={{ fontSize: 22, marginBottom: 20 }}>Sermon Series</h1>

      <form className="card" style={{ padding: 20, marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3 style={{ fontSize: 15 }}>Add a series</h3>
        <label>
          <span style={{ fontSize: 12.5, fontWeight: 600, display: 'block', marginBottom: 5 }}>Title</span>
          <input name="title" required style={{ width: '100%', padding: '9px 11px', border: '1.5px solid var(--line)', borderRadius: 4, fontSize: 13.5 }} />
        </label>
        <label>
          <span style={{ fontSize: 12.5, fontWeight: 600, display: 'block', marginBottom: 5 }}>Description (optional)</span>
          <textarea name="description" rows={2} style={{ width: '100%', padding: '9px 11px', border: '1.5px solid var(--line)', borderRadius: 4, fontSize: 13.5, fontFamily: 'inherit' }} />
        </label>
        <button formAction={createSeries} className="btn btn-crimson" style={{ alignSelf: 'flex-start' }}>
          Add Series
        </button>
      </form>

      {!series || series.length === 0 ? (
        <p className="meta">No series yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {series.map((s) => (
            <div key={s.id} className="card" style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong>{s.title}</strong>
              <form>
                <input type="hidden" name="id" value={s.id} />
                <button formAction={deleteSeries} className="btn btn-ghost" style={{ fontSize: 12.5, padding: '8px 14px', color: '#a00' }}>
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
