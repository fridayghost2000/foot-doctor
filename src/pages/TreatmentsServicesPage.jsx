import {
  ShieldCheck,
  Activity,
  Sparkles,
  Footprints,
  Stethoscope,
  Scissors,
  HeartPulse,
  Bone,
  Layers,
  Sparkle,
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
      text: 'Treatment for heel pain and plantar fasciitis depends on the underlying cause and may include targeted stretching, footwear changes, custom supportive devices, medications, injections, and other conservative treatment options.',
      icon: Footprints,
      link: '/heel-pain-plantar-fasciitis/',
    },
    {
      title: 'Ingrown Toenail Treatment',
      text: 'Treatment options depend on the severity of the ingrown toenail and whether the problem is recurring. For selected patients, the advanced B/S Nail Brace offers a gentle, non-surgical option designed to reduce excessive nail curvature and pressure without downtime.',
      icon: Scissors,
      link: '/ingrown-toenail-treatment/',
      featuredBadge: 'B/S Nail Brace Available',
    },
    {
      title: 'Plantar Wart In-Office Therapy',
      text: 'Plantar warts are caused by the HPV virus and spread easily through direct or indirect contact. We offer safe, gentle in-office cryotherapy, prescription keratolytics, and sterile debridement to effectively eliminate the viral core and restore healthy skin.',
      icon: Sparkle,
      link: '/plantar-wart/',
      featuredBadge: 'In-Office Viral Therapy',
    },
    {
      title: 'Bunion Care & Joint Alignment',
      text: 'Bunions cause the big toe joint (MTP) to enlarge, shift, and become painful. We provide personalized conservative management—including custom biomechanical orthotics, protective gel padding, and footwear modifications—to slow progression and relieve discomfort without surgery.',
      icon: Bone,
      link: '/bunion/',
      featuredBadge: 'Conservative Joint Care',
    },
    {
      title: 'Corns & Calluses Clinical Reduction',
      text: 'Corns and calluses develop as hyperkeratotic defense mechanisms against abnormal friction and pressure. Dr. Soltani provides painless, sterile in-office debridement, core reduction, custom offloading pads, and medical-grade moisturizers to prevent recurrence.',
      icon: Layers,
      link: '/corns-calluses/',
      featuredBadge: 'Painless Sterile Debridement',
    },
    {
      title: 'Diabetic Foot Ulcer & Wound Care',
      text: 'Diabetic neuropathy and vascular disease can turn minor pressure spots into serious, non-healing ulcers. We provide meticulous clinical wound debridement, advanced antimicrobial moisture dressings, specialized offloading, and limb-preservation protocols.',
      icon: HeartPulse,
      link: '/foot-ulcer/',
      featuredBadge: 'Limb Preservation Focus',
    },
    {
      title: 'Flat Foot & Arch Stabilization',
      text: 'Flat feet (pes planus) can alter overall skeletal alignment and cause radiating pain into the ankles, shins, and knees. We provide dynamic gait evaluations and custom functional prescription orthotics to rebalance the arches and eliminate kinetic strain.',
      icon: Activity,
      link: '/flat-foot/',
      featuredBadge: 'Custom Orthotics',
    },
    {
      title: 'Itchy Feet & Athlete’s Foot Treatment',
      text: 'Perspiration and tight footwear create an ideal environment for contagious fungal infections (tinea pedis) to flourish. We accurately diagnose the cause and prescribe medical-grade antifungal therapies and moisture barrier repair to stop itching and heal cracked skin.',
      icon: Sparkles,
      link: '/itchy-feet/',
      featuredBadge: 'Dermatological Relief',
    },
    {
      title: 'Diabetic & Preventive Foot Care',
      text: 'Preventive foot care is essential for patients with diabetes, neuropathy, and circulation problems. Regular comprehensive evaluations help detect pressure spots and vascular changes early, preventing severe complications and skin breakdown.',
      icon: HeartPulse,
      link: '/diabetic-foot-wound-care/',
    },
    {
      title: 'Fungal Toenail Treatment',
      text: 'Thick, discolored, or brittle toenails caused by fungal pathogens are evaluated with precision. We offer comprehensive topical, oral, and clinical debridement options to eliminate fungal spores and restore clear, healthy nail growth.',
      icon: Sparkles,
      link: '/fungal-toenail-treatment/',
    },
    {
      title: 'Treatment of Tendon & Soft-Tissue Injuries',
      text: 'Tendon and soft-tissue injuries may result from overuse, repetitive stress, athletic activity, or acute twists. We provide individualized conservative rehabilitation, functional strapping, gait retraining, and custom orthotics to ensure safe recovery.',
      icon: Activity,
      link: '/treatment-for-tendon-pain-injuries/',
    },
    {
      title: 'Neuropathy Care & Nerve Relief',
      text: 'Neuropathy symptoms include burning, tingling, numbness, pins and needles, or hypersensitivity in the feet. We provide comprehensive sensory threshold testing and non-invasive symptom management to protect balance and prevent injury.',
      icon: Activity,
      link: '/neuropathy-treatment/',
    },
    {
      title: 'In-Office Procedures & Minor Surgery',
      text: 'Selected minor procedures and soft-tissue treatments are performed gently and safely in our sterile office setting when medically indicated, based on thorough diagnosis and individual patient health history.',
      icon: Stethoscope,
    },
    {
      title: 'Fracture & Acute Injury Care',
      text: 'Foot and ankle trauma, stress fractures, and acute injuries require prompt evaluation. In-office digital X-rays are available for immediate structural diagnosis, followed by targeted immobilization and recovery guidance.',
      icon: Bone,
      featuredBadge: 'In-Office X-Rays',
    },
    {
      title: 'Medical Nail Care',
      text: 'Specialized clinical nail care is available for patients with difficult, thick, or high-risk toenails. A Certified Medical Nail Technician is available in our office to provide sterile, individualized nail health services.',
      icon: Sparkles,
      link: '/medical-nail-care/',
      featuredBadge: 'Certified Nail Technician',
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="Comprehensive Podiatric Care"
        title="Treatments & Services"
        text="Dr. Celine Soltani provides individualized treatment for a comprehensive range of foot, ankle, and skin conditions, with an emphasis on conservative care whenever medically appropriate."
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
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
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
