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
    primary: 'bg-[#163b4a] text-white hover:bg-[#0f2e3a]',
    secondary:
      'border border-[#cbd9d5] bg-white text-[#163b4a] hover:border-[#163b4a]',
    light: 'bg-[#dcebe5] text-[#163b4a] hover:bg-white',
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
