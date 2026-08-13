import { createFileRoute } from "@tanstack/react-router";
import { SlideshowSection } from "@/components/SlideshowSection";
import { CLUB, slideshowPhotos, entries } from "@/data/content";
import roboticsLogo from "@/assets/robotics-logo.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Club | ALU Robotics Club" },
      {
        name: "description",
        content:
          "The ALU Robotics Club was founded in 2021 at African Leadership University, Kigali. Our mission, our lab, and how to reach us.",
      },
      { property: "og:title", content: "About the Club | ALU Robotics Club" },
      {
        property: "og:description",
        content: "Who we are, what we build, and where to find us in Kigali.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <SlideshowSection
        photos={slideshowPhotos()}
        overlay="hero"
        className="px-4 py-24 sm:px-6 sm:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <img
            src={roboticsLogo.url}
            alt="ALU Robotics Club logo"
            className="h-20 w-20 rounded-sm bg-white object-contain p-1"
            width={80}
            height={80}
          />
          <h1 className="mt-8 text-4xl font-bold sm:text-6xl">About the club</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Founded in {CLUB.founded} at {CLUB.university} in {CLUB.city}, the ALU Robotics Club
            is a student-run build shop. We take machines from a sketch on a whiteboard to
            something that drives, senses or grips, then we put it in front of judges.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our mission is simple: build hardware in Africa that solves problems in Africa, and
            keep a documented record of every attempt, the wins and the drivetrains that died at
            4am.
          </p>
        </div>
      </SlideshowSection>

      <SlideshowSection
        photos={slideshowPhotos("competition")}
        className="border-y border-border px-4 py-16 sm:px-6"
      >
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
          {[
            { k: "Founded", v: CLUB.founded },
            { k: "City", v: CLUB.city },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border border-border bg-navy/60 p-5">
              <p className="label-mono">{s.k}</p>
              <p className="mt-2 font-mono text-2xl font-bold text-primary">{s.v}</p>
            </div>
          ))}
        </div>
      </SlideshowSection>


      <SlideshowSection photos={slideshowPhotos("project")} className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="rule-red text-2xl font-bold">Contact</h2>
          <p className="mt-3 text-muted-foreground">
            Sponsorship, competition invites or lab collaborations, mail the club directly.
          </p>
          <a href={`mailto:${CLUB.email}`} className="btn-alu mt-6 normal-case tracking-normal">
            {CLUB.email}
          </a>
          <ul className="mt-8 flex flex-wrap gap-3">
            {CLUB.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-alu-ghost text-muted-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </SlideshowSection>
    </>
  );
}
