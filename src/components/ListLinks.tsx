'use client'
import { Link } from '@prisma/client'
import LinkCard from './LinkCard'
import { FadeIn } from '@/animations/FadeIn'

export default function ListLinks({
  links = []
}: {
  links: Link[] | null | undefined
}) {
  return (
    <div className='flex flex-col gap-5'>
      {links?.map((link, index) => (
        <FadeIn key={link.id} delay={120 * index}>
          <LinkCard link={link} />
        </FadeIn>
      ))}
    </div>
  )
}
