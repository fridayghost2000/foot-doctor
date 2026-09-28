import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '@/data/servicesData'
import { PageHero } from '@/components/common/PageHero'
import { FAQSection } from '@/components/common/FAQSection'
import { AppointmentCTA } from '@/components/common/AppointmentCTA'

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Thoughtful treatment"
        title="Care designed around your everyday."
        text="Explore services that support comfort, mobility, and healthier feet—delivered with a personal, conservative approach."
      />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => {
            const hasImage = Boolean(item.image)

            if (hasImage) {
              return (
                <Link
                  key={item.slug}
                  to={item.href || `/services/${item.slug}`}
                  className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer border border-[#d6e2dc]"
                >
                  {/* Background Image with smooth hover zoom */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  {/* Gradient overlay for clear text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081c25]/95 via-[#163b4a]/65 to-black/30 transition-opacity duration-300 group-hover:via-[#163b4a]/55" />

                  {/* Top: Number badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-block bg-[#163b4a]/90 px-3 py-0.5 text-xs font-bold tracking-wider text-[#dcebe5] backdrop-blur-xs border border-white/20">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Bottom: Main Title and Summary */}
                  <div className="relative z-10 mt-auto">
                    <h2 className="font-serif text-2xl leading-snug text-white font-medium drop-shadow-xs group-hover:text-[#dcebe5] transition-colors">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#d1e3dd]">
                      {item.summary}
                    </p>
                    <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#dcebe5] transition-colors group-hover:text-white">
                        Explore <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            }

            return (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="group relative flex min-h-[380px] flex-col justify-between border border-[#dce5e0] bg-[#fafcf9] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#163b4a]/40 hover:bg-white hover:shadow-xl cursor-pointer"
              >
                <div>
                  <span className="inline-block bg-[#dcebe5] px-3 py-0.5 text-xs font-bold tracking-wider text-[#163b4a] mb-6">
                    0{i + 1}
                  </span>
                  <h2 className="font-serif text-2xl text-[#163b4a] font-medium group-hover:text-[#0b2530] transition-colors">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#526d68]">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#e2ece7] flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#52776c] group-hover:text-[#163b4a] transition-colors">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </main>

      <FAQSection />
      <AppointmentCTA />
    </>
  )
}
