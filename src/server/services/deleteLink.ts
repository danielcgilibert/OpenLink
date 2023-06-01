export async function deleteLink(id: number) {
  const response = await fetch(`/api/link/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()
}
