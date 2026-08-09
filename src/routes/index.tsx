import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SlideshowSection } from "@/components/SlideshowSection";
import { EntryRow, layoutCycle } from "@/components/EntryRow";
import { CLUB, latest, slideshowPhotos, entries } from "@/data/content";

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

function Home() {
  const heroPhotos = slideshowPhotos();
  const preview = [latest("hackathon"), latest("competition"), latest("project")].filter(
    (e): e is NonNullable<typeof e> => Boolean(e)
  );
  const standouts = entries.slice(0, 6).map((e) => e.images[0]!);

  return (
    <>
      <SlideshowSection
        photos={heroPhotos}
        overlay="hero"
        interval={4500}
        className="flex min-h-[92vh] items-center px-4 py-24 sm:px-6"
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="label-mono">
            {CLUB.university} · {CLUB.city} · Est. {CLUB.founded}
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
            ALU ROBOTICS
            <span className="text-primary">.</span>
            <br />
            CLUB
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">{CLUB.tagline}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              See the builds <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/competitions"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-primary"
            >
              Results
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {standouts.map((image, i) => (
              <div key={i} className="aspect-square overflow-hidden border border-border">
                <img
                  src={image.src}
                  alt={image.caption}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 transition hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </SlideshowSection>

      <section className="border-y border-border bg-background px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_1fr]">
          <p className="text-xl leading-relaxed sm:text-2xl">
            We design, wire and code autonomous machines out of a lab in Kigali — rovers, sensor
            meshes, arms and sumo bots — then take them into hackathons and robotics competitions
            across East Africa.
          </p>
          <dl className="grid grid-cols-3 gap-4 self-start">
            {[
              { k: "Entries logged", v: String(entries.length) },
              { k: "Wins", v: "3" },
              { k: "Since", v: CLUB.founded },
            ].map((s) => (
              <div key={s.k} className="border border-border p-4">
                <dt className="label-mono">{s.k}</dt>
                <dd className="mt-2 font-mono text-3xl font-bold text-primary">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-background px-4 pt-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="rule-red text-2xl font-bold sm:text-3xl">Latest on the bench</h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Most recent hackathon, competition and project.
          </p>
        </div>
      </section>

      {preview.map((entry, i) => {
        const layout = layoutCycle[i % layoutCycle.length]!;
        const inner = (
          <div className="mx-auto max-w-6xl">
            <EntryRow entry={entry} layout={layout} />
          </div>
        );
        if (layout === "overlay") {
          return (
            <section key={entry.slug} className="bg-background px-0 py-10 sm:px-6">
              <div className="mx-auto max-w-7xl">
                <EntryRow entry={entry} layout={layout} />
              </div>
            </section>
          );
        }
        return i % 2 === 0 ? (
          <section
            key={entry.slug}
            className="bg-background px-4 py-12 sm:px-6 sm:py-16"
          >
            {inner}
          </section>
        ) : (
          <SlideshowSection
            key={entry.slug}
            photos={heroPhotos}
            interval={9000}
            className="border-y border-border px-4 py-20 sm:px-6 sm:py-28"
          >
            {inner}
          </SlideshowSection>
        );
      })}

    </>
  );
}
