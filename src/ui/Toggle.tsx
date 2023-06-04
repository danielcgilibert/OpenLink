'use client'

import { Switch } from '@headlessui/react'
import { Link } from '@prisma/client'
import { useEffect, useRef, useState } from 'react'

export default function Toggle({ show, link }: { link: Link; show: boolean }) {
  const [enabled, setEnabled] = useState(show)
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }

    handleChange()
  }, [enabled])

  const handleChange = () => {
    fetch('/api/link/check', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...link, show: enabled })
    })
  }
  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-[#7D5A84]' : 'bg-light '}
          relative inline-flex w-[42px]  shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
        <span className='sr-only'>Change link visibility </span>
        <span
          aria-hidden='true'
          className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </>
  )
}
