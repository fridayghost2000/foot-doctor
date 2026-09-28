import { NavLink as RouterNavLink } from 'react-router-dom'

export function NavLink({ href, children, className = '', activeClassName = '', onClick }) {
  // External links
  if (href && (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:'))) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {children}
      </a>
    )
  }

  return (
    <RouterNavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) => `${className} ${isActive ? activeClassName : ''}`}
    >
      {children}
    </RouterNavLink>
  )
}
