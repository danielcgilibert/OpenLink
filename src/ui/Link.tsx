import { cn } from '@/libs/cn'
import NextLink from 'next/link'

interface LinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

const defaultStyles = 'rounded px-2 py-1 hover:bg-gray-100'

const Link = (props: LinkProps) => {
  return (
    <NextLink href={props.href} className={cn(defaultStyles, props.className)}>
      {props.children}
    </NextLink>
  )
}

const ExternalLink = (props: LinkProps) => {
  return (
    <a
      href={props.href}
      rel='noreferrer'
      target='_blank'
      className={cn(defaultStyles, props.className)}>
      <div className='flex items-center'>{props.children}</div>
    </a>
  )
}

export { Link, ExternalLink }
