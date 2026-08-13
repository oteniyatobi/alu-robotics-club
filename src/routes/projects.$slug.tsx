import { createFileRoute, notFound } from "@tanstack/react-router";
import { EntryDetail } from "@/components/EntryDetail";
import { bySlug } from "@/data/content";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const entry = bySlug("project", params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found | ALU Robotics Club" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { entry } = loaderData;
    return {
      meta: [
        { title: `${entry.title} | ALU Robotics Club` },
        { name: "description", content: entry.shortDescription },
        { property: "og:title", content: `${entry.title} | ALU Robotics Club` },
        { property: "og:description", content: entry.shortDescription },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="px-6 py-32 text-center font-mono">Project entry not found.</div>
  ),
  errorComponent: ({ error }) => (
    <div role="alert" className="px-6 py-32 text-center font-mono">
      {error.message}
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { entry } = Route.useLoaderData();
  return <EntryDetail entry={entry} />;
}
