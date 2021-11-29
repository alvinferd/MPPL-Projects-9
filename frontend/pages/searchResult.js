import { ThemeProvider } from "@emotion/react"
import { Breadcrumbs, Button, Container, Grid, Link as MUILink, Typography } from '@mui/material'
import Layout from "../layout/default"
import theme from "../themes/default"
import Head from 'next/head'
import CardProduct from "../components/cardProduct"
import ApiURL from "../utils/constant"
import { useSelector } from "react-redux"

export default function SearchResult() {
    const result = useSelector((state) => state.search.searchResult);
    // console.log(result);
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Semua Produk | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width: '85vw', marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Breadcrumbs separator="›" color="text.primary" aria-label="breadcrumb">
                                <MUILink underline="hover" href="/" color="text.primary">
                                    Home
                                </MUILink>
                                <Typography color="text.quaternary">Hasil Pencarian</Typography>
                            </Breadcrumbs>
                        </Grid>
                        {result.length >= 1
                            ?
                            result.map(product => {
                                return (
                                    <Grid item key={product.id} columns={60} xs={30} md={20} lg={15} xl={12}>
                                        <CardProduct id={product.id} images={ApiURL + product.image} name={product.title} description={product.description} price={product.harga} rating={product.rating} />
                                    </Grid>
                                )
                            })
                            :
                            <Grid item xs={12}>
                                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%', paddingTop: 4 }}>
                                    <Typography>
                                        Produk yang anda cari tidak ditemukan!, silahkan masukan keyword lainnya!
                                    </Typography>
                                </Grid>
                            </Grid>
                        }
                        {/* <Grid item xs={12}>
                            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%', paddingTop: 4 }}>
                                <Button variant="outlined" color="secondary" size="large">
                                    Muat Lebih Banyak
                                </Button>
                            </Grid>
                        </Grid> */}
                    </Grid>
                </Container>
            </Layout>
        </ThemeProvider >
    )
}

export async function getServerSideProps() {
    const response = await fetch(`http://103.41.205.191:10001/api/v1/product/allNoWisata`);
    const dataProducts = await response.json();

    return {
        props: {
            dataProducts,
        },
    };
}