'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CloseIcon, FormIcon, LinkIcon } from '../ui/Icons'
import { Link } from '@prisma/client'
import { toast } from 'react-hot-toast'
import { postLink } from '@/server/services/postLink'
import { Input } from '@/ui/Input'
import { cn } from '@/libs/cn'
import { validUrl } from '@/libs/validUrl'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { OpenEffect } from '@/animations/OpenEffect'

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
      toast.dismiss()
      toast.success('Link created')
    },
    onError: () => {
      toast.dismiss()
      toast.error('Error creating link')
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate(inputUrl)
    toast.loading('Creating link')
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
    <>
      {!showForm && (
        <button
          onClick={() => {
            setShowForm(!showForm)
            setIsEditing(true)
          }}
          className='w-full rounded-full bg-[#8E56C7] py-2  text-white transition-colors hover:bg-[#783CB4]'>
          + Add Link
        </button>
      )}
      <OpenEffect open={showForm}>
        <div
          className={cn(
            showForm && ' bg-white p-5 shadow',
            ` h-full w-full  rounded-2xl `
          )}>
          <header>
            {showForm && (
              <div className='flex items-center justify-between border-b py-3'>
                <h1 className='flex items-center gap-1 font-semibold  text-gray-800'>
                  Enter URL
                </h1>
                <button
                  onClick={() => {
                    setShowForm(!showForm)
                    setIsEditing(false)
                    setInputUrl('')
                  }}>
                  <CloseIcon className='h-6 w-6 rounded-full bg-gray-300 p-[5px] transition-colors hover:bg-gray-400 ' />
                </button>
              </div>
            )}
          </header>

          {showForm && (
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
                      `duration-200' rounded-lg  bg-[#8E56C7] px-6 text-white opacity-100 transition-all`
                    )}>
                    Add
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </OpenEffect>
    </>
  )
}
