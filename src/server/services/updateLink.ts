export async function updateLink(data: {
  id: number
  inputValue: string
  type: 'url' | 'text'
}) {
  const { id, inputValue, type } = data

  fetch('/api/link', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      input: inputValue,
      type
    })
  })
}
