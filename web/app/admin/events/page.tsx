import { createClient } from '@/lib/supabase/server'
import { requireStaff } from '../require-staff'
import { createEvent, deleteEvent } from '../actions'

export default async function AdminEventsPage() {
  await requireStaff()
  const supabase = await createClient()

  const { data: events } = await supabase
    .from('events')
    .select('id, title, start_time, members_only, rsvp_required')
    .order('start_time', { ascending: true })

  return (
    <div>
      <h1 style={{ fontSize: 22, marginBottom: 20 }}>Events</h1>

      <form className="card" style={{ padding: 20, marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3 style={{ fontSize: 15 }}>Add a new event</h3>
        <Field label="Title" name="title" required />
        <Field label="Description" name="description" textarea />
        <Field label="Start date & time" name="start_time" type="datetime-local" required />
        <Field label="Location" name="location" placeholder="e.g. Main Sanctuary" />
        <label style={{ fontSize: 13, display: 'flex', gap: 8, alignItems: 'center' }}>
          <input type="checkbox" name="members_only" /> Members-only event
        </label>
        <label style={{ fontSize: 13, display: 'flex', gap: 8, alignItems: 'center' }}>
          <input type="checkbox" name="rsvp_required" /> Requires RSVP (leave unchecked for routine services)
        </label>
        <button formAction={createEvent} className="btn btn-crimson" style={{ alignSelf: 'flex-start' }}>
          Create Event
        </button>
      </form>

      {!events || events.length === 0 ? (
        <p className="meta">No events yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {events.map((e) => (
            <div key={e.id} className="card" style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{e.title}</strong>
                <div className="meta">
                  {new Date(e.start_time).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
                  {e.members_only && ' · Members only'}
                  {e.rsvp_required && ' · RSVP required'}
                </div>
              </div>
              <form>
                <input type="hidden" name="id" value={e.id} />
                <button formAction={deleteEvent} className="btn btn-ghost" style={{ fontSize: 12.5, padding: '8px 14px', color: '#a00' }}>
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

function Field({ label, name, required, textarea, placeholder, type }: { label: string; name: string; required?: boolean; textarea?: boolean; placeholder?: string; type?: string }) {
  return (
    <label>
      <span style={{ fontSize: 12.5, fontWeight: 600, display: 'block', marginBottom: 5 }}>{label}</span>
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={3} style={{ width: '100%', padding: '9px 11px', border: '1.5px solid var(--line)', borderRadius: 4, fontSize: 13.5, fontFamily: 'inherit' }} />
      ) : (
        <input name={name} type={type ?? 'text'} required={required} placeholder={placeholder} style={{ width: '100%', padding: '9px 11px', border: '1.5px solid var(--line)', borderRadius: 4, fontSize: 13.5 }} />
      )}
    </label>
  )
}
