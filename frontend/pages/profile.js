import Layout from "../layout/default"
import Head from 'next/head'
import { ThemeProvider } from '@emotion/react'
import theme from '../themes/default'

export default function Profile() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Profile | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <p>Profile Page</p>
            </Layout>
        </ThemeProvider>
    )
}