'use client'
import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { PencilIcon } from '../ui/Icons'
import useDebounce from '@/hooks/useDebounce'
import { updateLink } from '@/server/services/updateLink'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function EditorInput({
  text,
  className,
  type = 'text',
  id
}: {
  text: string
  type: 'text' | 'url'
  className?: string
  id: number
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(text)
  const input = useRef<HTMLInputElement | null>(null)
  const debonuceValue = useDebounce(input.current?.value, 400)
  const queryClient = useQueryClient()
  const firstInput = useRef(text)

  const mutation = useMutation({
    mutationFn: updateLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movilPreviewLinks'] })
    }
  })

  const onQueryChanged = () => {
    mutation.mutate({ id, inputValue, type })
  }

  useEffect(() => {
    if (!isEditing) return
    if (firstInput.current !== inputValue) {
      onQueryChanged()
      firstInput.current = inputValue
    }
  }, [debonuceValue])

  return (
    <button
      onClick={() => {
        setIsEditing(!isEditing)
        if (isEditing) {
          input.current?.focus()
        }
      }}
      className={clsx(
        'inline-grid cursor-pointer grid-cols-[minmax(0,_100%)] items-baseline',
        isEditing && 'cursor-text'
      )}>
      <input
        className={clsx(
          !isEditing && 'opacity-0',
          `col-start-1 row-start-1  inline-flex min-w-full  cursor-pointer  border-none text-sm outline-none   ${className}`
        )}
        type={type}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        tabIndex={isEditing ? 0 : -1}
        name={type}
        aria-label='Edit link title'
        autoFocus
        ref={input}
        onBlur={() => {
          if (firstInput.current !== inputValue) {
            onQueryChanged()
            firstInput.current = inputValue
          }

          setIsEditing(false)
        }}
      />

      <div
        className={clsx(
          isEditing && 'opacity-0',
          'col-start-1 row-start-1  mt-2 inline-flex items-center'
        )}>
        <div className='flex items-center justify-center gap-1'>
          <p
            className={clsx(
              type === 'text' && 'first-letter:uppercase',
              `border-none text-sm outline-none  ${className}  `
            )}>
            {input.current?.value || inputValue}
          </p>
          <PencilIcon />
        </div>
      </div>
    </button>
  )
}
