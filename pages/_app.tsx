import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { globalStyles } from '@/root/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
