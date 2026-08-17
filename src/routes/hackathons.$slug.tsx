import { createFileRoute, notFound } from '@tanstack/react-router'
import { EntryDetail } from '@/components/EntryDetail'
import { bySlug } from '@/data/content'

export const Route = createFileRoute('/hackathons/$slug')({
  loader: ({ params }) => {
    const entry = bySlug('hackathon', params.slug)
    if (!entry) throw notFound()
    return { entry }
  },
  notFoundComponent: () => (
    <div className="px-6 py-32 text-center font-mono text-muted-foreground">
      Hackathon entry not found.
    </div>
  ),
  errorComponent: ({ error }) => (
    <div role="alert" className="px-6 py-32 text-center font-mono text-muted-foreground">
      {error.message}
    </div>
  ),
  component: HackathonDetail,
})

function HackathonDetail() {
  const { entry } = Route.useLoaderData()
  return <EntryDetail entry={entry} />
}
