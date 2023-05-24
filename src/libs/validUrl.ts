const expression = /^(https?|http):\/\//
const expression2 = /^(https?:\/\/)(?!.*:\/\/)/
const expression3 = /\.[a-zA-Z]{2,}(?:\/|$)/

export const validUrl = (url: string): string | false => {
  const regex = new RegExp(expression)
  const regex2 = new RegExp(expression2)
  const regex3 = new RegExp(expression3)

  let newUrl = url

  // check if url has http or https and add it if not added
  if (!newUrl.match(regex)) {
    newUrl = 'https://' + url
  }

  // check if url has http or https
  if (!newUrl.match(regex2)) {
    return false
  }

  // check if url has a dot
  if (!newUrl.match(regex3)) {
    return false
  }

  return newUrl
}
