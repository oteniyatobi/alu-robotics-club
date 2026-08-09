import { useEffect, useState, type ReactNode } from "react";

type Props = {
  photos: string[];
  children: ReactNode;
  className?: string;
  interval?: number;
  overlay?: "hero" | "section";
  id?: string;
};

/** Full-bleed crossfading photo slideshow behind a dark overlay. */
export function SlideshowSection({
  photos,
  children,
  className = "",
  interval = 5000,
  overlay = "section",
  id,
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % photos.length),
      interval
    );
    return () => window.clearInterval(timer);
  }, [photos.length, interval]);

  return (
    <section id={id} className={`relative isolate overflow-hidden ${className}`}>
      <div className="absolute inset-0 -z-20 bg-navy-deep">
        {photos.map((photo, i) => (
          <img
            key={photo + i}
            src={photo}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
      </div>
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 ${
          overlay === "hero"
            ? "bg-navy-deep/80"
            : "bg-navy-deep/90"
        }`}
      />
      {children}
    </section>
  );
}
