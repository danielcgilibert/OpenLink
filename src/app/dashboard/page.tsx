import getCurrentUser from '@/actions/getUser'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  console.log('sección', session)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Dashboard
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  )
}
