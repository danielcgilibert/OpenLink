import EditorTheme from '@/components/EditorTheme'
import { getBio } from '@/server/services/getBio'
import { ThemeIcon } from '@/ui/Icons'

export default async function Dashboard() {
  const bio = await getBio()

  return (
    <>
      <div className='flex flex-col gap-5'>
        <section className='rounded-lg bg-white p-6 shadow'>
          <header className='flex items-center justify-start gap-2'>
            <img
              className='h-24 w-24 rounded-full  border-[2px]'
              src={bio?.avatar}
              referrerPolicy='no-referrer'
              alt='avatar'
            />
            <h1 className='text-xl'>{bio?.username}</h1>
          </header>
        </section>
        <div className='h-full rounded-lg  bg-white p-6 shadow'>
          <span className='inline-flex w-full items-center justify-start gap-1 rounded-xl bg-violet-500 py-1 pl-4 text-xl text-white'>
            <ThemeIcon className='h-6 w-6' /> Themes
          </span>
          <EditorTheme bioId={bio!.id} />
        </div>
      </div>
    </>
  )
}
