import { ThemeProvider } from "@emotion/react"
import { Breadcrumbs, Button, Container, Grid, Link as MUILink, Typography } from '@mui/material'
import Layout from "../../layout/default"
import theme from "../../themes/default"
import Head from 'next/head'
import ListCardProduct from "../../components/listCardProducts"

export default function AllProductPage() {
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
                                <Typography color="text.quaternary">Produk Poncolapak</Typography>
                            </Breadcrumbs>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <ListCardProduct />
                        </Grid>
                        <Grid item xs={12}>
                            <ListCardProduct />
                        </Grid>
                        <Grid item xs={12}>
                            <ListCardProduct />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%', paddingTop: 4 }}>
                                <Button variant="outlined" color="secondary" size="large">
                                    Muat Lebih Banyak
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Layout>
        </ThemeProvider>
    )
}