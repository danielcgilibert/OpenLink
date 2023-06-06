'use client'
import { BugIcon, LogoutIcon } from '@/ui/Icons'
import { ExternalLink, Link } from '@/ui/Link'
import { Menu, Transition } from '@headlessui/react'
import { signOut } from 'next-auth/react'
import { useState, Fragment } from 'react'

export default function UserDropdownMenu({ currentUser }: any) {
  return (
    <div className='relative'>
      <Menu>
        <Menu.Button
          type='button'
          className='flex  rounded-full  text-sm   md:mr-0 '
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
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'>
          <Menu.Items
            className='visible absolute right-0  my-4  list-none divide-y divide-gray-100 rounded-lg bg-white  text-base shadow '
            aria-labelledby='user-menu-button'>
            <div className=' px-4 py-3'>
              <span className='block text-sm text-gray-900 '>
                {currentUser.name}
              </span>
              <span className='block truncate  text-sm text-gray-500 '>
                {currentUser.email}
              </span>
            </div>

            <div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className='flex w-full items-center justify-start gap-1 px-4 py-2 text-left text-sm text-primary   hover:bg-gray-200'>
                    <LogoutIcon /> Sign out
                  </button>
                )}
              </Menu.Item>
            </div>

            <div>
              <Menu.Item>
                {({ active }) => (
                  <ExternalLink
                    href='https://github.com/danielcgilibert/OpenLink/issues/new'
                    className=' flex w-full items-center justify-start gap-1 px-4 py-2 text-left text-sm  text-primary hover:bg-gray-200'>
                    <BugIcon /> Report a bug
                  </ExternalLink>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
