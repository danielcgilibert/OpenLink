'use client'

import { useIsFetching } from '@tanstack/react-query'
import { Spinner } from '@/ui/Spinner'
import { useEffect, useState } from 'react'
import { FadeIn } from '@/animations/FadeIn'
import { useLinks } from '@/hooks/useLinks'

export default function MovilPreview({ username }: { username: string }) {
  const isFetching = useIsFetching()
  const [contentRef, setContentRef] = useState<any>(null)

  const query = useLinks('movilPreviewLinks')

  return (
    <section>
      <div className='sticky left-0 right-0 top-36 ml-auto hidden h-[754px] w-[352px] overflow-auto rounded-[3rem] border-[10px] border-zinc-800 bg-white  md:block '>
        {isFetching ? (
          <div className='flex items-center justify-center'>
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
                ref={setContentRef}></iframe>

              {/* <Frame ref={iframeRef}>
                <h1>test</h1>
              </Frame> */}
            </FadeIn>
          </>
        )}
      </div>
    </section>
  )
}
