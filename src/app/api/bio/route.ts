import { getCurrentUser } from '@/server/services/getUser'
import { NextResponse } from 'next/server'
import { prisma } from '@/server/db'
import { ErrorMessage } from '@/types/error'
import { validUsername } from '@/libs/validUsername'

export async function POST(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.json(
      {
        ok: false,
        error: ErrorMessage.userNotFound
      },
      { status: 401 }
    )
  }

  const { username }: { username: string } = await request.json()

  if (!username) {
    return NextResponse.json(
      {
        ok: false,
        error: ErrorMessage.bioIsRequired
      },
      { status: 400 }
    )
  }

  if (!validUsername(username)) {
    return NextResponse.json(
      {
        ok: false,
        error: ErrorMessage.genericMessage
      },
      { status: 400 }
    )
  }

  //* Check if bio exists
  const bio = await prisma.bio.findUnique({
    where: {
      username: username.toLowerCase()
    }
  })

  if (bio) {
    return NextResponse.json(
      {
        ok: false,
        error: ErrorMessage.bioExists
      },
      { status: 409 }
    )
  }

  //* Create bio
  await prisma.bio
    .create({
      data: {
        username: username.toLowerCase(),
        userId: currentUser.id,
        avatar: currentUser.image || '',
        name: currentUser.name || '',
        description: '',
        footerDesc: ''
      }
    })
    .catch((error) => {
      if (error.code === 'P2002') {
        return NextResponse.json(
          {
            error: ErrorMessage.bioNotFound
          },
          { status: 400 }
        )
      }
    })

  return NextResponse.json(
    {
      ok: true
    },
    { status: 201 }
  )
}

export async function PUT(request: Request) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.json(
      {
        ok: false,
        error: ErrorMessage.userNotFound
      },
      { status: 401 }
    )
  }
  const { id, theme }: { id: number; theme: string } = await request.json()

  if (!id || !theme) {
    return NextResponse.json(
      {
        ok: false,
        error: ErrorMessage.bioIsRequired
      },
      { status: 400 }
    )
  }

  //* Create bio
  await prisma.bio
    .update({
      where: {
        id: id
      },
      data: {
        theme: theme
      }
    })
    .catch((error) => {
      if (error.code === 'P2002') {
        return NextResponse.json(
          {
            error: ErrorMessage.bioNotFound
          },
          { status: 400 }
        )
      }
    })

  return NextResponse.json(
    {
      ok: true
    },
    { status: 201 }
  )
}
