'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { reverence2026Chapters, type ReverencePhoto } from '@/lib/reverence-2026'

const allPhotos = reverence2026Chapters.flatMap((chapter) => chapter.photos)

export default function ReverencePhotoStory() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const isOpen = activeIndex !== null
  const activePhoto = activeIndex === null ? null : allPhotos[activeIndex]

  useEffect(() => {
    if (!isOpen) return
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.requestAnimationFrame(() => closeButtonRef.current?.focus())

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null)
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((index) => index === null ? 0 : (index + 1) % allPhotos.length)
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((index) => index === null ? allPhotos.length - 1 : (index - 1 + allPhotos.length) % allPhotos.length)
      } else if (event.key === 'Tab' && dialogRef.current) {
        const buttons = Array.from(dialogRef.current.querySelectorAll<HTMLButtonElement>('button:not([disabled])'))
        const first = buttons[0]
        const last = buttons[buttons.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previousFocusRef.current?.focus()
    }
  }, [isOpen])

  const openPhoto = (photo: ReverencePhoto) => {
    setActiveIndex(allPhotos.indexOf(photo))
  }

  return (
    <>
      <nav className="rev-chapter-nav" aria-label="Photo story chapters">
        {reverence2026Chapters.map((chapter) => (
          <a key={chapter.id} href={`#${chapter.id}`}>
            <span>{chapter.number}</span>{chapter.title}
          </a>
        ))}
      </nav>

      <div className="rev-story-chapters">
        {reverence2026Chapters.map((chapter) => (
          <section className="rev-story-chapter" id={chapter.id} key={chapter.id} aria-labelledby={`${chapter.id}-title`}>
            <div className="rev-chapter-heading">
              <span className="rev-chapter-number">{chapter.number} / 05</span>
              <div>
                <h2 id={`${chapter.id}-title`}>{chapter.title}</h2>
                <p>{chapter.introduction}</p>
              </div>
            </div>
            <div className="rev-photo-grid">
              {chapter.photos.map((photo, index) => (
                <figure className={`rev-photo-card${index === 0 ? ' rev-photo-card-lead' : ''}`} key={photo.src}>
                  <button
                    type="button"
                    className="rev-photo-button"
                    aria-label={`Open photo: ${photo.caption}`}
                    onClick={() => openPhoto(photo)}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 620px"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <span className="rev-photo-expand" aria-hidden="true">View photo</span>
                  </button>
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>

      {activePhoto && activeIndex !== null && (
        <div className="rev-lightbox-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setActiveIndex(null)
        }}>
          <div
            className="rev-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Photo ${activeIndex + 1} of ${allPhotos.length}: ${activePhoto.caption}`}
            ref={dialogRef}
          >
            <button ref={closeButtonRef} type="button" className="rev-lightbox-close" onClick={() => setActiveIndex(null)} aria-label="Close photo">
              <span aria-hidden="true">×</span>
            </button>
            <button
              type="button"
              className="rev-lightbox-arrow rev-lightbox-previous"
              onClick={() => setActiveIndex((activeIndex - 1 + allPhotos.length) % allPhotos.length)}
              aria-label="Previous photo"
            >
              <span aria-hidden="true">←</span>
            </button>
            <figure className="rev-lightbox-figure">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                width={activePhoto.width}
                height={activePhoto.height}
                sizes="(max-width: 960px) calc(100vw - 40px), 1200px"
                style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: 'calc(100vh - 112px)', objectFit: 'contain' }}
                priority
              />
              <figcaption>
                <span>{activePhoto.caption}</span>
                <span>{String(activeIndex + 1).padStart(2, '0')} / {String(allPhotos.length).padStart(2, '0')}</span>
              </figcaption>
            </figure>
            <button
              type="button"
              className="rev-lightbox-arrow rev-lightbox-next"
              onClick={() => setActiveIndex((activeIndex + 1) % allPhotos.length)}
              aria-label="Next photo"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
