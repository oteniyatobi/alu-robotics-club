import { SlideshowSection } from "@/components/SlideshowSection";
import { EntryCard } from "@/components/EntryCard";
import { byCategory, slideshowPhotos, type Category } from "@/data/content";

export function CategoryIndex({
  category,
  heading,
  blurb,
}: {
  category: Category;
  heading: string;
  blurb: string;
}) {
  const items = byCategory(category);

  return (
    <>
      <SlideshowSection
        photos={slideshowPhotos(category)}
        overlay="hero"
        className="px-4 py-24 sm:px-6 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="label-mono">{items.length} entries on file</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-6xl">{heading}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{blurb}</p>
        </div>
      </SlideshowSection>

      <SlideshowSection
        photos={slideshowPhotos(category)}
        interval={7000}
        className="px-4 py-16 sm:px-6"
      >
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </SlideshowSection>
    </>
  );
}
