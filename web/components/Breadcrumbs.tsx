import Link from 'next/link'

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ padding: '14px 24px', fontSize: 13, color: 'var(--gray)' }}>
      <ol style={{ display: 'flex', flexWrap: 'wrap', gap: 6, listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link href="/" style={{ color: 'var(--gray)' }}>
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 6 }}>
            <span>/</span>
            {item.href ? (
              <Link href={item.href} style={{ color: 'var(--gray)' }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
