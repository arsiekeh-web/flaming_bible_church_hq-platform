import Image from 'next/image'
import { login, signup } from './actions'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string; message?: string; redirect?: string; intent?: string }
}) {
  const params = searchParams

  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, var(--navy-deep), var(--crimson-deep))',
        padding: 40,
      }}
    >
      <div style={{ background: '#fff', borderRadius: 6, padding: '40px 38px', width: 380, textAlign: 'center' }}>
        <Image src="/logo.png" alt="Flaming Evangelical Ministries HQ crest" width={60} height={60} style={{ margin: '0 auto 18px', display: 'block', objectFit: 'contain' }} />

        <h2 style={{ fontSize: 22, marginBottom: 6 }}>Welcome</h2>
        <p style={{ fontSize: 13.5, color: 'var(--gray)', marginBottom: 24 }}>Log in or create a member account</p>

        {params.intent === 'join' && (
          <div style={{ background: 'rgba(10,59,140,.08)', color: 'var(--navy)', fontSize: 12.5, padding: '10px 14px', borderRadius: 4, marginBottom: 18, textAlign: 'left' }}>
            Log in to join this group
          </div>
        )}
        {params.error && (
          <div style={{ background: '#fdecec', color: '#a00', fontSize: 12.5, padding: '10px 14px', borderRadius: 4, marginBottom: 18, textAlign: 'left' }}>
            {params.error}
          </div>
        )}
        {params.message && (
          <div style={{ background: 'rgba(198,149,47,.12)', border: '1px solid var(--gold)', color: '#8a6c1f', fontSize: 12.5, padding: '10px 14px', borderRadius: 4, marginBottom: 18, textAlign: 'left' }}>
            {params.message}
          </div>
        )}

        <form style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {params.redirect && <input type="hidden" name="redirect" value={params.redirect} />}
          <Field label="Full name (signup only)" name="full_name" type="text" />
          <Field label="Email" name="email" type="email" required />
          <Field label="Password" name="password" type="password" required />

          <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
            <button formAction={login} className="btn btn-gold" style={{ flex: 1, padding: 13 }}>
              Log In
            </button>
            <button formAction={signup} className="btn btn-ghost" style={{ flex: 1, padding: 13 }}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <label>
      <span style={{ fontSize: 12.5, fontWeight: 600, display: 'block', marginBottom: 6 }}>{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        style={{ width: '100%', padding: '11px 13px', border: '1.5px solid var(--line)', borderRadius: 4, fontSize: 14 }}
      />
    </label>
  )
}
