import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Nunito_Sans } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

export const nunitoSans = Nunito_Sans({
  subsets: ['latin']
})

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className={`${nunitoSans.className}`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
