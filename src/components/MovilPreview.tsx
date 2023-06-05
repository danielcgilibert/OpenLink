'use client'

import { useIsFetching, useQuery, useQueryClient } from '@tanstack/react-query'
import { Spinner } from '@/ui/Spinner'
import { useLinks } from '@/hooks/useLinks'
import { useEffect, useRef } from 'react'
import { FadeIn } from '@/animations/FadeIn'

export default function MovilPreview({ username }: { username: string }) {
  const first = useRef<any>(null)
  const isFetching = useIsFetching()

  useEffect(() => {
    handleRefresh()
  }, [isFetching])

  // const { data: bioData } = useQuery({
  //   queryKey: ['bio'],
  //   queryFn: () => {
  //     return fetch(`/api/bio/${username}`).then((res) => res.json())
  //   }
  // })

  const handleRefresh = () => {
    const iframe = first.current
    iframe?.contentDocument.location.reload(true)
  }

  const query = useLinks('movilPreviewLinks')

  return (
    <section>
      <div className='sticky left-0 right-0 top-36 ml-auto hidden h-[754px] w-[352px] overflow-auto rounded-[3rem] border-[10px] border-zinc-800 bg-white md:block '>
        {isFetching ? (
          <div className='flex min-h-full items-center justify-center'>
            <Spinner />
          </div>
        ) : (
          <>
            <FadeIn className='h-full w-full'>
              <iframe
                id='preview-iframe'
                height='100%'
                width='100%'
                ref={first}
                src={`/${username}`}></iframe>
            </FadeIn>

            {/* <header className='flex flex-col items-center justify-center gap-3   border-b-2 border-zinc-800  p-5'>
              <img
                referrerPolicy='no-referrer'
                className='h-24 w-24 rounded-full  border-[4px] border-black   '
                src={bioData?.bio.avatar}
                alt='avatar'
              />

              <div>
                <h1 className='text-3xl'>{username}</h1>
                <p className='hidden md:text-sm'>{bioData?.bio.description}</p>
              </div>
            </header>
            <section className='flex flex-col   gap-5 p-5 text-center  '>
              {query.data?.map((link: Link) => (
                <div
                  key={link.id}
                  className={cn(
                    !link.show && 'opacity-50',
                    'rounded bg-zinc-800 p-5 text-white transition-opacity '
                  )}>
                  {link.title}
                </div>
              ))}
            </section> */}
          </>
        )}
      </div>
    </section>
  )
}
