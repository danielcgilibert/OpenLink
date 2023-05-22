import { Link } from '@prisma/client'
import { DragIcon, PencilIcon } from './Icons'

export default function LinkCard({ link }: { link: Link }) {
  return (
    <div className="flex  gap-5   rounded-lg py-8 p-5 bg-white shadow  ">
      <div className="flex justify-center items-center">
        <DragIcon className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span>{link.title}</span>
          <span>
            <PencilIcon />
          </span>
        </div>
        <div className="flex items-center gap-1">
          <a href={link.url}>{link.url}</a>

          <span className="cursor-pointer">
            <PencilIcon />
          </span>
        </div>
      </div>
    </div>
  )
}
