import prisma from '@/libs/prismadb'
import getCurrentUser from './getUser'

export default async function getBio(username?: string) {
  try {
    const user = await getCurrentUser()
    const filter: {
      userId?: string
      username?: string
    } = {}

    if (user) {
      filter.userId = user.id
    } else {
      filter.username = username
    }

    const bio = await prisma.bio.findUnique({
      where: {
        ...filter,
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
