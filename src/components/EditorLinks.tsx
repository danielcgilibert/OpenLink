'use client'
import { useState } from 'react'
import FormAddLink from './FormAddLink'
import ListLinks from './ListLinks'
import { Link } from '@prisma/client'
import { cn } from '@/libs/cn'

export default function EditorLinks({
  links
}: {
  links: Link[] | null | undefined
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [listLinks, setListLinks] = useState(links)

  return (
    <section className='relative flex flex-col gap-5 rounded-lg'>
      <FormAddLink setIsEditing={setIsEditing} setListLinks={setListLinks} />

      <div
        className={cn(
          isEditing && 'pointer-events-none blur-[2px]',
          'transition-all delay-75 duration-200 ease-in'
        )}>
        <ListLinks links={listLinks} />
      </div>
    </section>
  )
}
