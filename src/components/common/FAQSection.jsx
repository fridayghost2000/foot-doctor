import { useState } from 'react'
import { ChevronDown, HelpCircle, Phone } from 'lucide-react'
import { faqs } from '@/data/faqData'
import { clinicData } from '@/data/clinicData'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0) // Default first item open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="bg-[#f8faf6] px-6 py-20 lg:px-10 lg:py-28 border-b border-[#dce5e0]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Column: Heading & Support Callout */}
          <div>
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2 className="section-title">
              Clear answers for
              <br />
              <em>your care.</em>
            </h2>
            <p className="mt-6 text-base leading-8 text-[#526a67] max-w-md">
              Everything you need to know about our Delray Beach podiatry practice, appointments, treatments, and insurance coverage.
            </p>

            <div className="mt-10 rounded-sm border border-[#dce5e0] bg-[#eaf2ed] p-7">
              <div className="flex items-center gap-3 text-[#163b4a] mb-3">
                <span className="grid size-9 place-items-center rounded-full bg-[#dcebe5]">
                  <HelpCircle size={18} />
                </span>
                <h3 className="font-serif text-xl">Have a different question?</h3>
              </div>
              <p className="text-sm leading-6 text-[#58706d]">
                Our welcoming team is always here to help you understand your options and schedule your visit.
              </p>
              <a
                href={clinicData.phoneHref}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-[#163b4a] hover:underline text-sm"
              >
                <Phone size={15} /> Call our office: {clinicData.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="flex flex-col gap-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={faq.id}
                  className={`border transition-all duration-200 rounded-sm ${
                    isOpen
                      ? 'border-[#163b4a] bg-white shadow-sm'
                      : 'border-[#dce5e0] bg-white hover:border-[#adc3bd]'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left cursor-pointer"
                  >
                    <span className="font-serif text-lg md:text-xl text-[#163b4a] font-medium leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#0077c8] text-white'
                          : 'bg-[#edf3ee] text-[#52776c]'
                      }`}
                    >
                      <ChevronDown size={17} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm leading-7 text-[#526a67] border-t border-[#edf2ee]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
