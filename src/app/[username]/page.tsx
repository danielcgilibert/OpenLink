import { getLinks } from '@/server/services/getLinks'
import { getPublicBio } from '@/server/services/getPublicBio'
import { Link } from '@prisma/client'
import { redirect } from 'next/navigation'

export default async function Page({
  params
}: {
  params: { username: string }
}) {
  const { username } = params

  const bio = await getPublicBio(username)

  if (!bio) {
    return redirect('/user-not-found')
  }
  const links = await getLinks(bio?.id as number)
  return (
    <main className='mx-auto flex   h-screen max-w-4xl flex-col  gap-12 bg-neutral-100 p-5 text-black  shadow-xl md:px-44'>
      <header className='flex flex-col items-center justify-center gap-3   border-b-2 border-zinc-800  p-5'>
        <img
          className='h-24 w-24 rounded-full  border-[4px] border-black   '
          src={bio?.avatar}
          alt='avatar'
        />

        <div>
          <h1 className='text-3xl'>{bio?.name}</h1>
          <p className='hidden md:text-sm'>{bio?.description}</p>
        </div>
      </header>

      <section className='flex flex-col gap-5 text-center'>
        {links?.map((link: Link) => (
          <div
            key={link.id}
            className='w-full rounded bg-zinc-800 p-5 text-white '>
            {link.title}
          </div>
        ))}
      </section>
    </main>
  )
}
