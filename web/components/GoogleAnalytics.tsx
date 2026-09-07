import Script from 'next/script'

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  // No-op until NEXT_PUBLIC_GA_ID is set in Netlify's environment variables —
  // avoids sending a fake/placeholder ID to Google.
  if (!gaId) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  )
}
