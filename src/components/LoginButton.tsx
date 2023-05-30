'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function LoginButton({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button
      className="px-7 uppercase py-4 bg-indigo-900  rounded-full flex justify-center items-center gap-2 border-2 "
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
      {children}
    </button>
  )
}
