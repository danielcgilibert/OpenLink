export async function postBio(bioUrl: string) {
  const response = await fetch('/api/bio', {
    method: 'POST',
    body: JSON.stringify({ bioUrl }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()

  return data
}
