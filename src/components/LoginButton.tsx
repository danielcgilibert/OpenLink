'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function LoginButton({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <button
      className='flex items-center justify-center gap-2  rounded-full border-2 bg-indigo-900 px-7 py-4 uppercase '
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
      {children}
    </button>
  )
}
