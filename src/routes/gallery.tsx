import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { PhotoGrid } from '@/components/PhotoGrid'
import { SlideshowSection } from '@/components/SlideshowSection'
import { allImages, HERO_SLIDES } from '@/data/content'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

const SECTION_LIMIT = 10

const SECTIONS = [
  { key: 'competition', label: 'Competitions' },
  { key: 'hackathon', label: 'Hackathons' },
]

function GallerySection({ categoryKey, label }) {
  const [expanded, setExpanded] = useState(false)

  const images = allImages()
    .filter((i) => i.entry.category === categoryKey)
    .map((i) => ({
      src: i.src,
      caption: i.caption,
    }))

  const visible = expanded ? images : images.slice(0, SECTION_LIMIT)
  const remaining = images.length - SECTION_LIMIT

  return (
    <section className="py-12 sm:py-16 border-b border-[#e4e7ec] last:border-none">
      <div className="flex items-baseline justify-between mb-8 gap-4">
        <h2 className="text-2xl font-bold text-[#001a48]">{label}</h2>
        <span className="text-sm text-[#667085] shrink-0">{images.length} photos</span>
      </div>

      {images.length === 0 ? (
        <p className="text-sm text-[#737373]">No photos yet.</p>
      ) : (
        <>
          <PhotoGrid images={visible} layout="masonry" />
          {!expanded && remaining > 0 && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="btn-outline"
              >
                See {remaining} more {remaining === 1 ? 'photo' : 'photos'}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  )
}

function Gallery() {
  return (
    <>
      <SlideshowSection photos={HERO_SLIDES} overlayOpacity={0.72} className="px-5 py-14 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Gallery</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-3">Photo gallery</h1>
          <p className="text-sm text-white/60 max-w-sm">
            Every moment across our hackathons and competitions.
          </p>
        </div>
      </SlideshowSection>

      <div className="bg-white px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          {SECTIONS.map((s) => (
            <GallerySection key={s.key} categoryKey={s.key} label={s.label} />
          ))}
        </div>
      </div>
    </>
  )
}
