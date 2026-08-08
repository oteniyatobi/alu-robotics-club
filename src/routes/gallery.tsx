import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PhotoGrid } from "@/components/PhotoGrid";
import { SlideshowSection } from "@/components/SlideshowSection";
import { allImages, slideshowPhotos, CATEGORY_LABELS, type Category } from "@/data/content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — ALU Robotics Club" },
      {
        name: "description",
        content:
          "Every photo from every ALU Robotics Club hackathon, competition and project in one wall, filterable by category.",
      },
      { property: "og:title", content: "Photo Gallery — ALU Robotics Club" },
      {
        property: "og:description",
        content: "The full photo wall: builds, arenas and late-night lab sessions in Kigali.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

const filters: Array<{ key: Category | "all"; label: string }> = [
  { key: "all", label: "All" },
  { key: "hackathon", label: "Hackathons" },
  { key: "competition", label: "Competitions" },
  { key: "project", label: "Projects" },
];

function Gallery() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const images = allImages()
    .filter((i) => filter === "all" || i.entry.category === filter)
    .map((i) => ({
      src: i.src,
      caption: `${i.entry.title} · ${CATEGORY_LABELS[i.entry.category]} · ${i.caption}`,
    }));

  return (
    <SlideshowSection photos={slideshowPhotos()} interval={7000} className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="rule-red text-4xl font-bold sm:text-5xl">Photo wall</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {images.length} frames across every hackathon, competition and build.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={`border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                filter === f.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <PhotoGrid
            images={images}
            columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          />
        </div>
      </div>
    </SlideshowSection>
  );
}
