'use client'
import React, { ChangeEvent, useRef, useState } from 'react'
import clsx from 'clsx'
import { PencilIcon } from './Icons'

export default function EditorInput({
  text,
  className,
  type = 'text',
  id,
}: {
  text: string
  type?: 'text' | 'url'
  className?: string
  id: number
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(text)
  const input = useRef<HTMLInputElement | null>(null)
  const debounceRef = useRef<NodeJS.Timeout>()

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      console.log('onQueryChanged', event.target.value)
      fetch('/api/link', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          input: input.current?.value || inputValue,
          type,
        }),
      })
    }, 500)
  }

  return (
    <button
      onClick={() => {
        setIsEditing(!isEditing)
        if (isEditing) {
          input.current?.focus()
        }
      }}
      className="inline-grid grid-cols-[minmax(0,_100%)] items-baseline ">
      <input
        className={clsx(
          !isEditing && 'opacity-0',
          `text-sm border-none row-start-1 col-start-1 mb-1 inline-flex min-w-full outline-none ${className}`
        )}
        type={type}
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value)
          onQueryChanged(e)
        }}
        tabIndex={isEditing ? 0 : -1}
        name={type}
        aria-label="Edit link title"
        autoFocus
        ref={input}
        onBlur={() => setIsEditing(false)}
      />

      <div
        className={clsx(
          isEditing && 'opacity-0',
          'row-start-1 col-start-1  inline-flex items-center'
        )}>
        <div className="flex justify-center items-center">
          <p
            className={clsx(
              type === 'text' && 'first-letter:uppercase',
              `text-sm border-none outline-none ${className}  `
            )}>
            {input.current?.value || inputValue}
          </p>
          <PencilIcon />
        </div>
      </div>
    </button>
  )
}
