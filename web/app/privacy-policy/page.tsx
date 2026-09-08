import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Flaming Bible Church HQ.',
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-deep))', color: '#fff', padding: '48px' }}>
        <h1 style={{ color: '#fff', fontSize: 30 }}>Privacy Policy</h1>
        <p style={{ color: '#cfd8ee', marginTop: 8, fontSize: 14.5 }}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <div className="section" style={{ maxWidth: 760 }}>
        <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginBottom: 20 }}>
          Flaming Bible Church HQ ("we," "our," or "us") operates this website. This
          page explains what information we collect when you visit, and how we use it.
        </p>

        <h2 style={{ fontSize: 18, marginTop: 28, marginBottom: 10 }}>Information We Collect</h2>
        <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginBottom: 20 }}>
          We do not require account creation or collect personal information to browse this
          website. If you contact us by email, we receive the information you choose to include
          in that message (such as your name and email address). We may also use analytics tools
          that collect anonymous, aggregated data about how visitors use the site (such as pages
          viewed and general location), which helps us understand and improve the site.
        </p>

        <h2 style={{ fontSize: 18, marginTop: 28, marginBottom: 10 }}>How We Use Information</h2>
        <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginBottom: 20 }}>
          Any information you send us directly (for example, by email) is used only to respond to
          your inquiry and is not sold or shared with third parties for marketing purposes.
          Aggregated analytics data is used solely to understand site usage and improve the
          website experience.
        </p>

        <h2 style={{ fontSize: 18, marginTop: 28, marginBottom: 10 }}>Cookies</h2>
        <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginBottom: 20 }}>
          This site may use cookies from analytics services to understand aggregate visitor
          behavior. You can disable cookies through your browser settings at any time.
        </p>

        <h2 style={{ fontSize: 18, marginTop: 28, marginBottom: 10 }}>Third-Party Links</h2>
        <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginBottom: 20 }}>
          Our website links to third-party platforms, including Facebook and YouTube, for
          streaming and social media. These platforms have their own privacy policies, and we
          encourage you to review them separately.
        </p>

        <h2 style={{ fontSize: 18, marginTop: 28, marginBottom: 10 }}>Contact Us</h2>
        <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
          If you have questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:flamingbiblechurchhq@yahoo.com" style={{ color: 'var(--navy)', fontWeight: 600 }}>
            flamingbiblechurchhq@yahoo.com
          </a>
          .
        </p>
      </div>
    </main>
  )
}
