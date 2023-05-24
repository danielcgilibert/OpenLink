import prisma from '@/libs/prismadb'

export default async function getPublicBio(username: string) {
  //! delete this function
  try {
    const bio = await prisma.bio.findUnique({
      where: {
        username: username,
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
