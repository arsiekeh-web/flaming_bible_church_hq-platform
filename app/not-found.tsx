import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <div
        style={{
          background: 'linear-gradient(135deg, var(--navy), var(--navy-deep))',
          color: '#fff',
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
          textAlign: 'center',
        }}
      >
        <div style={{ color: 'var(--gold-light)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
          404
        </div>
        <h1 style={{ color: '#fff', fontSize: 30, marginBottom: 12 }}>Page Not Found</h1>
        <p style={{ color: '#cfd8ee', fontSize: 14.5, maxWidth: 420, marginBottom: 28 }}>
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link href="/" className="btn btn-gold">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
