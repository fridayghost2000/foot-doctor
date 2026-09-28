import { ArrowRight, Building2, HeartPulse, Phone, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'
import doctorImage from '@/assets/images/dr.image.jpg'
import doctorPortraitImage from '@/assets/images/dr.image2.jpg'
import clinicRoomImage from '@/assets/images/clinic-room.jpg'
import footAndAnkleImage from '@/assets/images/Foot-and-ankle-1024x683.png'
import ingrownNailImage from '@/assets/images/Ingrown-nail.png'
import heelPainImage from '@/assets/images/Heel-pain.png'
import sportInjuriesImage from '@/assets/images/Sport-Injuries.png'
import fungalToenailImage from '@/assets/images/Fungal-Toenail.png'
import diabeticWoundImage from '@/assets/images/Diabetic-wound.png'
import neuropathyImage from '@/assets/images/Neuropathy.png'
import { clinicData } from '@/data/clinicData'
import { conditions } from '@/data/conditionsData'
import { Button } from '@/components/common/Button'
import { FeatureCard } from '@/components/common/FeatureCard'
import { Testimonials } from '@/components/common/Testimonials'
import { FAQSection } from '@/components/common/FAQSection'
import { AppointmentCTA } from '@/components/common/AppointmentCTA'

const conditionImages = {
  'foot-ankle-conditions': neuropathyImage,
  'heel-pain-plantar-fasciitis': heelPainImage,
  'ingrown-toenail-treatment': ingrownNailImage,
  'fungal-toenail-treatment': fungalToenailImage,
  'diabetic-foot-wound-care': diabeticWoundImage,
  'treatment-for-tendon-pain-injuries': sportInjuriesImage,
  'neuropathy-treatment': neuropathyImage,
  // Fallbacks for legacy slugs
  'ingrown-toenails': ingrownNailImage,
  'heel-pain': heelPainImage,
  'sports-injuries': sportInjuriesImage,
  'fungal-toenails': fungalToenailImage,
  'diabetic-foot': diabeticWoundImage,
  'neuropathy': neuropathyImage,
}

export function HomePage() {
  const featureIcons = {
    HeartPulse: <HeartPulse size={20} />,
    Sparkles: <Sparkles size={20} />,
    ShieldCheck: <ShieldCheck size={20} />,
    Building2: <Building2 size={20} />,
    Stethoscope: <Stethoscope size={20} />,
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#edf3ee]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-24">
          <div className="relative z-10">
            <h1 className="max-w-2xl font-serif text-5xl leading-[1.02] text-[#163b4a] sm:text-6xl lg:text-8xl">
              Move through life with{' '}
              <em className="font-normal text-[#66877d]">confidence.</em>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#526a67]">
              Personalized, comprehensive foot and ankle care—helping you stay active, comfortable, and on your feet.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact">Make an appointment</Button>
              <Button href={clinicData.phoneHref} variant="secondary">
                <Phone size={16} /> Call the office
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-[#5b726e]">
              <div className="flex -space-x-2">
                <span className="grid size-9 place-items-center rounded-full border-2 border-[#edf3ee] bg-[#b6cfc2] text-xs font-semibold text-[#163b4a]">
                  JM
                </span>
                <span className="grid size-9 place-items-center rounded-full border-2 border-[#edf3ee] bg-[#d8c8b6] text-xs font-semibold text-[#163b4a]">
                  RM
                </span>
                <span className="grid size-9 place-items-center rounded-full border-2 border-[#edf3ee] bg-[#acc4cf] text-xs font-semibold text-[#163b4a]">
                  KW
                </span>
              </div>
              <span>
                <strong className="text-[#163b4a]">Trusted by local patients</strong>
                <br />
                for thoughtful, personal care
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[0.88] overflow-hidden bg-[#c8d7cf]">
              <img
                src={doctorImage}
                alt="Doctor at Foot Doctor of Delray"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-[#163b4a] p-5 text-white shadow-xl">
              <p className="font-serif text-3xl">Care that listens.</p>
              <p className="mt-1 text-xs tracking-wide text-[#b9ceca]">
                Individualized, conservative when appropriate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Compact & Elegant */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-24 border-b border-[#dce5e0]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-10">
            <h2 className="section-title">
              Why Choose Our Delray Beach Podiatry Practice?
            </h2>
            <p className="mt-4 text-base leading-7 text-[#526a67]">
              We believe great foot and ankle care begins with truly listening. Our approach combines clinical expertise with gentle, individualized attention so you can walk, work, and stay active comfortably.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {clinicData.whyChooseUs.map((feature, idx) => (
              <div
                key={feature.id}
                className="group relative flex flex-col justify-between border border-[#dce5e0] bg-[#fafcf9] p-6 transition-all duration-300 hover:border-[#163b4a] hover:bg-white hover:shadow-md rounded-sm min-h-[270px]"
              >
                {/* Top: Icon, Counter & Badge */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-md bg-[#dcebe5] text-[#163b4a] transition-colors group-hover:bg-[#163b4a] group-hover:text-[#dcebe5]">
                      {featureIcons[feature.iconName]}
                    </span>
                    <span className="font-serif text-xs font-semibold tracking-widest text-[#8aa39b]">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="mt-4 inline-block rounded bg-[#eaf2ed] px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-[#3f655b] uppercase">
                    {feature.badge}
                  </span>
                </div>

                {/* Bottom: Title & Text */}
                <div className="mt-auto pt-6">
                  <h3 className="font-serif text-xl leading-snug text-[#163b4a] font-medium">
                    {feature.title}
                  </h3>

                  <p className="mt-2.5 text-[13.5px] leading-6 text-[#58706d]">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}

            {/* 6th Callout Card */}
            <div className="flex flex-col justify-between bg-[#163b4a] p-6 text-white shadow-md rounded-sm">
              <div>
                <span className="mb-2 inline-block rounded bg-[#255264] px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-[#dcebe5] uppercase">
                  Take The Next Step
                </span>
                <h3 className="font-serif text-xl leading-snug text-[#edf4ef] mt-1.5 font-medium">
                  Experience personal care from your first visit.
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-6 text-[#b9ceca]">
                  Have questions about your foot pain or ready to schedule? Same-day appointments may be available.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <Button href="/contact" variant="light" icon={true}>
                  Request an appointment
                </Button>
                <a
                  href={clinicData.phoneHref}
                  className="inline-flex items-center justify-center gap-2 text-xs font-medium text-[#d9e8e2] hover:underline pt-1"
                >
                  <Phone size={13} /> Call office: {clinicData.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Concerns / Conditions Section */}
      <section className="bg-[#f4f7f3] px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Section Header - Compact and clean */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="eyebrow !mb-2">
                Common concerns
              </p>
              <h2 className="section-title mt-2">
                Care for the feet
                <br />
                that carry you.
              </h2>
            </div>
            <div className="pb-1">
              <Button href="/conditions" variant="secondary">
                View all conditions
              </Button>
            </div>
          </div>

          {/* Cards Grid - 3 Columns with slightly smaller card dimensions */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.slice(0, 6).map((item, i) => (
              <Link
                key={item.slug}
                to={item.href || `/${item.slug}/`}
                className="group relative flex min-h-[300px] sm:min-h-[320px] flex-col justify-between overflow-hidden p-5 sm:p-5.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer border border-[#d6e2dc]"
              >
                {/* Background Image with smooth hover zoom */}
                <img
                  src={item.image || conditionImages[item.slug]}
                  alt={item.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                {/* Gradient overlay for clear text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081c25]/95 via-[#163b4a]/65 to-black/30 transition-opacity duration-300 group-hover:via-[#163b4a]/55" />

                {/* Top: Number indicator */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-block bg-[#163b4a]/90 px-2.5 py-0.5 text-xs font-bold tracking-wider text-[#dcebe5] backdrop-blur-xs border border-white/20">
                    0{i + 1}
                  </span>
                </div>

                {/* Bottom: Main Title, Short Description and Learn more Action */}
                <div className="relative z-10 mt-auto">
                  <h3 className="font-serif text-lg sm:text-[19px] leading-snug text-white font-medium drop-shadow-xs group-hover:text-[#dcebe5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-[#dbe8e3] line-clamp-2">
                    {item.shortSummary || item.summary}
                  </p>
                  <div className="mt-3.5 pt-2.5 border-t border-white/20 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#dcebe5] transition-colors group-hover:text-white">
                      Learn more{' '}
                      <ArrowRight
                        size={12}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Difference Section */}
      <section className="bg-[#dcebe5] px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">The Foot Doctor of Delray difference</p>
            <h2 className="section-title">
              A plan built around <em>your life.</em>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#526a67]">
              Whether you are managing a new pain, returning to a favorite activity, or simply looking for answers, our approach is thorough, clear, and centered on you.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Meet the practice
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              src={clinicRoomImage}
              alt="Warm, modern podiatry consultation room"
              className="mt-10 aspect-[0.8] w-full object-cover rounded shadow-md"
            />
            <img
              src={doctorPortraitImage}
              alt="Podiatrist at Foot Doctor of Delray"
              className="aspect-[0.8] w-full object-cover rounded shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Testimonials, FAQ & CTA */}
      <Testimonials />
      <FAQSection />
      <AppointmentCTA />
    </>
  )
}
