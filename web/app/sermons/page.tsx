import { createClient } from '@/lib/supabase/server'

export const metadata = {
  title: 'Sermons | Flaming Evangelical Ministries HQ',
}

export default async function SermonsPage() {
  const supabase = await createClient()

  const { data: sermons } = await supabase
    .from('sermons')
    .select('id, title, description, sermon_date, video_url, speakers(name), series(title)')
    .eq('published', true)
    .order('sermon_date', { ascending: false })

  return (
    <main>
      <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-deep))', color: '#fff', padding: '48px' }}>
        <h1 style={{ color: '#fff', fontSize: 30 }}>Sermons</h1>
        <p style={{ color: '#cfd8ee', marginTop: 8, fontSize: 14.5 }}>The full sermon archive, newest first.</p>
      </div>

      <div className="section">
        {!sermons || sermons.length === 0 ? (
          <EmptyState message="No sermons published yet. Once staff upload and publish a sermon, it'll show up here." />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {sermons.map((s: any) => (
              <div key={s.id} className="card" style={{ padding: '18px 22px' }}>
                <h3 style={{ fontSize: 16.5, marginBottom: 4 }}>{s.title}</h3>
                <div className="meta" style={{ marginBottom: s.description ? 8 : 0 }}>
                  {s.speakers?.name ?? 'Unknown speaker'}
                  {s.series?.title ? ` · ${s.series.title}` : ''} ·{' '}
                  {new Date(s.sermon_date).toLocaleDateString('en-GB', { dateStyle: 'medium' })}
                </div>
                {s.description && <p style={{ fontSize: 13.5, lineHeight: 1.6, marginBottom: s.video_url ? 10 : 0 }}>{s.description}</p>}
                {s.video_url && (
                  <a href={s.video_url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: 12.5, padding: '8px 14px' }}>
                    Watch →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

function EmptyState({ message }: { message: string }) {
  return (
    <div style={{ border: '1px dashed var(--line)', borderRadius: 4, padding: 32, textAlign: 'center', color: 'var(--gray)', fontSize: 14 }}>
      {message}
    </div>
  )
}
