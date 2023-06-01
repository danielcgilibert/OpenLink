import { EyeIcon } from '@/ui/Icons'
import Button from '@/components/LoginButton'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default async function Home() {
  return (
    <>
      <div className='grid h-full gap-16 p-8 text-white md:justify-center'>
        <section className='grid items-center  text-center md:grid-cols-2 md:text-left '>
          <div className='flex flex-col gap-8'>
            <div>
              <h1 className='text-4xl md:text-6xl'>
                All connections in One Place
              </h1>
              <h2 className='mt-2 text-xl text-gray-300 md:text-2xl'>
                Your Personalized Link Hub
              </h2>
            </div>
            <div className='flex flex-1 flex-col gap-5 md:flex-row'>
              <button className='w-full rounded-full bg-[#F8D054] py-4 uppercase text-zinc-950'>
                try for free
              </button>
              <button className=' flex w-full items-center justify-center gap-2 rounded-full border-2 py-4 uppercase '>
                <EyeIcon className='h-6 w-6' />
                Watch example
              </button>
            </div>
            <Button>Dashboard</Button>
          </div>
          <img src='rainbox.svg' className='hidden min-w-[650px]  md:block  ' />
        </section>

        {/* <div className="grid md:grid-cols-3 gap-24 h-fit">
          <section className="p-5 rounded-lg flex flex-col gap-5 ">
            <div>
              <h2 className="text-2xl first-letter:uppercase">intuitive</h2>
              <p className="text-gray-500">
                OpenLink is an intuitive and powerful application designed to
                simplify the management and sharing of your important links.
              </p>
            </div>
            <img src="undraw.svg" alt="undraw" className="w-full h-full" />
          </section>

          <section className="p-5 rounded-lg flex flex-col   gap-4 ">
            <div>
              <h2 className="text-2xl first-letter:uppercase">Share</h2>
              <p className="text-gray-500">
                Share your OpenLink profile with your audience and allow them to
                access all your relevant content with just one click.
              </p>
            </div>

            <img src="share.svg" alt="undraw" className="w-full h-full" />
          </section>

          <section className="p-5 rounded-lg flex flex-col  items-center gap-4 ">
            <div>
              <h2 className="text-2xl first-letter:uppercase">Community</h2>
              <p className="text-gray-500">
                With OpenLink, connecting with your community has never been
                easier!
              </p>
            </div>
            <img src="connect.svg" alt="undraw" className="w-full h-full" />
          </section>
        </div> */}
      </div>

      <img
        src='Cloudy.svg'
        alt=''
        className='absolute left-0 top-0 -z-30 h-screen w-screen object-cover'
      />

      <span className='absolute inset-0 mx-5 mt-5 flex h-8 items-center justify-center rounded-lg bg-yellow-300 font-semibold  text-black'>
        APP IN DEVELOPMENT
      </span>
    </>
  )
}
