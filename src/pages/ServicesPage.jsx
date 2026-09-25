import { ArrowRight } from 'lucide-react'
import { services } from '@/data/servicesData'
import { PageHero } from '@/components/common/PageHero'
import { AppointmentCTA } from '@/components/common/AppointmentCTA'
import { useRouter } from '@/hooks/useRouter'

export function ServicesPage() {
  const { navigate } = useRouter()

  return (
    <>
      <PageHero
        eyebrow="Thoughtful treatment"
        title="Care designed around your everyday."
        text="Explore services that support comfort, mobility, and healthier feet—delivered with a personal, conservative approach."
      />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-px bg-[#cbd9d5] md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <a
              key={item.slug}
              href={`/services/${item.slug}`}
              onClick={(e) => {
                e.preventDefault()
                navigate(`/services/${item.slug}`)
              }}
              className="group bg-white p-8 transition-colors hover:bg-[#edf3ee] cursor-pointer"
            >
              <span className="mb-16 block text-sm text-[#9db8ad]">0{i + 1}</span>
              <h2 className="font-serif text-2xl text-[#163b4a]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#617572]">{item.summary}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#52776c]">
                Explore <ArrowRight size={15} />
              </span>
            </a>
          ))}
        </div>
      </main>

      <AppointmentCTA />
    </>
  )
}
