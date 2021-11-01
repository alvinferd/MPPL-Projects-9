import { ThemeProvider } from '@emotion/react'
import { Container, Typography, Link as MUILink, Box, Paper, Button } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'
import GridCategory from '../components/gridCategory'
import ListCardProduct from '../components/listCardProducts'
import ListCardWisata from '../components/listCardWisata'
import Layout from '../layout/default'
import theme from '../themes/default'
import { CarouselItems } from '../utils/dummy/Carousel';

export default function Home() {
  function Item(props) {
    return (
      <Image src={props.item.img}
        alt={props.item.name}
        height={668}
        width={1788}
        // layout="fill"
        // objectFit="cover"
        styles={{ borderRadius: '50px' }}
        />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <title>Poncolapak</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container maxWidth="1920" id="carousel-images" sx={{ width: { xl: "1788" }, height: { xl: "668" }, marginY: 4 }} style={{borderRadius: '50px', overflow: 'hidden'}}>
          <Carousel sx={{display: 'flex', justifyContent:'center', flexDirection: 'row'}}>
            {
              CarouselItems.map((item, i) => <Item key={i} item={item} />)
            }
          </Carousel>
        </Container>
        <Container maxWidth="1920" id="list-product" sx={{ width: "fit-content", marginX: 0, marginY: 4 }}>
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
        <Container maxWidth="1920" id="list-kategori" sx={{ width: "fit-content", marginX: 0, marginY: 4 }}>
          <Typography variant="h5" color="text.primary" gutterBottom>
            Kategori
          </Typography>
          <GridCategory />
        </Container>
        <Container maxWidth="1920" id="list-wisata" sx={{ width: "fit-content", marginX: 0, marginY: 4 }}>
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