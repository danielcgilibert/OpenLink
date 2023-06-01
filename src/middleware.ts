export { default } from 'next-auth/middleware'
// import { getToken } from 'next-auth/jwt'
// import { withAuth } from 'next-auth/middleware'
// import { type NextRequest, NextResponse } from 'next/server'

// export default withAuth(async function middleware(req) {
//   const token = await getToken({ req })
//   // if token exists, !!token will be true
//   const isAuthenticated = !!token

//   console.log(req.nextUrl.pathname)

//   // first, check if the current path is login page
//   if (!req.nextUrl.pathname.startsWith('/dashboard')) {
//     // I am in "login" page now  I check if the user is authenticated or not
//     if (isAuthenticated) {
//       // If I get here it means user is on "login" page and it is authenticated. then redirect it to whatever url
//       console.log(req.nextUrl.origin)

//       return NextResponse.redirect(new URL('/dashboard', req.url))
//     }
//   }
// })

export const config = { matcher: ['/dashboard', '/create-bio'] }
