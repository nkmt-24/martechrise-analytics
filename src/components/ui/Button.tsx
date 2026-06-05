/**
 * Button — Server Component.
 * No 'use client' needed — renders as <Link> or <button> with no hooks.
 * Use this for all CTA buttons and link-style buttons across the site.
 */
import Link from 'next/link'
import { cn } from '@/lib/cn'
import type { ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?:  Variant
  size?:     Size
  className?: string
  children:  React.ReactNode
}

type ButtonAsLink   = BaseProps & { href: string }  & Omit<ComponentPropsWithoutRef<typeof Link>,   keyof BaseProps>
type ButtonAsButton = BaseProps & { href?: never } & Omit<ComponentPropsWithoutRef<'button'>,       keyof BaseProps>
type ButtonProps    = ButtonAsLink | ButtonAsButton

const base =
  'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98] shadow-sm',
  outline:
    'border border-slate-200 bg-transparent text-slate-900 hover:bg-slate-50 active:scale-[0.98]',
  ghost:
    'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98]',
}

const sizes: Record<Size, string> = {
  sm: 'h-9  px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
}

export default function Button({
  variant  = 'primary',
  size     = 'md',
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (href !== undefined) {
    return (
      <Link href={href} className={classes} {...(props as Omit<ComponentPropsWithoutRef<typeof Link>, 'href'>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(props as ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  )
}
