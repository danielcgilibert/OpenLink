import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { AuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'

const prisma = new PrismaClient()

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
