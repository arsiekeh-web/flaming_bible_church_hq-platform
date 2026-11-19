import Link from 'next/link'

type RelatedDestination = {
  href: string
  title: string
  description: string
  action: string
}

export default function RelatedContent({ items }: { items: RelatedDestination[] }) {
  return (
    <section className="related-content section" aria-labelledby="related-content-title">
      <div className="related-content-heading">
        <div className="eyebrow">Keep exploring</div>
        <h2 id="related-content-title">Continue exploring</h2>
      </div>
      <div className="related-content-grid">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="related-content-card">
            <strong>{item.title}</strong>
            <span className="related-content-description">{item.description}</span>
            <span className="related-content-action">
              {item.action} <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
