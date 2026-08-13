import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Entry } from "@/data/content";
import { CATEGORY_LABELS } from "@/data/content";

const routeFor: Record<Entry["category"], string> = {
  hackathon: "/hackathons/$slug",
  competition: "/competitions/$slug",
  project: "/projects/$slug",
};

export type EntryLayout = "feature" | "index-row" | "spread";

function Kicker({ entry }: { entry: Entry }) {
  return <span className="kicker">{CATEGORY_LABELS[entry.category]}</span>;
}

function OpenLink({ entry, label = "View entry" }: { entry: Entry; label?: string }) {
  return (
    <Link
      to={routeFor[entry.category]}
      params={{ slug: entry.slug }}
      className="btn-alu group/link"
    >
      {label}
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
    </Link>
  );
}

function Photo({
  entry,
  index = 0,
  className = "",
}: {
  entry: Entry;
  index?: number;
  className?: string;
}) {
  const image = entry.images[index];
  return (
    <img
      src={image?.src}
      alt={image?.caption ?? entry.title}
      loading="lazy"
      className={`h-full w-full object-cover opacity-80 grayscale contrast-125 transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0 ${className}`}
    />
  );
}

/** Big asymmetric feature: 8/4 split, oversized masthead type, bracket accent. */
function Feature({ entry, num }: { entry: Entry; num: string }) {
  return (
    <article className="group grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-0">
      <div className="relative z-10 flex flex-col justify-end lg:col-span-8 lg:pr-16">
        <Kicker entry={entry} />
        <h3 className="mt-7 text-4xl sm:text-6xl lg:text-7xl">
          {entry.title.split(" ").slice(0, -1).join(" ") || entry.title}
          <br />
          <span className="type-outline">{entry.title.split(" ").slice(-1)}</span>
        </h3>
        <p className="mt-7 max-w-md text-lg leading-relaxed">{entry.shortDescription}</p>
        <div className="mt-9 flex flex-wrap items-stretch gap-8">
          <OpenLink entry={entry} />
          <div className="flex flex-col justify-center border-l border-border pl-6">
            <span className="label-mono">Location</span>
            <span className="font-medium text-white">{entry.location}</span>
          </div>
          <div className="flex flex-col justify-center border-l border-border pl-6">
            <span className="label-mono">Result</span>
            <span className="font-medium text-white">{entry.outcome}</span>
          </div>
        </div>
      </div>

      <div className="relative h-[26rem] lg:col-span-4 lg:h-auto">
        <div className="bracket-bl absolute inset-0 overflow-hidden bg-navy">
          <Photo entry={entry} />
        </div>
        <span className="absolute -top-3 left-4 z-10 bg-primary px-2 py-1 font-mono text-[10px] font-bold tracking-widest text-primary-foreground">
          {num}
        </span>
        <span
          aria-hidden="true"
          className="absolute top-12 -right-4 hidden h-px w-8 bg-primary lg:block"
        />
      </div>
    </article>
  );
}

/** Lab-notebook index row: number, hairline rules, photo revealed on hover. */
function IndexRow({ entry, num }: { entry: Entry; num: string }) {
  return (
    <Link
      to={routeFor[entry.category]}
      params={{ slug: entry.slug }}
      className="group grid grid-cols-[3rem_1fr] items-start gap-6 border-b border-border py-8 transition-colors hover:bg-navy/60 md:grid-cols-[4rem_1fr_14rem_9rem] md:items-center md:gap-8"
    >
      <span className="font-mono text-xs font-bold text-primary">{num}</span>
      <div className="min-w-0">
        <span className="label-mono">
          {CATEGORY_LABELS[entry.category]} · {entry.dateLabel}
        </span>
        <h3 className="mt-2 text-2xl transition-colors group-hover:text-primary sm:text-3xl">
          {entry.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed">{entry.shortDescription}</p>
      </div>
      <div className="col-span-2 h-40 overflow-hidden bg-navy md:col-span-1 md:h-24">
        <Photo entry={entry} index={1} />
      </div>
      <div className="col-span-2 md:col-span-1 md:text-right">
        <span className="label-mono">Result</span>
        <p className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-white">
          {entry.outcome}
        </p>
      </div>
    </Link>
  );
}

/** Magazine spread: one dominant photo plus a contact-sheet column of thumbs. */
function Spread({ entry, num }: { entry: Entry; num: string }) {
  const thumbs = entry.images.slice(1, 4);
  return (
    <article className="group grid grid-cols-1 gap-0 md:grid-cols-12">
      <div className="relative h-[24rem] overflow-hidden bg-navy md:col-span-9 md:h-[34rem]">
        <Photo entry={entry} />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-12">
          <Kicker entry={entry} />
          <h3 className="mt-5 max-w-2xl text-3xl sm:text-5xl">{entry.title}</h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed">{entry.shortDescription}</p>
        </div>
        <span className="absolute left-0 top-0 bg-primary px-2.5 py-1.5 font-mono text-[10px] font-bold tracking-widest text-primary-foreground">
          {num}
        </span>
      </div>

      <div className="flex flex-col divide-y divide-border border-border md:col-span-3 md:border-l">
        {thumbs.map((image) => (
          <div key={image.src + image.caption} className="h-28 overflow-hidden bg-navy md:flex-1">
            <img
              src={image.src}
              alt={image.caption}
              loading="lazy"
              className="h-full w-full object-cover opacity-50 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
        <div className="p-6">
          <span className="label-mono">{entry.dateLabel}</span>
          <p className="mt-2 font-mono text-xs font-bold uppercase tracking-widest text-white">
            {entry.outcome}
          </p>
          <div className="mt-5">
            <OpenLink entry={entry} label="Open" />
          </div>
        </div>
      </div>
    </article>
  );
}

export function EntryRow({
  entry,
  layout,
  num = "01",
}: {
  entry: Entry;
  layout: EntryLayout;
  num?: string;
}) {
  if (layout === "feature") return <Feature entry={entry} num={num} />;
  if (layout === "spread") return <Spread entry={entry} num={num} />;
  return <IndexRow entry={entry} num={num} />;
}

export const layoutCycle: EntryLayout[] = ["feature", "index-row", "spread"];
