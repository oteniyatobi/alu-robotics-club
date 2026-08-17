import { createFileRoute } from '@tanstack/react-router'
import { CategoryIndex } from '@/components/CategoryIndex'

export const Route = createFileRoute('/projects/')({
  component: () => (
    <CategoryIndex
      category="project"
      heading="Projects"
      blurb="Long-run builds from the lab. No external deadline, just problems worth solving."
    />
  ),
})
