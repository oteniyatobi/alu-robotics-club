import { createFileRoute } from "@tanstack/react-router";
import { CategoryIndex } from "@/components/CategoryIndex";

export const Route = createFileRoute("/hackathons/")({
  head: () => ({
    meta: [
      { title: "Hackathons — ALU Robotics Club" },
      {
        name: "description",
        content:
          "Every hackathon the ALU Robotics Club has entered: what we built, where, the outcome, and the full photo set from each weekend.",
      },
      { property: "og:title", content: "Hackathons — ALU Robotics Club" },
      {
        property: "og:description",
        content: "Hardware hackathon builds and results from the ALU Robotics Club in Kigali.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <CategoryIndex
      category="hackathon"
      heading="Hackathons"
      blurb="Weekend sprints, fixed constraints, hardware that has to move before the clock runs out."
    />
  ),
});
