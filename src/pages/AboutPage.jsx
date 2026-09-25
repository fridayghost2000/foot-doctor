import { Clock3, Footprints, Stethoscope, HeartPulse } from 'lucide-react'
import clinicRoomImage from '@/assets/images/clinic-room.jpg'
import { clinicData } from '@/data/clinicData'
import { FeatureCard } from '@/components/common/FeatureCard'
import { AppointmentCTA } from '@/components/common/AppointmentCTA'
import { PageHero } from '@/components/common/PageHero'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Practice & Doctor"
        title="Expert care with a personal point of view."
        text={`At Foot Doctor of Delray, we believe the best care starts by listening carefully and treating the whole person—not just the symptom. Led by ${clinicData.doctorName}, our practice is dedicated to helping you walk, work, and stay active comfortably.`}
      />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={clinicRoomImage}
            alt="Podiatry clinic consultation room"
            className="aspect-square w-full object-cover rounded shadow-md"
          />
          <div>
            <p className="eyebrow">A welcoming office in Delray Beach</p>
            <h2 className="section-title">
              Medicine can feel <em>human.</em>
            </h2>
            <p className="mt-6 text-base leading-8 text-[#526a67]">
              We provide individualized treatment plans and conservative options whenever appropriate. Our goal is to make every visit feel clear, calm, and useful—so you can make confident decisions about your health.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <FeatureCard
                icon={<Clock3 />}
                title="Time to listen"
                text="Your story is an important part of your care."
              />
              <FeatureCard
                icon={<Footprints />}
                title="Built for life"
                text="Plans that support the activities you love."
              />
            </div>
          </div>
        </div>
      </main>

      <AppointmentCTA />
    </>
  )
}
