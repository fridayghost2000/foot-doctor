import {
  Sparkles,
  ShieldCheck,
  Check,
  Award,
  HeartPulse,
  Droplets,
  Activity,
  Calendar,
  Phone,
  FileCheck,
  Info,
} from 'lucide-react'
import pedicureImg from '@/assets/images/waterless-medical-pedicure-about-img.webp'
import { PageHero } from '@/components/common/PageHero'
import { FAQSection } from '@/components/common/FAQSection'
import { AppointmentCTA } from '@/components/common/AppointmentCTA'
import { Button } from '@/components/common/Button'

export function MedicalNailCarePage() {
  const whoWeHelp = [
    {
      title: 'Thick & Difficult Nails',
      description: 'Safe, pain-free reduction and shaping of overgrown or hardened toenails.',
    },
    {
      title: 'Fungal & Discolored Nails',
      description: 'Specialized debridement and hygiene care to support fungal treatments.',
    },
    {
      title: 'Curved or Painful Nails',
      description: 'Gentle border care and trimming to alleviate pressure and discomfort.',
    },
    {
      title: 'Corns & Calluses',
      description: 'Precision debridement and smoothing of painful pressure spots.',
    },
    {
      title: 'Diabetic & High-Risk Care',
      description: 'Sterile, careful maintenance for patients at elevated risk of infection.',
    },
    {
      title: 'Self-Care Assistance',
      description: 'Professional foot care for those unable to safely reach or trim their nails.',
    },
  ]

  const serviceHighlights = [
    {
      title: 'Clinical Sterility',
      desc: 'Hospital-grade autoclaved instruments and single-use supplies eliminate cross-contamination.',
    },
    {
      title: 'Waterless Technique',
      desc: 'Eliminates water basin soaking risks, reducing bacterial & fungal transmission.',
    },
    {
      title: 'Non-Toxic & Antifungal Polishes',
      desc: 'Formulated with natural antifungal agents without harmful harsh chemicals.',
    },
    {
      title: 'Certified Medical Specialist',
      desc: 'Performed by a Certified Medical Nail Technician under podiatric standards.',
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="Professional Care for Difficult or Problematic Toenails"
        title="Medical Nail Care"
        text="Medical nail care may help patients with thick or difficult nails, fungal or discolored nails, curved or painful nails, corns and calluses, or patients who are unable to safely care for their feet."
      />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 space-y-16">
        {/* Intro 2-Column: More Than Cosmetic Nail Care */}
        <section className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#dcebe5] px-3.5 py-1 text-xs font-bold text-[#163b4a] w-fit mb-3 border border-[#b8d6cb]">
              <ShieldCheck size={14} className="text-[#52776c]" /> Health & Safety First
            </span>
            <h2 className="section-title text-3xl sm:text-4xl font-serif text-[#163b4a] leading-tight">
              More Than Cosmetic <em>Nail Care.</em>
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#405f59]">
              Medical nail care focuses on the <strong>health, comfort, and safe maintenance</strong> of the nails and surrounding skin rather than cosmetic appearance alone.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#526d68]">
              Traditional nail salons may not accommodate complex nail conditions or maintain medical-grade sterilization standards. Our clinical setting provides peace of mind, especially for elderly patients, diabetics, or individuals with mobility limitations.
            </p>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl">
              <img
                src={pedicureImg}
                alt="Medical-Grade Waterless Pedicure and Nail Care"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Who Medical Nail Care Helps */}
        <section className="border-t border-[#dce5e0] pt-12">
          <div className="max-w-2xl mb-8">
            <p className="eyebrow text-sm font-semibold tracking-wider text-[#52776c] uppercase">
              Patient Care Focus
            </p>
            <h3 className="font-serif text-3xl font-medium text-[#163b4a] mt-1">
              Who May Benefit from Medical Nail Care?
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeHelp.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#dce5e0] bg-white p-6 shadow-xs hover:border-[#163b4a]/30 transition-all"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="grid size-6 place-items-center rounded-full bg-[#dcebe5] text-[#163b4a]">
                    <Check size={14} />
                  </span>
                  <h4 className="font-serif text-lg font-medium text-[#163b4a]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-[#526d68] pl-8.5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Medical-Grade Manicure & Pedicure Detailed Section */}
        <section className="rounded-3xl border border-[#c4ded3] bg-[#fafcf9] p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="grid size-10 place-items-center rounded-xl bg-[#163b4a] text-[#dcebe5]">
                <Sparkles size={20} />
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#163b4a]">
                Medical-Grade Manicure &amp; Pedicure
              </h3>
            </div>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#3a5d56]">
              Our office offers <strong>medical-grade manicure and pedicure services</strong> provided by a <strong>Certified Medical Nail Technician</strong> in a professional medical-office setting.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#405f59]">
              Services focus on careful nail and skin care and may include the use of <strong>non-toxic and antifungal nail-polish options</strong>.
            </p>
          </div>

          {/* Feature Pillars */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map((feat) => (
              <div
                key={feat.title}
                className="rounded-xl border border-[#dce5e0] bg-white p-5 shadow-xs"
              >
                <h4 className="font-serif text-base font-semibold text-[#163b4a] mb-1.5">
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#526d68]">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing & Availability Banner */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-[#b8d6cb] bg-[#edf6f2] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#163b4a] text-white mt-1 sm:mt-0">
                <Info size={20} />
              </span>
              <div>
                <h4 className="font-serif text-xl font-medium text-[#163b4a]">
                  Availability &amp; Pricing
                </h4>
                <p className="mt-1 text-sm sm:text-base leading-relaxed text-[#405f59]">
                  Please contact our office for appointment availability, specific service options, and pricing.
                </p>
              </div>
            </div>
            <Button href="/contact" className="shrink-0">
              Contact our office
            </Button>
          </div>
        </section>
      </main>

      <FAQSection />
      <AppointmentCTA />
    </>
  )
}
