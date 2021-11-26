import Layout from "../layout/default"
import Head from 'next/head'
import { ThemeProvider } from '@emotion/react'
import theme from '../themes/default'
import { Button, Container, Grid, Typography } from "@mui/material"
import CardProfile from "../components/cardProfile"
import { dispatch } from "../utils/redux/store"
import { userLogout } from "../utils/redux/slice/user"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { useEffect } from "react"

const onLogout = () => {
    dispatch(userLogout());
};

export default function Profile() {
    const router = useRouter();

    const authenticated = useSelector((state) => state.user.authenticated)
    const isUser = useSelector((state) => state.user.current.is_user)
    const isSeller = useSelector((state) => state.user.current.is_seller)

    useEffect(() => {
        if (authenticated) {
            // if (isSeller) router.replace("/seller");
        } else {
            router.replace('/login');
        }
    }, [authenticated, isUser, isSeller]);

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Profile | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width: '85vw', marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <Grid container justifyContent='space-between' alignItems='center'>
                        <Grid item>
                            <Typography variant="h6" marginY={3}>
                                <b>Profil Anda</b>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' color='secondary' onClick={onLogout}>
                                Logout
                            </Button>
                        </Grid>
                    </Grid>


                    <CardProfile />
                </Container>
            </Layout>
        </ThemeProvider>
    )
}