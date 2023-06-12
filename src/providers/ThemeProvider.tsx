'use client'
import { createContext, useEffect, useRef, useState } from 'react'
import { themes as themesList } from '@/styles/themes'
import { useIsFetching } from '@tanstack/react-query'

export const ThemeContext = createContext({
  loading: true,
  setLoading: (loading: boolean) => {},
  setTheme: (theme: string) => {}
})

export default function ThProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState('')
  const [loading, setLoading] = useState(true)
  const first = useRef(false)
  const isFetching = useIsFetching()
  useEffect(() => {
    if (!first.current) {
      first.current = true
      return
    }

    if (loading) {
      return
    }

    const iFrame = document.getElementById(
      'preview-iframe'
    ) as HTMLIFrameElement

    if (iFrame && !isFetching) {
      //@ts-ignore
      if (iFrame.contentWindow.document.querySelector('#userBio') !== null) {
        //@ts-ignore
        iFrame.contentWindow.document.querySelector('#userBio').className =
          themesList[theme]
      }
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ loading, setLoading, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
