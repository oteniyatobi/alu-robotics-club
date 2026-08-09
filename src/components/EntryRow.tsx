import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Entry } from "@/data/content";

const routeFor: Record<Entry["category"], string> = {
  hackathon: "/hackathons/$slug",
  competition: "/competitions/$slug",
  project: "/projects/$slug",
};

export type EntryLayout = "photo-left" | "photo-right" | "overlay";

function Meta({ entry }: { entry: Entry }) {
  return (
    <p className="label-mono">
      {entry.dateLabel} · {entry.location} · {entry.images.length} photos
    </p>
  );
}

function Tags({ entry }: { entry: Entry }) {
  if (!entry.tech) return null;
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5">
      {entry.tech.slice(0, 5).map((t) => (
        <li
          key={t}
          className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function OpenLink({ entry, rounded }: { entry: Entry; rounded?: boolean }) {
  return (
    <Link
      to={routeFor[entry.category]}
      params={{ slug: entry.slug }}
      className={`mt-6 inline-flex items-center gap-2 border border-primary px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground ${
        rounded ? "rounded-full" : "rounded-none"
      }`}
    >
      Open file <ArrowUpRight className="h-3.5 w-3.5" />
    </Link>
  );
}

export function EntryRow({ entry, layout }: { entry: Entry; layout: EntryLayout }) {
  const hero = entry.images[0];

  if (layout === "overlay") {
    return (
      <article className="group relative isolate overflow-hidden rounded-3xl">
        <img
          src={hero?.src}
          alt={entry.title}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/20"
        />
        <div className="flex min-h-[26rem] flex-col justify-end p-6 sm:min-h-[32rem] sm:p-12">
          <span className="mb-4 w-fit bg-primary px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary-foreground">
            {entry.outcome}
          </span>
          <h3 className="max-w-3xl text-3xl font-bold sm:text-5xl">{entry.title}</h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {entry.shortDescription}
          </p>
          <div className="mt-5">
            <Meta entry={entry} />
          </div>
          <OpenLink entry={entry} rounded />
        </div>
      </article>
    );
  }

  const photoFirst = layout === "photo-left";

  return (
    <article className="group grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <div
        className={`relative overflow-hidden border border-border ${
          photoFirst ? "rounded-none md:order-1" : "rounded-2xl md:order-2"
        }`}
      >
        <img
          src={hero?.src}
          alt={entry.title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover opacity-85 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
        />
        <span className="absolute left-0 top-0 bg-primary px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary-foreground">
          {entry.outcome}
        </span>
      </div>

      <div className={photoFirst ? "md:order-2" : "md:order-1"}>
        <Meta entry={entry} />
        <h3 className="mt-3 text-2xl font-bold sm:text-4xl">{entry.title}</h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{entry.shortDescription}</p>
        <Tags entry={entry} />
        <OpenLink entry={entry} rounded={!photoFirst} />
      </div>
    </article>
  );
}

export const layoutCycle: EntryLayout[] = ["photo-left", "photo-right", "overlay"];
