'use client'
import { FadeIn } from '@/animations/FadeIn'
import { cn } from '@/libs/cn'
import { validUsername } from '@/libs/validUsername'
import { postBio } from '@/server/services/postBio'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'

export default function FormBio() {
  const [usernameInput, setUsernameInput] = useState<string>('')
  const [isValidUser, setisValidUser] = useState(false)
  const isFirtsInput = useRef(false)
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await postBio(usernameInput.toLowerCase())

    if (!response.ok) {
      toast.error(response.error)
      return
    }

    router.push('/dashboard')
  }

  useEffect(() => {
    setisValidUser(validUsername(usernameInput))
    if (!isFirtsInput.current) {
      isFirtsInput.current = true
    }
  }, [usernameInput])

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <div className='mb-3 flex w-full flex-col  space-y-1'>
          <div className='flex rounded-lg border-2 bg-zinc-100 py-3 pl-4'>
            <label htmlFor='username' className='text-zinc-800 text-opacity-40'>
              domain.com/
            </label>
            <input
              type='text'
              id='username'
              name='username'
              className='w-full bg-zinc-100 text-primary outline-none placeholder:text-zinc-800 placeholder:text-opacity-40 '
              placeholder='Username'
              onChange={(e) => setUsernameInput(e.target.value)}
              value={usernameInput}
            />
          </div>

          <div className='h-6'>
            {isFirtsInput.current && !isValidUser && (
              <FadeIn>
                <span
                  className={cn(
                    'pointer-events-none text-sm  text-red-600 md:ml-3 md:text-base'
                  )}>
                  Usernames can only include letters, numbers
                </span>
              </FadeIn>
            )}
          </div>
        </div>

        <button
          className={cn(
            !isValidUser && 'pointer-events-none bg-opacity-40 text-opacity-50',
            'rounded-2xl bg-zinc-800 p-4 text-white transition-all duration-200'
          )}>
          Create Account
        </button>
      </form>
    </>
  )
}
