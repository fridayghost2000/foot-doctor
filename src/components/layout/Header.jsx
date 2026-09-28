import { useState } from 'react'
import { Footprints, Menu, X, ChevronDown } from 'lucide-react'
import { clinicData } from '@/data/clinicData'
import { mainNavigation, conditionsDropdown, servicesDropdown } from '@/data/navigationData'
import { Button } from '@/components/common/Button'
import { NavLink } from '@/components/common/NavLink'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const [open, setOpen] = useState(false)
  const [mobileConditionsOpen, setMobileConditionsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const { pathname } = useLocation()

  const isConditionActive =
    pathname.startsWith('/conditions') ||
    conditionsDropdown.some(
      (c) =>
        pathname === c.href ||
        pathname === c.href.replace(/\/+$/, '') ||
        pathname === c.href.replace(/^\//, '')
    )

  const isServiceActive =
    pathname.startsWith('/services') ||
    servicesDropdown.some(
      (s) =>
        pathname === s.href ||
        pathname === s.href.replace(/\/+$/, '') ||
        pathname === s.href.replace(/^\//, '')
    )

  return (
    <>
      <div className="bg-[#163b4a] px-6 py-2 text-center text-xs tracking-wide text-[#e8f0eb]">
        {clinicData.announcement} · Call{' '}
        <a href={clinicData.phoneHref} className="font-semibold underline">
          {clinicData.phone}
        </a>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#dce5e0] bg-[#f8faf6]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            to="/"
            className="flex items-center gap-3 text-[#163b4a]"
          >
            <span className="grid size-10 place-items-center rounded-full bg-[#dcebe5]">
              <Footprints size={20} />
            </span>
            <span className="font-serif text-xl leading-none">
              Foot Doctor{' '}
              <span className="block text-xs font-sans font-medium tracking-[0.18em] text-[#65817b]">
                {clinicData.tagline}
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {mainNavigation.map(({ label, href }) => {
              // Conditions Dropdown
              if (label === 'Conditions') {
                return (
                  <div key={href} className="relative group py-2">
                    <Link
                      to={href}
                      className={`inline-flex items-center gap-1.5 text-base font-medium transition-colors hover:text-[#163b4a] ${
                        isConditionActive ? 'text-[#163b4a] font-bold' : 'text-[#4a6260]'
                      }`}
                    >
                      <span>Conditions</span>
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 group-hover:rotate-180 text-[#65817b]"
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-80 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                      <div className="bg-white border border-[#dce5e0] shadow-2xl rounded-sm overflow-hidden divide-y divide-[#edf2ee]">
                        {conditionsDropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-5 py-3.5 text-[15px] font-medium text-[#163b4a] hover:bg-[#edf5f1] hover:text-[#0b2530] transition-colors leading-relaxed tracking-wide"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              // Services Dropdown
              if (label === 'Services') {
                return (
                  <div key={href} className="relative group py-2">
                    <Link
                      to={href}
                      className={`inline-flex items-center gap-1.5 text-base font-medium transition-colors hover:text-[#163b4a] ${
                        isServiceActive ? 'text-[#163b4a] font-bold' : 'text-[#4a6260]'
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 group-hover:rotate-180 text-[#65817b]"
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-72 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                      <div className="bg-white border border-[#dce5e0] shadow-2xl rounded-sm overflow-hidden divide-y divide-[#edf2ee]">
                        {servicesDropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-5 py-3.5 text-[15px] font-medium text-[#163b4a] hover:bg-[#edf5f1] hover:text-[#0b2530] transition-colors leading-relaxed tracking-wide"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <NavLink
                  key={href}
                  href={href}
                  className="text-base font-medium text-[#4a6260] transition-colors hover:text-[#163b4a]"
                  activeClassName="text-[#163b4a] font-semibold"
                >
                  {label}
                </NavLink>
              )
            })}
            <Button href="/contact">Make an appointment</Button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
            className="grid size-10 place-items-center border border-[#cbd9d5] lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <nav className="flex flex-col gap-3 border-t border-[#dce5e0] bg-[#f8faf6] px-6 py-5 lg:hidden max-h-[85vh] overflow-y-auto">
            {mainNavigation.map(({ label, href }) => {
              // Mobile Conditions Accordion
              if (label === 'Conditions') {
                return (
                  <div key={href} className="border-b border-[#e5ece8] pb-2">
                    <div className="flex items-center justify-between">
                      <NavLink
                        href={href}
                        onClick={() => setOpen(false)}
                        className="text-base font-medium text-[#4a6260]"
                        activeClassName="text-[#163b4a] font-bold"
                      >
                        Conditions
                      </NavLink>
                      <button
                        type="button"
                        onClick={() => setMobileConditionsOpen(!mobileConditionsOpen)}
                        className="p-1.5 text-[#5f7a75]"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileConditionsOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {mobileConditionsOpen && (
                      <div className="mt-2 ml-3 flex flex-col gap-1 border-l-2 border-[#163b4a]/20 pl-3 pt-1">
                        {conditionsDropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            onClick={() => setOpen(false)}
                            className="text-sm font-medium text-[#526d68] hover:text-[#163b4a] py-1.5"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              // Mobile Services Accordion
              if (label === 'Services') {
                return (
                  <div key={href} className="border-b border-[#e5ece8] pb-2">
                    <div className="flex items-center justify-between">
                      <NavLink
                        href={href}
                        onClick={() => setOpen(false)}
                        className="text-base font-medium text-[#4a6260]"
                        activeClassName="text-[#163b4a] font-bold"
                      >
                        Services
                      </NavLink>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-1.5 text-[#5f7a75]"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {mobileServicesOpen && (
                      <div className="mt-2 ml-3 flex flex-col gap-1 border-l-2 border-[#163b4a]/20 pl-3 pt-1">
                        {servicesDropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            onClick={() => setOpen(false)}
                            className="text-sm font-medium text-[#526d68] hover:text-[#163b4a] py-1.5"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <NavLink
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-[#4a6260]"
                  activeClassName="text-[#163b4a] font-bold"
                >
                  {label}
                </NavLink>
              )
            })}
            <div className="pt-2">
              <Button href="/contact" onClick={() => setOpen(false)}>
                Make an appointment
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
