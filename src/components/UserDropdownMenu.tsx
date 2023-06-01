'use client'
import { FadeIn } from '@/animations/FadeIn'
import { signOut } from 'next-auth/react'
import { useState } from 'react'

export default function UserDropdownMenu({ currentUser }: any) {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className='relative'>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        type='button'
        className='flex  rounded-full  text-sm focus:ring-4 focus:ring-gray-200 md:mr-0 '
        id='user-menu-button'
        aria-expanded='false'
        data-dropdown-toggle='user-dropdown'
        data-dropdown-placement='bottom'>
        <span className='sr-only'>Open user menu</span>
        <img
          referrerPolicy='no-referrer'
          src={currentUser.image}
          alt='user image'
          className='h-10 w-10 cursor-pointer rounded-full'
        />
      </button>

      {openMenu && (
        <FadeIn
          className='visible absolute right-0 z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow'
          id='user-dropdown'>
          <div className='px-4 py-3 '>
            <span className='block text-sm text-gray-900 '>
              {currentUser.name}
            </span>
            <span className='block truncate  text-sm text-gray-500 '>
              {currentUser.email}
            </span>
          </div>
          <ul className='py-2' aria-labelledby='user-menu-button'>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className=' w-full px-4 py-2 text-left text-sm text-gray-700  hover:bg-gray-200'>
              Sign out
            </button>
          </ul>
        </FadeIn>
      )}
    </div>
  )
}
