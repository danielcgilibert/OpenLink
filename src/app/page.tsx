import { EyeIcon } from '@/ui/Icons'
import { LoginGoogle } from '@/components/LoginButton'
import MovilHome from '@/components/MovilHome'
import { AnimateText } from '@/animations/AnimationText'
import { getCurrentUser } from '@/server/services/getUser'
import { Link } from '@/ui/Link'

export default async function Home() {
  const currentUser = await getCurrentUser()

  return (
    <>
      <div className='grid h-full  place-content-start gap-16  p-8 text-white md:grid-cols-2 md:place-content-center md:justify-center'>
        <section className='mt-20 grid items-center  text-center md:mt-0  md:text-left '>
          <div className='flex flex-col gap-8'>
            <AnimateText>
              <div>
                <h1 className='text-4xl text-black md:text-6xl'>
                  All connections in One Place
                </h1>
                <h2 className='mt-2 text-xl text-secondary md:text-2xl'>
                  Your Personalized Link Hub
                </h2>
              </div>

              <div className='flex flex-1 flex-col gap-5 md:flex-row'>
                {!currentUser ? (
                  <>
                    <LoginGoogle>try for free</LoginGoogle>

                    <button className=' flex w-full items-center justify-center gap-2 rounded-full border-2  border-black border-opacity-80 py-4 uppercase text-black shadow-lg '>
                      <EyeIcon className='h-6 w-6' />
                      Watch example
                    </button>
                  </>
                ) : (
                  <div className='flex w-full'>
                    <h1 className='w-1/2 text-xl text-black'>
                      Welcome back <br />
                      <span className='border-b-2 '>{currentUser!.name}</span>
                    </h1>
                    <Link
                      className='w-1/2 rounded-full bg-primary py-4 text-center uppercase text-white shadow-lg '
                      href='/dashboard'>
                      Dashboard
                    </Link>
                  </div>
                )}
              </div>
            </AnimateText>
          </div>
        </section>
        <section className='flex justify-center  md:flex'>
          <MovilHome />
        </section>
      </div>

      {/* <div className='gradient'></div> */}
    </>
  )
}
