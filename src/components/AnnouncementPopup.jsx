import { useState } from 'react'
import { X, MapPin, Clock, Calendar } from 'lucide-react'

export function AnnouncementPopup() {
  const [open, setOpen] = useState(true)

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,22,58,0.88)' }}
      onClick={() => setOpen(false)}
    >
      <div
        className="relative bg-white rounded-2xl w-full shadow-2xl flex overflow-hidden"
        style={{ maxWidth: '960px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#001a48] shadow hover:bg-white"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Left — flyer image */}
        <img
          src="/images/events/ieee-alu-session.jpg"
          alt="Meet IEEE at ALU — Information Session"
          className="shrink-0 rounded-l-2xl block"
          style={{ width: '360px', height: 'auto' }}
        />

        {/* Right — details */}
        <div className="flex flex-col justify-between px-8 py-7 gap-5">
          <div>
            <span
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: '#e4002b' }}
            >
              Upcoming Event
            </span>
            <h2 className="text-2xl font-bold text-[#001a48] mt-1 leading-snug">
              IEEE–ALU Information Session
            </h2>
          </div>

          <div className="space-y-2 text-sm text-[#334155]">
            <div className="flex items-center gap-2.5">
              <Calendar className="h-4 w-4 shrink-0 text-[#667085]" />
              <span className="font-medium">Friday, 18 September 2026</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-[#667085]" />
              <span className="font-medium">9:00 AM – 1:00 PM</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-[#667085]" />
              <span className="font-medium">Kenya–Burundi Room, ALU Kigali</span>
            </div>
          </div>

          <p className="text-sm text-[#667085] leading-relaxed">
            Calling all ALU students! Come learn about IEEE, technical societies, research
            opportunities, industry exposure, mentorship, and networking. Find out how
            you can get involved. Everyone is welcome.
          </p>

          <div className="space-y-2 text-sm">
            <p className="font-semibold text-[#001a48]">What you'll learn about:</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-[#667085]">
              {[
                'IEEE technical societies',
                'Research & publications',
                'Industry exposure & conferences',
                'Mentorship & development',
                'Networking with engineers',
                'Student branches & membership',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: '#e4002b' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 pt-1">
            <a
              href="https://events.vtools.ieee.org/m/571630"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Register now →
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-sm text-[#667085] hover:text-[#001a48] transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
