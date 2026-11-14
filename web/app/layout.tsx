import localFont from 'next/font/local'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

// Fonts are self-hosted (variable WOFF2 in app/fonts/) so builds never depend
// on fetching Google Fonts, and visitors make no third-party font request.
// Same families as the approved prototype: Fraunces (display), Inter (body).
const fraunces = localFont({
  src: './fonts/Fraunces-Variable.woff2',
  variable: '--font-fraunces',
  weight: '100 900',
  display: 'swap',
})
const inter = localFont({
  src: './fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  weight: '100 900',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://flaming-bible-church-hq.org'),
  title: {
    default: 'Flaming Bible Church HQ',
    template: '%s | Flaming Bible Church HQ',
  },
  description: 'Flaming Bible Church HQ (Flaming Evangelical Ministries International) — a Bible-believing church in Ascension Town, Freetown, Sierra Leone. "How shall they hear without a preacher?" — Romans 10:14',
  openGraph: {
    title: 'Flaming Bible Church HQ',
    description: 'A Bible-believing church in Ascension Town, Freetown, Sierra Leone.',
    url: 'https://flaming-bible-church-hq.org',
    siteName: 'Flaming Bible Church HQ',
    images: ['/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: 'Flaming Bible Church HQ',
    alternateName: 'Flaming Evangelical Ministries International',
    url: 'https://flaming-bible-church-hq.org',
    logo: 'https://flaming-bible-church-hq.org/icon-512.png',
    image: 'https://flaming-bible-church-hq.org/og-image.jpg',
    email: 'flamingbiblechurchhq@yahoo.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Syke Street, Ascension Town',
      addressLocality: 'Freetown',
      addressCountry: 'SL',
    },
    sameAs: ['https://www.facebook.com/share/1C8zu2wYax/'],
  }

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
