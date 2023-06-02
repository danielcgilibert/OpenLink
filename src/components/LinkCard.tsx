'use client'
import { Link } from '@prisma/client'
import { DragIcon, TrashIcon } from '../ui/Icons'
import EditorInput from './EditorInput'
import { deleteLink } from '@/server/services/deleteLink'

export default function LinkCard({ link }: { link: Link }) {
  return (
    <div className='relative flex gap-5 rounded-lg bg-white p-4 pb-6  shadow'>
      <div className='flex items-center justify-center'>
        <DragIcon className='h-5 w-5' />
      </div>
      <div className='flex w-full flex-col items-baseline justify-center'>
        <div className='flex flex-col '>
          <EditorInput
            id={link.id}
            text={link.title}
            type='text'
            className=' text-lg font-semibold'
          />
          <EditorInput id={link.id} text={link.url} type='url' />
        </div>

        <div className='absolute right-2 top-2 '>
          <button className='p-1' onClick={() => deleteLink(link.id)}>
            <TrashIcon className='h-5 w-5' />
          </button>
        </div>
      </div>
    </div>
  )
}
