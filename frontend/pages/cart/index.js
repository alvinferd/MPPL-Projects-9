import { ThemeProvider } from "@emotion/react"
import { Container, Typography } from '@mui/material'
import Layout from "../../layout/default"
import theme from "../../themes/default"
import Head from 'next/head'
import CartCard from "../../components/cardCart"

import { useEffect } from "react";
import { useRouter } from "next/router"
import { useSelector } from "react-redux";
import { dispatch } from '../../utils/redux/store'
import { cartGetData, cartGetDataCheck } from "../../utils/redux/slice/cart"

export default function Cart() {
    dispatch(cartGetData());
    dispatch(cartGetDataCheck());
    const router = useRouter();
    // CHECK AUTH
    const authenticated = useSelector((state) => state.user.authenticated)
    const isUser = useSelector((state) => state.user.current.is_user)
    const isSeller = useSelector((state) => state.user.current.is_seller)

    useEffect(() => {
        if (authenticated) {
            // dispatch(cartGetData());
            if (isSeller) router.replace("/seller");
        } else {
            router.replace('/login');
        }
    }, [authenticated, isUser, isSeller]);

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Keranjangmu | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width: '85vw', marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <Typography variant="h6" marginY={3}>
                        <b>Keranjang</b>
                    </Typography>
                    <CartCard />
                </Container>
            </Layout>
        </ThemeProvider>
    )
}