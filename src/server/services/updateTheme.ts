export async function updateTheme(data: { id: number; theme: string }) {
  const { id, theme } = data

  fetch('/api/bio', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      theme
    })
  })
}
