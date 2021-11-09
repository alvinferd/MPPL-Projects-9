import { ThemeProvider } from "@emotion/react"
import Layout from "../../layout/default"
import theme from "../../themes/default"
import Head from 'next/head'
import CardToko from "../../components/cardToko"

export default function SellerDetail() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Nama Toko | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <CardToko />
            </Layout>
        </ThemeProvider>
    )
}