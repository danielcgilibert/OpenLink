'use client'

import { ThemeProvider as Provider } from 'next-themes'

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <Provider
      themes={['neon', 'light', 'dark']}
      value={{ neon: 'neon', dark: 'dark', light: 'light' }}
      attribute='data-theme'
      enableColorScheme={false}
      defaultTheme='light'
      enableSystem={false}>
      {children}
    </Provider>
  )
}
