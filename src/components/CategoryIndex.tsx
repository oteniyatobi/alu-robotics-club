import { SlideshowSection } from "@/components/SlideshowSection";
import { EntryRow, layoutCycle } from "@/components/EntryRow";
import { byCategory, slideshowPhotos, type Category, type Entry } from "@/data/content";

const pad = (i: number) => String(i + 1).padStart(2, "0");

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

  // Group consecutive index-rows so they read as one lab-notebook table.
  const blocks: Array<{ layout: string; items: Array<{ entry: Entry; num: string }> }> = [];
  items.forEach((entry, i) => {
    const layout = layoutCycle[i % layoutCycle.length]!;
    const last = blocks[blocks.length - 1];
    if (layout === "index-row" && last?.layout === "index-row") {
      last.items.push({ entry, num: pad(i) });
    } else {
      blocks.push({ layout, items: [{ entry, num: pad(i) }] });
    }
  });

  return (
    <>
      {/* Short text-only header band with editorial masthead */}
      <section className="border-b border-border bg-background px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="kicker">{items.length} entries on file</span>
            <h1 className="mt-7 max-w-3xl text-5xl sm:text-7xl">{heading}</h1>
          </div>
          <p className="self-end border-l border-primary pl-6 text-lg leading-relaxed lg:col-span-4">
            {blurb}
          </p>
        </div>
      </section>

      {blocks.map((block, bi) => {
        const key = block.items[0]!.entry.slug;

        if (block.layout === "index-row") {
          return (
            <section key={key} className="bg-background px-4 py-10 sm:px-6 sm:py-14">
              <div className="mx-auto max-w-7xl border-t border-border">
                {block.items.map(({ entry, num }) => (
                  <EntryRow key={entry.slug} entry={entry} layout="index-row" num={num} />
                ))}
              </div>
            </section>
          );
        }

        if (block.layout === "spread") {
          return (
            <section key={key} className="bg-background px-0 py-6 sm:px-6 sm:py-12">
              <div className="mx-auto max-w-7xl">
                <EntryRow
                  entry={block.items[0]!.entry}
                  layout="spread"
                  num={block.items[0]!.num}
                />
              </div>
            </section>
          );
        }

        const inner = (
          <div className="mx-auto max-w-7xl">
            <EntryRow entry={block.items[0]!.entry} layout="feature" num={block.items[0]!.num} />
          </div>
        );

        return bi % 2 === 0 ? (
          <SlideshowSection
            key={key}
            photos={slideshowPhotos(category)}
            interval={9000}
            className="px-4 py-24 sm:px-6 sm:py-32"
          >
            {inner}
          </SlideshowSection>
        ) : (
          <section
            key={key}
            className="border-y border-border bg-background px-4 py-20 sm:px-6 sm:py-24"
          >
            {inner}
          </section>
        );
      })}
    </>
  );
}
