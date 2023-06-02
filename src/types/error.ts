// export interface iError {
//   name: string
//   errorMessage: keyof typeof ErrorResponse
// }

export enum ErrorMessage {
  linkNotFound = 'link not found',
  bioNotFound = 'bio not found',
  bioIsRequired = 'bio is required',
  bioExists = 'Bio already exists',
  userNotFound = 'user not found',
  invalidUrl = 'invalid url',
  genericMessage = 'something went wrong'
}
