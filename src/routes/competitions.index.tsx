import { createFileRoute } from '@tanstack/react-router'
import { CategoryIndex } from '@/components/CategoryIndex'

export const Route = createFileRoute('/competitions/')({
  component: () => (
    <CategoryIndex
      category="competition"
      heading="Competitions"
      blurb="Leagues and championships where our robots go head-to-head against other university teams."
    />
  ),
})
