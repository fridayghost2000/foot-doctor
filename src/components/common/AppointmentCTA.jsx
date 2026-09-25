import { Phone } from 'lucide-react'
import { Button } from './Button'
import { clinicData } from '@/data/clinicData'

export function AppointmentCTA({
  eyebrow = 'Ready to take the next step?',
  title = 'Let’s get you back on your feet.',
  buttonText = 'Request an appointment',
  buttonHref = '/contact',
}) {
  return (
    <section className="bg-[#b8cfc3] px-6 py-16 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#163b4a]">{title}</h2>
        </div>
        <div className="flex flex-wrap items-center gap-3.5">
          <Button href={buttonHref}>{buttonText}</Button>
          <a
            href={clinicData.phoneHref}
            className="inline-flex items-center gap-2 rounded bg-white px-5 py-3 text-sm font-semibold text-[#163b4a] shadow-sm transition-all hover:bg-[#163b4a] hover:text-white"
          >
            <Phone size={15} />
            Call our office
          </a>
        </div>
      </div>
    </section>
  )
}
