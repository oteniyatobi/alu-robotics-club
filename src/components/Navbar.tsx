import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import aluLogo from "@/assets/alu-logo.png.asset.json";
import roboticsLogo from "@/assets/robotics-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/hackathons", label: "Hackathons" },
  { to: "/competitions", label: "Competitions" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-navy-deep/95 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={roboticsLogo.url}
            alt="ALU Robotics Club logo"
            className="h-10 w-10 shrink-0 rounded-sm bg-white object-contain p-0.5"
            width={40}
            height={40}
          />
          <span className="hidden h-8 w-px shrink-0 bg-border sm:block" />
          <img
            src={aluLogo.url}
            alt="African Leadership University logo"
            className="hidden h-9 w-9 shrink-0 rounded-sm object-contain sm:block"
            width={36}
            height={36}
          />
          <span className="min-w-0 truncate font-mono text-sm font-bold tracking-tight sm:text-base">
            ALU ROBOTICS<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-widest text-foreground border-b-2 border-primary",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-sm border border-border p-2 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-navy-deep lg:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              onClick={() => setOpen(false)}
              className="block border-b border-border px-6 py-4 font-mono text-xs uppercase tracking-widest text-muted-foreground"
              activeProps={{
                className:
                  "block border-b border-border px-6 py-4 font-mono text-xs uppercase tracking-widest text-primary",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
