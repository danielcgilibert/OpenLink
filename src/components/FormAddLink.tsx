'use client'

import { useState } from 'react'
import { CloseIcon, FormIcon, LinkIcon } from './Icons'
import { FadeIn } from '@/app/animations/FadeIn'

export default function FormAddLink() {
  const [showForm, setShowForm] = useState(true)
  return (
    <>
      <header>
        {showForm ? (
          <div className="flex items-center justify-between border-b py-3">
            <h1 className="flex items-center gap-1 text-base text-gray-800">
              <FormIcon className="w-6 h-6" />
              Create Link Form
            </h1>
            <button onClick={() => setShowForm(!showForm)}>
              <CloseIcon className="bg-gray-300 rounded-full w-6 h-6 p-[5px] " />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-purple-700 text-white py-2  rounded-full w-full">
            + Add Link
          </button>
        )}
      </header>

      {showForm && (
        <form className="flex flex-col gap-5">
          <div className="w-full space-y-2">
            <label
              htmlFor="basic"
              className="flex  items-center gap-1 text-xs font-medium text-gray-500">
              <LinkIcon /> URL
            </label>
            <input
              id="basic"
              type="text"
              placeholder="https://example.com"
              className="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600  border-2 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75 p-4"
            />
          </div>

          <div className="w-full space-y-2">
            <label
              htmlFor="basic"
              className="flex  items-center gap-1 text-xs font-medium text-gray-500">
              <LinkIcon /> Description
            </label>
            <input
              id="basic"
              type="text"
              placeholder="Go to my website"
              className="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600  border-2 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75 p-4"
            />
          </div>
        </form>
      )}
    </>
  )
}
