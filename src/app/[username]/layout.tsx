import ThemeProvider from '@/providers/ThemeProvider'

export default async function UserLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <section>{children}</section>
    </ThemeProvider>
  )
}
