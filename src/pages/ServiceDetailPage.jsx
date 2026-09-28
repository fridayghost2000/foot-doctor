import { Check } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { services } from '@/data/servicesData'
import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/common/Button'
import { FAQSection } from '@/components/common/FAQSection'
import { AppointmentCTA } from '@/components/common/AppointmentCTA'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const item = services.find((x) => x.slug === slug) || services[0]

  return (
    <>
      <PageHero
        eyebrow="Service detail"
        title={item.title}
        text={item.summary}
      />

      <main className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_0.75fr] lg:px-10 lg:py-24">
        <div>
          <p className="eyebrow">A clearer path forward</p>
          <h2 className="section-title">
            Care that meets you where <em>you are.</em>
          </h2>
          <p className="mt-6 text-base leading-8 text-[#526a67]">
            {item.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 border-t border-[#dce5e0] pt-6">
            {item.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3 text-sm font-medium text-[#365752]"
              >
                <span className="grid size-7 place-items-center rounded-full bg-[#dcebe5] text-[#52776c]">
                  <Check size={15} />
                </span>
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <aside className="bg-[#edf3ee] p-8 self-start">
          <p className="eyebrow">What to expect</p>
          <h3 className="font-serif text-3xl text-[#163b4a]">
            Start with a conversation.
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#617572]">
            Whether this is a new concern or something you have been managing for a while, we are here to help you understand your options.
          </p>
          <div className="mt-7">
            <Button href="/contact">Make an appointment</Button>
          </div>
        </aside>
      </main>

      <FAQSection />
      <AppointmentCTA />
    </>
  )
}
