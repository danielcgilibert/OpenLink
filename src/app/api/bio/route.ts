import { getCurrentUser } from '@/server/services/getUser'
import { NextResponse } from 'next/server'
import { prisma } from '@/server/db'

export async function POST(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const { bioUrl } = await request.json()

  if (!bioUrl) {
    return NextResponse.error()
  }

  const bio = await prisma.bio.create({
    data: {
      username: bioUrl,
      userId: currentUser.id,
      avatar:
        'https://lh3.googleusercontent.com/a/AGNmyxZYqzLW4za-qZaVPm4yKJJwTN-396_71rOMZjkHXQ=s96-c',
      name: 'pepe',
      description: 'sin descripción',
      footerDesc: 'sin descripción'
    }
  })

  await prisma.$disconnect()

  return NextResponse.json({
    ok: true
  })
}
