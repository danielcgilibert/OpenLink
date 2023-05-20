'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Header({ currentUser }: any) {
  const router = useRouter()

  return (
    <nav className="flex  justify-between border-b-2 border-gray-400 border-opacity-50 p-5">
      <ul className="flex gap-5">
        <li>Home</li>
        <li>Settings</li>
        <li>Users</li>
      </ul>

      <div>
        {currentUser ? (
          <img
            onClick={() => signOut()}
            src={currentUser.image}
            alt="asdasd"
            className="rounded-full w-9 h-9 cursor-pointer"
          />
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
