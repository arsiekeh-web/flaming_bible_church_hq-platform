import Image from 'next/image'

type PageMastheadProps = {
  eyebrow: string
  title: string
  description: string
  image?: {
    src: string
    alt: string
    position?: string
  }
}

export default function PageMasthead({ eyebrow, title, description, image }: PageMastheadProps) {
  return (
    <header className={`page-masthead${image ? ' page-masthead-media' : ' page-masthead-text'}`}>
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="page-masthead-image"
          style={{ objectPosition: image.position ?? 'center' }}
        />
      )}
      <div className="page-masthead-shade" aria-hidden="true" />
      <div className="page-masthead-content">
        <div className="page-masthead-eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  )
}
