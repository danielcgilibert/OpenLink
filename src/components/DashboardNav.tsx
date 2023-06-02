'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import { User } from 'next-auth'
import { Link } from '@/ui/Link'
import UserDropdownMenu from './UserDropdownMenu'

// Dashboard Routes
const routes = [
  {
    name: 'Links',
    path: '/dashboard'
  },
  {
    name: 'Appearance',
    path: '/dashboard/appearance'
  }
]

export default function DashboardNav({
  currentUser
}: {
  currentUser: User | null | undefined
}) {
  return (
    <nav className='sticky left-0 top-0 z-50 flex  h-16 w-full items-center justify-between bg-white p-5   shadow  md:mt-5 md:rounded-full'>
      <ul className='flex gap-5'>
        {routes.map((route) => (
          <Link key={route.path} href={route.path}>
            {route.name}
          </Link>
        ))}
      </ul>

      <div>
        {currentUser ? (
          <UserDropdownMenu currentUser={currentUser} />
        ) : (
          <button
            onClick={() => signIn('google')}
            className='rounded-lg border-2 border-white px-3 py-1'>
            Login with Google
          </button>
        )}
      </div>
    </nav>
  )
}
