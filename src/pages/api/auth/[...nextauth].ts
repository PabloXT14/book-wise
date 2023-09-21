import { PrismaAdapter } from '@/lib/auth/prismaAdapter'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import GithubProvider, { GithubProfile } from "next-auth/providers/github"

export function buildNextAuthOption(
  req: NextApiRequest,
  res: NextApiResponse,
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            avatar_url: profile.picture,
          }
        }
      }),

      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID ?? '',
        clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
        profile(profile: GithubProfile) { // informações do usuário que queremos retornar
          return {
            id: profile.id,
            name: profile.name!,
            email: profile.email!,
            avatar_url: profile.avatar_url,
          }
        }
      }),
    ],

    callbacks: {
       // Função de callback que retorna os dados da sessão e do usuário autenticado (inclusive no Server Side)
      async session({ session, user}) {
        return {
          ...session,
          user,
        }
      }
    }
  }
}
export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, buildNextAuthOption(req, res))
}