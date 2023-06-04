'use client'
import { cn } from '@/libs/cn'
import { useRef, useState } from 'react'

const themes = ['bg-white', 'bg-sky-200', 'bg-emerald-300', 'bg-violet-300']
export default function MovilHome() {
  const mobile = useRef<HTMLDivElement>(null)

  const [selectTheme, setSelectTheme] = useState(0)

  //! Create a custom hook for this
  const handleMouseEnter = (e: any) => {
    let bounds = mobile.current!.getBoundingClientRect()

    const mouseX = e.clientX
    const mouseY = e.clientY
    const leftX = mouseX - bounds.x
    const topY = mouseY - bounds.y
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }

    mobile.current!.style.transform = `
      perspective(500px)
      scale(1.07)
      rotateX(${center.y / 50}deg)
      rotateY(${center.x / 50}deg)
    `
  }
  const handleMouseLeave = (event: any) => {
    mobile.current!.style.transform = ''
  }

  return (
    <div
      id='movil-home'
      ref={mobile}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        themes[selectTheme],
        `relative mb-12 flex h-[530px] w-[290px] flex-col  justify-start rounded-3xl  border-8  border-zinc-800  p-8 text-black shadow-xl shadow-stone-800 transition-transform`
      )}>
      <div className='absolute right-full top-32 h-6 w-[14px] rounded-l-[4px]  bg-zinc-800'></div>
      <div className='absolute right-full top-[72px] h-9 w-[14px] rounded-l-[4px]  bg-zinc-800'></div>
      <header className='flex flex-col items-center justify-center gap-2'>
        <img
          referrerPolicy='no-referrer'
          className='w-20 rounded-full border-2 border-gray-300'
          src='090036.jpg'
          alt='avatar'
        />
        <div className='flex flex-col text-center'>
          <span> Sophie Wilson </span>
          <span className='text-sm text-gray-500'>
            Marketing Manager at Google
          </span>
        </div>
      </header>

      <section
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='my-auto flex flex-col items-center justify-center gap-5  text-center text-zinc-600'>
        <div className='w-full rounded-full  border-2 border-gray-200 py-2  '>
          Linkedin
        </div>
        <div className='w-full rounded-full  border-2 border-gray-200 py-2  '>
          My courses
        </div>

        <div className='w-full rounded-full  border-2 border-gray-200 py-2  '>
          Personal Website
        </div>
      </section>

      <div className='absolute left-0 top-[89%]  flex w-full  flex-col items-center justify-center gap-2 rounded-full border-[6px] border-zinc-800  bg-white py-5 md:left-auto  md:right-[30%] md:top-[92%]'>
        <span className='text-center text-sm text-zinc-600'>
          Choose your style
        </span>
        <div className='flex gap-5 rounded-lg '>
          <div
            onClick={() => setSelectTheme(0)}
            className='h-4 w-4 cursor-pointer rounded-full  bg-zinc-200'></div>

          <div
            onClick={() => setSelectTheme(1)}
            className='h-4 w-4  cursor-pointer rounded-full bg-sky-200'></div>
          <div
            onClick={() => setSelectTheme(2)}
            className='h-4 w-4 cursor-pointer rounded-full bg-emerald-300'></div>
          <div
            onClick={() => setSelectTheme(3)}
            className='h-4 w-4 cursor-pointer rounded-full bg-violet-300'></div>
        </div>
      </div>
    </div>
  )
}
