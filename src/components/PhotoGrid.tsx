import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { EntryImage } from "@/data/content";

type Props = {
  images: EntryImage[];
  columns?: string;
};

export function PhotoGrid({
  images,
  columns = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
}: Props) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % images.length);
      if (e.key === "ArrowLeft")
        setActive((i) => ((i ?? 0) - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  const current = active === null ? null : images[active];

  return (
    <>
      <div className={`grid gap-3 ${columns}`}>
        {images.map((image, i) => (
          <button
            key={image.caption + i}
            type="button"
            onClick={() => setActive(i)}
            className="group relative aspect-[4/3] overflow-hidden border border-border bg-card text-left"
          >
            <img
              src={image.src}
              alt={image.caption}
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
            <span className="absolute inset-x-0 bottom-0 bg-navy-deep/85 px-2 py-1.5 font-mono text-[10px] uppercase leading-tight tracking-wider text-muted-foreground">
              {image.caption}
            </span>
            <span className="pointer-events-none absolute inset-0 border-2 border-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {active !== null && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[100] flex flex-col bg-navy-deep/97 p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          <div className="flex items-center justify-between gap-4">
            <p className="min-w-0 truncate font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {current?.caption} · {active + 1}/{images.length}
            </p>
            <button
              type="button"
              aria-label="Close"
              className="shrink-0 border border-border p-2"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div
            className="mt-4 flex min-h-0 flex-1 items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Previous photo"
              className="shrink-0 border border-border p-2 hover:border-primary"
              onClick={() =>
                setActive((i) => ((i ?? 0) - 1 + images.length) % images.length)
              }
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <img
              src={current?.src}
              alt={current?.caption ?? ""}
              className="mx-auto max-h-full min-h-0 flex-1 object-contain"
            />
            <button
              type="button"
              aria-label="Next photo"
              className="shrink-0 border border-border p-2 hover:border-primary"
              onClick={() => setActive((i) => ((i ?? 0) + 1) % images.length)}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
