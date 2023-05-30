import { EyeIcon } from '@/components/Icons'
import Button from '@/components/LoginButton'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default async function Home() {
  return (
    <>
      <div className="grid p-8 gap-16 md:justify-center h-full text-white">
        <section className="grid md:grid-cols-2  items-center text-center md:text-left ">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-4xl md:text-6xl">
                All connections in One Place
              </h1>
              <h2 className="text-xl md:text-2xl mt-2 text-gray-300">
                Your Personalized Link Hub
              </h2>
            </div>
            <div className="flex flex-col flex-1 md:flex-row gap-5">
              <button className="w-full uppercase py-4 bg-[#F8D054] rounded-full text-zinc-950">
                try for free
              </button>
              <button className=" w-full uppercase py-4 rounded-full flex justify-center items-center gap-2 border-2 ">
                <EyeIcon className="w-6 h-6" />
                Watch example
              </button>
            </div>
            <Button>Dashboard</Button>
          </div>
          <img src="rainbox.svg" className="hidden md:block  min-w-[650px]  " />
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
        src="Cloudy.svg"
        alt=""
        className="absolute -z-30 w-screen h-screen top-0 left-0 object-cover"
      />
    </>
  )
}
