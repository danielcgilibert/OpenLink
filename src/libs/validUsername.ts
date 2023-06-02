export function validUsername(username: string): boolean {
  const regex = /^[a-z]+$/

  return regex.test(username)
}
