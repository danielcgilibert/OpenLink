import { EyeIcon } from '@/ui/Icons'
import Button from '@/components/LoginButton'
import MovilHome from '@/components/MovilHome'

export default async function Home() {
  return (
    <>
      <div className='grid h-full  place-content-center  gap-16 p-8 text-white md:grid-cols-2 md:justify-center'>
        <section className='grid items-center  text-center  md:text-left '>
          <div className='flex flex-col gap-8'>
            <div>
              <h1 className='text-4xl text-black md:text-6xl'>
                All connections in One Place
              </h1>
              <h2 className='mt-2 text-xl text-secondary md:text-2xl'>
                Your Personalized Link Hub
              </h2>
            </div>
            <div className='flex flex-1 flex-col gap-5 md:flex-row'>
              <Button>try for free</Button>
              <button className=' flex w-full items-center justify-center gap-2 rounded-full border-2  border-black border-opacity-80 py-4 uppercase text-black shadow-lg '>
                <EyeIcon className='h-6 w-6' />
                Watch example
              </button>
            </div>
          </div>
        </section>
        <section className='flex justify-center '>
          <MovilHome />
        </section>
      </div>

      <div className='gradient'></div>
    </>
  )
}
