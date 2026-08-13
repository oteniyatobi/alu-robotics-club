import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SlideshowSection } from "@/components/SlideshowSection";
import { EntryRow } from "@/components/EntryRow";
import { CLUB, latest, slideshowPhotos, entries, CATEGORY_LABELS } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALU Robotics Club — Builds, Hackathons & Competition Results" },
      {
        name: "description",
        content:
          "The ALU Robotics Club in Kigali builds autonomous machines and enters hackathons and robotics competitions. Photos, results and build write-ups.",
      },
      { property: "og:title", content: "ALU Robotics Club — Builds, Hackathons & Competitions" },
      {
        property: "og:description",
        content:
          "Project showcase from the African Leadership University robotics club: rovers, sensor meshes, competition results and build photos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const routeFor: Record<string, string> = {
  hackathon: "/hackathons/$slug",
  competition: "/competitions/$slug",
  project: "/projects/$slug",
};

function Home() {
  const heroPhotos = slideshowPhotos();
  const headline = entries[0];
  const preview = [latest("hackathon"), latest("competition"), latest("project")].filter(
    (e): e is NonNullable<typeof e> => Boolean(e)
  );
  const contactSheet = entries.slice(0, 6).map((e) => e.images[1] ?? e.images[0]!);

  return (
    <>
      {/* ── Masthead hero: asymmetric 8/4 split over a full-bleed slideshow ── */}
      <SlideshowSection
        photos={heroPhotos}
        overlay="hero"
        interval={5000}
        className="px-4 py-20 sm:px-6 sm:py-28"
      >
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
          <span
            aria-hidden="true"
            className="absolute left-[-2rem] top-0 hidden h-full w-px bg-primary/25 lg:block"
          />

          <div className="relative z-10 flex min-h-[34rem] flex-col justify-end lg:col-span-8 lg:pr-20">
            <span className="kicker">
              {CLUB.city} · Est. {CLUB.founded}
            </span>
            <h1 className="mt-8 text-6xl sm:text-8xl lg:text-9xl">
              ALU
              <br />
              <span className="type-outline">Robotics</span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed">{CLUB.tagline}</p>

            <div className="mt-10 flex flex-wrap items-stretch gap-8">
              <Link to="/projects" className="btn-alu group">
                See the <span className="btn-strong">builds</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex flex-col justify-center border-l border-border pl-6">
                <span className="label-mono">Base</span>
                <span className="font-medium text-white">{CLUB.university}</span>
              </div>
              <div className="flex flex-col justify-center border-l border-border pl-6">
                <span className="label-mono">Entries on file</span>
                <span className="font-medium text-white">{entries.length}</span>
              </div>
            </div>
          </div>

          {/* Tall portrait plate with red bracket */}
          <div className="relative mt-12 h-[26rem] lg:col-span-4 lg:mt-0 lg:h-auto">
            <div className="bracket-bl absolute inset-0 overflow-hidden bg-navy">
              <img
                src={headline?.images[0]?.src}
                alt={headline?.images[0]?.caption ?? "Club build"}
                className="h-full w-full object-cover opacity-80 transition-all duration-700 hover:opacity-100"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute top-12 -right-4 hidden h-px w-8 bg-primary lg:block"
            />
          </div>
        </div>
      </SlideshowSection>

      {/* ── Short text-only band: statement + contact sheet ── */}
      <section className="border-y border-border bg-background px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <p className="text-2xl leading-tight text-white sm:text-3xl lg:col-span-7">
            We design, wire and code autonomous machines out of a lab in Kigali — rovers, sensor
            meshes, arms and sumo bots — then put them in front of judges.
          </p>
          <div className="grid auto-rows-min grid-cols-3 gap-px self-start bg-border lg:col-span-5 lg:grid-cols-6">
            {contactSheet.map((image, i) => (
              <div key={i} className="aspect-square overflow-hidden bg-navy">
                <img
                  src={image.src}
                  alt={image.caption}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 transition-all duration-500 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Preview strip: three vertical magazine columns ── */}
      <section className="bg-background px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="kicker">Latest on the bench</span>
              <h2 className="mt-6 text-4xl sm:text-5xl">Most recent<br />
                <span className="type-outline">three entries</span>
              </h2>
            </div>
            <Link
              to="/gallery"
              className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-primary hover:text-white"
            >
              Full photo wall →
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 border-t border-border md:grid-cols-3">
            {preview.map((entry, i) => (
              <Link
                key={entry.slug}
                to={routeFor[entry.category]!}
                params={{ slug: entry.slug }}
                className="group relative border-border p-0 pt-10 md:border-r md:p-10 md:last:border-r-0"
              >
                <div className="relative mb-8 aspect-[4/5] overflow-hidden bg-navy">
                  <img
                    src={entry.images[0]?.src}
                    alt={entry.images[0]?.caption ?? entry.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="label-mono text-primary">
                  {CATEGORY_LABELS[entry.category]} · {entry.dateLabel}
                </span>
                <h3 className="mt-3 text-2xl transition-colors group-hover:text-primary">
                  {entry.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">{entry.shortDescription}</p>
                <p className="mt-5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white">
                  {entry.outcome}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tall photo-dominant spread of the headline entry ── */}
      {headline && (
        <section className="bg-background px-0 pb-24 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <EntryRow entry={headline} layout="spread" num="01" />
          </div>
        </section>
      )}
    </>
  );
}
