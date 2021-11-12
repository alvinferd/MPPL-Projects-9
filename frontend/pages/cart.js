import { ThemeProvider } from "@emotion/react"
import { Box, Button, Container, Grid, Link as MUILink, Typography } from '@mui/material'
import Layout from "../layout/default"
import theme from "../themes/default"
import Head from 'next/head'
import CartCard from "../components/cardCart"

export default function SellerDetail() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Keranjangmu | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width:'85vw', marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <Typography variant="h6" marginY={3}>
                        <b>Keranjang</b>
                    </Typography>
                    <CartCard />
                </Container>
            </Layout>
        </ThemeProvider>
    )
}