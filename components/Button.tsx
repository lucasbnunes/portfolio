import React from 'react'

type Variants = {
  outlined: string,
  filled: string,
}

interface ButtonProps {
  children: React.ReactNode,
  variant?: keyof Variants,
  className?: string,
  onClick?: Function,
  href?: string,
  openLinkInNewTab?: boolean
}

export function Button({ children, href, onClick, variant = 'outlined', className, openLinkInNewTab }: ButtonProps) {
  const baseClasses = 'rounded-sm font-semibold px-6 py-2'

  const style: Variants = {
    outlined: 'border-2 border-phantom-900',
    filled: 'bg-phantom-900 text-white'
  }

  if (href) {
    <a
      className={`${baseClasses} ${style[variant]} ${className || ''}`}
      href={href}
      target={openLinkInNewTab ? '_blank' : undefined}
      rel={openLinkInNewTab ? 'noopener' : undefined}
    >
      {children}
    </a>
  }

  return (
    <button className={`${baseClasses} ${style[variant]} ${className || ''}`} onClick={() => onClick}>{children}</button>
  )
}
