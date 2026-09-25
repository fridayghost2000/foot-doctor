import { useRouter } from '@/hooks/useRouter'

export function NavLink({ href, children, className = '', activeClassName = '', onClick }) {
  const { path, navigate } = useRouter()
  const isActive = path === href

  const handleClick = (e) => {
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return
    }
    e.preventDefault()
    if (onClick) onClick(e)
    navigate(href)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`}
    >
      {children}
    </a>
  )
}
