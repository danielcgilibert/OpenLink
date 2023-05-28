import getCurrentUser from '@/actions/getUser'
import { NextResponse } from 'next/server'
import prisma from '@/libs/prismadb'
import { validUrl } from '@/libs/validUrl'

export async function POST(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const { url, description } = await request.json()

  const newUrl = validUrl(url)

  if (!newUrl) {
    console.log('no es una url valida')
    return NextResponse.error()
  }

  const bio = await prisma.bio.findUnique({
    where: {
      userId: currentUser.id,
    },
  })

  if (!bio) {
    return NextResponse.error()
  }
  const newTitle = newUrl.split('://')[1].toString().split('.')[0] //TODO: Refactor this

  const newLink = await prisma.link.create({
    data: {
      url: newUrl,
      icon: '',
      description: description || '',
      title: newTitle,
      bioId: bio.id as number,
    },
  })

  await prisma.$disconnect()

  return NextResponse.json({
    ok: true,
    link: newLink,
  })
}
