import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Nunito_Sans } from 'next/font/google'

export const nunitoSans = Nunito_Sans({
  subsets: ['latin']
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${nunitoSans.className}`}>
      <Component {...pageProps} />
    </div>
  )
}
