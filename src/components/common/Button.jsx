import { ArrowRight } from 'lucide-react'
import { useRouter } from '@/hooks/useRouter'

export function Button({
  children,
  href = '/contact',
  variant = 'primary',
  className = '',
  icon = true,
  onClick,
  type = 'button',
}) {
  const { navigate } = useRouter()

  const variantStyles = {
    primary: 'bg-[#163b4a] text-white hover:bg-[#0f2e3a]',
    secondary:
      'border border-[#cbd9d5] bg-white text-[#163b4a] hover:border-[#163b4a]',
    light: 'bg-[#dcebe5] text-[#163b4a] hover:bg-white',
  }

  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition-all cursor-pointer'
  const combinedClass = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`

  if (href && !onClick && type !== 'submit') {
    const handleClick = (e) => {
      if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
        return
      }
      e.preventDefault()
      navigate(href)
    }

    return (
      <a href={href} onClick={handleClick} className={combinedClass}>
        {children}
        {icon && <ArrowRight size={16} />}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {children}
      {icon && <ArrowRight size={16} />}
    </button>
  )
}
