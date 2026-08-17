import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { CATEGORY_LABELS } from '@/data/content'

const routeFor = {
  hackathon: '/hackathons/$slug',
  competition: '/competitions/$slug',
  project: '/projects/$slug',
}

export function EntryRow({ entry }) {
  return <EntryCard entry={entry} />
}

export function EntryCard({ entry }) {
  const thumb = entry.images?.[0]?.src

  return (
    <Link
      to={routeFor[entry.category]}
      params={{ slug: entry.slug }}
      className="card-base group block"
    >
      {thumb && (
        <div className="aspect-video overflow-hidden">
          <img
            src={thumb}
            alt=""
            className="h-full w-full object-cover"
            style={entry.coverObjectPosition ? { objectPosition: entry.coverObjectPosition } : undefined}
          />
        </div>
      )}
      <div className="p-5">
        <span
          className="text-[10px] font-bold uppercase tracking-widest"
          style={{ color: '#e4002b' }}
        >
          {CATEGORY_LABELS[entry.category]}
        </span>
        <h3 className="text-[1rem] font-semibold text-[#001a48] mt-1.5 mb-2 leading-snug">
          {entry.title}
        </h3>
        <p className="text-sm text-[#667085] leading-relaxed line-clamp-2 mb-4">
          {entry.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#667085]">
            {entry.dateLabel} · {entry.location}
          </span>
          <ArrowRight className="h-4 w-4 text-[#667085] transition-colors group-hover:text-[#001a48]" />
        </div>
        {entry.outcome && (
          <div className="mt-3 pt-3 border-t border-[#e4e7ec]">
            <span className="text-xs font-semibold" style={{ color: '#e4002b' }}>
              {entry.outcome}
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}
