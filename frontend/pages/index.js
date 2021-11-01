import { ThemeProvider } from '@emotion/react'
import { Container, Typography, Link as MUILink, Box } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import ListCardProduct from '../components/listCardProducts'
import ListCardWisata from '../components/listCardWisata'
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
        <Container maxWidth="1920" id="list-product" sx={{width: "fit-content"}}>
          <Typography variant="h5" color="text.primary" gutterBottom>
            Produk
          </Typography>
          <ListCardProduct />
          <Box display="flex" flexDirection="row" justifyContent="right">
            <Link href="/products" passHref >
              <MUILink variant="h6" underline="none" color="text.tertiary">
                Lihat lebih banyak
              </MUILink>
            </Link>
          </Box>
        </Container>
        <Container maxWidth="1920" id="list-wisata">
          <Typography variant="h5" color="text.primary" gutterBottom>
            Wisata
          </Typography>
          <ListCardWisata />
          <Box display="flex" flexDirection="row" justifyContent="right">
            <Link href="/wisata" passHref >
              <MUILink variant="h6" underline="none" color="text.tertiary">
                Lihat lebih banyak
              </MUILink>
            </Link>
          </Box>
        </Container>
      </Layout>
    </ThemeProvider>
  )
}