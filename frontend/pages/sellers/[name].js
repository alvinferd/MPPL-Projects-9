import { ThemeProvider } from "@emotion/react"
import { Box, Button, Container, Grid, Link as MUILink, Typography } from '@mui/material'
import Layout from "../../layout/default"
import theme from "../../themes/default"
import Head from 'next/head'
import CardToko from "../../components/cardToko"
import Toko from "../../utils/dummy/Toko"
import Link from 'next/link'
import ListCardProductSeller from "../../components/listCardProductsSeller"
import ListCardProduct from "../../components/listCardProducts"

export default function SellerDetail() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Nama Toko | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product-terlaris" sx={{ width: "fit-content", marginX: { xs: 1, md:2, lg: 4 }, marginY: 4 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4.5} lg={4} xl={3}>
                            <CardToko id={Toko.id} nama={Toko.nama} displayPicture={Toko.displayPicture} lokasi={Toko.lokasi} contact={Toko.contact} terjual={Toko.terjual} rating={Toko.rating} />
                        </Grid>
                        <Grid item xs={12} md={7.5} lg={8} xl={9}>
                            <Grid container spacing={1} direction="column">
                                <Grid item>
                                    <Typography variant="h5" color="text.primary" gutterBottom>
                                        Produk Terlaris
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <ListCardProductSeller />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="1920" id="list-product-lainnya" sx={{ width: "fit-content", marginX: { xs: 1, md: 4 }, marginY: 4 }}>
                    <Typography variant="h5" color="text.primary" gutterBottom>
                        Produk Lainnya
                    </Typography>
                    <ListCardProduct />
                </Container>
                <Container maxWidth="1920" id="list-product-lainnya-2" sx={{ width: "fit-content", marginX: { xs: 1, md: 4 }, marginY: 4 }}>
                    <ListCardProduct />
                </Container>
                <Container maxWidth="1920" id="button-reload" sx={{ width: "auto", marginX: { xs: 1, md: 4 }, marginY: 4 }}>
                    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
                        <Button variant="outlined" color="secondary" size="large">
                            Muat Lebih Banyak
                        </Button>
                    </Grid>
                </Container>
            </Layout>
        </ThemeProvider>
    )
}