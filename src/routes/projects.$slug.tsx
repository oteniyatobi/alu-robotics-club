import { createFileRoute, notFound } from '@tanstack/react-router'
import { EntryDetail } from '@/components/EntryDetail'
import { bySlug } from '@/data/content'

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => {
    const entry = bySlug('project', params.slug)
    if (!entry) throw notFound()
    return { entry }
  },
  notFoundComponent: () => (
    <div className="px-6 py-32 text-center font-mono text-muted-foreground">
      Project not found.
    </div>
  ),
  errorComponent: ({ error }) => (
    <div role="alert" className="px-6 py-32 text-center font-mono text-muted-foreground">
      {error.message}
    </div>
  ),
  component: ProjectDetail,
})

function ProjectDetail() {
  const { entry } = Route.useLoaderData()
  return <EntryDetail entry={entry} />
}
