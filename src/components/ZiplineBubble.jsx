import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { X } from 'lucide-react'

export function ZiplineBubble() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div
      className="fixed bottom-28 right-5 z-[150] flex flex-col items-end gap-2"
      style={{ maxWidth: '260px' }}
    >
      <div
        className="relative flex flex-col gap-2 rounded-2xl px-4 py-3 shadow-2xl text-white"
        style={{ backgroundColor: '#001a48', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        {/* Dismiss button */}
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="absolute top-2 right-2 rounded-full p-1 transition-colors"
          style={{ color: 'rgba(255,255,255,0.45)' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
        >
          <X className="h-3 w-3" />
        </button>

        {/* Pulsing dot + label */}
        <div className="flex items-center gap-2 pr-5">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: '#e4002b' }}
            />
            <span
              className="relative inline-flex rounded-full h-2.5 w-2.5"
              style={{ backgroundColor: '#e4002b' }}
            />
          </span>
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: '#e4002b' }}
          >
            Happening soon
          </span>
        </div>

        <p className="text-sm font-semibold leading-snug pr-3">
          Zipline Rwanda visit, register now
        </p>

        <Link
          to="/zipline"
          className="mt-1 inline-block rounded-lg px-4 py-2 text-center text-xs font-bold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#e4002b' }}
        >
          Register for the visit
        </Link>
      </div>
    </div>
  )
}
