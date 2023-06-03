'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CloseIcon, FormIcon, LinkIcon } from '../ui/Icons'
import { SizeTransition } from '@/animations/SizeTransition'
import { Link } from '@prisma/client'
import { toast } from 'react-hot-toast'
import { postLink } from '@/server/services/postLink'
import { Input } from '@/ui/Input'
import { cn } from '@/libs/cn'
import { validUrl } from '@/libs/validUrl'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

interface FormAddLinkProps {
  setIsEditing: (isEditing: boolean) => void
  setListLinks: Dispatch<SetStateAction<Link[] | null | undefined>>
}
export default function FormAddLink({
  setIsEditing,
  setListLinks
}: FormAddLinkProps) {
  const [showForm, setShowForm] = useState(false)
  const [inputUrl, setInputUrl] = useState('')
  const [isValidUrl, setIsValidUrl] = useState(false)
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: postLink,
    onSuccess: (data) => {
      queryClient.setQueryData(['link'], (oldData: any) => {
        return [...oldData, data]
      })
      queryClient.invalidateQueries({ queryKey: ['links'] })

      toast.success('Link created')
    },
    onError: () => {
      toast.error('Error creating link')
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate(inputUrl)
    setShowForm(false)
    setIsEditing(false)
    setInputUrl('')
  }

  useEffect(() => {
    if (typeof validUrl(inputUrl) === 'string') {
      setIsValidUrl(true)
    } else {
      setIsValidUrl(false)
    }
  }, [inputUrl])

  return (
    <div
      className={cn(
        showForm && ' bg-white p-5 shadow',
        `w-full  rounded-2xl `
      )}>
      <header>
        {showForm ? (
          <div className='flex items-center justify-between border-b py-3'>
            <h1 className='flex items-center gap-1 text-base text-gray-800'>
              <FormIcon className='h-6 w-6' />
              Enter URL
            </h1>
            <button
              onClick={() => {
                setShowForm(!showForm)
                setIsEditing(false)
                setInputUrl('')
              }}>
              <CloseIcon className='h-6 w-6 rounded-full bg-gray-300 p-[5px] ' />
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setShowForm(!showForm)
              setIsEditing(true)
            }}
            className='w-full rounded-full bg-[#7D5A84]  py-2 text-white'>
            + Add Link
          </button>
        )}
      </header>

      {showForm && (
        <SizeTransition open={showForm}>
          <form name='linkForm' onSubmit={handleSubmit} className='flex '>
            <div className=' w-full space-y-2'>
              <label
                htmlFor='url'
                className='flex items-center  gap-1 text-xs font-medium text-gray-500 opacity-0'>
                <LinkIcon /> URL
              </label>

              <div className='flex gap-2'>
                <Input
                  name='url'
                  type='text'
                  required
                  onChange={(e) => setInputUrl(e.target.value)}
                  value={inputUrl}
                  placeholder='https://example.com'
                />

                <button
                  className={cn(
                    !isValidUrl && 'pointer-events-none bg-opacity-10 ',
                    `duration-200' rounded-xl bg-[#7D5A84] px-6 text-white opacity-100 transition-all`
                  )}>
                  Add
                </button>
              </div>
            </div>
          </form>
        </SizeTransition>
      )}
    </div>
  )
}
