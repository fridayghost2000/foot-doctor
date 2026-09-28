import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { conditions } from '@/data/conditionsData'
import { PageHero } from '@/components/common/PageHero'
import { FAQSection } from '@/components/common/FAQSection'
import { AppointmentCTA } from '@/components/common/AppointmentCTA'
import { Button } from '@/components/common/Button'

export function ConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Conditions we treat"
        title="Comfort starts with understanding."
        text="From common concerns to more complex foot and ankle issues, we take time to listen, evaluate, and build a personalized conservative care plan with you."
      />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="divide-y divide-[#dce5e0] space-y-16 lg:space-y-20">
          {conditions.map((item, i) => {
            const isImageLeft = i % 2 === 0

            return (
              <article
                key={item.slug}
                className={`grid items-center gap-10 lg:gap-14 pt-16 first:pt-0 lg:grid-cols-12`}
              >
                {/* Condition Image Column (5 cols) */}
                <div
                  className={`lg:col-span-5 ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <Link
                    to={item.href || `/${item.slug}/`}
                    className="group relative block overflow-hidden rounded-xl bg-[#0e2732] shadow-md border-4 border-white cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[280px] sm:h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e2732]/60 via-transparent to-transparent" />
                    
                    {/* Number Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="inline-block rounded-full bg-[#163b4a]/85 px-2.5 py-0.5 text-xs font-bold tracking-wider text-[#dcebe5] backdrop-blur-sm border border-white/20">
                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 left-4 right-4 text-white">
                      <p className="text-sm font-medium text-white/95">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Condition Content Column (7 cols) - Clear, Readable & Spacious */}
                <div
                  className={`lg:col-span-7 flex flex-col justify-center ${
                    isImageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="mb-2.5 flex items-center gap-2">
                    <span className="font-serif text-xs sm:text-sm font-semibold tracking-wider text-[#52776c] uppercase">
                      {i + 1 < 10 ? `0${i + 1}` : i + 1} · Specialty Podiatry Care
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-[#163b4a] leading-snug">
                    <Link
                      to={item.href || `/${item.slug}/`}
                      className="hover:text-[#255264] transition-colors cursor-pointer"
                    >
                      {item.title}
                    </Link>
                  </h2>

                  <p className="mt-3.5 text-[16px] sm:text-[17px] leading-7 text-[#44605b]">
                    {item.summary}
                  </p>

                  {/* Concise Highlights (Top 3) */}
                  {item.highlights && (
                    <div className="mt-5 space-y-2.5">
                      {item.highlights.slice(0, 3).map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-3 text-[14.5px] sm:text-[15.5px] font-medium text-[#24423c]"
                        >
                          <span className="grid size-5.5 shrink-0 place-items-center rounded-full bg-[#dcebe5] text-[#163b4a]">
                            <Check size={13} />
                          </span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Clean Action CTA */}
                  <div className="mt-7 flex flex-wrap items-center gap-5">
                    <Button
                      href={item.href || `/${item.slug}/`}
                      icon={true}
                    >
                      Explore treatment
                    </Button>
                    <Link
                      to={item.href || `/${item.slug}/`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3f655b] hover:text-[#163b4a] hover:underline"
                    >
                      Learn more <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </main>

      <FAQSection />
      <AppointmentCTA />
    </>
  )
}
