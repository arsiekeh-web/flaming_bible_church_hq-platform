import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <main>
      <div
        style={{
          background: 'linear-gradient(135deg, var(--navy), var(--navy-deep))',
          color: '#fff',
          padding: '80px 48px',
          textAlign: 'center',
        }}
      >
        <div style={{ color: 'var(--gold-light)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
          404
        </div>
        <h1 style={{ color: '#fff', fontSize: 30, marginBottom: 12 }}>Page Not Found</h1>
        <p style={{ color: '#cfd8ee', fontSize: 15, maxWidth: 480, margin: '0 auto 28px' }}>
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            background: 'var(--gold-light)',
            color: 'var(--navy-deep)',
            fontWeight: 700,
            padding: '12px 28px',
            borderRadius: 6,
            textDecoration: 'none',
          }}
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}
