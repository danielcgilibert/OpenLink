'use client'
import React, { useContext } from 'react'
import { ThemeContext } from '@/providers/ThemeProvider'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { updateTheme } from '@/server/services/updateTheme'
import { themes } from '@/styles/themes'
import { cn } from '@/libs/cn'

export default function EditorTheme({ bioId }: { bioId: number }) {
  const { setTheme, loading } = useContext(ThemeContext)

  const mutation = useMutation({
    mutationFn: updateTheme,
    onSuccess: () => {},
    onError: () => {
      toast.error('Error update theme')
    }
  })

  const handleTheme = (theme: string) => {
    setTheme(theme)
    mutation.mutate({ id: bioId, theme })
  }

  return (
    <div className='mt-5 flex flex-col gap-5'>
      {Object.keys(themes).map((theme) => (
        <button
          className={cn(loading && 'pointer-events-none')}
          key={theme}
          onClick={() => handleTheme(theme)}>
          <div className='rounded-md border-2 p-4 first-letter:uppercase'>
            <span>{theme}</span>
          </div>
        </button>
      ))}
    </div>
  )
}
