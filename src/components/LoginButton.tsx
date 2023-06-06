'use client'
import { signIn } from 'next-auth/react'

export function LoginGoogle({ children }: { children: React.ReactNode }) {
  return (
    <button
      className='w-full rounded-full bg-primary py-4 uppercase text-white shadow-lg '
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
      {children}
    </button>
  )
}
