import { ThemeProvider } from "@emotion/react"
import { Button, Card, CardContent, Container, Grid, Input, Typography } from '@mui/material'
import Layout from "../../layout/default"
import theme from "../../themes/default"
import Head from 'next/head'
import Image from 'next/image'
import { makeStyles } from '@mui/styles'
import { useRouter } from "next/router"
import { useForm, Controller } from "react-hook-form";
import { red } from "@mui/material/colors"

const useStyles = makeStyles({
    root: {
        boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.4)"
    }
});

const onSubmit = (data) => {
    console.log(data);
    // dispatch(userLogin(data));
};

export default function OrderPending() {
    const { control, handleSubmit } = useForm();

    const classes = useStyles();
    const router = useRouter();
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Selesaikan Pembayaran | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width: '85vw', marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <Typography variant="h6" marginY={3}>
                        <b>Upload Pembayaran</b>
                    </Typography>
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", alignItems: "center" }}>
                                <Card className={classes.root} sx={{ maxWidth: 1546 }} style={{ height: 'fit-content', boxShadow: 3 }} >
                                    <CardContent style={{ height: 'fit-content', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                                        <Grid container spacing={2} direction="row">
                                            <Grid item xs={3.5} md={2} lg={1} sx={{ position: 'relative' }}>
                                                <Image
                                                    src="/images/apel.png"
                                                    alt="Apel"
                                                    height={138}
                                                    width={156}
                                                // layout='fill'
                                                // objectFit='fill'
                                                />
                                            </Grid>
                                            <Grid item xs={8.5} md={5} lg={5.5}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12}>
                                                        <Typography>
                                                            Apel Poncokusumo Toko Abdi Makmur Super Manis
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography>
                                                            Total Pembayaran : RP 1.050.000
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} md={5} lg={5.5}>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <label htmlFor="contained-button-file">
                                                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                                            {/* <Button variant="contained" component="span">
                                                    Upload
                                                </Button> */}
                                                        </label>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="body2" color={red[500]}>
                                                            Ukuran maksimum file : 2MB, Format file : PDF, JPG, JPEG, PNG.
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container justifyContent="center" paddingTop={4}>
                                            <Button type="submit" variant="contained" color="secondary" size="large"
                                            // onClick={() => router.push(`/cart/pay/confirm`)}
                                            >
                                                Konfirmasi
                                            </Button>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </form>
                        </Grid>
                        <Grid item>
                            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", alignItems: "center" }}>
                                <Card className={classes.root} sx={{ maxWidth: 1546 }} style={{ height: 'fit-content', boxShadow: 3 }} >
                                    <CardContent style={{ height: 'fit-content', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                                        <Grid container spacing={2} direction="row">
                                            <Grid item xs={3.5} md={2} lg={1} sx={{ position: 'relative' }}>
                                                <Image
                                                    src="/images/apel.png"
                                                    alt="Apel"
                                                    height={138}
                                                    width={156}
                                                // layout='fill'
                                                // objectFit='fill'
                                                />
                                            </Grid>
                                            <Grid item xs={8.5} md={5} lg={5.5}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12}>
                                                        <Typography>
                                                            Apel Poncokusumo Toko Abdi Makmur Super Manis
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography>
                                                            Total Pembayaran : RP 1.050.000
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} md={5} lg={5.5}>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <label htmlFor="contained-button-file">
                                                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                                            {/* <Button variant="contained" component="span">
                                                    Upload
                                                </Button> */}
                                                        </label>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="body2" color={red[500]}>
                                                            Ukuran maksimum file : 2MB, Format file : PDF, JPG, JPEG, PNG.
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container justifyContent="center" paddingTop={4}>
                                            <Button type="submit" variant="contained" color="secondary" size="large" disabled
                                            // onClick={() => router.push(`/cart/pay/confirm`)}
                                            >
                                                Konfirmasi
                                            </Button>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </form>
                        </Grid>
                    </Grid>

                </Container>
            </Layout>
        </ThemeProvider>
    )
}