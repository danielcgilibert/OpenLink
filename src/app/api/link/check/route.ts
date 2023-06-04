import { getCurrentUser } from '@/server/services/getUser'
import { NextResponse } from 'next/server'
import { prisma } from '@/server/db'

export async function PUT(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const link = await request.json()

  if (!link) {
    return NextResponse.error()
  }

  const newLink = await prisma.link.update({
    where: {
      id: link.id
    },
    data: {
      ...link
    }
  })

  if (!link) {
    return NextResponse.error()
  }

  await prisma.$disconnect()

  return NextResponse.json({
    ok: true,
    data: newLink
  })
}
