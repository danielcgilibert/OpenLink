import { getBio } from '@/server/services/getBio'

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
        <div className='h-full rounded-lg bg-white p-6 shadow'>
          Change Theme
        </div>
      </div>
    </>
  )
}
