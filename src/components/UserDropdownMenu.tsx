'use client'
import { FadeIn } from '@/app/animations/FadeIn'
import { signOut } from 'next-auth/react'
import { useState } from 'react'

export default function UserDropdownMenu({ currentUser }: any) {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setOpenMenu(!openMenu)}
        type="button"
        className="flex  text-sm  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-200 "
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img
          referrerPolicy="no-referrer"
          src={currentUser.image}
          alt="user image"
          className="rounded-full w-10  h-10  cursor-pointer"
        />{' '}
      </button>

      {openMenu && (
        <FadeIn
          className="absolute z-10 visible my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
          id="user-dropdown">
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 ">
              {currentUser.name}
            </span>
            <span className="block text-sm  text-gray-500 truncate ">
              {currentUser.email}
            </span>
          </div>
          <ul className="py-2 " aria-labelledby="user-menu-button">
            <button
              onClick={() => signOut()}
              className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full  text-left">
              Sign out
            </button>
          </ul>
        </FadeIn>
      )}
    </div>
  )
}
