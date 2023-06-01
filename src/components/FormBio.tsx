'use client'
import { postBio } from '@/server/services/postBio'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function FormBio() {
  const [bioUrl, setBioUrl] = useState<string>('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const status = await postBio(bioUrl)
    if (status.ok) {
      router.push('/dashboard')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <input
          type='text'
          className='rounded-lg border-2 bg-zinc-100 p-5  '
          placeholder='url de tu bio'
          onChange={(e) => setBioUrl(e.target.value)}
          value={bioUrl}
        />
        <span className='rounded-lg bg-blue-500 p-5 text-center text-white'>
          http://localhost.com/
          <span className='text-yellow-300'>{bioUrl}</span>
        </span>

        <button className='mt-8 rounded-full bg-yellow-300 p-4'>
          Create Account
        </button>
      </form>
    </>
  )
}
