import prisma from '@/libs/prismadb'
import getCurrentUser from './getUser'
import { Link } from '@prisma/client'

export default async function getLinks(bioId: number) {
  try {
    const links: Link[] = await prisma.link.findMany({
      where: {
        bioId: bioId,
      },
    })

    if (!links) {
      return null
    }

    return links
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}
