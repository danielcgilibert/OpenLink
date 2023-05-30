import getBio from '@/actions/getBio'
import FormBio from '@/components/FormBio'
import { redirect } from 'next/navigation'

export default async function CreateBio() {
  const bio = await getBio()

  if (bio) {
    redirect('/dashboard')
  }
  return (
    <>
      <div>
        <img
          className="absolute -z-10 w-screen h-screen inset-0 object-cover"
          src="Cloudy.svg"
          alt="background"
        />
      </div>
      <div className="relative  h-screen">
        <main className="absolute left-0 right-0 top-1/4 w-full flex flex-col gap-5   bg-white  p-36  shadow-2xl rounded-lg">
          <h1 className="text-black text-[32px] font-semibold leading-heading lg:text-5xl">
            Create your BIO
          </h1>
          <h2 className="text-gray-500 text-[32px] font-semibold leading-heading  lg:text-xl">
            Choose your OpenLink username. You can always change it later.
          </h2>
          <FormBio />
        </main>
      </div>
    </>
  )
}
