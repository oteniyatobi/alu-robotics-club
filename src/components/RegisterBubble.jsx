import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { X } from 'lucide-react'

export function RegisterBubble() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="fixed bottom-5 right-5 z-[150] flex flex-col items-end gap-2">
      {/* Dismiss button */}
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setDismissed(true)}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-[#667085] shadow hover:bg-white transition-colors"
      >
        <X className="h-3 w-3" />
      </button>

      {/* Bubble */}
      <Link
        to="/register"
        className="group flex items-center gap-3 rounded-2xl bg-[#001a48] px-4 py-3 shadow-xl transition-all hover:shadow-2xl hover:scale-[1.03]"
        style={{ maxWidth: '260px' }}
      >
        {/* Pulsing dot */}
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

        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 leading-none mb-0.5">
            Happening soon
          </p>
          <p className="text-sm font-bold text-white leading-snug">
            Guest speaker session — register now
          </p>
        </div>
      </Link>
    </div>
  )
}
