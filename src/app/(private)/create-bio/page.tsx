import { getBio } from '@/server/services/getBio'
import { redirect } from 'next/navigation'
import FormBio from '@/components/FormBio'

export default async function CreateBio() {
  const bio = await getBio()

  if (bio) {
    redirect('/dashboard')
  }

  return (
    <>
      <div className='flex h-full items-center justify-center'>
        <div className='flex h-full flex-col    gap-5 rounded-xl bg-white  p-8   pt-24 shadow-2xl md:h-auto md:p-24'>
          <header>
            <h1 className='leading-heading text-4xl font-semibold text-primary lg:text-5xl'>
              Create your BIO
            </h1>
            <h2 className='leading-heading mt-2  text-secondary'>
              Choose your OpenLink username. You can always change it later.
            </h2>
          </header>

          <FormBio />

          <span className='text-center text-sm text-light'>
            Already have an account?{' '}
            <span className='text-violet-500 underline'>Log in</span>
          </span>
        </div>
      </div>
      <div className='gradient'></div>
    </>
  )
}
