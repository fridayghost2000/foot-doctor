import {
  Sparkles,
  ShieldCheck,
  Check,
  Award,
  Users,
  Feather,
  Smile,
  Activity,
  ArrowRight,
  Info,
} from 'lucide-react'
import bsBraceWideImg from '@/assets/images/BS-brace-2048x683.png'
import bsBraceSquareImg from '@/assets/images/BS nail brace.jfif'
import { PageHero } from '@/components/common/PageHero'
import { FAQSection } from '@/components/common/FAQSection'
import { AppointmentCTA } from '@/components/common/AppointmentCTA'
import { Button } from '@/components/common/Button'

export function BSNailBracePage() {
  const benefits = [
    {
      title: 'Non-Surgical Option',
      description: 'A conservative, non-invasive approach without any cutting or anesthesia.',
    },
    {
      title: 'No Incision',
      description: 'Zero incisions or tissue removal needed during application.',
    },
    {
      title: 'Pressure Alleviation',
      description: 'Helps gently lift and reduce pressure along painful nail borders.',
    },
    {
      title: 'Gradual Curvature Correction',
      description: 'Guides the natural regrowth of the nail into a flatter, healthier shape.',
    },
    {
      title: 'Thin & Discreet',
      description: 'Practically invisible, transparent composite brace worn comfortably.',
    },
    {
      title: 'Zero Downtime',
      description: 'Minimal interruption to work, sports, socks, and normal daily activities.',
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="A Non-Surgical Treatment Option for Ingrown & Curved Toenails"
        title="B/S Nail Brace"
        text="If you have a painful, curved, or recurring ingrown toenail, surgery is not always the only treatment option. For selected patients, B/S Nail Brace provides a conservative, non-surgical approach to help reduce excessive nail curvature and pressure along the sides of the nail."
      />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 space-y-16">
        {/* Top 2-Column Intro Section */}
        <section className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="section-title text-3xl sm:text-4xl font-serif text-[#163b4a] leading-tight">
              Gentle, non-invasive relief for <em>curved & ingrown nails.</em>
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#405f59]">
              B/S Nail Brace treatment is available for patients of all ages and is provided by our <strong>Certified Medical Nail Technician</strong> in a sterile, comfortable medical setting.
            </p>

            <div className="mt-6 flex items-center gap-4 rounded-xl border border-[#c4ded3] bg-[#edf6f2] p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#163b4a] text-white">
                <Users size={19} />
              </span>
              <p className="text-sm font-medium text-[#163b4a]">
                <strong>Patients of All Ages:</strong> Suitable for children, teens, adults, and seniors seeking non-surgical nail correction.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl">
              <img
                src={bsBraceSquareImg}
                alt="B/S Nail Brace Application"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Before / During / After Wide Banner */}
        <section className="overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl">
          <div className="p-4 bg-[#f8faf7] border-b border-[#dce5e0] text-center">
            <h3 className="font-serif text-lg font-medium text-[#163b4a]">
              Clinical Progress: Before · During · After B/S Nail Bracing
            </h3>
          </div>
          <img
            src={bsBraceWideImg}
            alt="B/S Nail Brace Before, During, and After Treatment Transformation"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* How It Works & What Treatment Is Like */}
        <section className="grid gap-8 md:grid-cols-2">
          {/* How Does It Work */}
          <div className="rounded-2xl border border-[#dce5e0] bg-[#fafcf9] p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="grid size-10 place-items-center rounded-xl bg-[#163b4a] text-[#dcebe5]">
                <Sparkles size={20} />
              </span>
              <h3 className="font-serif text-2xl font-medium text-[#163b4a]">
                How Does the Nail Brace Work?
              </h3>
            </div>
            <p className="text-base leading-relaxed text-[#405f59]">
              A B/S Nail Brace is a small, thin brace applied directly to the surface of the toenail. It applies gentle tension to help reduce excessive curvature and pressure as the nail grows. The brace is discreet, transparent, and can be worn comfortably during all normal daily activities.
            </p>
          </div>

          {/* What Is Treatment Like */}
          <div className="rounded-2xl border border-[#dce5e0] bg-[#fafcf9] p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="grid size-10 place-items-center rounded-xl bg-[#163b4a] text-[#dcebe5]">
                <Activity size={20} />
              </span>
              <h3 className="font-serif text-2xl font-medium text-[#163b4a]">
                What Is Treatment Like?
              </h3>
            </div>
            <p className="text-base leading-relaxed text-[#405f59]">
              The brace is applied painlessly in our office and helps guide the nail toward a flatter shape as it naturally grows out. Repeat applications may be recommended depending on the nail curvature and response to treatment.
            </p>
          </div>
        </section>

        {/* Potential Benefits Grid */}
        <section className="border-t border-[#dce5e0] pt-12">
          <div className="max-w-2xl mb-8">
            <p className="eyebrow text-sm font-semibold tracking-wider text-[#52776c] uppercase">
              Clinical Advantages
            </p>
            <h3 className="font-serif text-3xl font-medium text-[#163b4a] mt-1">
              Potential Benefits of B/S Nail Bracing
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-[#dce5e0] bg-white p-6 shadow-xs hover:border-[#163b4a]/30 transition-all"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="grid size-6 place-items-center rounded-full bg-[#dcebe5] text-[#163b4a]">
                    <Check size={14} />
                  </span>
                  <h4 className="font-serif text-lg font-medium text-[#163b4a]">
                    {benefit.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-[#526d68] pl-8.5">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Who May Benefit & Clinical Consideration */}
        <section className="rounded-2xl border border-[#dce5e0] bg-[#fafcf9] p-8 sm:p-10 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <span className="grid size-10 place-items-center rounded-xl bg-[#255264] text-[#dcebe5]">
              <ShieldCheck size={22} />
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#163b4a]">
              Who May Benefit?
            </h3>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-[#3a5d56]">
            B/S Nail Bracing may be considered for <strong>curved toenails, recurring ingrown nails, pain or pressure along the nail borders</strong>, or patients who want to explore a conservative option before considering a surgical nail procedure.
          </p>

          <div className="mt-6 flex items-start gap-3.5 rounded-xl border border-[#dce5e0] bg-white p-4.5">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#e8f1ec] text-[#163b4a] mt-0.5">
              <Info size={16} />
            </span>
            <p className="text-sm leading-relaxed text-[#4a6b64]">
              <strong>Please note:</strong> Not every ingrown toenail is appropriate for bracing. Infected, severe, or complicated cases may require an evaluation and in-office minor nail procedure by Dr. Soltani.
            </p>
          </div>
        </section>

        {/* Not Every Ingrown Toenail Requires Surgery Callout */}
        <section className="rounded-3xl border-2 border-[#b8d6cb] bg-gradient-to-br from-[#edf6f2] via-[#f5faf7] to-[#e4f0ea] p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#163b4a] font-medium leading-tight">
              Not Every Ingrown Toenail Requires Surgery
            </h3>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#2d5048]">
              If you or your child has a painful, curved, or recurring ingrown toenail, B/S Nail Bracing offers a non-surgical and generally non-painful treatment option for selected patients. Contact our office to find out whether B/S Nail Bracing may be appropriate for you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact">Schedule a consultation</Button>
            </div>
          </div>
        </section>
      </main>

      <FAQSection />
      <AppointmentCTA />
    </>
  )
}
