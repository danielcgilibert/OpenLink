import { getServerSession } from 'next-auth/next'
import { prisma } from '@/server/db'
import { Session } from 'next-auth'

export async function getCurrentUser() {
  try {
    const session: Session | null = await getServerSession()

    if (!session) return null

    const user = await prisma.user.findUnique({
      where: {
        email: session.user!.email as string
      }
    })

    if (!user) return null
    return user
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}
