'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import { User } from 'next-auth'
import { Link } from '@/ui/Link'
import UserDropdownMenu from './UserDropdownMenu'
import { HomeIcon, ThemeIcon } from '@/ui/Icons'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/libs/cn'

// Dashboard Routes
const routes = [
  {
    name: 'Links',
    path: '/dashboard',
    icon: <HomeIcon className='h-5 w-5' />
  },
  {
    name: 'Appearance',
    path: '/dashboard/appearance',
    icon: <ThemeIcon className='h-5 w-5' />
  }
]

export default function DashboardNav({
  currentUser
}: {
  currentUser: User | null | undefined
}) {
  const pathname = usePathname()

  return (
    <nav className='sticky left-0 top-0 z-50 flex  h-16 w-full items-center justify-between bg-white p-5 px-8   shadow  md:mt-5 md:rounded-full'>
      <ul className='flex'>
        {routes.map((route) => {
          const isActive = pathname === route.path
          return (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                'flex items-center justify-center gap-1 rounded-full px-3 py-1 text-black text-opacity-60 transition-colors duration-200 hover:bg-[#8E56C7] hover:text-white',
                isActive && 'text-opacity-100 '
              )}>
              {route.icon && <span>{route.icon}</span>}
              {route.name}
            </Link>
          )
        })}
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
