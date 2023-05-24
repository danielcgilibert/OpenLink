import React from 'react'

export default function MovilPreview({ username }: { username: string }) {
  return (
    <section>
      <div className="hidden md:block relative -z-10 border-[10px] border-black rounded-[3rem]   w-[352px] h-[754px]    m-auto left-0 right-0 top-10">
        <iframe
          src={`/${username}`}
          className="absolute  h-full  w-full  rounded-[3rem] "
        />
      </div>
    </section>
  )
}
