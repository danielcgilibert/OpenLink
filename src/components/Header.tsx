'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import UserDropdownMenu from './UserDropdownMenu'
import { User } from 'next-auth'

export default function Header({
  currentUser,
}: {
  currentUser: User | null | undefined
}) {
  return (
    <nav className="md:rounded-full md:mt-5 top-0 sticky w-full  left-0 h-16 shadow flex justify-between items-center  bg-white  p-5 ">
      <ul className="flex gap-5">
        <Link
          className="hover:bg-gray-100 px-2 py-1 rounded"
          href={'/dashboard'}>
          Links
        </Link>
        <Link
          className="hover:bg-gray-100 px-2 py-1 rounded"
          href={'/dashboard/appearance'}>
          Aparrence
        </Link>
      </ul>

      <div>
        {currentUser ? (
          <UserDropdownMenu currentUser={currentUser} />
        ) : (
          <button
            onClick={() => signIn('google')}
            className="border-2 border-white px-3 py-1 rounded-lg">
            Login Google
          </button>
        )}
      </div>
    </nav>
  )
}
