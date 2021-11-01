import { ThemeProvider } from '@emotion/react'
import { Container, Typography } from '@mui/material'
import Head from 'next/head'
import ListCardProduct from '../components/listCardProducts'
import Layout from '../layout/default'
import theme from '../themes/default'

export default function Home({ dataProduct }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <title>Poncolapak</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container maxWidth="1920">
          <Typography variant="h5" color="text.primary" gutterBottom>
            Produk
          </Typography>
          <ListCardProduct />
        </Container>
      </Layout>
    </ThemeProvider>
  )
}