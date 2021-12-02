import { ThemeProvider } from '@emotion/react'
import { Container, Typography, Link as MUILink, Box } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import GridCategory from '../components/gridCategory'
import ListCardProduct from '../components/listCardProducts'
import ListCardWisata from '../components/listCardWisata'
import Layout from '../layout/default'
import theme from '../themes/default'
import { CarouselItems } from '../utils/dummy/Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import styles from '../styles/Home.module.css'

export default function Home({ dataProducts, dataWisata, dataCategory }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <title>Poncolapak</title>
          <meta name="viewport" httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container maxWidth="1788px" id="carousel-images" sx={{ height: { xl: "668px" }, width: { xl: "1788px" }, marginY: 4 }}>
          <Carousel autoPlay infiniteLoop interval={3000} showStatus={false} showThumbs={false} >
            {CarouselItems.map(item => {
              return (
                <div key={item.id} style={{ position: 'relative', borderRadius: '50px', overflow: 'hidden' }}>
                  <Image src={item.img}
                    alt={item.name}
                    height={668}
                    width={1788}
                  />
                  <div className={styles.legend}>
                    <Typography variant="h4" fontFamily="Poppins" color="#FFFFFF">
                      {item.name}
                    </Typography>
                    <Typography variant="h5" fontFamily="Poppins" color="#FFFFFF">
                      {item.desc}
                    </Typography>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </Container>
        <Container maxWidth="1920" id="list-product" sx={{ width:'85vw', marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
          <Typography variant="h5" color="text.primary" gutterBottom>
            Produk
          </Typography>
          <ListCardProduct dataProducts={dataProducts} />
          <Box display="flex" flexDirection="row" justifyContent="right" sx={{ paddingTop: 1 }}>
            <Link href="/products" passHref >
              <MUILink variant="h6" underline="none" color="text.tertiary">
                Lihat lebih banyak
              </MUILink>
            </Link>
          </Box>
        </Container>
        <Container maxWidth="1920" id="list-kategori" sx={{ width: "85vw", marginX: { xs: 1, md: 4 }, marginTop: 4, marginBottom: 8 }}>
          <Typography variant="h5" color="text.primary" gutterBottom>
            Kategori
          </Typography>
          <GridCategory dataCategory={dataCategory}/>
        </Container>
        <Container maxWidth="1920" id="list-wisata" sx={{ width: "85vw", marginX: { xs: 1, md: 4 }, marginY: 4 }}>
          <Typography variant="h5" color="text.primary" gutterBottom>
            Wisata
          </Typography>
          <ListCardWisata dataWisata={dataWisata} />
          <Box display="flex" flexDirection="row" justifyContent="right" sx={{ paddingTop: 1 }}>
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

export async function getServerSideProps() {
  const response = await fetch(`http://103.41.205.191:10001/api/v1/product/allNoWisata`);
  const response2 = await fetch(`http://103.41.205.191:10001/api/v1/product/categoryProduct/1`);
  const response3 = await fetch(`http://103.41.205.191:10001/api/v1/category/allCategorys`);
  const jsonProducts = await response.json();
  const jsonWisata = await response2.json();
  const jsonCategory = await response3.json();

  return {
    props: {
      dataProducts: jsonProducts.Products,
      dataWisata: jsonWisata.Products,
      dataCategory: jsonCategory.Categorys,
    },
  };
}