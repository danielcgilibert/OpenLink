'use client'
import { Link } from '@prisma/client'
import { DragIcon, PhotoIcon, ShareIcon, TrashIcon } from '../ui/Icons'
import EditorInput from './EditorInput'
import { deleteLink } from '@/server/services/deleteLink'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import Toggle from '@/ui/Toggle'
import { useState } from 'react'
import { cn } from '@/libs/cn'
import { FadeIn } from '@/animations/FadeIn'

export default function LinkCard({ link }: { link: Link }) {
  const queryClient = useQueryClient()
  const [showDelete, setShowDelete] = useState(false)

  const mutation = useMutation({
    mutationFn: deleteLink,
    onSuccess: ({ data }) => {
      queryClient.setQueryData(['link'], (oldData: Link[] | undefined) => {
        queryClient.invalidateQueries({ queryKey: ['links'] })
        return oldData?.filter((link: Link) => link.id !== data.id)
      })
      toast.dismiss()
      toast.success('Link deleted')
    }
  })

  return (
    <>
      <div
        className={cn(
          'flex gap-5 rounded-2xl bg-white p-6   shadow',
          showDelete && 'rounded-b-none'
        )}>
        <div className='flex items-center justify-center '>
          <DragIcon className='h-5 w-5' />
        </div>
        <div className=' flex w-full flex-col gap-3  '>
          <div className='flex w-full justify-between'>
            <div className='flex flex-col'>
              <EditorInput
                id={link.id}
                text={link.title}
                type='text'
                className=' text-lg font-semibold'
              />
              <EditorInput id={link.id} text={link.url} type='url' />
            </div>

            <div className='flex items-center justify-center'>
              <Toggle link={link} show={link.show} />
            </div>
          </div>
          <div className='flex items-baseline justify-between gap-2 '>
            <div className='flex gap-2'>
              <ShareIcon className='h-5 w-5 opacity-40' />
              <PhotoIcon className='h-5 w-5 opacity-40' />
              <button
                onClick={() => setShowDelete(!showDelete)}
                className='flex items-center justify-center'>
                <TrashIcon className='h-5 w-5' />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showDelete && (
        <FadeIn>
          <div className='min-w-full   bg-[#8E56C7] py-1 text-center text-white'>
            Delete
          </div>
          <div className='flex flex-col    rounded-b-2xl bg-white p-6 shadow'>
            <span className='mb-5 text-center text-secondary'>
              Delete this forever?
            </span>
            <div>
              <div className='flex gap-5'>
                <div className='w-1/2'>
                  <button
                    onClick={() => setShowDelete(false)}
                    className='h-12 w-full rounded-full border-2 border-light bg-white font-semibold text-black  antialiased  transition duration-75 ease-out'
                    type='button'>
                    Cancel
                  </button>
                </div>

                <div className='w-1/2'>
                  <button
                    onClick={() => {
                      mutation.mutate(link.id)
                      toast.loading('Deleting link')
                    }}
                    className='h-12 w-full rounded-full bg-[#8E56C7]  font-semibold 
                    text-white antialiased transition  duration-75 ease-out hover:bg-[#783CB4]'
                    type='button'>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      )}
    </>
  )
}
