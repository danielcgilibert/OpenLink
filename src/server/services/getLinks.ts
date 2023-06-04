import { prisma } from '@/server/db'
import { Link } from '@prisma/client'

export async function getLinks(bioId: number) {
  if (!bioId) {
    return null
  }
  try {
    const links: Link[] = await prisma.link.findMany({
      where: {
        bioId: bioId
      }
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
