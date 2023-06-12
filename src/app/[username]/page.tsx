import { getLinks } from '@/server/services/getLinks'
import { getPublicBio } from '@/server/services/getPublicBio'
import { ExternalLink } from '@/ui/Link'
import { Link } from '@prisma/client'
import { redirect } from 'next/navigation'
import { titleStyle, mainStyle } from '@/styles/theme.css'
import { cn } from '@/libs/cn'
import { IThemes, themes } from '@/styles/themes'

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
    <div id='userBio' className={themes[bio.theme as keyof IThemes]}>
      <div className={cn(mainStyle, 'h-screen w-screen')}>
        <main
          className={cn(
            'mx-auto flex h-full max-w-4xl flex-col gap-6 p-5 md:px-44'
          )}>
          <header className='flex flex-col items-center justify-center gap-3   border-b-2 border-zinc-800  p-5'>
            <img
              className='h-24 w-24 rounded-full  border-[2px]'
              src={bio?.avatar}
              referrerPolicy='no-referrer'
              alt='avatar'
            />

            <div>
              <h1 className={cn('text-2xl', titleStyle)}>{bio?.username}</h1>
              <p className='hidden  md:text-sm'>{bio?.description}</p>
            </div>
          </header>

          <section className='flex flex-col gap-5 pb-8 text-center '>
            <section className='card flex flex-col gap-5 text-center '>
              {filterLinks?.map((link: Link) => (
                <ExternalLink
                  key={link.id}
                  href={link.url}
                  className='w-full  rounded-full bg-violet-500 p-3 text-white antialiased transition-colors  first-letter:uppercase hover:bg-violet-700 hover:text-white'>
                  {link.title}
                </ExternalLink>
              ))}
            </section>
          </section>
        </main>
      </div>
    </div>
  )
}
