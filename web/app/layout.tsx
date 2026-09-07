import { Fraunces, Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

// Real font loading — matches the approved prototype (Fraunces for display,
// Inter for body), not system fonts.
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '600', '700', '900'],
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  metadataBase: new URL('https://flaming-bible-church-hq.org'),
  title: {
    default: 'Flaming Evangelical Ministries HQ',
    template: '%s | Flaming Evangelical Ministries HQ',
  },
  description: 'A Bible-believing church in Ascension Town, Freetown, Sierra Leone. "How shall they hear without a preacher?" — Romans 10:14',
  openGraph: {
    title: 'Flaming Evangelical Ministries HQ',
    description: 'A Bible-believing church in Ascension Town, Freetown, Sierra Leone.',
    url: 'https://flaming-bible-church-hq.org',
    siteName: 'Flaming Evangelical Ministries HQ',
    images: ['/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
