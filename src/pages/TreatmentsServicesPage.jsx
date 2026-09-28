import {
  ShieldCheck,
  Activity,
  Sparkles,
  Footprints,
  Stethoscope,
  Scissors,
  HeartPulse,
  Bone,
  Check,
  ArrowRight,
  Phone,
  Calendar,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { clinicData } from '@/data/clinicData'
import { PageHero } from '@/components/common/PageHero'
import { FAQSection } from '@/components/common/FAQSection'
import { AppointmentCTA } from '@/components/common/AppointmentCTA'
import { Button } from '@/components/common/Button'

export function TreatmentsServicesPage() {
  const serviceList = [
    {
      title: 'Conservative Foot & Ankle Care',
      text: 'Many foot and ankle conditions can be treated successfully with conservative care. Treatment may include activity modification, footwear recommendations, supportive devices, medications, injections when appropriate, and other non-surgical approaches.',
      icon: ShieldCheck,
      link: '/foot-ankle-conditions/',
    },
    {
      title: 'Heel Pain & Plantar Fasciitis Treatment',
      text: 'Treatment for heel pain and plantar fasciitis depends on the underlying cause and may include stretching, footwear changes, supportive devices, medications, injections, and other conservative treatment options.',
      icon: Footprints,
      link: '/heel-pain-plantar-fasciitis/',
    },
    {
      title: 'Ingrown Toenail Treatment',
      text: 'Treatment options depend on the severity of the ingrown toenail and whether the problem is recurring. For selected patients, the advanced B/S Nail Brace offers a gentle, non-surgical option designed to reduce excessive nail curvature and pressure along the sides of the nail. Application is non-painful, with no downtime or recovery period, allowing patients to return to their normal activities right away.',
      icon: Scissors,
      link: '/ingrown-toenail-treatment/',
      featuredBadge: 'B/S Nail Brace Available',
    },
    {
      title: 'In-Office Procedures & Soft-Tissue Surgery',
      text: 'Selected minor procedures and soft-tissue procedures may be performed in the office when appropriate. Treatment recommendations depend on the diagnosis, examination findings, and individual patient needs.',
      icon: Stethoscope,
    },
    {
      title: 'Diabetic & Preventive Foot Care',
      text: 'Preventive foot care is especially important for patients with diabetes, neuropathy, circulation problems, or other risk factors. Regular evaluation can help identify problems early and reduce the risk of complications.',
      icon: HeartPulse,
      link: '/diabetic-foot-wound-care/',
    },
    {
      title: 'Fungal Nail Treatment',
      text: 'Healthy-looking nails can be an important part of self-care and can help improve confidence. Thick, discolored, brittle, or abnormal toenails may be caused by fungus or other conditions. Proper evaluation can help determine the cause and the most appropriate treatment to improve the health and appearance of the nails.',
      icon: Sparkles,
      link: '/fungal-toenail-treatment/',
    },
    {
      title: 'Treatment of Tendon & Soft-Tissue Injuries',
      text: 'Tendon and soft-tissue injuries may result from overuse, repetitive stress, sports activity, or acute injury. Multiple conservative treatment approaches may be available depending on the affected structure and severity of the condition. In addition to traditional conservative care, advanced non-surgical treatment options may be available for selected patients. Treatment recommendations are individualized based on the condition, examination, medical history, and treatment goals.',
      icon: Activity,
      link: '/treatment-for-tendon-pain-injuries/',
    },
    {
      title: 'Fracture & Injury Care',
      text: 'Foot and ankle fractures and injuries require proper evaluation to determine the appropriate treatment. Early diagnosis and appropriate treatment are important for promoting a timely recovery and reducing the risk of complications. In-office X-rays are available when appropriate.',
      icon: Bone,
      featuredBadge: 'In-Office X-Rays',
    },
    {
      title: 'Neuropathy Care',
      text: 'Neuropathy symptoms may include burning, tingling, numbness, sensitivity, or other abnormal sensations. Treatment recommendations depend on the underlying cause and individual patient needs.',
      icon: Activity,
      link: '/neuropathy-treatment/',
    },
    {
      title: 'Medical Nail Care',
      text: 'Medical nail care is available for patients who need professional attention for thick, difficult, or problematic toenails. A Certified Medical Nail Technician is available in our office to provide specialized nail care based on individual needs and clinical findings.',
      icon: Sparkles,
      featuredBadge: 'Certified Nail Technician',
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="Comprehensive Podiatric Care"
        title="Treatments & Services"
        text="Dr. Celine Soltani provides individualized treatment for foot and ankle conditions, with an emphasis on conservative care whenever medically appropriate. Treatment recommendations are based on the diagnosis, examination findings, medical history, and individual patient needs."
      />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 space-y-16">
        {/* Services Grid */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {serviceList.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#dce5e0] bg-[#fafcf9] p-8 shadow-xs hover:border-[#163b4a]/30 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="grid size-11 place-items-center rounded-xl bg-[#163b4a] text-[#dcebe5]">
                      <Icon size={22} />
                    </span>
                    {service.featuredBadge ? (
                      <span className="rounded-full bg-[#dcebe5] px-3 py-1 text-xs font-bold text-[#163b4a] border border-[#b8d6cb]">
                        {service.featuredBadge}
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-[#7a9992]">
                        0{index + 1}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-[#163b4a] mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-base leading-relaxed text-[#405f59]">
                    {service.text}
                  </p>
                </div>

                {service.link && (
                  <div className="mt-6 pt-4 border-t border-[#e2ece7] flex items-center justify-between">
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#52776c] group-hover:text-[#163b4a] transition-colors"
                    >
                      Learn more about {service.title.split(' ')[0]} care <ArrowRight size={13} />
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </section>

        {/* Ready to Take the Next Step Callout Box */}
        <section className="rounded-3xl border-2 border-[#b8d6cb] bg-gradient-to-br from-[#edf6f2] via-[#f5faf7] to-[#e4f0ea] p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-bold text-[#163b4a] border border-[#dce5e0] mb-3">
                <Calendar size={13} className="text-[#52776c]" /> Same-Day Availability
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#163b4a] font-medium leading-tight">
                Ready to Take the Next Step?
              </h3>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#2d5048]">
                Same-day appointments may be available. Please contact our Delray Beach office to schedule your consultation or request an appointment online.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Button href="/contact">Request an appointment</Button>
              <a
                href={clinicData.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-[#163b4a]/25 bg-white px-5 py-3 text-sm font-semibold text-[#163b4a] transition hover:bg-[#edf5f1]"
              >
                <Phone size={15} /> Call: {clinicData.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <FAQSection />
      <AppointmentCTA />
    </>
  )
}
