import { getCurrentUser } from '@/server/services/getUser'
import Header from '@/components/DashboardNav'
import MovilPreview from '@/components/MovilPreview'
import { getBio } from '@/server/services/getBio'
import { redirect } from 'next/navigation'

const metadata = {
  title: 'Dashboard'
}

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  const bio = await getBio()

  if (!bio) {
    redirect('/create-bio')
  }

  return (
    <>
      <Header currentUser={currentUser} />
      <div className=' mt-12 grid w-full   rounded-lg px-5 md:grid-cols-[55%_auto] md:p-0 md:pb-8'>
        {children}
        <MovilPreview username={bio.username} />
      </div>
    </>
  )
}
