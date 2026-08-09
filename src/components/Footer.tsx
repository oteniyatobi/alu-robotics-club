import { Link } from "@tanstack/react-router";
import roboticsLogo from "@/assets/robotics-logo.png.asset.json";
import { CLUB } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex min-w-0 items-start gap-4">
          <img
            src={roboticsLogo.url}
            alt="ALU Robotics Club mark"
            className="h-12 w-12 shrink-0 rounded-sm bg-white object-contain p-0.5"
            width={48}
            height={48}
            loading="lazy"
          />
          <div className="min-w-0">
            <p className="font-display text-sm font-bold">{CLUB.name}</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">{CLUB.tagline}</p>
          </div>
        </div>

        <div>
          <p className="label-mono">Index</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/hackathons", label: "Hackathons" },
              { to: "/competitions", label: "Competitions" },
              { to: "/projects", label: "Projects" },
              { to: "/gallery", label: "Gallery" },
              { to: "/about", label: "About" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-mono">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${CLUB.email}`} className="text-muted-foreground hover:text-foreground">
                {CLUB.email}
              </a>
            </li>
            {CLUB.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li className="text-muted-foreground">{CLUB.city}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-4 py-5 text-center sm:px-6">
        <p className="label-mono">
          {CLUB.name} — {CLUB.university} — Est. {CLUB.founded}
        </p>
      </div>
    </footer>
  );
}
