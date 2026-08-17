import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { PhotoGrid } from '@/components/PhotoGrid'
import { SlideshowSection } from '@/components/SlideshowSection'
import { allImages, CATEGORY_LABELS, HERO_SLIDES } from '@/data/content'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

const filters = [
  { key: 'all', label: 'All' },
  { key: 'hackathon', label: 'Hackathons' },
  { key: 'competition', label: 'Competitions' },
]

function Gallery() {
  const [filter, setFilter] = useState('all')
  const images = allImages()
    .filter((i) => filter === 'all' || i.entry.category === filter)
    .map((i) => ({
      src: i.src,
      caption: `${i.entry.title}, ${CATEGORY_LABELS[i.entry.category]}`,
    }))

  return (
    <>
      {/* Header with slideshow — appropriate here since it's about the photos */}
      <SlideshowSection photos={HERO_SLIDES} overlayOpacity={0.72} className="px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Gallery</p>
          <h1 className="text-4xl font-display text-white sm:text-5xl mb-3">Photo gallery</h1>
          <p className="text-sm text-white/60 max-w-sm">
            Every moment across our hackathons and competitions.
          </p>
          {/* Filter buttons — minimal, not pill */}
          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors"
                style={
                  filter === f.key
                    ? { backgroundColor: '#e4002b', color: '#ffffff', borderRadius: '2px' }
                    : { border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.65)', backgroundColor: 'transparent', borderRadius: '2px' }
                }
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </SlideshowSection>

      {/* Gallery grid */}
      <section className="bg-white px-6 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          {images.length === 0 ? (
            <p className="text-sm text-[#737373]">No photos yet for this category.</p>
          ) : (
            <PhotoGrid images={images} layout="masonry" />
          )}
        </div>
      </section>
    </>
  )
}
