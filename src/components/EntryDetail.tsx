import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PhotoGrid } from "@/components/PhotoGrid";
import { SlideshowSection } from "@/components/SlideshowSection";
import type { Entry } from "@/data/content";
import { CATEGORY_LABELS } from "@/data/content";

const indexRoute: Record<Entry["category"], string> = {
  hackathon: "/hackathons",
  competition: "/competitions",
  project: "/projects",
};

export function EntryDetail({ entry }: { entry: Entry }) {
  const photos = entry.images.map((i) => i.src);
  const words = entry.title.split(" ");

  return (
    <>
      <SlideshowSection photos={photos} overlay="hero" className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
          <div className="relative z-10 flex min-h-[28rem] flex-col justify-end lg:col-span-8 lg:pr-20">
            <Link
              to={indexRoute[entry.category]}
              className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All {CATEGORY_LABELS[entry.category]}s
            </Link>
            <span className="kicker mt-10">
              {entry.dateLabel} · {entry.location}
            </span>
            <h1 className="mt-7 text-5xl sm:text-7xl lg:text-8xl">
              {words.slice(0, -1).join(" ") || entry.title}
              {words.length > 1 && (
                <>
                  <br />
                  <span className="type-outline">{words.slice(-1)}</span>
                </>
              )}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed">{entry.shortDescription}</p>
            <div className="mt-9 flex flex-wrap items-stretch gap-8">
              <span className="btn-alu">
                <span className="btn-strong">{entry.outcome}</span>
              </span>
              <div className="flex flex-col justify-center border-l border-border pl-6">
                <span className="label-mono">Frames</span>
                <span className="font-medium text-white">{entry.images.length}</span>
              </div>
            </div>
          </div>

          <div className="relative mt-12 h-[24rem] lg:col-span-4 lg:mt-0 lg:h-auto">
            <div className="bracket-bl absolute inset-0 overflow-hidden bg-navy">
              <img
                src={entry.images[0]?.src}
                alt={entry.images[0]?.caption ?? entry.title}
                className="h-full w-full object-cover opacity-80 grayscale contrast-125 transition-all duration-700 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </SlideshowSection>

      <section className="border-y border-border bg-background px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <span className="kicker">Write-up</span>
            {entry.longDescription.map((para, i) => (
              <p
                key={para.slice(0, 24)}
                className={
                  i === 0
                    ? "text-xl leading-relaxed text-white"
                    : "leading-relaxed text-muted-foreground"
                }
              >
                {para}
              </p>
            ))}
          </div>
          <aside className="space-y-10 border-border lg:col-span-4 lg:col-start-9 lg:border-l lg:pl-10">
            {entry.tech && (
              <div>
                <p className="label-mono">Hardware / Stack</p>
                <ul className="mt-4 divide-y divide-border">
                  {entry.tech.map((t, i) => (
                    <li key={t} className="flex gap-4 py-2.5 text-sm">
                      <span className="font-mono text-[10px] text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {entry.team && (
              <div>
                <p className="label-mono">Team</p>
                <ul className="mt-4 divide-y divide-border">
                  {entry.team.map((t) => (
                    <li key={t} className="py-2.5 text-sm text-white">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <SlideshowSection photos={photos} className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="kicker">Photo set</span>
          <h2 className="mt-6 text-4xl sm:text-5xl">
            Contact
            <br />
            <span className="type-outline">sheet</span>
          </h2>
          <p className="mb-10 mt-5 max-w-md text-sm">
            {entry.images.length} frames — click any to open full size.
          </p>
          <PhotoGrid images={entry.images} layout="masonry" />
        </div>
      </SlideshowSection>
    </>
  );
}
