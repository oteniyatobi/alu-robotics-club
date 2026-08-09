import { SlideshowSection } from "@/components/SlideshowSection";
import { EntryRow, layoutCycle } from "@/components/EntryRow";
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
      {/* Short, text-only header band */}
      <section className="border-b border-border bg-background px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="label-mono">{items.length} entries on file</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-6xl">{heading}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{blurb}</p>
        </div>
      </section>

      {items.map((entry, i) => {
        const layout = layoutCycle[i % layoutCycle.length]!;

        if (layout === "overlay") {
          return (
            <section key={entry.slug} className="bg-background px-0 py-0 sm:px-6 sm:py-10">
              <div className="mx-auto max-w-7xl">
                <EntryRow entry={entry} layout={layout} />
              </div>
            </section>
          );
        }

        const tinted = i % 2 === 0;
        const inner = (
          <div className="mx-auto max-w-6xl">
            <EntryRow entry={entry} layout={layout} />
          </div>
        );

        return tinted ? (
          <SlideshowSection
            key={entry.slug}
            photos={slideshowPhotos(category)}
            interval={9000}
            className="px-4 py-20 sm:px-6 sm:py-28"
          >
            {inner}
          </SlideshowSection>
        ) : (
          <section
            key={entry.slug}
            className="border-y border-border bg-background px-4 py-12 sm:px-6 sm:py-16"
          >
            {inner}
          </section>
        );
      })}
    </>
  );
}
