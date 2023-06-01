export interface iError {
  name: string
  errorMessage: keyof typeof ErrorResponse
}

export enum ErrorResponse {
  linkNotFound = 'link not found',
  bioNotFound = 'bio not found',
  userNotFound = 'user not found',
  invalidUrl = 'invalid url'
}
