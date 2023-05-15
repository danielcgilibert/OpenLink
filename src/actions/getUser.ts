import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'

export async function getSession() {
  return getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try {
    const session = await getSession()

    if (!session) return null
    return session
  } catch (error) {}
}
