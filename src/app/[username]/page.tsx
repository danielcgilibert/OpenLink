import { getLinks } from '@/server/services/getLinks'
import { getPublicBio } from '@/server/services/getPublicBio'
import { ExternalLink } from '@/ui/Link'
import { Link } from '@prisma/client'
import { redirect } from 'next/navigation'
import ChangeTheme from '@/components/ChangeTheme'
export async function generateMetadata({
  params
}: {
  params: { username: string }
}) {
  return { title: params.username }
}

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

  const links = await getLinks(bio?.id as number) // get links in server side
  const filterLinks = links?.filter((link: Link) => link.show) // filter links in server side
  return (
    <>
      <ChangeTheme themeId={bio.theme}>
        <main className='mx-auto flex max-w-4xl flex-col gap-6 p-5   md:px-44'>
          <header className='flex flex-col items-center justify-center gap-3   border-b-2 border-zinc-800  p-5'>
            <img
              className='h-24 w-24 rounded-full  border-[2px]'
              src={bio?.avatar}
              referrerPolicy='no-referrer'
              alt='avatar'
            />

            <div>
              <h1 className='text-2xl'>{bio?.username}</h1>
              <p className='hidden md:text-sm'>{bio?.description}</p>
            </div>
          </header>

          <section className='flex flex-col gap-5 pb-8 text-center'>
            <section className='card flex flex-col gap-5 text-center '>
              {filterLinks?.map((link: Link) => (
                <ExternalLink
                  key={link.id}
                  href={link.url}
                  className='neon:bg-red-600 w-full  rounded-full bg-violet-400  p-3 text-black transition-colors first-letter:uppercase hover:bg-red-500 dark:bg-yellow-300'>
                  {link.title}
                </ExternalLink>
              ))}
            </section>
          </section>
        </main>
      </ChangeTheme>

      {/* <div className='backdrop-blur-5xl absolute left-0 right-0 top-0 -z-10 h-screen w-full overflow-hidden'></div> */}
      {/* <div className='gradient ' /> */}
    </>
  )
}
