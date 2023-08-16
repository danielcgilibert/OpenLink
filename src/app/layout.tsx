import QueryProvider from '@/providers/QueryProvider'
import '../styles/globals.css'
import { Rubik } from 'next/font/google'
import Script from 'next/script'
import { Notify } from '@/ui/Notify'
import ThProvider from '@/providers/ThemeProvider'
const rubik = Rubik({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'OpenLink',
  description: 'Minimalist App for your links'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <QueryProvider>
        <body
          className={`relative h-screen w-full bg-[#F8F8FF] ${rubik.className}`}>
            <ThProvider>
              <Notify />
              <main className='h-full'>{children}</main>
            </ThProvider>
        </body>
      </QueryProvider>
      <Script
        src='https://umami-1-dv62wkj77-danielcgilibert.vercel.app/script.js'
        data-website-id='d9359e0b-9d8e-4cf8-aa6b-033da2f78a36'
      />
    </html>
  )
}
