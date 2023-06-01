'use client'
import { Link } from '@prisma/client'
import { DragIcon, TrashIcon } from '../ui/Icons'
import EditorInput from './EditorInput'
import { deleteLink } from '@/server/services/deleteLink'

export default function LinkCard({ link }: { link: Link }) {
  return (
    <div className='flex gap-5 rounded-lg bg-white p-5 py-9 shadow'>
      <div className='flex items-center justify-center'>
        <DragIcon className='h-5 w-5' />
      </div>
      <div className='flex w-full flex-col'>
        <div className='flex flex-col gap-1'>
          <EditorInput
            id={link.id}
            text={link.title}
            type='text'
            className='font-bold'
          />
          <EditorInput id={link.id} text={link.url} type='url' />
        </div>

        <div className='flex items-end justify-end '>
          <button className='p-1' onClick={() => deleteLink(link.id)}>
            <TrashIcon className='h-5 w-5' />
          </button>
        </div>
      </div>
    </div>
  )
}
