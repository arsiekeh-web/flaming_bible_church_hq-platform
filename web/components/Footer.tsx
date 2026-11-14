import Link from 'next/link'
import Image from 'next/image'

// Only existing, verified destinations/contact details live here.
const EXPLORE = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/sermons', label: 'Watch & Listen' },
  { href: '/events', label: 'Events' },
  { href: '/fellowship', label: 'Fellowship (YDY)' },
]

const DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=Syke+Street,+Ascension+Town,+Freetown,+Sierra+Leone'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <Image src="/icon-192.png" alt="" width={56} height={56} style={{ flexShrink: 0, borderRadius: '50%' }} />
          <div>
            <div className="footer-brand-name">Flaming Bible Church HQ</div>
            <div className="footer-brand-sub">Flaming Evangelical Ministries International</div>
            <div className="footer-motto">&ldquo;How shall they hear without a preacher?&rdquo; — Romans 10:14</div>
          </div>
        </div>

        <div className="footer-grid">
          <nav aria-label="Footer">
            <h2 className="footer-heading">Explore</h2>
            <ul className="footer-list">
              {EXPLORE.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer-heading">Connect</h2>
            <ul className="footer-list">
              <li>
                <a href="mailto:flamingbiblechurchhq@yahoo.com">flamingbiblechurchhq@yahoo.com</a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/1C8zu2wYax/" target="_blank" rel="noopener noreferrer">
                  Facebook (opens in a new tab)
                </a>
              </li>
              <li>
                <Link href="/sermons">Watch services live</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Headquarters</h2>
            <address className="footer-address">
              Syke Street, Ascension Town
              <br />
              Freetown, Sierra Leone
            </address>
            <ul className="footer-list">
              <li>
                <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                  Get directions (opens in a new tab)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Flaming Bible Church HQ. All rights reserved.</span>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
