import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { CLUB, entries, HERO_SLIDES } from '@/data/content'
import { SlideshowSection } from '@/components/SlideshowSection'
import { EntryCard } from '@/components/EntryRow'

export const Route = createFileRoute('/')({
  component: Home,
})

const galleryPreview = [
  '/ftc-rwanda/ftc-84.jpg',
  '/ftc-rwanda/ftc-74.jpg',
  '/hackathon-2025/hackathon-08.jpg',
  '/ftc-rwanda/ftc-82.jpg',
]

function Home() {
  return (
    <>
      {/* ── HERO — dark navy with crossfading photos ─────────── */}
      <SlideshowSection photos={HERO_SLIDES} overlayOpacity={0.75} className="px-5 sm:px-8 py-10 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-[1fr_400px]">

            {/* Left — club identity */}
            <div>
              {/* Logo row — shows real logos when files exist, styled badge when not */}
              <div className="mb-8 flex items-center gap-4">
                <img
                  src="/robotics-logo.png"
                  alt="ALU Robotics Club logo"
                  className="h-12 w-12 object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <div className="h-10 w-px bg-white/20" />
                <img
                  src="/alu-logo.png"
                  alt="African Leadership University"
                  className="h-10 object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>

              <p className="kicker mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {CLUB.university} &nbsp;·&nbsp; {CLUB.city}
              </p>

              <h1
                className="text-white mb-5"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
              >
                ALU Robotics Club
              </h1>

              <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-sm">
                {CLUB.tagline}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link to="/competitions" className="btn-primary">
                  Our competitions
                </Link>
                <Link to="/gallery" className="btn-ghost-light">
                  See photos
                </Link>
              </div>
            </div>

            {/* Right — PARC award photo */}
            <div className="hidden lg:block relative">
              <div className="overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="/parc/hero.jpg"
                  alt="Best Live Demonstration Award — PARC 2025"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: '520px' }}
                  onError={(e) => {
                    e.currentTarget.src = '/hackathon-2025/hackathon-08.jpg'
                  }}
                />
              </div>
              {/* Achievement caption */}
              <div
                className="absolute bottom-0 left-0 right-0 rounded-b-xl px-4 py-3"
                style={{ background: 'linear-gradient(to top, rgba(0,26,72,0.95) 60%, transparent)' }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-0.5">
                  PARC 2025, Dakar, Senegal
                </p>
                <p className="text-sm font-semibold text-white">
                  Best Live Demonstration Award + 2nd Place Overall
                </p>
              </div>
            </div>

          </div>
        </div>
      </SlideshowSection>

      {/* ── STATS STRIP ────────────────────────────────────────── */}
      <div className="border-b border-[#e4e7ec] bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-3 divide-x divide-[#e4e7ec]">
            {[
              { value: CLUB.founded, label: 'Founded' },
              { value: '100+', label: 'Active members' },
              { value: '2', label: 'PARC awards' },
            ].map((s) => (
              <div key={s.label} className="py-6 px-4 sm:px-8 first:pl-0 last:pr-0">
                <p className="text-2xl font-bold text-[#001a48]">{s.value}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#667085] mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LATEST WORK ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 bg-[#f5f7fb]">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-[#001a48] mb-8">Latest work</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {entries.map((entry) => (
              <EntryCard key={entry.slug} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTOS TEASER ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-2">
              {galleryPreview.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-full aspect-square object-cover rounded-sm"
                />
              ))}
            </div>
            <div>
              <p className="kicker mb-4">From the field</p>
              <h2 className="text-3xl font-bold text-[#001a48] mb-4">
                Every competition.<br />Every hackathon.
              </h2>
              <p className="text-[#667085] leading-relaxed mb-6">
                Unfiltered photos from our competitions and hackathons. Real builds, real teams,
                real moments from Dakar to Kigali.
              </p>
              <Link to="/gallery" className="btn-primary inline-flex items-center gap-2">
                View gallery <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL CTA ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 sm:px-8" style={{ backgroundColor: '#001a48' }}>
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-8">
          <div>
            <h2 className="text-white text-2xl font-bold mb-1">Follow the build</h2>
            <p className="text-white/60 text-sm">
              Competition updates, hackathon footage, and project logs.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {CLUB.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-light"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
