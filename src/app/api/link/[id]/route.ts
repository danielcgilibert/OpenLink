import { getCurrentUser } from '@/server/services/getUser'
import { NextResponse } from 'next/server'
import { prisma } from '@/server/db'

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
      userId: currentUser.id as string
    }
  })
  console.log(id, bio)

  if (!bio) {
    return NextResponse.error()
  }

  const link = await prisma.link.delete({
    where: {
      id: Number(id)
    }
  })

  console.log('este', link)

  return NextResponse.json({
    ok: true,
    data: link
  })
}
