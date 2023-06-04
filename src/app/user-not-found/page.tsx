import { Link } from '@/ui/Link'

export default async function Home() {
  return (
    <>
      <div className='flex h-full flex-col items-center justify-start gap-5 px-12 py-16 text-center'>
        <img src='404.svg' alt='404' className='md:w-1/2' />
        <h1 className='text-4xl'>
          The user you were looking for does not exist.
        </h1>

        <h2 className='text-lg'>Want this to be your username?</h2>

        <Link className='rounded-full bg-white px-8 py-4 underline' href='/'>
          Create your Linktree now.
        </Link>
      </div>

      <div className='gradient'></div>
    </>
  )
}
