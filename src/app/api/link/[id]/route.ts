import getCurrentUser from '@/actions/getUser'
import { NextResponse } from 'next/server'
import prisma from '@/libs/prismadb'

export async function DELETE(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const { pathname } = new URL(request.url)

  const arr = pathname.split('/')
  const id = arr[arr.length - 1]

  const bio = await prisma.bio.findUnique({
    where: {
      userId: currentUser.id as string,
    },
  })

  if (!bio) {
    return NextResponse.error()
  }

  const link = await prisma.link.deleteMany({
    where: {
      bioId: bio?.id as number,
      id: Number(id),
    },
  })

  return NextResponse.json({
    ok: true,
    data: link,
  })
}
