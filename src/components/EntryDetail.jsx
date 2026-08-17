import { Link } from '@tanstack/react-router'
import { ArrowLeft, Calendar, MapPin, Award } from 'lucide-react'
import { PhotoGrid } from '@/components/PhotoGrid'
import { CATEGORY_LABELS } from '@/data/content'

const indexRoute = {
  hackathon: '/hackathons',
  competition: '/competitions',
  project: '/projects',
}

export function EntryDetail({ entry }) {
  const photos = entry.images.map((i) => i.src)

  return (
    <>
      {/* Page header — dark navy */}
      <section style={{ backgroundColor: '#001a48' }} className="px-5 py-12 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          {/* Back link */}
          <Link
            to={indexRoute[entry.category]}
            className="mb-8 inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest transition-colors"
            style={{ color: '#7fa0c8' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#7fa0c8' }}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All {CATEGORY_LABELS[entry.category]}s
          </Link>

          {/* Category + date */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#e4002b] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
              {CATEGORY_LABELS[entry.category]}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: '#7fa0c8' }}>
              {entry.dateLabel}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
            {entry.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: '#7fa0c8' }}>
            {entry.shortDescription}
          </p>

          {/* Meta row */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm" style={{ color: '#b8cce4' }}>
              <Calendar className="h-4 w-4" style={{ color: '#e4002b' }} />
              {entry.dateLabel}
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#b8cce4' }}>
              <MapPin className="h-4 w-4" style={{ color: '#e4002b' }} />
              {entry.location}
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#b8cce4' }}>
              <Award className="h-4 w-4" style={{ color: '#e4002b' }} />
              {entry.outcome}
            </div>
          </div>
        </div>
      </section>

      {/* Cover photo */}
      {entry.images[0] && (
        <div className="bg-[#f1f5fb]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="aspect-[16/7] overflow-hidden rounded-b-2xl">
              <img
                src={entry.images[0].src}
                alt={entry.images[0].caption ?? entry.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Write-up + sidebar */}
      <section className="bg-white px-5 py-10 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_260px]">
            {/* Write-up */}
            <div>
              <h2 className="text-xl font-bold text-[#001a48]">About this entry</h2>
              <div className="mt-6 space-y-4">
                {entry.longDescription.map((para, i) => (
                  <p
                    key={i}
                    className={i === 0 ? 'text-base leading-relaxed text-[#001a48] font-medium' : 'text-sm leading-relaxed text-[#4a6080]'}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {entry.tech && (
                <div className="rounded-2xl border border-[#d4dff0] bg-[#f1f5fb] p-5">
                  <p className="mb-3 text-[10px] font-mono font-semibold uppercase tracking-widest text-[#4a6080]">
                    Hardware / Stack
                  </p>
                  <ul className="space-y-2">
                    {entry.tech.map((t, i) => (
                      <li key={t} className="flex items-center gap-3 text-sm text-[#001a48]">
                        <span className="text-[10px] font-mono font-bold text-[#e4002b]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {entry.team && (
                <div className="rounded-2xl border border-[#d4dff0] bg-[#f1f5fb] p-5">
                  <p className="mb-3 text-[10px] font-mono font-semibold uppercase tracking-widest text-[#4a6080]">
                    Team
                  </p>
                  <ul className="space-y-2">
                    {entry.team.map((t) => (
                      <li key={t} className="text-sm font-medium text-[#001a48]">{t}</li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-[#f1f5fb] px-5 py-10 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-xl font-bold text-[#001a48]">
            Photos
            <span className="ml-2 text-sm font-normal text-[#4a6080]">
              ({entry.images.length} frames)
            </span>
          </h2>
          <PhotoGrid images={entry.images} layout="masonry" />
        </div>
      </section>
    </>
  )
}
