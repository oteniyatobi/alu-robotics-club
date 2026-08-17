import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const shapes = [
  'aspect-[4/3]', 'aspect-[3/4]', 'aspect-square',
  'aspect-[3/4]', 'aspect-[16/10]', 'aspect-[4/5]',
  'aspect-square', 'aspect-[5/4]',
]
const rounding = ['rounded-2xl', 'rounded-lg', 'rounded-3xl', 'rounded-xl']

export function PhotoGrid({ images, columns = 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', layout = 'grid' }) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => ((i ?? 0) + 1) % images.length)
      if (e.key === 'ArrowLeft') setActive((i) => ((i ?? 0) - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, images.length])

  const current = active === null ? null : images[active]

  const tile = (image, i) => (
    <button
      key={image.caption + i}
      type="button"
      onClick={() => setActive(i)}
      className={`group relative w-full overflow-hidden bg-[#f1f5fb] text-left border border-[#d4dff0] ${
        layout === 'masonry'
          ? `mb-3 block break-inside-avoid ${rounding[i % rounding.length]}`
          : 'rounded-xl'
      }`}
    >
      <img
        src={image.src}
        alt={image.caption}
        loading="lazy"
        className={`w-full object-cover transition duration-400 group-hover:scale-105 group-hover:brightness-110 ${
          layout === 'masonry' ? shapes[i % shapes.length] : 'aspect-[4/3]'
        }`}
      />
      {/* Caption on hover */}
      <span className="absolute inset-x-0 bottom-0 translate-y-full bg-[#001a48]/90 px-3 py-2 text-[10px] font-mono uppercase leading-tight tracking-wider text-white transition-transform duration-300 group-hover:translate-y-0">
        {image.caption}
      </span>
    </button>
  )

  return (
    <>
      {layout === 'masonry' ? (
        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
          {images.map(tile)}
        </div>
      ) : (
        <div className={`grid gap-3 ${columns}`}>{images.map(tile)}</div>
      )}

      {/* Lightbox */}
      {current && active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[100] flex flex-col p-3 sm:p-8"
          style={{ backgroundColor: 'rgba(0,26,72,0.97)' }}
          onClick={() => setActive(null)}
        >
          <div className="flex items-center justify-between gap-4">
            <p className="min-w-0 truncate text-xs font-mono uppercase tracking-widest text-white/60">
              {current?.caption} · {active + 1}/{images.length}
            </p>
            <button
              type="button"
              aria-label="Close"
              className="shrink-0 rounded-full border border-white/20 p-2 text-white hover:border-white/60 touch-manipulation"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5 sm:h-5 sm:w-5" />
            </button>
          </div>
          <div
            className="mt-4 flex min-h-0 flex-1 items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Previous"
              className="shrink-0 rounded-full border border-white/20 p-2 text-white hover:border-[#e4002b]"
              onClick={() => setActive((i) => ((i ?? 0) - 1 + images.length) % images.length)}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <img
              src={current?.src}
              alt={current?.caption ?? ''}
              className="mx-auto max-h-full min-h-0 flex-1 rounded-xl object-contain"
            />
            <button
              type="button"
              aria-label="Next"
              className="shrink-0 rounded-full border border-white/20 p-2 text-white hover:border-[#e4002b]"
              onClick={() => setActive((i) => ((i ?? 0) + 1) % images.length)}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
