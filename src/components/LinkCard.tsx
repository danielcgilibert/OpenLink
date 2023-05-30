'use client'
import { Link } from '@prisma/client'
import { DragIcon, TrashIcon } from './Icons'
import EditorInput from './EditorInput'

export default function LinkCard({ link }: { link: Link }) {
  const handleDelete = async () => {
    fetch(`/api/link/${link.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  return (
    <div className="flex   gap-5 rounded-lg py-9 p-5 bg-white shadow">
      <div className="flex justify-center items-center">
        <DragIcon className="w-5 h-5" />
      </div>
      <div className="flex flex-col  w-full">
        <div className="flex flex-col gap-1">
          <EditorInput
            id={link.id}
            text={link.title}
            type="text"
            className="font-bold"
          />
          <EditorInput id={link.id} text={link.url} type="url" />
        </div>

        <div className="flex justify-end items-end ">
          <button className="p-1" onClick={handleDelete}>
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
