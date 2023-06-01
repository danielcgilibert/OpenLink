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
      <div>
        <img
          className='absolute inset-0 -z-10 h-screen w-screen object-cover'
          src='Cloudy.svg'
          alt='background'
        />
      </div>
      <div className='relative  h-screen'>
        <main className='absolute left-0 right-0 top-1/4 flex w-full flex-col gap-5   rounded-lg  bg-white  p-36 shadow-2xl'>
          <h1 className='leading-heading text-[32px] font-semibold text-black lg:text-5xl'>
            Create your BIO
          </h1>
          <h2 className='leading-heading text-[32px] font-semibold text-gray-500  lg:text-xl'>
            Choose your OpenLink username. You can always change it later.
          </h2>
          <FormBio />
        </main>
      </div>
    </>
  )
}
