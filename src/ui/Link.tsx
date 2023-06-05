import { cn } from '@/libs/cn'
import NextLink from 'next/link'

interface LinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

const defaultStyles = 'text-violet-700 '

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
      className={cn(props.className)}>
      {props.children}
    </a>
  )
}

export { Link, ExternalLink }
