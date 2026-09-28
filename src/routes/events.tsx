import { createFileRoute, Link } from '@tanstack/react-router'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/events')({
  component: EventsPage,
})

const EVENTS = [
  {
    id: 'guest-speaker',
    label: 'Guest Speaker Session',
    tag: 'Speaker Event',
    date: 'Wed, 15 Oct 2026, 4:00 PM, 6:00 PM',
    location: 'Djibouti Classroom, ALU Kigali',
    description:
      'An in-person talk from an industry speaker on robotics, engineering, and technology. Open to all ALU students. Register to save your spot.',
    href: '/register',
  },
  {
    id: 'zipline',
    label: 'Zipline Rwanda Visit',
    tag: 'Club Visit',
    date: 'Thu, 26 Nov 2026, 12:00 PM, 5:00 PM',
    location: 'Zipline Distribution Centre, Rwanda',
    description:
      'A guided visit to Zipline Rwanda, the world\'s first national drone delivery network. See the technology up close and meet the engineers behind it.',
    href: '/zipline',
  },
]

function EventsPage() {
  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: '#001a48' }} className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#e4002b' }}>
            ALU Robotics Club
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mt-3 mb-4 leading-tight">
            Upcoming events
          </h1>
          <p className="text-base" style={{ color: '#b8cce4' }}>
            Choose an event below to register your spot.
          </p>
        </div>
      </section>

      {/* Event cards */}
      <section className="bg-[#f5f7fb] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {EVENTS.map((ev) => (
              <Link
                key={ev.id}
                to={ev.href}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-[#e4e7ec] p-6 sm:p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
                      style={{ backgroundColor: '#e4002b' }}
                    >
                      {ev.tag}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#001a48] mb-3 leading-snug group-hover:text-[#e4002b] transition-colors">
                    {ev.label}
                  </h2>

                  <p className="text-sm text-[#667085] leading-relaxed mb-5">
                    {ev.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[#667085]">
                      <Calendar className="h-4 w-4 shrink-0" style={{ color: '#e4002b' }} />
                      {ev.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#667085]">
                      <MapPin className="h-4 w-4 shrink-0" style={{ color: '#e4002b' }} />
                      {ev.location}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold" style={{ color: '#001a48' }}>
                  Register now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
