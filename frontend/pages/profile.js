import Layout from "../layout/default"
import Head from 'next/head'
import { ThemeProvider } from '@emotion/react'
import theme from '../themes/default'
import { Container, Typography } from "@mui/material"
import CardProfile from "../components/cardProfile"

export default function Profile() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Profile | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width: '85vw', marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <Typography variant="h6" marginY={3}>
                        <b>Profil Anda</b>
                    </Typography>
                    <CardProfile />
                </Container>
            </Layout>
        </ThemeProvider>
    )
}