import prisma from '@/libs/prismadb'
import getCurrentUser from './getUser'

export default async function getBio() {
  try {
    const user = await getCurrentUser()

    const bio = await prisma.bio.findUnique({
      where: {
        userId: user?.id,
      },
    })

    if (!bio) {
      return null
    }

    return bio
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}
