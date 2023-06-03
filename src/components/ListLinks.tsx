'use client'
import { Link } from '@prisma/client'
import LinkCard from './LinkCard'
import { FadeIn } from '@/animations/FadeIn'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Spinner } from '@/ui/Spinner'

export default function ListLinks({
  links = []
}: {
  links: Link[] | null | undefined
}) {
  const queryClient = useQueryClient()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['link'],
    queryFn: async () => {
      const res = await fetch(`/api/link`)
      const result = await res.json()
      queryClient.invalidateQueries({ queryKey: ['links'] })
      return result.data
    },
    initialData: links
  })

  //isLoading || isFetching
  return (
    <div className=' flex flex-col   gap-5'>
      {isLoading || isFetching ? (
        <Spinner className='absolute  left-[50%] top-[15%] h-8 w-8 animate-spin fill-[#7D5A84] text-light' />
      ) : (
        data?.map((link: Link, index: number) => (
          <FadeIn key={link.id} delay={120 * index}>
            <LinkCard link={link} />
          </FadeIn>
        ))
      )}
    </div>
  )
}
