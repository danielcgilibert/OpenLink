'use client'

import { useQuery } from '@tanstack/react-query'
import { Link } from '@prisma/client'
import Loading from './Loading'

export default function MovilPreview({ username }: { username: string }) {
  const { data: bioData } = useQuery({
    queryKey: ['bio'],
    queryFn: () => {
      return fetch(`/api/bio/${username}`).then(res => res.json())
    },
  })

  //! quit refetchInterval
  const { data: links, isLoading } = useQuery({
    queryKey: ['links'],
    refetchInterval: 200,
    queryFn: () => {
      return fetch(`/api/link`).then(res => res.json())
    },
  })

  return (
    <section>
      <div className="hidden  md:block relative -z-10 border-[10px] border-black rounded-[3rem] overflow-auto w-[352px] h-[754px] m-auto left-0 right-0 top-10 ">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-full">
            <Loading />
          </div>
        ) : (
          <>
            <header className="flex flex-col justify-center items-center gap-3   p-5 border-b-2  border-zinc-800">
              <img
                className="rounded-full border-[4px] border-black  w-24 h-24   "
                src={bioData.bio.avatar}
                alt="avatar"
              />

              <div>
                <h1 className="text-3xl">{username}</h1>
                <p className="hidden md:text-sm">{bioData.bio.description}</p>
              </div>
            </header>
            <section className="flex flex-col gap-5   text-center p-5  ">
              {links.data?.map((link: Link) => (
                <div
                  key={link.id}
                  className="bg-zinc-800 text-white p-5    rounded ">
                  {link.title}
                </div>
              ))}
            </section>
          </>
        )}

        {/* <iframe
            src={`/${username}`}
            className="absolute  h-full  w-full  rounded-[3rem] "
          /> */}
        {/* */}
      </div>
    </section>
  )
}
