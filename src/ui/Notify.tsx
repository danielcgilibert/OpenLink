'use client'
import { Transition } from '@headlessui/react'
import { Toaster, ToastIcon, resolveValue } from 'react-hot-toast'

export const Notify = () => {
  return (
    <Toaster position='bottom-center'>
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className='mt-5 flex h-[60px] w-60 transform items-center justify-center rounded-full bg-white  shadow'
          enter='transition-all duration-150'
          enterFrom='opacity-0 scale-50'
          enterTo='opacity-100 scale-100'
          leave='transition-all duration-150'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-75'>
          <ToastIcon toast={t} />
          <p className='px-2'>{resolveValue(t.message, { ...t })}</p>
        </Transition>
      )}
    </Toaster>
  )
}
