import { ComponentProps } from 'react'

const SIZE = '16px'

export const PencilIcon: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      width={SIZE}
      height={SIZE}
      viewBox='0 0 24 24'
      strokeWidth='1.2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4'></path>
      <path d='M13.5 6.5l4 4'></path>
    </svg>
  )
}

export const HomeIcon: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      width={SIZE}
      height={SIZE}
      viewBox='0 0 24 24'
      strokeWidth='1.2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0'></path>
      <path d='M3.6 9h16.8'></path>
      <path d='M3.6 15h16.8'></path>
      <path d='M11.5 3a17 17 0 0 0 0 18'></path>
      <path d='M12.5 3a17 17 0 0 1 0 18'></path>
    </svg>
  )
}

export const ThemeIcon: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      width={SIZE}
      height={SIZE}
      viewBox='0 0 24 24'
      strokeWidth='1.2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M3 21v-4a4 4 0 1 1 4 4h-4'></path>
      <path d='M21 3a16 16 0 0 0 -12.8 10.2'></path>
      <path d='M21 3a16 16 0 0 1 -10.2 12.8'></path>
      <path d='M10.6 9a9 9 0 0 1 4.4 4.4'></path>
    </svg>
  )
}

export const DragIcon: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      width={SIZE}
      height={SIZE}
      viewBox='0 0 24 24'
      strokeWidth='1.2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
      <path d='M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
      <path d='M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
      <path d='M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
      <path d='M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
      <path d='M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
    </svg>
  )
}

export const TrashIcon: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      width={SIZE}
      height={SIZE}
      viewBox='0 0 24 24'
      strokeWidth='1.2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M4 7h16'></path>
      <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'></path>
      <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'></path>
      <path d='M10 12l4 4m0 -4l-4 4'></path>
    </svg>
  )
}

export const FormIcon: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      width={SIZE}
      height={SIZE}
      viewBox='0 0 24 24'
      strokeWidth='1.2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3'></path>
      <path d='M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3'></path>
      <path d='M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7'></path>
      <path d='M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1'></path>
      <path d='M17 12h.01'></path>
      <path d='M13 12h.01'></path>
    </svg>
  )
}

export const LinkIcon: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      width={SIZE}
      height={SIZE}
      viewBox='0 0 24 24'
      strokeWidth='1.2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M9 15l6 -6'></path>
      <path d='M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464'></path>
      <path d='M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463'></path>
    </svg>
  )
}

export const EyeIcon: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      width={SIZE}
      height={SIZE}
      viewBox='0 0 24 24'
      strokeWidth='1.2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0'></path>
      <path d='M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6'></path>
    </svg>
  )
}

export const CloseIcon: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      width={SIZE}
      height={SIZE}
      viewBox='0 0 24 24'
      strokeWidth='1.2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M18 6l-12 12'></path>
      <path d='M6 6l12 12'></path>
    </svg>
  )
}
