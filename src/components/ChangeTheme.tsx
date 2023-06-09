'use client'

import { useTheme } from 'next-themes'

export default function ChangeTheme({
  children,
  themeId
}: {
  children: React.ReactNode
  themeId: string
}) {
  const { theme, setTheme } = useTheme()

  setTheme('neon')

  return <>{children}</>
}
