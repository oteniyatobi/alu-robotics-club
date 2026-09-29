import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Calendar, MapPin, ArrowRight, Users } from 'lucide-react'

export const Route = createFileRoute('/events')({
  component: EventsPage,
})

const EVENTS = [
  {
    id: 'guest-speaker',
    label: 'Guest Speaker Session',
    tag: 'Speaker Event',
    date: 'Wed, 15 Oct 2026',
    time: '4:00 PM, 6:00 PM',
    location: 'Djibouti Classroom, ALU Kigali',
    description:
      'An in-person talk from an industry speaker on robotics, engineering, and technology. Open to all ALU students. Register to save your spot.',
    href: '/register',
    scriptUrl: 'https://script.google.com/macros/s/AKfycbyT1c8YOZUbnkZNtd8gJDdp65JOTp0urankTKjuitUhgLK7RuGhZ3LwycAs2vfh4Q-GbQ/exec',
    maxSlots: 30,
  },
  {
    id: 'zipline',
    label: 'Zipline Rwanda Visit',
    tag: 'Club Visit',
    closed: true,
    date: 'Thu, 26 Nov 2026',
    time: '12:00 PM, 5:00 PM',
    location: 'Zipline Muhanga',
    description:
      'A guided visit to Zipline Muhanga, the world\'s first national drone delivery network. See the technology up close and meet the engineers behind it. Transport and snacks provided.',
    href: '/zipline',
    scriptUrl: 'https://script.google.com/macros/s/AKfycbxOC3SoUC_J_sd1noeqUbFMbMyO-1IBCVF6vOEdeEzA9lIUOdlvHMczsggWnTwOU0_T/exec',
    maxSlots: 25,
  },
]

function SlotsChip({ taken, max }) {
  if (taken === null) return null
  const remaining = Math.max(0, max - taken)
  const pct = taken / max
  const full = remaining === 0

  let bg = '#dcfce7'
  let color = '#15803d'
  if (pct >= 0.5 && pct < 0.8) { bg = '#fef9c3'; color = '#b45309' }
  if (pct >= 0.8) { bg = '#fee2e2'; color = '#e4002b' }

  return (
    <div
      className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold"
      style={{ backgroundColor: bg, color }}
    >
      <Users className="h-3 w-3" />
      {full ? 'Fully booked' : `${remaining} of ${max} spots left`}
    </div>
  )
}

function EventsPage() {
  const [counts, setCounts] = useState({})

  useEffect(() => {
    EVENTS.forEach((ev) => {
      fetch(ev.scriptUrl)
        .then((r) => r.json())
        .then((d) => {
          if (typeof d.count === 'number') {
            setCounts((prev) => ({ ...prev, [ev.id]: d.count }))
          }
        })
        .catch(() => {})
    })
  }, [])

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
            {EVENTS.map((ev) => {
              const taken = counts[ev.id] ?? null
              const remaining = taken !== null ? Math.max(0, ev.maxSlots - taken) : null
              const isFull = ev.closed || remaining === 0

              return (
                <Link
                  key={ev.id}
                  to={ev.href}
                  className="group flex flex-col justify-between bg-white rounded-2xl border border-[#e4e7ec] p-6 sm:p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={isFull ? { opacity: 0.75 } : {}}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                      <span
                        className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
                        style={{ backgroundColor: isFull ? '#667085' : '#e4002b' }}
                      >
                        {isFull ? 'Fully booked' : ev.tag}
                      </span>
                      <SlotsChip taken={taken} max={ev.maxSlots} />
                    </div>

                    {/* Slot bar */}
                    {taken !== null && (
                      <div className="mb-4">
                        <div className="h-2 rounded-full bg-[#f0f0f0] overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${Math.min(100, (taken / ev.maxSlots) * 100)}%`,
                              backgroundColor: isFull ? '#667085' : (taken / ev.maxSlots >= 0.8 ? '#e4002b' : taken / ev.maxSlots >= 0.5 ? '#d97706' : '#16a34a'),
                            }}
                          />
                        </div>
                      </div>
                    )}

                    <h2 className="text-xl font-bold text-[#001a48] mb-3 leading-snug group-hover:text-[#e4002b] transition-colors">
                      {ev.label}
                    </h2>

                    <p className="text-sm text-[#667085] leading-relaxed mb-5">
                      {ev.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-[#667085]">
                        <Calendar className="h-4 w-4 shrink-0" style={{ color: '#e4002b' }} />
                        {ev.date}, {ev.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#667085]">
                        <MapPin className="h-4 w-4 shrink-0" style={{ color: '#e4002b' }} />
                        {ev.location}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold" style={{ color: isFull ? '#667085' : '#001a48' }}>
                    {isFull ? 'View waitlist info' : 'Register now'}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
