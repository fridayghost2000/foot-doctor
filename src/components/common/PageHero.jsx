import { Award } from 'lucide-react'
import drImage2 from '@/assets/images/dr.image2.jpg'
import { clinicData } from '@/data/clinicData'
import { Button } from './Button'

export function PageHero({
  eyebrow,
  title,
  text,
  image = drImage2,
  badgeName = clinicData.doctorName,
  badgeRole = 'Delray Beach Podiatrist',
}) {
  return (
    <section className="border-b border-[#dce5e0] bg-[#eaf2ed] px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-12">
        {/* Left Hero Content */}
        <div className="lg:col-span-7">
          {eyebrow && (
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#5f8178]">
              {eyebrow}
            </p>
          )}

          <h1 className="font-serif text-4xl leading-[1.1] text-[#163b4a] sm:text-5xl md:text-6xl">
            {title}
          </h1>

          {text && (
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#526a67] sm:text-lg">
              {text}
            </p>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/contact" icon={true}>
              Request an appointment
            </Button>
            <a
              href={clinicData.phoneHref}
              className="inline-flex items-center gap-2 rounded border border-[#163b4a]/20 bg-white/80 px-5 py-3 text-sm font-semibold text-[#163b4a] transition hover:bg-white"
            >
              Call: {clinicData.phone}
            </a>
          </div>
        </div>

        {/* Right Hero Doctor Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="overflow-hidden rounded-xl bg-[#163b4a] shadow-xl border-4 border-white">
              <img
                src={image}
                alt={`${badgeName} - Foot Doctor of Delray`}
                className="h-[400px] sm:h-[460px] w-full object-cover object-top"
              />
            </div>

            {/* Doctor Floating Badge */}
            <div className="absolute -bottom-5 -left-5 rounded-lg bg-white p-4 shadow-lg border border-[#dce5e0] hidden sm:flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-[#dcebe5] text-[#163b4a]">
                <Award size={20} />
              </span>
              <div>
                <p className="text-xs font-bold text-[#163b4a]">{badgeName}</p>
                <p className="text-[11px] text-[#65817b]">{badgeRole}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
