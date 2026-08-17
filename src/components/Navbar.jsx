import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/hackathons', label: 'Hackathons' },
  { to: '/competitions', label: 'Competitions' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [logoErr, setLogoErr] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e4e7ec]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">

        {/* Brand */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 min-w-0"
        >
          {logoErr ? (
            <div
              className="h-8 w-8 shrink-0 rounded flex items-center justify-center text-white text-[10px] font-bold tracking-tight"
              style={{ backgroundColor: '#e4002b' }}
            >
              AR
            </div>
          ) : (
            <img
              src="/robotics-logo.png"
              alt=""
              className="h-8 w-8 shrink-0 object-contain"
              onError={() => setLogoErr(true)}
            />
          )}
          <span className="text-base font-bold text-[#001a48] truncate tracking-tight">
            ALU Robotics Club
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-base text-[#667085] hover:text-[#001a48] transition-colors font-bold"
              activeProps={{ className: 'text-base text-[#001a48] font-bold' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact — right side, desktop */}
        <a
          href="mailto:aluroboticsclub@gmail.com"
          className="hidden lg:inline-flex btn-primary text-base py-2 px-4"
        >
          Contact us
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="p-1.5 text-[#667085] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-[#e4e7ec] bg-white lg:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block border-b border-[#f5f7fb] px-6 py-3.5 text-base text-[#667085] hover:text-[#001a48] font-bold"
              activeProps={{ className: 'block border-b border-[#f5f7fb] px-6 py-3.5 text-base font-bold text-[#001a48]' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:aluroboticsclub@gmail.com"
            className="block px-6 py-4 text-base font-semibold text-[#e4002b]"
          >
            aluroboticsclub@gmail.com
          </a>
        </nav>
      )}
    </header>
  )
}
