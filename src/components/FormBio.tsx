'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function FormBio() {
  const [bioUrl, setBioUrl] = useState<string>('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const status = await fetch('/api/bio', {
      method: 'POST',
      body: JSON.stringify({ bioUrl }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (status.ok) {
      router.push('/dashboard')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          className="bg-zinc-100 rounded-lg p-5 border-2  "
          placeholder="url de tu bio"
          onChange={e => setBioUrl(e.target.value)}
          value={bioUrl}
        />
        <span className="bg-blue-500 rounded-lg p-5 text-white text-center">
          http://localhost.com/
          <span className="text-yellow-300">{bioUrl}</span>
        </span>

        <button className="bg-yellow-300 p-4 mt-8 rounded-full">
          Create Account
        </button>
      </form>
    </>
  )
}
