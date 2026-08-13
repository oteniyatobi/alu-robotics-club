import { createFileRoute } from "@tanstack/react-router";
import { CategoryIndex } from "@/components/CategoryIndex";

export const Route = createFileRoute("/competitions/")({
  head: () => ({
    meta: [
      { title: "Competitions | ALU Robotics Club" },
      {
        name: "description",
        content:
          "Formal robotics competition record for the ALU Robotics Club: rankings, results, build detail and event photo sets.",
      },
      { property: "og:title", content: "Competitions | ALU Robotics Club" },
      {
        property: "og:description",
        content: "Rankings and results from robotics competitions across East Africa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <CategoryIndex
      category="competition"
      heading="Competitions"
      blurb="Judged arenas, timed runs, published rankings. This is the scoreboard."
    />
  ),
});
