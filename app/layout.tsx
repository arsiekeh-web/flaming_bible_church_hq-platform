import { Fraunces, Inter } from 'next/font/google'
import Nav from '@/components/Nav'
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

// TODO: replace with the real domain once purchased — used for canonical
// URLs and absolute Open Graph image paths. Search engines and social
// platforms need an absolute URL here, not a relative one.
const SITE_URL = 'https://your-domain-here.com'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Flaming Evangelical Ministries HQ',
    template: '%s | Flaming Evangelical Ministries HQ',
  },
  description:
    'Flaming Evangelical Ministries HQ is a Christ-centred church in Ascension Town, Freetown, Sierra Leone, led by Bishop Dr. Frederick Abu Sidique Koroma. Join us for Sunday Service, Bible Study, and Midweek Service — "How shall they hear without a preacher?" (Romans 10:14)',
  keywords: [
    'Flaming Evangelical Ministries',
    'Flaming Bible Church',
    'church in Freetown Sierra Leone',
    'Ascension Town church',
    'Bishop Frederick Koroma',
    'Pentecostal church Sierra Leone',
    'Sunday service Freetown',
    'Young Dynamic Youth Fellowship',
    'YDY fellowship',
    'Reverence worship night',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Flaming Evangelical Ministries HQ',
    title: 'Flaming Evangelical Ministries HQ',
    description: '"How shall they hear without a preacher?" — Romans 10:14. Join us in Ascension Town, Freetown, Sierra Leone.',
    url: SITE_URL,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Flaming Evangelical Ministries HQ' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flaming Evangelical Ministries HQ',
    description: '"How shall they hear without a preacher?" — Romans 10:14',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
