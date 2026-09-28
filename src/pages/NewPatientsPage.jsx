import { Phone, FileText, CreditCard, HelpCircle, ShieldCheck, CheckCircle2, Clock, MapPin, Calendar } from 'lucide-react'
import { clinicData } from '@/data/clinicData'
import { PageHero } from '@/components/common/PageHero'
import { FAQSection } from '@/components/common/FAQSection'
import { AppointmentCTA } from '@/components/common/AppointmentCTA'
import { Button } from '@/components/common/Button'

export function NewPatientsPage() {
  const checklistItems = [
    {
      title: 'Photo ID',
      desc: 'A valid government-issued photo ID (driver’s license, passport, or state ID).',
    },
    {
      title: 'Current Insurance Card',
      desc: 'Your active medical insurance card for verification at each visit.',
    },
    {
      title: 'Current Medication List',
      desc: 'A complete list of prescription and over-the-counter medications and supplements.',
    },
    {
      title: 'Medical Records & Imaging',
      desc: 'Any prior X-rays, MRIs, lab tests, or records related to your foot or ankle condition.',
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="New Patients"
        title="Your first visit, made simple."
        text="We want you to feel prepared, welcomed, and comfortable from the moment you walk through the door of our Delray Beach office."
      />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* What to Bring Section */}
            <section className="rounded-2xl border border-[#dce5e0] bg-[#fafcf9] p-8 sm:p-10 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-[#163b4a] text-white">
                  <FileText size={20} />
                </span>
                <div>
                  <p className="font-serif text-xs font-semibold tracking-wider text-[#52776c] uppercase">
                    Preparation Checklist
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#163b4a]">
                    What to Bring to Your Appointment
                  </h2>
                </div>
              </div>

              <p className="mt-6 text-base sm:text-[17px] leading-relaxed text-[#45635e]">
                Please bring your photo ID, insurance card, current medication list, and any relevant medical records or imaging related to your foot or ankle condition.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {checklistItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 rounded-xl border border-[#e2ece6] bg-white p-4.5 shadow-xs"
                  >
                    <span className="mt-0.5 grid size-5.5 shrink-0 place-items-center rounded-full bg-[#dcebe5] text-[#163b4a]">
                      <CheckCircle2 size={15} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#163b4a]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#56756f]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Insurance & Payment Section */}
            <section className="rounded-2xl border border-[#dce5e0] bg-[#fafcf9] p-8 sm:p-10 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-[#163b4a] text-white">
                  <CreditCard size={20} />
                </span>
                <div>
                  <p className="font-serif text-xs font-semibold tracking-wider text-[#52776c] uppercase">
                    Financial Policy & Coverage
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#163b4a]">
                    Insurance & Payment
                  </h2>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-[#dce5e0] bg-white p-6 leading-relaxed text-[#405f59]">
                <p className="text-base sm:text-[17px] leading-relaxed">
                  Please bring your current insurance card to each visit. Insurance coverage and patient responsibility vary by plan. Copayments, deductibles, coinsurance, and non-covered services are the patient’s responsibility.
                </p>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#edf5f1] p-4 text-xs font-medium text-[#2b4c45]">
                <ShieldCheck size={18} className="shrink-0 text-[#163b4a] mt-0.5" />
                <p>
                  We strive to make billing transparent and straightforward. If you have questions regarding your specific coverage or plan details, feel free to call our friendly office team before your visit.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar / Questions Section (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Questions Before Your Visit Box */}
            <aside className="rounded-2xl bg-[#0077c8] p-8 text-white shadow-lg sticky top-28">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-white/20 text-white">
                  <HelpCircle size={18} />
                </span>
                <span className="text-xs font-bold tracking-wider text-white uppercase">
                  Patient Support
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-[26px] text-white mt-4 leading-snug">
                Questions Before Your Visit?
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/90">
                If you have questions about your appointment, insurance, or what to bring, please call our office at{' '}
                <a
                  href={clinicData.phoneHref}
                  className="font-semibold text-white underline hover:text-white/80"
                >
                  (561) 498-3893
                </a>
                . Our staff will be happy to assist you.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={clinicData.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-white px-5 py-3.5 text-sm font-bold text-[#0077c8] shadow-sm hover:bg-white/90 transition-all"
                >
                  <Phone size={16} /> Call (561) 498-3893
                </a>
                <Button href="/contact" variant="secondary" className="border border-white/50 text-white bg-transparent hover:bg-white hover:text-[#0077c8] text-center justify-center">
                  Contact Office
                </Button>
              </div>

              <div className="mt-8 space-y-3 border-t border-white/15 pt-6 text-xs text-[#a9c9c2]">
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} className="shrink-0 text-[#dcebe5] mt-0.5" />
                  <span>{clinicData.location}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock size={15} className="shrink-0 text-[#dcebe5] mt-0.5" />
                  <span>{clinicData.hoursDetail}</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <FAQSection />
      <AppointmentCTA />
    </>
  )
}
