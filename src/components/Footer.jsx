import { Link } from '@tanstack/react-router'
import { Instagram, Linkedin, Youtube, Mail, MapPin } from 'lucide-react'
import { CLUB } from '@/data/content'

const socialIcons = { Instagram, LinkedIn: Linkedin, YouTube: Youtube }

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#001a48' }}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.8fr_1fr_1fr]">

          {/* Brand */}
          <div className="flex items-start gap-4">
            <img
              src="/robotics-logo.png"
              alt="ALU Robotics Club"
              className="h-14 w-14 shrink-0 rounded-xl bg-white object-contain p-1"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <div>
              <p className="font-display text-sm font-bold text-white">{CLUB.name}</p>
              <p className="mt-0.5 text-xs" style={{ color: '#7fa0c8' }}>{CLUB.university}</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: '#7fa0c8' }}>
                {CLUB.tagline}
              </p>
              <div className="mt-5 flex gap-3">
                {CLUB.socials.map((s) => {
                  const Icon = socialIcons[s.label]
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
                      style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#7fa0c8' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#e4002b'; e.currentTarget.style.color = '#e4002b' }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#7fa0c8' }}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-[10px] font-mono font-semibold uppercase tracking-widest" style={{ color: '#7fa0c8' }}>
              Navigate
            </p>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: '/hackathons', label: 'Hackathons' },
                { to: '/competitions', label: 'Competitions' },
                { to: '/projects', label: 'Projects' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/about', label: 'About' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors" style={{ color: '#7fa0c8' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#7fa0c8' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-[10px] font-mono font-semibold uppercase tracking-widest" style={{ color: '#7fa0c8' }}>
              Contact
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${CLUB.email}`} className="flex items-center gap-2 transition-colors" style={{ color: '#7fa0c8' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#7fa0c8' }}>
                  <Mail className="h-3.5 w-3.5 shrink-0" style={{ color: '#e4002b' }} />
                  {CLUB.email}
                </a>
              </li>
              <li className="flex items-start gap-2" style={{ color: '#7fa0c8' }}>
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: '#e4002b' }} />
                {CLUB.city}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t px-4 py-5 text-center sm:px-6" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: '#7fa0c8' }}>
          © {new Date().getFullYear()} {CLUB.name} · {CLUB.university} · Est. {CLUB.founded}
        </p>
      </div>
    </footer>
  )
}
