'use client'
import { Link } from '@prisma/client'
import LinkCard from './LinkCard'
import { FadeIn } from '@/animations/FadeIn'
import { Spinner } from '@/ui/Spinner'
import { useLinks } from '@/hooks/useLinks'

export default function ListLinks({
  links = []
}: {
  links: Link[] | null | undefined
}) {
  const query = useLinks('links', 'movilPreviewLinks', links)

  return (
    <div className=' flex flex-col   gap-5'>
      {query.isLoading || query.isFetching ? (
        <Spinner className='absolute  left-[50%] top-[15%] h-8 w-8 animate-spin fill-[#7D5A84] text-light' />
      ) : (
        query.data?.map((link: Link, index: number) => (
          <FadeIn key={link.id} delay={120 * index}>
            <LinkCard link={link} />
          </FadeIn>
        ))
      )}
    </div>
  )
}
