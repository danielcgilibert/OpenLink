'use client'

import { useState } from 'react'
import { CloseIcon, FormIcon, LinkIcon } from './Icons'
import { FadeIn } from '@/animations/FadeIn'
import { Transition } from '@/animations/Transition'

interface FormAddLinkProps {
  setIsEditing: (isEditing: boolean) => void
}
export default function FormAddLink({ setIsEditing }: FormAddLinkProps) {
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const inputUrlValue = form.url.value as string
    const inputDescriptionValue = form.description.value as string
    fetch('/api/link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: inputUrlValue,
        description: inputDescriptionValue,
      }),
    }).finally(() => {
      setShowForm(false)
      setIsEditing(false)
    })
  }
  return (
    <>
      <header>
        {showForm ? (
          <div className="flex items-center justify-between border-b py-3">
            <h1 className="flex items-center gap-1 text-base text-gray-800">
              <FormIcon className="w-6 h-6" />
              Create Link Form
            </h1>
            <button
              onClick={() => {
                setShowForm(!showForm)
                setIsEditing(false)
              }}>
              <CloseIcon className="bg-gray-300 rounded-full w-6 h-6 p-[5px] " />
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setShowForm(!showForm)
              setIsEditing(true)
            }}
            className="bg-purple-700 text-white py-2  rounded-full w-full">
            + Add Link
          </button>
        )}
      </header>

      {showForm && (
        <Transition open={showForm} className="max-h-full">
          <form
            name="linkForm"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5">
            <div className="w-full space-y-2">
              <label
                htmlFor="url"
                className="flex  items-center gap-1 text-xs font-medium text-gray-500">
                <LinkIcon /> URL
              </label>
              <input
                name="url"
                type="text"
                required
                placeholder="https://example.com"
                className="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600  border-2 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75 p-4"
              />
            </div>

            <div className="w-full space-y-2">
              <label
                htmlFor="description"
                className="flex  items-center gap-1 text-xs font-medium text-gray-500">
                <LinkIcon /> Description
              </label>
              <input
                name="description"
                type="text"
                placeholder="Go to my website"
                className="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600  border-2 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75 p-4"
              />
            </div>
            <button className="bg-gray-200 rounded-md py-2 border-2 ">
              Add
            </button>
          </form>
        </Transition>
      )}
    </>
  )
}
