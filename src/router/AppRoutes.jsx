import { useRouter } from '@/hooks/useRouter'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ConditionsPage } from '@/pages/ConditionsPage'
import { ConditionDetailPage } from '@/pages/ConditionDetailPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { ServiceDetailPage } from '@/pages/ServiceDetailPage'
import { NewPatientsPage } from '@/pages/NewPatientsPage'
import { ContactPage } from '@/pages/ContactPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { conditions } from '@/data/conditionsData'

export function AppRoutes() {
  const { path } = useRouter()
  // Normalize path removing trailing slash for clean comparison
  const normalizedPath = (path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path).toLowerCase()

  if (normalizedPath === '' || normalizedPath === '/') {
    return <HomePage />
  }

  if (normalizedPath === '/about') {
    return <AboutPage />
  }

  if (normalizedPath === '/conditions') {
    return <ConditionsPage />
  }

  // Exact requested direct condition URLs (e.g. /heel-pain-plantar-fasciitis, /ingrown-toenail-treatment)
  const directCondition = conditions.find(
    (c) =>
      `/${c.slug}` === normalizedPath ||
      c.href.replace(/\/+$/, '') === normalizedPath ||
      `/conditions/${c.slug}` === normalizedPath ||
      `/${c.id}` === normalizedPath
  )

  if (directCondition) {
    return <ConditionDetailPage slug={directCondition.slug} />
  }

  // Fallback for nested /conditions/slug
  if (normalizedPath.startsWith('/conditions/')) {
    const slug = normalizedPath.replace('/conditions/', '').split('/')[0]
    return <ConditionDetailPage slug={slug} />
  }

  if (normalizedPath === '/services') {
    return <ServicesPage />
  }

  if (normalizedPath.startsWith('/services/')) {
    const slug = normalizedPath.replace('/services/', '').split('/')[0]
    return <ServiceDetailPage slug={slug} />
  }

  if (normalizedPath === '/new-patients') {
    return <NewPatientsPage />
  }

  if (normalizedPath === '/contact') {
    return <ContactPage />
  }

  return <NotFoundPage />
}
