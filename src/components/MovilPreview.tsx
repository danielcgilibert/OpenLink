'use client'

import { useQuery } from '@tanstack/react-query'

export default function MovilPreview({ username }: { username: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: () => {
      return fetch(`/api/bio/${username}`).then(res => res.json())
    },
  })

  if (isLoading) return <div>Loading...</div>
  return (
    <section>
      <div className="hidden md:block relative -z-10 border-[10px] border-black rounded-[3rem] w-[352px] h-[754px] m-auto left-0 right-0 top-10">
        <header className="flex flex-col justify-center items-center gap-3   p-5 border-b-2  border-zinc-800">
          <img
            className="rounded-full border-[4px] border-black  w-24 h-24   "
            src={data.bio.avatar}
            alt="avatar"
          />

          <div>
            <h1 className="text-3xl">{data.bio.name}</h1>
            <p className="hidden md:text-sm">{data.bio.description}</p>
          </div>
        </header>
        {/* <iframe
          src={`/${username}`}
          className="absolute  h-full  w-full  rounded-[3rem] "
        /> */}
      </div>
    </section>
  )
}
