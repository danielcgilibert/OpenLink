import { prisma } from '@/server/db'

export async function getPublicBio(username: string) {
  //! delete this function
  try {
    const bio = await prisma.bio.findUnique({
      where: {
        username: username
      }
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
