import { Check, ArrowRight, ShieldCheck, Activity, Stethoscope, Sparkles, AlertCircle, Info } from 'lucide-react'
import { conditions } from '@/data/conditionsData'
import { clinicData } from '@/data/clinicData'
import { AppointmentCTA } from '@/components/common/AppointmentCTA'
import { FAQSection } from '@/components/common/FAQSection'
import { PageHero } from '@/components/common/PageHero'
import { Link } from 'react-router-dom'

export function ConditionDetailTemplate({
  condition,
  // Direct props for complete independent page customization:
  slug,
  heroEyebrow = 'Specialty Foot & Ankle Care',
  title,
  heroText,
  heroImage,
  badgeName = clinicData.doctorName,
  badgeRole = 'Delray Beach Podiatrist',
  overviewEyebrow = 'Understanding your care',
  overviewTitle = 'Comprehensive, individualized treatment for lasting comfort.',
  description,
  overviewImage,
  causesTitle = 'Possible Causes',
  causes,
  symptomsText,
  symptoms,
  diagnosis,
  treatmentTitle = 'Treatment Options',
  treatmentText,
  treatments,
  advancedTreatmentsTitle = 'Advanced Non-Surgical Treatment Options',
  advancedTreatments,
  procedureSection,
  alertNotice,
  highlights,
  children,
}) {
  // Fallback to condition object if provided, otherwise empty
  const item = condition || {}

  const currentSlug = slug || item.slug || ''
  const displayTitle = title || item.title || 'Condition Care'
  const displayHeroText = heroText || item.summary || ''
  const displayHeroImage = heroImage || item.heroImage // If undefined, PageHero uses its default
  const displayDescription = description || item.description || ''
  const displayOverviewImage = overviewImage || item.image
  const displayCauses = causes || item.causes
  const displayCausesTitle = causesTitle || item.causesTitle || 'Possible Causes'
  const displaySymptomsText = symptomsText || item.symptomsText
  const displaySymptoms = symptoms || item.symptoms
  const displayDiagnosis = diagnosis || item.diagnosis
  const displayTreatmentTitle = treatmentTitle || 'Treatment Options'
  const displayTreatmentText = treatmentText || item.treatmentText || 'We prioritize gentle, non-surgical protocols and customize every treatment to your activity level and comfort:'
  const displayTreatments = treatments || item.treatments
  const displayAdvancedTreatments = advancedTreatments || item.advancedTreatments
  const displayHighlights = highlights || item.highlights

  return (
    <>
      <PageHero
        eyebrow={heroEyebrow}
        title={displayTitle}
        text={displayHeroText}
        image={displayHeroImage}
        badgeName={badgeName}
        badgeRole={badgeRole}
      />

      {/* Main Clinical Details & Treatments Section */}
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 space-y-16">
        {/* Top 2-Column Section: Overview Content Left, Big Image Right */}
        <section className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="eyebrow text-sm font-semibold tracking-wider text-[#52776c] uppercase">
              {overviewEyebrow}
            </p>
            <h2 className="section-title mt-2 text-2xl sm:text-3xl lg:text-4xl font-serif text-[#163b4a] leading-snug">
              {overviewTitle}
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#405f59]">
              {displayDescription}
            </p>
          </div>

          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl">
              {displayOverviewImage && (
                <img
                  src={displayOverviewImage}
                  alt={displayTitle}
                  className="w-full h-auto object-contain rounded-xl"
                />
              )}
            </div>
          </div>
        </section>

        {/* Clinical Sections & Sidebar */}
        <div className="grid gap-12 lg:grid-cols-12 pt-8 border-t border-[#dce5e0]">
          {/* Left Clinical Information (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Possible Causes Section (If available) */}
            {displayCauses && (
              <div className="rounded-2xl border border-[#dce5e0] bg-[#fafcf9] p-7 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="grid size-9 place-items-center rounded-lg bg-[#163b4a] text-white">
                    <Activity size={18} />
                  </span>
                  <h3 className="font-serif text-2xl text-[#163b4a] font-medium">
                    {displayCausesTitle}
                  </h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {displayCauses.map((cause) => (
                    <div
                      key={cause}
                      className="flex items-center gap-3 rounded-lg bg-white p-3.5 border border-[#e4ede8] text-sm font-medium text-[#3b5b54]"
                    >
                      <span className="size-2 rounded-full bg-[#52776c] shrink-0" />
                      <span>{cause}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common Symptoms Grid */}
            {displaySymptoms && (
              <div className="rounded-2xl border border-[#dce5e0] bg-[#fafcf9] p-7 sm:p-8 shadow-xs">
                <h3 className="font-serif text-2xl text-[#163b4a] font-medium mb-3">
                  Common Symptoms
                </h3>
                {displaySymptomsText && (
                  <p className="text-sm sm:text-[15px] text-[#4a6862] leading-relaxed mb-6">
                    {displaySymptomsText}
                  </p>
                )}
                <div className="grid gap-3 sm:grid-cols-2">
                  {displaySymptoms.map((symptom) => (
                    <div
                      key={symptom}
                      className="flex items-start gap-3 rounded-lg bg-white p-3.5 border border-[#e4ede8] text-sm text-[#46655f]"
                    >
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#dcebe5] text-[#163b4a]">
                        <Check size={13} />
                      </span>
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Diagnosis Section (If available) */}
            {displayDiagnosis && (
              <div className="rounded-2xl border border-[#dce5e0] bg-white p-7 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-[#255264] text-[#dcebe5]">
                    <Stethoscope size={18} />
                  </span>
                  <h3 className="font-serif text-2xl text-[#163b4a] font-medium">
                    Diagnosis & Evaluation
                  </h3>
                </div>
                <p className="text-base sm:text-[16.5px] leading-relaxed text-[#3f5f59]">
                  {displayDiagnosis}
                </p>
              </div>
            )}

            {/* Treatment Approaches */}
            {displayTreatments && (
              <div>
                <h3 className="font-serif text-2xl text-[#163b4a] font-medium mb-3">
                  {displayTreatmentTitle}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#52706b] leading-relaxed mb-6">
                  {displayTreatmentText}
                </p>
                <div className="space-y-3">
                  {displayTreatments.map((treatment, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 rounded-xl border border-[#dce5e0] bg-white p-4.5 shadow-xs"
                    >
                      <span className="grid size-6.5 shrink-0 place-items-center rounded-full bg-[#163b4a] text-xs font-bold text-[#dcebe5]">
                        {idx + 1}
                      </span>
                      <p className="text-sm sm:text-[15px] font-medium text-[#2b4b45] leading-relaxed">
                        {treatment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Advanced / Specific Treatment Callout (e.g., B/S Nail Brace) */}
            {displayAdvancedTreatments && (
              <div className="rounded-2xl border-2 border-[#b8d6cb] bg-[#edf6f2] p-7 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-[#163b4a] text-[#dcebe5]">
                    <Sparkles size={18} />
                  </span>
                  <h3 className="font-serif text-2xl text-[#163b4a] font-medium">
                    {advancedTreatmentsTitle}
                  </h3>
                </div>
                <p className="text-base sm:text-[16.5px] leading-relaxed text-[#33534d]">
                  {displayAdvancedTreatments}
                </p>
              </div>
            )}

            {/* When a Procedure May Be Needed Section */}
            {procedureSection && (
              <div className="rounded-2xl border border-[#dce5e0] bg-white p-7 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-[#163b4a] text-[#dcebe5]">
                    <Stethoscope size={18} />
                  </span>
                  <h3 className="font-serif text-2xl text-[#163b4a] font-medium">
                    {procedureSection.title || 'When a Nail Procedure May Be Needed'}
                  </h3>
                </div>
                <p className="text-base sm:text-[16.5px] leading-relaxed text-[#3f5f59]">
                  {procedureSection.text || procedureSection}
                </p>
              </div>
            )}

            {/* Important Alert Notice (e.g. Prompt evaluation for diabetes/circulation) */}
            {alertNotice && (
              <div className="rounded-2xl border border-[#c4ded3] bg-[#f4faf7] p-6 sm:p-7 shadow-xs flex items-start gap-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#163b4a] text-white mt-0.5">
                  <Info size={19} />
                </span>
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#163b4a] mb-1">
                    Important Patient Notice
                  </h4>
                  <p className="text-sm sm:text-[15px] font-medium text-[#2d524a] leading-relaxed">
                    {alertNotice}
                  </p>
                </div>
              </div>
            )}

            {/* Clinical Highlights */}
            {displayHighlights && (
              <div className="border-t border-[#dce5e0] pt-8">
                <h4 className="font-serif text-xl text-[#163b4a] mb-4">
                  What you can expect at our Delray Beach office:
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {displayHighlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 text-sm font-medium text-[#365752]"
                    >
                      <span className="grid size-6 place-items-center rounded-full bg-[#dcebe5] text-[#163b4a]">
                        <ShieldCheck size={14} />
                      </span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Any extra custom page children */}
            {children}
          </div>

          {/* Right Sidebar: Other Conditions (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="rounded-xl border border-[#dce5e0] bg-[#f8faf7] p-6 shadow-sm sticky top-28">
              <h4 className="font-serif text-lg text-[#163b4a] font-medium mb-4">
                Other Conditions We Treat
              </h4>
              <div className="space-y-2">
                {conditions
                  .filter((c) => c.slug !== currentSlug)
                  .map((other) => (
                    <Link
                      key={other.slug}
                      to={other.href || `/${other.slug}/`}
                      className="flex items-center justify-between rounded-lg p-2.5 text-xs font-semibold text-[#486b63] hover:bg-white hover:text-[#163b4a] hover:shadow-xs transition-all"
                    >
                      <span>{other.title}</span>
                      <ArrowRight size={13} className="text-[#84a9a0]" />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <FAQSection />
      <AppointmentCTA />
    </>
  )
}
