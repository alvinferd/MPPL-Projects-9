import { ThemeProvider } from '@emotion/react'
import { Container, Typography, Link } from '@mui/material'
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
          <Link href="/products" passHref >
            <Typography variant="h6" color="text.tertiary" textAlign="right">
              Lihat lebih banyak
            </Typography>
          </Link>
        </Container>
      </Layout>
    </ThemeProvider>
  )
}