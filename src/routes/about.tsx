import { createFileRoute } from '@tanstack/react-router'
import { CLUB, HERO_SLIDES } from '@/data/content'
import { SlideshowSection } from '@/components/SlideshowSection'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <>
      {/* Dark header */}
      <SlideshowSection photos={HERO_SLIDES} overlayOpacity={0.78} className="px-6 sm:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-3">
            Built by students,<br className="hidden sm:block" /> for the continent.
          </h1>
          <p className="text-white/65 text-base max-w-md">
            Founded in {CLUB.founded} at African Leadership University, {CLUB.city}.
          </p>
        </div>
      </SlideshowSection>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#667085] pt-1">Mission</p>
          <p className="text-xl leading-relaxed text-[#001a48] max-w-xl font-medium">
            Build hardware in Africa that solves problems in Africa. We keep a documented record
            of every attempt, the wins and the drivetrains that died at 4am.
          </p>
        </div>
      </section>

      <div className="border-t border-[#e4e7ec]" />

      {/* Our story */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#667085] pt-1">Our story</p>
          <div className="space-y-5 max-w-2xl">
            <p className="text-base leading-relaxed text-[#334155]">
              The ALU Robotics Club started as a small group of students who wanted to build real things,
              not just simulations. From the first meetings on the ALU Kigali campus, the
              club grew quickly because the ambition was clear: compete at the highest level of university
              robotics on the African continent.
            </p>
            <p className="text-base leading-relaxed text-[#334155]">
              In 2025 the club made its debut at the Pan-African Robotics Competition (PARC) in Dakar,
              Senegal, one of the most competitive university robotics events on the continent, supported
              by VEX Robotics, the Mastercard Foundation, IEEE CSS, and DAUST. Competing against
              established university teams from across Africa, the club finished 2nd place overall and
              won the Best Live Demonstration Award.
            </p>
            <p className="text-base leading-relaxed text-[#334155]">
              In 2026, the club hosted the FIRST Tech Challenge (FTC) Rwanda on campus, bringing
              students together to build, program, and drive FTC robots from scratch in a single
              intensive session. The club has grown to over 100 active members, running regular
              hackathons, workshops, and hands-on build sessions throughout the year.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#e4e7ec]" />

      {/* What we do */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#667085] pt-1">What we do</p>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: 'Build hardware',
                desc: 'From PCB design to 3D printing, we design and fabricate the physical systems that make our robots move, sense and act. Members get hands-on experience with real tools, real components, and real constraints.',
              },
              {
                title: 'Enter competitions',
                desc: 'We compete in regional and continental robotics competitions against university teams from across Africa. PARC, FTC, and more. Each competition is a deadline that sharpens the whole team.',
              },
              {
                title: 'Run hackathons',
                desc: 'We host on-campus hackathons where teams have one sprint to ship a working prototype from scratch. Past events have covered IoT systems, embedded hardware, and autonomous robotics.',
              },
              {
                title: 'Mentor members',
                desc: 'Club veterans mentor newcomers through hands-on sessions covering firmware, electronics and mechanical design. No experience required, just the willingness to build.',
              },
              {
                title: 'Write firmware',
                desc: 'Motors don\'t move without code. We work in Java, C/C++ and Python across platforms including REV Robotics, Arduino, and custom embedded control systems.',
              },
              {
                title: 'Document everything',
                desc: 'Every build, every competition, every failure. We record it all. The club maintains a growing archive of competition logs, build notes, and project photos so future members can learn from what came before.',
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 pl-4" style={{ borderColor: '#e4002b' }}>
                <h3 className="text-base font-bold text-[#001a48] mb-1">{item.title}</h3>
                <p className="text-sm text-[#667085] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#e4e7ec]" />

      {/* Numbers */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#667085] pt-1">By the numbers</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {[
              { v: CLUB.founded, l: 'Year founded' },
              { v: '100+', l: 'Active members' },
              { v: '2', l: 'Awards at PARC' },
              { v: '2nd', l: 'Place at PARC 2025' },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-4xl font-bold text-[#001a48] mb-1">{s.v}</p>
                <p className="text-xs text-[#667085] uppercase tracking-wide font-semibold">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#e4e7ec]" />

      {/* Join us */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#667085] pt-1">Join us</p>
          <div className="max-w-2xl">
            <p className="text-base leading-relaxed text-[#334155] mb-5">
              The club is open to all ALU students regardless of experience level. Whether you know how
              to solder or have never held a screwdriver, there is a role for you, from mechanical
              assembly and electronics to programming, documentation, and design.
            </p>
            <p className="text-base leading-relaxed text-[#334155] mb-8">
              New members get paired with experienced builders and work on real projects from day one.
              The best way to start is to show up, ask questions, and pick up a tool.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href={`mailto:${CLUB.email}`} className="btn-primary">
                Get in touch
              </a>
              {CLUB.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#e4e7ec]" />

      {/* Contact */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#667085] pt-1">Contact</p>
          <div>
            <p className="text-base text-[#667085] leading-relaxed max-w-md mb-6">
              Sponsorship enquiries, competition invites, lab collaborations, or joining the club.
              Reach out directly.
            </p>
            <a href={`mailto:${CLUB.email}`} className="btn-primary">
              {CLUB.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
