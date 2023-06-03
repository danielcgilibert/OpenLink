import { Link } from '@prisma/client'

interface PostLinkResponse {
  link: Link[]
  ok: boolean
}

export async function postLink(url: string) {
  const response = await fetch('/api/link', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url
    })
  })

  const data: PostLinkResponse = await response.json()

  if (!data.ok) {
    return null
  }

  return data.link
}
