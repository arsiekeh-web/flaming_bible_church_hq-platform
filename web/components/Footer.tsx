import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--navy-deep)',
        color: '#cfd8ee',
        padding: '32px 24px',
        textAlign: 'center',
        fontSize: 13.5,
      }}
    >
      <div style={{ marginBottom: 8 }}>
        Flaming Evangelical Ministries HQ · Ascension Town, Freetown, Sierra Leone
      </div>
      <div style={{ marginBottom: 8 }}>
        <a href="mailto:flamingbiblechurchhq@yahoo.com" style={{ color: 'var(--gold-light)', textDecoration: 'none' }}>
          flamingbiblechurchhq@yahoo.com
        </a>
      </div>
      <div style={{ marginBottom: 8 }}>
        <Link href="/privacy-policy" style={{ color: '#8fa0c4', textDecoration: 'none', fontSize: 12.5 }}>
          Privacy Policy
        </Link>
      </div>
      <div style={{ color: '#8fa0c4' }}>
        © {new Date().getFullYear()} Flaming Evangelical Ministries HQ. All rights reserved.
      </div>
    </footer>
  )
}
