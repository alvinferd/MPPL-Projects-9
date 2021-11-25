import { Box, Container, Grid, Typography, ThemeProvider, TextField, Button, Link as MUILink } from '@mui/material'
import { useForm, Controller } from "react-hook-form";
import Head from 'next/head'
import Image from 'next/image'
import imgLogin from '../public/images/bg login.png'
import { makeStyles } from '@mui/styles'
import theme from '../themes/default'
import Link from 'next/link'
import LogoPoncolapak from '../public/PoncolapakLogo.svg'

const useStyles = makeStyles((theme) => ({
    dimensi: {
        width: "100%",
        height: "100vh",
    },
}));

const onSubmit = (data) => {
    console.log(data);
    // dispatch(userLogin(data));
};

export default function SignUp() {
    const classes = useStyles();
    const { control, handleSubmit } = useForm();
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>SignUp | Poncolapak</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Grid container spacing={0} alignItems="center" className={classes.dimensi} justifyContent="center">
                <Grid item md={7} lg={8} display={{ xs: "none", md: "grid" }}>
                    <Image
                        src={imgLogin}
                        alt="Banner Login"
                    />
                </Grid>
                <Grid item md={5} lg={4}>
                    <Grid container alignItems="center" direction="column" style={{ marginBottom: theme.spacing(2) }} justifyContent="center">
                        {/* <Typography variant="h3" color="text.primary">
                            <b>Sign Up</b>
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
                                    Poncolapak
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item >
                            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", alignItems: "center" }}>
                                <Typography variant="body1" color="text.primary" style={{ marginTop: theme.spacing(4) }}>
                                    Nama Lengkap
                                </Typography>
                                <Grid style={{ marginTop: theme.spacing(1) }}>
                                    <Controller
                                        name="nama_lengkap"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                fullWidth
                                                required
                                                color="secondary"
                                                type="text"
                                                placeholder="Nama Lengkap"
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Typography variant="body1" color="text.primary" style={{ marginTop: theme.spacing(2) }}>
                                    Email
                                </Typography>
                                <Grid style={{ marginTop: theme.spacing(1) }}>
                                    <Controller
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                fullWidth
                                                required
                                                color="secondary"
                                                type="text"
                                                placeholder="Email"
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Typography variant="body1" color="text.primary" style={{ marginTop: theme.spacing(2) }}>
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
                                <Typography variant="body1" color="text.primary" style={{ marginTop: theme.spacing(2) }}>
                                    Konfirmasi Password
                                </Typography>
                                <Grid style={{ marginTop: theme.spacing(1) }}>
                                    <Controller
                                        name="confirm_password"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                fullWidth
                                                required
                                                color="secondary"
                                                type="password"
                                                placeholder="Konfirmasi Password"
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Container style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2), display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                                    <Button size="large" type="submit" variant="contained" color="secondary" style={{ width: "70%", marginTop: theme.spacing(2) }}>
                                        Sign Up
                                    </Button>
                                </Container>
                            </form>
                        </Grid>
                        <Grid item >
                            <Container style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2), display: "flex", flexDirection: "row", justifyContent: 'center' }}>
                                <Typography variant="body1" style={{ marginRight: theme.spacing(1) }}>
                                    Sudah punya akun?
                                </Typography>
                                <Link href="/login" passHref >
                                    <MUILink variant="body1" color="text.tertiary" underline="none">
                                        Masuk Disini!
                                    </MUILink>
                                </Link>
                            </Container>
                        </Grid>
                        <Grid item >
                            <Container style={{ marginTop: theme.spacing(1), marginBottom: theme.spacing(2), display: "flex", justifyContent: 'center' }}>
                                <Link href="/seller/login" passHref >
                                    <MUILink variant="body1" color="text.tertiary" underline="none">
                                        Masuk sebagai penjual?
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