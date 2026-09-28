import { ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export function Button({
  children,
  href = '/contact',
  variant = 'primary',
  className = '',
  icon = true,
  onClick,
  type = 'button',
}) {
  const variantStyles = {
    primary: 'bg-[#0077c8] text-white hover:bg-[#005fa3] shadow-sm',
    secondary:
      'border border-[#0077c8] bg-white text-[#0077c8] hover:bg-[#0077c8] hover:text-white',
    light: 'bg-[#e6f4fb] text-[#0077c8] hover:bg-white',
  }

  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition-all cursor-pointer'
  const combinedClass = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`

  // External links or tel/mailto
  if (href && !onClick && type !== 'submit') {
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={combinedClass}>
          {children}
          {icon && <ArrowRight size={16} />}
        </a>
      )
    }
    return (
      <Link to={href} className={combinedClass}>
        {children}
        {icon && <ArrowRight size={16} />}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {children}
      {icon && <ArrowRight size={16} />}
    </button>
  )
}
