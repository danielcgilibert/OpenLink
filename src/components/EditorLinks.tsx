'use client'
import { useEffect, useState } from 'react'
import FormAddLink from './FormAddLink'
import ListLinks from './ListLinks'
import { Link } from '@prisma/client'
import clsx from 'clsx'

export default function EditorLinks({
  links,
}: {
  links: Link[] | null | undefined
}) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <section className="flex flex-col gap-5 p-5 ">
      <FormAddLink setIsEditing={setIsEditing} />

      <div
        className={clsx(
          isEditing && 'blur-[2px] pointer-events-none',
          'transition-all ease-in delay-75 duration-200'
        )}>
        <ListLinks links={links} />
      </div>
    </section>
  )
}
