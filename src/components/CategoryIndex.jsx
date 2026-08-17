import { byCategory, HERO_SLIDES } from '@/data/content'
import { EntryCard } from '@/components/EntryRow'
import { SlideshowSection } from '@/components/SlideshowSection'

export function CategoryIndex({ category, heading, blurb }) {
  const items = byCategory(category)

  return (
    <>
      {/* Dark header with slideshow */}
      <SlideshowSection photos={HERO_SLIDES} overlayOpacity={0.78} className="px-6 sm:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-3">{heading}</h1>
          {blurb && (
            <p className="text-white/65 text-base max-w-md">{blurb}</p>
          )}
        </div>
      </SlideshowSection>

      {/* Entry cards */}
      <section className="py-14 sm:py-20 px-6 sm:px-8 bg-[#f5f7fb]">
        <div className="mx-auto max-w-7xl">
          {items.length === 0 ? (
            <p className="text-sm text-[#667085]">Nothing here yet — check back soon.</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {items.map((entry) => (
                <EntryCard key={entry.slug} entry={entry} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
