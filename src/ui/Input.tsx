import { cn } from '@/libs/cn'
import React from 'react'

const inputClass = cn(
  'w-full bg-zinc-100 text-primary outline-none placeholder:text-zinc-800 placeholder:text-opacity-40 flex rounded-lg border-2 bg-zinc-100 py-3 pl-4 focus:border-light  disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75 transition'
)

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(inputClass, className)}
      autoComplete='off'
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'
