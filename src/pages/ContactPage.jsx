import { ArrowRight, ExternalLink, Sparkles, ShieldCheck, Stethoscope, Building2 } from 'lucide-react'
import { clinicData } from '@/data/clinicData'
import { PageHero } from '@/components/common/PageHero'
import { FAQSection } from '@/components/common/FAQSection'
import ofcImg1 from '@/assets/images/ourofc1.webp'
import ofcImg2 from '@/assets/images/ourofc2.webp'
import ofcImg3 from '@/assets/images/ourofc3.webp'
import ofcImg4 from '@/assets/images/ourofc4.webp'
import ofcImg5 from '@/assets/images/ourofc5.webp'
import ofcImg6 from '@/assets/images/ourofc6.webp'

export function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    e.currentTarget.reset()
    alert('Thank you. We will be in touch shortly.')
  }

  const mapUrl =
    'http://maps.google.com/?q=14428%20S.%20Military%20Trail%20Unit%20B%20,%20Delray%20Beach,%20FL%2033484'

  const officeImages = [
    { src: ofcImg1, alt: 'Foot Doctor of Delray Office Front Desk & Reception' },
    { src: ofcImg2, alt: 'Podiatry Consultation & Treatment Suite' },
    { src: ofcImg3, alt: 'Modern Clinical Examination Room' },
    { src: ofcImg4, alt: 'Specialized Foot Care & In-Office Diagnostic Area' },
    { src: ofcImg5, alt: 'Clean, Welcoming Patient Care Facility' },
    { src: ofcImg6, alt: 'State-of-the-Art Podiatric Equipment & Treatment Setup' },
  ]

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s start a conversation about your care."
        text="Reach out to schedule an appointment or ask a question. Same-day appointments may be available."
      />

      <main className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-24">
        <div>
          {/* Provider Card / Doctor Details */}
          <div className="border-b border-[#d6e5df] pb-8">
            <p className="eyebrow">Foot Doctor of Delray</p>
            <h1 className="section-title !text-[1.85rem] sm:!text-[2.25rem] lg:!text-[2.5rem] font-serif text-[#163b4a] leading-tight">
              Celine Soltani, <em>DPM</em>
            </h1>
            <p className="mt-2 text-lg font-medium text-[#2d6254]">
              Podiatry
            </p>

            {/* Verified Provider & Accepting New Patients Badges */}
            <div className="mt-5 flex flex-col gap-3">
              {/* Verified Provider */}
              <div className="flex items-center gap-3">
                <svg
                  className="size-5 shrink-0 text-[#0056b3]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 1l2.4 2.2 3.2-.6 1.3 3 3.1 1.2-.5 3.3 2 2.6-2 2.6.5 3.3-3.1 1.2-1.3 3-3.2-.6L12 21l-2.4-2.2-3.2.6-1.3-3-3.1-1.2.5-3.3-2-2.6 2-2.6-.5-3.3 3.1-1.2 1.3-3 3.2.6L12 1z" />
                  <path
                    d="M8.5 16.5L5.5 23l4.5-2.2 2 2.2 2-2.2 4.5 2.2-3-6.5"
                    fill="currentColor"
                  />
                  <path
                    d="M10.2 12.8l-1.9-1.9-1 1 2.9 2.9 5.5-5.5-1-1-4.5 4.5z"
                    fill="#ffffff"
                  />
                </svg>
                <span className="text-base font-normal text-[#2d3748]">
                  Verified provider
                </span>
              </div>

              {/* Accepting New Patients */}
              <div className="flex items-center gap-3">
                <svg
                  className="size-5 shrink-0 text-[#0056b3]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <span className="text-base font-normal text-[#2d3748]">
                  Accepting new patients
                </span>
              </div>
            </div>

            {/* Doctor Background & Bio */}
            <div className="mt-6 rounded-lg bg-[#f6faf8] border border-[#d6e5df] p-4 text-sm leading-relaxed text-[#405854]">
              <p>
                Dr. Celine Soltani completed her undergraduate studies at the University of Wisconsin, her Masters at Finch University of Health Science at the Chicago Medial School, and received her doctorate in Podiatric Medicine from Barry University School of Graduate Medical Sciences. Dr. Celine Soltani then completed her residency at Westchester General Hospital in Miami. Since 2004, Dr. Soltani has been treating patients at her Delray Beach Office. Dr. Soltani speaks both English and Chinese to assist patients.
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mt-8 flex flex-col gap-6">
            <div>
              <p className="eyebrow !mb-1 text-xs">
                Phone
              </p>
              <a
                href={clinicData.phoneHref}
                className="mt-1 block font-serif text-2xl text-[#163b4a] hover:text-[#2d6254] transition-colors"
              >
                (561) 498-3893
              </a>
            </div>

            <div>
              <p className="eyebrow !mb-1 text-xs">
                Location
              </p>
              <p className="mt-1 text-base leading-7 text-[#526a67]">
                14428 S. Military Trail, Unit B
                <br />
                Delray Beach, FL 33484{' '}
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#0056b3] underline hover:text-[#003d80]"
                >
                  [map] <ExternalLink size={13} />
                </a>
              </p>
              <p className="mt-1 text-xs text-[#748e89]">
                {clinicData.locationDetail}
              </p>
            </div>

            <div>
              <p className="eyebrow !mb-1 text-xs">
                Hours
              </p>
              <p className="mt-1 text-base leading-7 text-[#526a67]">
                {clinicData.hours}
                <br />
                {clinicData.hoursDetail}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#0077c8] p-8 text-white rounded-xl shadow-lg">
          <h3 className="font-serif text-3xl">Request an appointment</h3>
          <p className="mt-2 text-xs text-white/85">
            Dr. Celine Soltani is accepting new patients. Fill out this form to schedule your consultation.
          </p>
          <form className="mt-7 flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              required
              aria-label="Name"
              placeholder="Your name"
              className="border-b border-white/40 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-white/70 focus:border-white"
            />
            <input
              required
              type="email"
              aria-label="Email"
              placeholder="Email address"
              className="border-b border-white/40 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-white/70 focus:border-white"
            />
            <input
              aria-label="Phone"
              placeholder="Phone number"
              className="border-b border-white/40 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-white/70 focus:border-white"
            />
            <textarea
              required
              aria-label="How can we help?"
              placeholder="How can we help?"
              rows={3}
              className="resize-none border-b border-white/40 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-white/70 focus:border-white"
            />
            <button
              type="submit"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#0077c8] hover:bg-white/90 cursor-pointer rounded transition-colors shadow-sm"
            >
              Send request <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </main>

      {/* Our Office Section */}
      <section className="border-t border-[#d6e5df] bg-[#f7faf9] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="eyebrow">Welcome</p>
            <h2 className="section-title !text-[1.85rem] sm:!text-[2.25rem] lg:!text-[2.5rem] font-serif text-[#163b4a] leading-tight">
              About our Podiatry Office in <em>Delray Beach, FL 33484</em>
            </h2>
            <p className="mt-3 text-base font-medium text-[#2d6254]">
              We would like to take this opportunity to thank you for choosing us as your Podiatrist.
            </p>
          </div>

          {/* Facility Highlights Box */}
          <div className="mt-8 rounded-2xl border border-[#d6e5df] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="grid size-10 place-items-center rounded-lg bg-[#eef7f4] text-[#163b4a]">
                <Building2 size={22} />
              </span>
              <h3 className="section-title !text-2xl sm:!text-[1.75rem] font-serif text-[#163b4a]">
                Facility
              </h3>
            </div>
            <p className="text-base leading-relaxed text-[#526a67] max-w-4xl">
              We are proud to provide a state-of-the-art facility for the highest quality foot care available. It is one of our top priorities to protect the well-being of our valued patients. X-rays are performed in the office.
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {officeImages.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl border border-[#d6e5df] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#eef4f2]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
