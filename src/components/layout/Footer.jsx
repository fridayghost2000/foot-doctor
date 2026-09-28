import { MapPin, Phone, Printer, Clock, Navigation, Calendar, Footprints } from 'lucide-react'
import { clinicData } from '@/data/clinicData'
import { footerExploreLinks } from '@/data/navigationData'
import { NavLink } from '@/components/common/NavLink'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#12313e] text-[#edf4ef] border-t border-[#234d5e]">
      {/* Main Content & Google Maps Section */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Doctor Info & Contact Details (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Logo, Doctor & Practice Intro */}
              <div className="mb-6">
                <Link
                  to="/"
                  className="mb-4 inline-flex items-center gap-3 text-white transition-opacity hover:opacity-90"
                >
                  <span className="grid size-11 place-items-center rounded-full bg-[#dcebe5] text-[#163b4a] shadow-sm">
                    <Footprints size={22} />
                  </span>
                  <span className="font-serif text-2xl leading-none font-medium">
                    Foot Doctor{' '}
                    <span className="block text-xs font-sans font-semibold tracking-[0.2em] text-[#86baa9] mt-1">
                      {clinicData.tagline}
                    </span>
                  </span>
                </Link>

                <h3 className="font-serif text-2xl text-white font-medium mt-1">
                  {clinicData.doctorName}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b9ceca] max-w-xl">
                  Have a foot or ankle concern? Contact our office to schedule an appointment or request an appointment online.
                </p>
              </div>

              {/* Address */}
              <div className="mb-6 rounded-lg bg-[#163b4a]/60 p-5 border border-[#265366] max-w-xl">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 shrink-0 text-[#86baa9] mt-0.5" />
                  <div>
                    <p className="text-base font-semibold text-white">
                      {clinicData.addressLine1}
                    </p>
                    <p className="text-base font-semibold text-white">
                      {clinicData.addressLine2}
                    </p>
                    <p className="mt-2 text-xs text-[#a9c4be]">
                      Located on S. Military Trail, between <span className="text-white font-medium">The Boys Farmers Market</span> and <span className="text-white font-medium">The Girls Market</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone & Fax */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="grid size-9 place-items-center rounded bg-[#1f4a5b] text-[#86baa9]">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-[#86baa9] uppercase font-semibold tracking-wider">Phone:</span>{' '}
                    <a
                      href={clinicData.phoneHref}
                      className="text-base font-bold text-white hover:text-[#dcebe5] transition-colors"
                    >
                      {clinicData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="grid size-9 place-items-center rounded bg-[#1f4a5b] text-[#86baa9]">
                    <Printer size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-[#86baa9] uppercase font-semibold tracking-wider">Fax:</span>{' '}
                    <span className="text-base font-bold text-white">
                      {clinicData.fax}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={clinicData.phoneHref}
                className="inline-flex items-center justify-center rounded bg-[#526f7a] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#628492] transition-colors"
              >
                CALL OUR OFFICE
              </a>
              <a
                href={clinicData.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded bg-[#2e5769] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#3c6d83] transition-colors"
              >
                GET DIRECTIONS
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (5 cols, right aligned, slightly compact) */}
          <div className="lg:col-span-5 flex justify-end w-full">
            <div className="relative h-[290px] sm:h-[320px] w-full max-w-[460px] overflow-hidden rounded-lg border border-[#2a596e] bg-[#0e2732] shadow-lg">
              <iframe
                title="Foot Doctor of Delray Office Location"
                src={clinicData.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute bottom-3 right-3 z-10">
                <a
                  href={clinicData.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded bg-white/95 px-3 py-1.5 text-xs font-bold text-[#163b4a] shadow-md hover:bg-white transition-all backdrop-blur-sm"
                >
                  <Navigation size={12} className="text-[#163b4a]" /> View larger map
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Info Grid: Same-Day, Hours, Landmarks, and Directions Assistance */}
        <div className="mt-14 grid gap-8 border-t border-[#234d5e] pt-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Same-Day Appointments */}
          <div className="rounded-lg bg-[#163b4a]/40 p-6 border border-[#245063]">
            <div className="mb-3 flex items-center gap-2.5">
              <Calendar className="size-5 text-[#86baa9]" />
              <h4 className="font-serif text-lg font-medium text-white">
                Same-Day Appointments May Be Available
              </h4>
            </div>
            <p className="text-xs leading-relaxed text-[#c7dcd7]">
              Need to be seen today? Please call our office directly at{' '}
              <a href={clinicData.phoneHref} className="font-bold text-white underline hover:text-[#86baa9]">
                {clinicData.phone}
              </a>{' '}
              to check same-day availability.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#a0bbb4]">
              Online appointment requests may take <strong className="text-[#dcebe5]">24–48 hours</strong> to be reviewed and approved, so please call rather than scheduling online if you need a same-day visit.
            </p>
          </div>

          {/* Office Hours */}
          <div className="rounded-lg bg-[#163b4a]/40 p-6 border border-[#245063]">
            <div className="mb-3 flex items-center gap-2.5">
              <Clock className="size-5 text-[#86baa9]" />
              <h4 className="font-serif text-lg font-medium text-white">
                Office Hours
              </h4>
            </div>
            <ul className="space-y-1.5 text-xs text-[#c7dcd7]">
              {clinicData.officeHours.map((item) => (
                <li key={item.day} className="flex justify-between border-b border-white/5 pb-1">
                  <span className="font-medium text-white">{item.day}:</span>
                  <span className={item.hours === 'Closed' ? 'text-[#e58a8a] font-medium' : 'text-[#dcebe5]'}>
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Our Office & Landmark Guide */}
          <div className="rounded-lg bg-[#163b4a]/40 p-6 border border-[#245063] md:col-span-2 lg:col-span-1">
            <div className="mb-3 flex items-center gap-2.5">
              <Navigation className="size-5 text-[#86baa9]" />
              <h4 className="font-serif text-lg font-medium text-white">
                Visit Our Delray Beach Office
              </h4>
            </div>
            <p className="text-xs leading-relaxed text-[#c7dcd7]">
              Our office is conveniently located on S. Military Trail, between <strong className="text-white">The Boys Farmers Market and The Girls Market</strong>, two well-known Delray Beach landmarks.
            </p>

            <div className="mt-5 border-t border-white/10 pt-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#86baa9]">
                GET DIRECTIONS
              </h5>
              <p className="mt-1.5 text-xs text-[#a0bbb4]">
                Having trouble finding us? Call{' '}
                <a href={clinicData.phoneHref} className="font-semibold text-white hover:underline">
                  {clinicData.phone}
                </a>{' '}
                and our office will be happy to assist you.
              </p>
            </div>
          </div>
        </div>

        
      </div>

      {/* Bottom Bar / Copyright */}
      <div className="border-t border-[#234d5e] bg-[#0b1f28] px-6 py-5 text-center text-xs text-[#8aa39b]">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>{clinicData.copyright}</p>
          <p className="text-[11px] text-[#6d8a83]">
            {clinicData.doctorName} · Podiatric Medicine & Surgery · Delray Beach, FL
          </p>
        </div>
      </div>
    </footer>
  )
}
