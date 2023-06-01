import { Link } from '@prisma/client'

interface PostLinkResponse {
  link: Link[]
  ok: boolean
}

export async function postLink(url: string, description: string) {
  const response = await fetch('/api/link', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url,
      description
    })
  })

  const data: PostLinkResponse = await response.json()

  if (!data.ok) {
    return null
  }

  return data.link
}
