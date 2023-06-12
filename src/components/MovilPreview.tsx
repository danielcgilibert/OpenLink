'use client'

import { useIsFetching } from '@tanstack/react-query'
import { Spinner } from '@/ui/Spinner'
import { useContext, useEffect, useRef, useState } from 'react'
import { FadeIn } from '@/animations/FadeIn'
import { useLinks } from '@/hooks/useLinks'
import { ThemeContext } from '@/providers/ThemeProvider'

export default function MovilPreview({ username }: { username: string }) {
  const isFetching = useIsFetching()
  const iFrameRef = useRef<HTMLIFrameElement>(null)
  const { loading, setLoading } = useContext(ThemeContext)
  const query = useLinks('movilPreviewLinks')

  useEffect(() => {
    if (isFetching) {
      return
    }

    iFrameRef.current?.addEventListener('load', () => setLoading(false))

    return () => {
      iFrameRef.current?.removeEventListener('load', () => setLoading(false))
    }
  }, [isFetching, iFrameRef])

  return (
    <section>
      <div className='sticky  left-0 right-0 top-36 ml-auto hidden h-[754px] w-[352px] overflow-auto rounded-[4rem]  bg-white shadow   md:block'>
        {isFetching ? (
          <div className='flex h-full items-center justify-center '>
            <Spinner />
          </div>
        ) : (
          <>
            <FadeIn className='h-full w-full'>
              <iframe
                title='preview'
                id='preview-iframe'
                height='100%'
                width='100%'
                src={`/${username}`}
                key={username}
                ref={iFrameRef}></iframe>
            </FadeIn>
          </>
        )}
      </div>
    </section>
  )
}
