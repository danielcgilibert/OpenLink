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
      <form
        onSubmit={handleSubmit}
        className="border-2 min-h-  border-black p-5 rounded">
        <input
          type="text"
          className="border-2 border-black rounded p-2"
          placeholder="url de tu bio"
          onChange={e => setBioUrl(e.target.value)}
          value={bioUrl}
        />
      </form>
      <span>tu url sera : http://localhost.com/{bioUrl}</span>
    </>
  )
}
