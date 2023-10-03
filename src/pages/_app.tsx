import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Nunito_Sans } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { DefaultSeo } from 'next-seo'

import { globalStyles } from '@/styles/global'
import { queryClient } from '@/lib/react-query'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export const nunitoSans = Nunito_Sans({
  subsets: ['latin']
})

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
    <SessionProvider session={session}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://book-wise.vercel.app',
          siteName: 'Book Wise',
        }}
      />
      <div className={`${nunitoSans.className}`}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </SessionProvider>
    </QueryClientProvider>
  )
}
