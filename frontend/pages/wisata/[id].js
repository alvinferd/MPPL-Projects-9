import Head from 'next/head'
import { ThemeProvider } from '@emotion/react'
import theme from '../../themes/default'
import Layout from '../../layout/default'

export default function WisataDetail() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Wisata Detail | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <p>Wisata Detail</p>
            </Layout>
        </ThemeProvider>
    )
}