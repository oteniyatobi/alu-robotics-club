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

  return (
    <>
      <SlideshowSection photos={photos} overlay="hero" className="px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <Link
            to={indexRoute[entry.category]}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All {CATEGORY_LABELS[entry.category]}s
          </Link>
          <p className="label-mono mt-8">
            {entry.dateLabel} · {entry.location}
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-6xl">{entry.title}</h1>
          <p className="mt-5 inline-block rounded-full bg-primary px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-primary-foreground">
            {entry.outcome}
          </p>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{entry.shortDescription}</p>
        </div>
      </SlideshowSection>

      <section className="border-y border-border bg-background px-4 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-5">
            <h2 className="rule-red text-xl font-bold">Write-up</h2>
            {entry.longDescription.map((para) => (
              <p key={para.slice(0, 24)} className="leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </div>
          <aside className="space-y-8">
            {entry.tech && (
              <div>
                <p className="label-mono">Hardware / Stack</p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {entry.tech.map((t) => (
                    <li key={t} className="border-l-2 border-primary pl-3">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {entry.team && (
              <div>
                <p className="label-mono">Team</p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {entry.team.map((t) => (
                    <li key={t} className="border-l-2 border-border pl-3">
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
        <div className="mx-auto max-w-6xl">
          <h2 className="rule-red text-xl font-bold">Photo set</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            {entry.images.length} slots — click any frame for full size.
          </p>
          <PhotoGrid images={entry.images} layout="masonry" />
        </div>
      </SlideshowSection>
    </>
  );
}
