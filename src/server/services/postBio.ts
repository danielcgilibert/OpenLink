export async function postBio(username: string) {
  const response = await fetch('/api/bio', {
    method: 'POST',
    body: JSON.stringify({ username }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()

  return data
}
