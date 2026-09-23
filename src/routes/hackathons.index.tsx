import { createFileRoute } from '@tanstack/react-router'
import { CategoryIndex } from '@/components/CategoryIndex'
import { HACKATHON_SLIDES } from '@/data/content'

export const Route = createFileRoute('/hackathons/')({
  component: () => (
    <CategoryIndex
      category="hackathon"
      heading="Hackathons"
      blurb="Sprint events where we build hardware from scratch against a clock and other teams."
      slides={HACKATHON_SLIDES}
    />
  ),
})
