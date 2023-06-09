import QueryProvider from '@/providers/QueryProvider'
import '../styles/globals.css'
import { Rubik } from 'next/font/google'
import Script from 'next/script'
import { Notify } from '@/ui/Notify'
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
          className={`relative h-screen w-full  bg-[#F8F8FF]   ${rubik.className}`}>
          <Notify />
          <main className='mx-auto h-full max-w-5xl'>{children}</main>
        </body>
      </QueryProvider>
      <Script
        src='https://umami-seven-zeta.vercel.app/script.js'
        data-website-id='d9359e0b-9d8e-4cf8-aa6b-033da2f78a36'
      />
    </html>
  )
}
