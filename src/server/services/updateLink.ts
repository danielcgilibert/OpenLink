export async function updateLink(
  id: number,
  value: string,
  type: 'url' | 'text'
) {
  fetch('/api/link', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      input: value,
      type
    })
  })
}
