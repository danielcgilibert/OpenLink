export async function updateLink(data: {
  id: number
  debonuceValue: string
  type: 'url' | 'text'
}) {
  const { id, debonuceValue, type } = data

  console.log('updateLink', id, debonuceValue, type)

  fetch('/api/link', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      input: debonuceValue,
      type
    })
  })
}
