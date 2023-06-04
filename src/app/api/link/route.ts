import { getCurrentUser } from '@/server/services/getUser'
import { NextResponse } from 'next/server'
import { prisma } from '@/server/db'
import { validUrl } from '@/libs/validUrl'
export async function GET(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const bio = await prisma.bio.findUnique({
    where: {
      userId: currentUser.id as string
    }
  })

  if (!bio) {
    return NextResponse.error()
  }

  const links = await prisma.link.findMany({
    where: {
      bioId: bio?.id as number
    }
  })

  await prisma.$disconnect()

  return NextResponse.json({
    ok: true,
    data: links
  })
}

export async function POST(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const { url, description } = await request.json()

  const newUrl = validUrl(url)

  if (!newUrl) {
    return NextResponse.json(
      { ok: false, error: 'no es una url valida' },
      { status: 500 }
    )
  }

  const bio = await prisma.bio.findUnique({
    where: {
      userId: currentUser.id
    }
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
      bioId: bio.id as number
    }
  })

  await prisma.$disconnect()

  return NextResponse.json({
    ok: true,
    link: newLink
  })
}

export async function PUT(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const { id, input, type } = await request.json()

  if (!id || !input || !type) {
    return NextResponse.error()
  }

  let data = {}
  if (type === 'url') {
    data = {
      url: input
    }
  } else {
    data = {
      title: input
    }
  }

  const link = await prisma.link.update({
    where: {
      id: id
    },
    data
  })

  if (!link) {
    return NextResponse.error()
  }

  await prisma.$disconnect()

  return NextResponse.json({
    ok: true,
    data: link
  })
}
