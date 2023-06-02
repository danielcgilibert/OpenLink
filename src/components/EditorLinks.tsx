'use client'
import { useState } from 'react'
import FormAddLink from './FormAddLink'
import ListLinks from './ListLinks'
import { Link } from '@prisma/client'
import clsx from 'clsx'

export default function EditorLinks({
  links
}: {
  links: Link[] | null | undefined
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [listLinks, setListLinks] = useState(links)

  return (
    <section className='flex flex-col gap-5 rounded-lg p-5  '>
      <FormAddLink setIsEditing={setIsEditing} setListLinks={setListLinks} />

      <div
        className={clsx(
          isEditing && 'pointer-events-none blur-[2px]',
          'transition-all delay-75 duration-200 ease-in'
        )}>
        <ListLinks links={listLinks} />
      </div>
    </section>
  )
}
