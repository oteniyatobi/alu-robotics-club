import { createFileRoute } from "@tanstack/react-router";
import { CategoryIndex } from "@/components/CategoryIndex";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | ALU Robotics Club" },
      {
        name: "description",
        content:
          "Ongoing and completed ALU Robotics Club builds: delivery rovers, LoRa sensor meshes, prosthetic hands, hardware, stack and photos.",
      },
      { property: "og:title", content: "Projects | ALU Robotics Club" },
      {
        property: "og:description",
        content: "Club builds that aren't tied to an event: what they do and what's inside them.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <CategoryIndex
      category="project"
      heading="Projects"
      blurb="Long-run builds from the lab. No deadline handed to us, we set it ourselves."
    />
  ),
});
