import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Entry } from "@/data/content";

const routeFor: Record<Entry["category"], string> = {
  hackathon: "/hackathons/$slug",
  competition: "/competitions/$slug",
  project: "/projects/$slug",
};

export function EntryCard({ entry }: { entry: Entry }) {
  return (
    <article className="group flex flex-col border border-border bg-card/80 backdrop-blur-sm transition-colors hover:border-primary">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={entry.images[0]?.src}
          alt={entry.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <span className="absolute left-0 top-0 bg-primary px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-primary-foreground">
          {entry.outcome}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="label-mono">
          {entry.dateLabel} · {entry.location}
        </p>
        <h3 className="mt-2 text-lg font-bold">{entry.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {entry.shortDescription}
        </p>

        {entry.tech && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {entry.tech.slice(0, 4).map((t) => (
              <li
                key={t}
                className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="label-mono">{entry.images.length} photos</span>
          <Link
            to={routeFor[entry.category]}
            params={{ slug: entry.slug }}
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-primary hover:underline"
          >
            Open file <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
