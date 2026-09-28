import { MapPin, Phone, Printer, Clock, Navigation, Calendar } from 'lucide-react'
import { clinicData } from '@/data/clinicData'
import { footerExploreLinks } from '@/data/navigationData'
import { NavLink } from '@/components/common/NavLink'
import { Link } from 'react-router-dom'
import webLogo from '@/assets/images/weblogo.webp'

export function Footer() {
  return (
    <footer className="bg-[#d2eeed] text-[#163b4a] border-t border-[#b8dfde]">
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
                  className="mb-4 inline-flex items-center transition-opacity hover:opacity-90 py-1"
                >
                  <img
                    src={webLogo}
                    alt="Foot Doctor of Delray - Dr. Celine Soltani"
                    className="w-44 sm:w-52 md:w-60 h-auto max-h-28 object-contain"
                  />
                </Link>

                <h3 className="font-serif text-2xl text-[#163b4a] font-bold mt-1">
                  {clinicData.doctorName}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2d4d5a] max-w-xl font-medium">
                  Have a foot or ankle concern? Contact our office to schedule an appointment or request an appointment online.
                </p>
              </div>

              {/* Address */}
              <div className="mb-6 rounded-lg bg-white/75 p-5 border border-[#b8dfde] shadow-xs max-w-xl">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 shrink-0 text-[#163b4a] mt-0.5" />
                  <div>
                    <p className="text-base font-bold text-[#163b4a]">
                      {clinicData.addressLine1}
                    </p>
                    <p className="text-base font-bold text-[#163b4a]">
                      {clinicData.addressLine2}
                    </p>
                    <p className="mt-2 text-xs text-[#3f5f6d] font-medium">
                      Located on S. Military Trail, between <span className="text-[#163b4a] font-semibold">The Boys Farmers Market</span> and <span className="text-[#163b4a] font-semibold">The Girls Market</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone & Fax */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="grid size-9 place-items-center rounded bg-[#0077c8] text-white">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-[#163b4a] uppercase font-bold tracking-wider">Phone:</span>{' '}
                    <a
                      href={clinicData.phoneHref}
                      className="text-base font-bold text-[#163b4a] hover:text-[#0077c8] underline decoration-[#163b4a]/40 hover:decoration-[#0077c8] transition-colors"
                    >
                      {clinicData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="grid size-9 place-items-center rounded bg-[#0077c8] text-white">
                    <Printer size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-[#163b4a] uppercase font-bold tracking-wider">Fax:</span>{' '}
                    <span className="text-base font-bold text-[#163b4a]">
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
                className="inline-flex items-center justify-center rounded bg-[#0077c8] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#005fa3] transition-colors shadow-sm"
              >
                CALL OUR OFFICE
              </a>
              <a
                href={clinicData.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded bg-[#005fa3] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#0077c8] transition-colors shadow-sm"
              >
                GET DIRECTIONS
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (5 cols, right aligned, slightly compact) */}
          <div className="lg:col-span-5 flex justify-end w-full">
            <div className="relative h-[290px] sm:h-[320px] w-full max-w-[460px] overflow-hidden rounded-lg border border-[#b8dfde] bg-white shadow-md">
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
                  className="inline-flex items-center gap-1.5 rounded bg-white/95 px-3 py-1.5 text-xs font-bold text-[#163b4a] shadow-md hover:bg-white transition-all border border-[#b8dfde]"
                >
                  <Navigation size={12} className="text-[#163b4a]" /> View larger map
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Info Grid: Same-Day, Hours, Landmarks, and Directions Assistance */}
        <div className="mt-14 grid gap-8 border-t border-[#b8dfde] pt-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Same-Day Appointments */}
          <div className="rounded-lg bg-white/75 p-6 border border-[#b8dfde] shadow-xs">
            <div className="mb-3 flex items-center gap-2.5">
              <Calendar className="size-5 text-[#163b4a]" />
              <h4 className="font-serif text-lg font-bold text-[#163b4a]">
                Same-Day Appointments May Be Available
              </h4>
            </div>
            <p className="text-xs leading-relaxed text-[#2d4d5a]">
              Need to be seen today? Please call our office directly at{' '}
              <a href={clinicData.phoneHref} className="font-bold text-[#163b4a] underline hover:text-[#0b2530]">
                {clinicData.phone}
              </a>{' '}
              to check same-day availability.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#3f5f6d]">
              Online appointment requests may take <strong className="text-[#163b4a]">24–48 hours</strong> to be reviewed and approved, so please call rather than scheduling online if you need a same-day visit.
            </p>
          </div>

          {/* Office Hours */}
          <div className="rounded-lg bg-white/75 p-6 border border-[#b8dfde] shadow-xs">
            <div className="mb-3 flex items-center gap-2.5">
              <Clock className="size-5 text-[#163b4a]" />
              <h4 className="font-serif text-lg font-bold text-[#163b4a]">
                Office Hours
              </h4>
            </div>
            <ul className="space-y-1.5 text-xs text-[#2d4d5a]">
              {clinicData.officeHours.map((item) => (
                <li key={item.day} className="flex justify-between border-b border-[#d2eeed] pb-1">
                  <span className="font-semibold text-[#163b4a]">{item.day}:</span>
                  <span className={item.hours === 'Closed' ? 'text-[#c24141] font-semibold' : 'text-[#2d4d5a] font-medium'}>
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Our Office & Landmark Guide */}
          <div className="rounded-lg bg-white/75 p-6 border border-[#b8dfde] shadow-xs md:col-span-2 lg:col-span-1">
            <div className="mb-3 flex items-center gap-2.5">
              <Navigation className="size-5 text-[#163b4a]" />
              <h4 className="font-serif text-lg font-bold text-[#163b4a]">
                Visit Our Delray Beach Office
              </h4>
            </div>
            <p className="text-xs leading-relaxed text-[#2d4d5a]">
              Our office is conveniently located on S. Military Trail, between <strong className="text-[#163b4a]">The Boys Farmers Market and The Girls Market</strong>, two well-known Delray Beach landmarks.
            </p>

            <div className="mt-5 border-t border-[#d2eeed] pt-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#163b4a]">
                GET DIRECTIONS
              </h5>
              <p className="mt-1.5 text-xs text-[#3f5f6d]">
                Having trouble finding us? Call{' '}
                <a href={clinicData.phoneHref} className="font-bold text-[#163b4a] hover:underline">
                  {clinicData.phone}
                </a>{' '}
                and our office will be happy to assist you.
              </p>
            </div>
          </div>
        </div>

        
      </div>

      {/* Bottom Bar / Copyright */}
      <div className="border-t border-[#b8dfde] bg-[#bfe4e3] px-6 py-5 text-center text-xs text-[#163b4a]">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-medium">{clinicData.copyright}</p>
          <p className="text-[11px] text-[#245063] font-medium">
            {clinicData.doctorName} · Podiatric Medicine & Surgery · Delray Beach, FL
          </p>
        </div>
      </div>
    </footer>
  )
}

