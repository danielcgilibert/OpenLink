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
      className='w-full rounded-full bg-primary py-4 uppercase text-white shadow-lg '
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
      {children}
    </button>
  )
}
