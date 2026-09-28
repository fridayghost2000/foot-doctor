import { ArrowRight } from 'lucide-react'
import { clinicData } from '@/data/clinicData'
import { PageHero } from '@/components/common/PageHero'
import { FAQSection } from '@/components/common/FAQSection'

export function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    e.currentTarget.reset()
    alert('Thank you. We will be in touch shortly.')
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s start a conversation about your care."
        text="Reach out to schedule an appointment or ask a question. Same-day appointments may be available."
      />

      <main className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-24">
        <div>
          <p className="eyebrow">Foot Doctor of Delray</p>
          <h2 className="section-title">
            Here when you need <em>us.</em>
          </h2>

          <div className="mt-10 flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#66877d]">
                Phone
              </p>
              <a
                href={clinicData.phoneHref}
                className="mt-2 block font-serif text-2xl text-[#163b4a]"
              >
                {clinicData.phone}
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#66877d]">
                Location
              </p>
              <p className="mt-2 text-base leading-7 text-[#526a67]">
                {clinicData.location}
                <br />
                {clinicData.locationDetail}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#66877d]">
                Hours
              </p>
              <p className="mt-2 text-base leading-7 text-[#526a67]">
                {clinicData.hours}
                <br />
                {clinicData.hoursDetail}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#163b4a] p-8 text-white">
          <h3 className="font-serif text-3xl">Request an appointment</h3>
          <form className="mt-7 flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              required
              aria-label="Name"
              placeholder="Your name"
              className="border-b border-[#54727b] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#a9c2be] focus:border-white"
            />
            <input
              required
              type="email"
              aria-label="Email"
              placeholder="Email address"
              className="border-b border-[#54727b] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#a9c2be] focus:border-white"
            />
            <input
              aria-label="Phone"
              placeholder="Phone number"
              className="border-b border-[#54727b] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#a9c2be] focus:border-white"
            />
            <textarea
              required
              aria-label="How can we help?"
              placeholder="How can we help?"
              rows={3}
              className="resize-none border-b border-[#54727b] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#a9c2be] focus:border-white"
            />
            <button
              type="submit"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-[#dcebe5] px-5 py-3 text-sm font-semibold text-[#163b4a] hover:bg-white cursor-pointer"
            >
              Send request <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </main>

      <FAQSection />
    </>
  )
}
