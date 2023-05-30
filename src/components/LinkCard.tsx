'use client'
import { Link } from '@prisma/client'
import { DragIcon } from './Icons'
import EditorInput from './EditorInput'

export default function LinkCard({ link }: { link: Link }) {
  return (
    <div className="flex  gap-5 rounded-lg py-8 p-5 bg-white shadow">
      <div className="flex justify-center items-center">
        <DragIcon className="w-5 h-5" />
      </div>
      <div className="flex flex-col">
        <EditorInput
          id={link.id}
          text={link.title}
          type="text"
          className="font-bold"
        />
        <EditorInput id={link.id} text={link.url} type="url" />
      </div>
    </div>
  )
}
