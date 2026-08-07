import { createClient } from '@/lib/supabase/server'
import { requireStaff } from '../require-staff'
import { createSermon, deleteSermon, togglePublish } from '../actions'

export default async function AdminSermonsPage() {
  await requireStaff()
  const supabase = await createClient()

  const [{ data: sermons }, { data: speakers }, { data: series }] = await Promise.all([
    supabase
      .from('sermons')
      .select('id, title, sermon_date, video_url, published, speakers(name), series(title)')
      .order('sermon_date', { ascending: false }),
    supabase.from('speakers').select('id, name').order('name', { ascending: true }),
    supabase.from('series').select('id, title').order('title', { ascending: true }),
  ])

  return (
    <div>
      <h1 style={{ fontSize: 22, marginBottom: 20 }}>Sermons</h1>

      <form className="card" style={{ padding: 20, marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3 style={{ fontSize: 15 }}>Add a sermon</h3>
        <Field label="Title" name="title" required />

        <label>
          <span style={{ fontSize: 12.5, fontWeight: 600, display: 'block', marginBottom: 5 }}>Speaker</span>
          <select name="speaker_id" style={{ width: '100%', padding: '9px 11px', border: '1.5px solid var(--line)', borderRadius: 4, fontSize: 13.5 }}>
            <option value="">— none —</option>
            {(speakers ?? []).map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span style={{ fontSize: 12.5, fontWeight: 600, display: 'block', marginBottom: 5 }}>Series</span>
          <select name="series_id" style={{ width: '100%', padding: '9px 11px', border: '1.5px solid var(--line)', borderRadius: 4, fontSize: 13.5 }}>
            <option value="">— none —</option>
            {(series ?? []).map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span style={{ fontSize: 12.5, fontWeight: 600, display: 'block', marginBottom: 5 }}>Sermon date</span>
          <input type="date" name="sermon_date" required style={{ width: '100%', padding: '9px 11px', border: '1.5px solid var(--line)', borderRadius: 4, fontSize: 13.5 }} />
        </label>

        <Field label="Video URL (optional)" name="video_url" placeholder="https://..." />
        <Field label="Description (optional)" name="description" textarea />

        <label style={{ fontSize: 13, display: 'flex', gap: 8, alignItems: 'center' }}>
          <input type="checkbox" name="published" /> Publish immediately (visible on the site right away)
        </label>

        <button formAction={createSermon} className="btn btn-crimson" style={{ alignSelf: 'flex-start' }}>
          Add Sermon
        </button>
      </form>

      {!sermons || sermons.length === 0 ? (
        <p className="meta">No sermons yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {sermons.map((s: any) => (
            <div key={s.id} className="card" style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <div>
                <strong>{s.title}</strong>
                <div className="meta">
                  {s.speakers?.name ?? 'Unknown speaker'}
                  {s.series?.title ? ` · ${s.series.title}` : ''} · {new Date(s.sermon_date).toLocaleDateString('en-GB', { dateStyle: 'medium' })}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
                <span className={`pill ${s.published ? 'pill-member' : 'pill-public'}`}>{s.published ? 'Published' : 'Draft'}</span>
                <form>
                  <input type="hidden" name="id" value={s.id} />
                  <input type="hidden" name="published" value={String(s.published)} />
                  <button formAction={togglePublish} className="btn btn-ghost" style={{ fontSize: 12.5, padding: '8px 14px' }}>
                    {s.published ? 'Unpublish' : 'Publish'}
                  </button>
                </form>
                <form>
                  <input type="hidden" name="id" value={s.id} />
                  <button formAction={deleteSermon} className="btn btn-ghost" style={{ fontSize: 12.5, padding: '8px 14px', color: '#a00' }}>
                    Delete
                  </button>
                </form>
              </div>
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
