'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { CloseIcon, FormIcon, LinkIcon } from '../ui/Icons'
import { SizeTransition } from '@/animations/SizeTransition'
import { Link } from '@prisma/client'
import { toast } from 'react-hot-toast'
import { postLink } from '@/server/services/postLink'

interface FormAddLinkProps {
  setIsEditing: (isEditing: boolean) => void
  setListLinks: Dispatch<SetStateAction<Link[] | null | undefined>>
}
export default function FormAddLink({
  setIsEditing,
  setListLinks
}: FormAddLinkProps) {
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const inputUrlValue = form.url.value as string
    const inputDescriptionValue = form.description.value as string

    const link = await postLink(inputUrlValue, inputDescriptionValue)
    if (!link) {
      toast.error('Error creating link')
      return
    }
    toast.success('Link created')
    setListLinks((prev: any) => {
      if (prev) {
        return [...prev, link]
      }
      return [link]
    })

    setShowForm(false)
    setIsEditing(false)
  }
  return (
    <>
      <header>
        {showForm ? (
          <div className='flex items-center justify-between border-b py-3'>
            <h1 className='flex items-center gap-1 text-base text-gray-800'>
              <FormIcon className='h-6 w-6' />
              Create Link Form
            </h1>
            <button
              onClick={() => {
                setShowForm(!showForm)
                setIsEditing(false)
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
          <form
            name='linkForm'
            onSubmit={handleSubmit}
            className='flex flex-col gap-5'>
            <div className='w-full space-y-2'>
              <label
                htmlFor='url'
                className='flex  items-center gap-1 text-xs font-medium text-gray-500'>
                <LinkIcon /> URL
              </label>
              <input
                name='url'
                type='text'
                required
                placeholder='https://example.com'
                className='block w-full rounded-md border-2 border-gray-200 p-4 text-sm  transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75'
              />
            </div>

            <div className='w-full space-y-2'>
              <label
                htmlFor='description'
                className='flex  items-center gap-1 text-xs font-medium text-gray-500'>
                <LinkIcon /> Description
              </label>
              <input
                name='description'
                type='text'
                placeholder='Go to my website'
                className='block w-full rounded-md border-2 border-gray-200 p-4 text-sm  transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75'
              />
            </div>
            <button className='rounded-md border-2 bg-gray-200 py-2 '>
              Add
            </button>
          </form>
        </SizeTransition>
      )}
    </>
  )
}
