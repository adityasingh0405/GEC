import { Link } from 'react-router-dom'

const variants = {
  primary: [
    'inline-flex items-center justify-center gap-2',
    'bg-[#1E3A5F] text-white border border-[#1E3A5F]',
    'hover:bg-[#2A5284] hover:border-[#2A5284] hover:-translate-y-0.5 active:bg-[#152940]',
    'focus-visible:ring-2 focus-visible:ring-[#C8972B] focus-visible:ring-offset-2',
    'transition-all duration-200 shadow-sm hover:shadow-md',
    'font-semibold rounded-sm',
  ].join(' '),
  secondary: [
    'inline-flex items-center justify-center gap-2',
    'bg-transparent text-[#1E3A5F] border-2 border-[#1E3A5F]',
    'hover:bg-[#1E3A5F] hover:text-white hover:-translate-y-0.5 active:bg-[#152940]',
    'focus-visible:ring-2 focus-visible:ring-[#C8972B] focus-visible:ring-offset-2',
    'transition-all duration-200 shadow-sm hover:shadow-md',
    'font-semibold rounded-sm',
  ].join(' '),
  accent: [
    'inline-flex items-center justify-center gap-2',
    'bg-[#C8972B] text-[#0B1526] border border-[#C8972B]',
    'hover:bg-[#D4A843] hover:border-[#D4A843] hover:-translate-y-0.5 active:bg-[#A87820]',
    'focus-visible:ring-2 focus-visible:ring-[#1E3A5F] focus-visible:ring-offset-2',
    'transition-all duration-200 shadow-sm hover:shadow-md',
    'font-bold rounded-sm',
  ].join(' '),
  ghost: [
    'inline-flex items-center justify-center gap-2',
    'bg-transparent text-white border-2 border-white/60',
    'hover:bg-white/10 hover:border-white hover:-translate-y-0.5 active:bg-white/20',
    'focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2',
    'transition-all duration-200 shadow-sm hover:shadow-md',
    'font-semibold rounded-sm',
  ].join(' '),
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

/**
 * Button — renders as <button> or <Link> depending on `href` prop
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  loading = false,
  className = '',
  onClick,
  type = 'button',
  external = false,
  ...rest
}) {
  const baseClass = `${variants[variant]} ${sizes[size]} ${className} ${
    disabled || loading ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''
  }`

  const content = (
    <>
      {loading && (
        <span
          className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"
          aria-hidden="true"
        />
      )}
      {children}
    </>
  )

  if (href) {
    if (external) {
      return (
        <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer" {...rest}>
          {content}
        </a>
      )
    }
    return (
      <Link to={href} className={baseClass} {...rest}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={baseClass}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  )
}
