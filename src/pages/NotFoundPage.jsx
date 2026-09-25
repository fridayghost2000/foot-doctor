import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/common/Button'

export function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="404 Error"
        title="Page not found"
        text="The page you are looking for might have been removed or is temporarily unavailable."
      />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 text-center">
        <Button href="/">Return to Homepage</Button>
      </div>
    </>
  )
}
