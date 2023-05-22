'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import UserDropdownMenu from './UserDropdownMenu'

export default function Header({ currentUser }: any) {
  const router = useRouter()

  return (
    <nav className=" rounded-full top-0  sticky w-full  left-0 h-16 shadow flex justify-between items-center  bg-white  p-5 ">
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
