import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'

import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="flex flex-col min-h-screen   p-24">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  )
}
