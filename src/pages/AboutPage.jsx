import { GraduationCap, Award, ShieldCheck, Languages, Stethoscope, Sparkles, Building2 } from 'lucide-react'
import doctorImage from '@/assets/images/dr.image.jpg'
import clinicRoomImage from '@/assets/images/clinic-room.jpg'
import { clinicData } from '@/data/clinicData'
import { AppointmentCTA } from '@/components/common/AppointmentCTA'
import { FAQSection } from '@/components/common/FAQSection'
import { PageHero } from '@/components/common/PageHero'

export function AboutPage() {
  const educationList = [
    {
      degree: 'Undergraduate Education',
      institution: 'University of Wisconsin',
      detail: 'Foundational scientific and pre-medical studies',
    },
    {
      degree: "Master's Degree",
      institution: 'Finch University of Health Sciences / Chicago Medical School',
      detail: 'Advanced biomedical and medical sciences',
    },
    {
      degree: 'Doctor of Podiatric Medicine (DPM)',
      institution: 'Barry University School of Podiatric Medicine',
      detail: 'Comprehensive medical and podiatric clinical training',
    },
    {
      degree: 'Podiatric Surgical Residency',
      institution: 'Westchester General Hospital, Miami',
      detail: 'Intensive hospital-based foot and ankle clinical residency',
    },
  ]

  const conditionsTreated = [
    'Heel pain & plantar fasciitis',
    'Ingrown toenails',
    'Bunions & hammertoes',
    'Tendon & sports injuries',
    'Neuropathy',
    'Diabetic foot conditions',
    'Fungal toenails',
    'Fractures & acute injuries',
    'Arthritis & joint stiffness',
    'Wounds & ulcers',
  ]

  return (
    <>
      <PageHero
        eyebrow="Experienced, Personalized Foot & Ankle Care"
        title="Meet Dr. Celine Soltani, DPM"
        text="Dr. Celine Soltani is a Board Qualified Podiatrist who has cared for patients in Delray Beach since 2004. Her approach emphasizes individualized evaluation, clear communication, and conservative treatment whenever appropriate."
      />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 space-y-20">
        {/* Top 2-Column: Doctor Overview & Scope */}
        <section className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl">
                <img
                  src={doctorImage}
                  alt="Dr. Celine Soltani, DPM - Foot Doctor of Delray"
                  className="h-[460px] w-full object-cover object-top"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 rounded-xl bg-white p-4 shadow-lg border border-[#dce5e0] hidden sm:flex items-center gap-3.5">
                <span className="grid size-11 place-items-center rounded-full bg-[#163b4a] text-white">
                  <Award size={22} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#52776c]">Serving Delray Beach</p>
                  <p className="text-sm font-bold text-[#163b4a]">Since 2004 · Over 20 Years</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="eyebrow text-sm font-semibold tracking-wider text-[#52776c] uppercase">
              More Than 20 Years Serving Delray Beach
            </p>
            <h2 className="section-title mt-2 text-3xl sm:text-4xl font-serif text-[#163b4a] leading-tight">
              Experienced, attentive care with a <em>personal touch.</em>
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#405f59]">
              Dr. Soltani evaluates and treats a wide range of foot and ankle conditions, including heel pain and plantar fasciitis, ingrown toenails, bunions and hammertoes, tendon and sports injuries, neuropathy, diabetic foot conditions, fungal toenails, fractures and injuries, arthritis, wounds, and ulcers. In-office X-rays are available when appropriate.
            </p>

            {/* Conditions Tag Cloud / List */}
            <div className="mt-6 flex flex-wrap gap-2">
              {conditionsTreated.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#dce5e0] bg-[#f8faf7] px-3.5 py-1.5 text-xs font-medium text-[#2d5047]"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Language Spoken Box */}
            <div className="mt-8 flex items-center gap-3.5 rounded-xl border border-[#c4ded3] bg-[#edf6f2] p-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#163b4a] text-white">
                <Languages size={18} />
              </span>
              <p className="text-sm font-medium text-[#163b4a]">
                <strong>Languages Spoken:</strong> Dr. Soltani speaks <strong>English</strong> and <strong>Chinese</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Training Section */}
        <section className="border-t border-[#dce5e0] pt-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="grid size-9 place-items-center rounded-lg bg-[#163b4a] text-white">
                <GraduationCap size={20} />
              </span>
              <p className="eyebrow text-sm font-semibold tracking-wider text-[#52776c] uppercase">
                Academic & Clinical Credentials
              </p>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#163b4a]">
              Education & Training
            </h3>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-[#dce5e0] bg-[#fafcf9] p-6 shadow-xs hover:border-[#163b4a]/30 transition-all"
              >
                <div>
                  <span className="inline-block rounded-full bg-[#dcebe5] px-2.5 py-0.5 text-xs font-bold text-[#163b4a] mb-3">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif text-base font-bold text-[#163b4a] leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="mt-2 text-sm font-semibold text-[#52776c]">
                    {edu.institution}
                  </p>
                </div>
                <p className="mt-4 border-t border-[#e2ece7] pt-3 text-xs text-[#5f7a75] leading-relaxed">
                  {edu.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Conservative Treatment Philosophy Section */}
        <section className="rounded-3xl border-2 border-[#b8d6cb] bg-gradient-to-br from-[#edf6f2] via-[#f5faf7] to-[#e4f0ea] p-8 sm:p-12 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="grid size-10 place-items-center rounded-xl bg-[#163b4a] text-[#dcebe5]">
                  <ShieldCheck size={22} />
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#163b4a] font-medium">
                  Conservative Treatment Philosophy
                </h3>
              </div>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#2d5048]">
                Treatment recommendations are individualized based on the diagnosis, examination, medical history, and the patient’s needs. Conservative and non-surgical approaches are emphasized whenever medically appropriate.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="flex items-center gap-3 rounded-xl bg-white p-3.5 border border-[#dce5e0] text-sm font-semibold text-[#163b4a] shadow-xs">
                <span className="size-2.5 rounded-full bg-[#52776c]" />
                Individualized Diagnosis & Exam
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white p-3.5 border border-[#dce5e0] text-sm font-semibold text-[#163b4a] shadow-xs">
                <span className="size-2.5 rounded-full bg-[#52776c]" />
                Conservative Non-Surgical Focus
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white p-3.5 border border-[#dce5e0] text-sm font-semibold text-[#163b4a] shadow-xs">
                <span className="size-2.5 rounded-full bg-[#52776c]" />
                In-Office Digital X-Rays Available
              </div>
            </div>
          </div>
        </section>
      </main>

      <FAQSection />
      <AppointmentCTA />
    </>
  )
}
