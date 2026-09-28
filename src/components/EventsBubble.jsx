import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { X, ChevronRight, Calendar, MapPin } from 'lucide-react'

const EVENTS = [
  {
    id: 'guest-speaker',
    label: 'Guest Speaker Session',
    date: 'Wed, 15 October 2026',
    location: 'ALU Kigali Campus',
    href: '/register',
  },
  {
    id: 'zipline',
    label: 'Zipline Rwanda Visit',
    date: 'Thu, 26 November 2026',
    location: 'Zipline Muhanga',
    href: '/zipline',
  },
]

export function EventsBubble() {
  const [open, setOpen] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="fixed bottom-5 right-5 z-[150] flex flex-col items-end gap-2">

      {/* Dismiss */}
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setDismissed(true)}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-[#667085] shadow hover:bg-white transition-colors"
      >
        <X className="h-3 w-3" />
      </button>

      {/* Expanded event list */}
      {open && (
        <div
          className="rounded-2xl shadow-2xl overflow-hidden"
          style={{ width: '280px', backgroundColor: '#001a48', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div className="px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Upcoming events
            </p>
          </div>

          <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            {EVENTS.map((ev) => (
              <Link
                key={ev.id}
                to={ev.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 px-4 py-3 transition-colors"
                style={{ color: 'white' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white leading-snug">{ev.label}</p>
                  <div className="flex flex-col gap-0.5 mt-1">
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      <Calendar className="h-3 w-3 shrink-0" style={{ color: '#e4002b' }} />
                      {ev.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      <MapPin className="h-3 w-3 shrink-0" style={{ color: '#e4002b' }} />
                      {ev.location}
                    </span>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl transition-all hover:shadow-2xl hover:scale-[1.03]"
        style={{ backgroundColor: '#001a48', maxWidth: '260px' }}
      >
        <span className="relative flex h-3 w-3 shrink-0">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
            style={{ backgroundColor: '#e4002b' }}
          />
          <span
            className="relative inline-flex h-3 w-3 rounded-full"
            style={{ backgroundColor: '#e4002b' }}
          />
        </span>
        <span className="text-sm font-bold text-white">Register for events</span>
      </button>

    </div>
  )
}
