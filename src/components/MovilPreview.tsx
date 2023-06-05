'use client'

import { useQuery } from '@tanstack/react-query'
import { Link } from '@prisma/client'
import { Spinner } from '@/ui/Spinner'
import { cn } from '@/libs/cn'
import { useLinks } from '@/hooks/useLinks'

export default function MovilPreview({ username }: { username: string }) {
  const { data: bioData } = useQuery({
    queryKey: ['bio'],
    queryFn: () => {
      return fetch(`/api/bio/${username}`).then((res) => res.json())
    }
  })

  const query = useLinks('movilPreviewLinks')

  return (
    <section>
      <div className='relative  left-0 right-0 top-0 ml-auto hidden h-[754px] w-[352px] overflow-auto rounded-[3rem] border-[10px] border-zinc-800 bg-white md:block '>
        {query.isLoading ? (
          <div className='flex min-h-full items-center justify-center'>
            <Spinner />
          </div>
        ) : (
          <>
            <header className='flex flex-col items-center justify-center gap-3   border-b-2 border-zinc-800  p-5'>
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
            </section>
          </>
        )}
      </div>
    </section>
  )
}
