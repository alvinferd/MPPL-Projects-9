import Head from 'next/head'
import { ThemeProvider } from '@emotion/react'
import theme from '../../themes/default'
import Layout from '../../layout/default'
import { Container, Typography, Box, Link as MUILink, Grid } from '@mui/material'
import Link from 'next/link'
import ListCardProduct from '../../components/listCardProducts'

export default function ProductDetail() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Produk Detail | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Typography variant="h6">
                    Home {'>'} Makanan {'>'} Makanan Khas Poncolapak
                </Typography>
                <Container maxWidth="1920" id="list-product" sx={{ width: "fit-content", marginX: 4, marginY: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8} columns={{ xs: 1, sm: 1, md: 3, lg: 3, xl: 12 }}>
                            <Container xs={1} sm={1} md={1} lg={1} xl={1}></Container>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="1920" id="list-product" sx={{ width: "fit-content", marginX: 4, marginY: 4 }}>
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
            </Layout>
        </ThemeProvider>
    )
}