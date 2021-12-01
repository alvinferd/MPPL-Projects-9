import { Box, Container, Grid, Typography, ThemeProvider, TextField, Button, Link as MUILink } from '@mui/material'
import { useForm, Controller } from "react-hook-form";
import Head from 'next/head'
import Image from 'next/image'
import imgLogin from '../../public/images/bg login.png'
import { makeStyles } from '@mui/styles'
import theme from '../../themes/default'
import Link from 'next/link'
import LogoPoncolapak from '../../public/PoncolapakLogo.svg'

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { dispatch } from '../../utils/redux/store';
import { sellerLogin } from '../../utils/redux/slice/user';

const useStyles = makeStyles((theme) => ({
    dimensi: {
        width: "100%",
        height: "100vh",
    },
}));

const onSubmit = (data) => {
    console.log(data);
    dispatch(sellerLogin(data));
};

export default function LoginSeller() {
    const classes = useStyles();
    const { control, handleSubmit } = useForm();
    const router = useRouter();

    const authenticated = useSelector((state) => state.user.authenticated)
    const isUser = useSelector((state) => state.user.current.is_user)
    const isSeller = useSelector((state) => state.user.current.is_seller)

    useEffect(() => {
        if (authenticated) {
            if (isUser) router.replace("/");
            if (isSeller) router.replace("/seller/Home");
        }
    }, [authenticated, isUser, isSeller]);

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Seller Login | Poncolapak</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Grid container spacing={0} alignItems="center" className={classes.dimensi} justifyContent="center">
                <Grid item md={7} lg={8} display={{ xs: "none", md: "grid" }}>
                    <Image
                        src={imgLogin}
                        alt="Banner Login"
                    // layout="responsive"
                    />
                </Grid>
                <Grid item md={5} lg={4}>
                    <Grid container spacing={3} alignItems="center" direction="column" style={{ marginBottom: theme.spacing(2) }} justifyContent="center">
                        {/* <Typography variant="h3" color="text.primary">
                            <b>Login</b>
                        </Typography> */}
                        <Grid item >
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Image
                                    src={LogoPoncolapak}
                                    alt="Logo Poncolapak"
                                    height={30}
                                />
                                <Typography
                                    fontFamily="Poppins"
                                    variant="h6"
                                    noWrap
                                    component="div">
                                    Poncolapak Seller
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item >
                            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", alignItems: "center" }}>
                                <Typography variant="body1" color="text.primary" style={{ marginTop: theme.spacing(4) }}>
                                    Username
                                </Typography>
                                <Grid style={{ marginTop: theme.spacing(1) }}>
                                    <Controller
                                        name="username"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                fullWidth
                                                required
                                                color="secondary"
                                                type="text"
                                                placeholder="Username"
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Typography variant="body1" color="text.primary" style={{ marginTop: theme.spacing(2) }}>
                                    Password
                                </Typography>
                                <Grid style={{ marginTop: theme.spacing(1) }}>
                                    <Controller
                                        name="password"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                fullWidth
                                                required
                                                color="secondary"
                                                type="password"
                                                placeholder="Password"
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Container style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2), display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                                    <Button size="large" type="submit" variant="contained" color="secondary" style={{ width: "40%", marginTop: theme.spacing(2) }}>
                                        Login
                                    </Button>
                                </Container>
                            </form>
                        </Grid>
                        <Grid item >
                            <Container style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2), display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                                <Typography variant="body1" style={{ marginRight: theme.spacing(1) }}>
                                    Belum punya akun?
                                </Typography>
                                <Link href="/seller/signup" passHref >
                                    <MUILink variant="body1" color="text.tertiary" underline="none">
                                        Daftar Disini!
                                    </MUILink>
                                </Link>
                            </Container>
                            <Container style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2), display: "flex", justifyContent: 'center' }}>
                                <Link href="/forget" passHref >
                                    <MUILink variant="body1" color="text.tertiary" underline="none">
                                        Lupa Password?
                                    </MUILink>
                                </Link>
                            </Container>
                        </Grid>
                        <Grid item >
                            <Container style={{ marginTop: theme.spacing(1), marginBottom: theme.spacing(2), display: "flex", justifyContent: 'center' }}>
                                <Link href="/login" passHref >
                                    <MUILink variant="body1" color="text.tertiary" underline="none">
                                        Masuk sebagai pembeli?
                                    </MUILink>
                                </Link>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}