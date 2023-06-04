'use client'
import { Link } from '@prisma/client'
import { DragIcon, PhotoIcon, ShareIcon, TrashIcon } from '../ui/Icons'
import EditorInput from './EditorInput'
import { deleteLink } from '@/server/services/deleteLink'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import Toggle from '@/ui/Toggle'

export default function LinkCard({ link }: { link: Link }) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: deleteLink,
    onSuccess: ({ data }) => {
      queryClient.setQueryData(['link'], (oldData: any) => {
        queryClient.invalidateQueries({ queryKey: ['links'] })
        return oldData.filter((link: Link) => link.id !== data.id)
      })
      toast.success('Link deleted')
    }
  })

  return (
    <div className='relative flex gap-5 rounded-lg bg-white p-4 pb-6  shadow'>
      <div className='flex items-center justify-center '>
        <DragIcon className='h-5 w-5' />
      </div>
      <div className='flex w-full  flex-col gap-1'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <EditorInput
              id={link.id}
              text={link.title}
              type='text'
              className=' text-lg font-semibold'
            />
            <EditorInput id={link.id} text={link.url} type='url' />
          </div>

          <div className='absolute right-4 top-[40%] '>
            <Toggle link={link} show={link.show} />
          </div>
        </div>

        <div className='flex items-baseline justify-between gap-2 pt-2'>
          <div className='flex gap-2'>
            <ShareIcon className='h-5 w-5' />
            <PhotoIcon className='h-5 w-5' />
            <button
              className='flex items-center justify-center'
              onClick={() => {
                mutation.mutate(link.id)
              }}>
              <TrashIcon className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
