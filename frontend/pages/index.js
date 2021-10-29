import { ThemeProvider } from '@emotion/react'
import Head from 'next/head'
import Layout from '../layout/default'
import theme from '../themes/default'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <title>Poncolapak</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Layout>
    </ThemeProvider>
  )
}
