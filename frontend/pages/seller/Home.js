import { ThemeProvider } from "@emotion/react"
import { Box, Button, Card, CardContent, CardActionArea, Container, Grid, Link as MUILink, Typography, CardMedia } from '@mui/material'
import LayoutSeller from "../../layout/defaultSeller"
import theme from "../../themes/default"
import Head from 'next/head'
import CardTokoSeller from "../../components/cardTokoSeller"
import Toko from "../../utils/dummy/Toko"
import Link from 'next/link'
import ListCardProductSeller from "../../components/listCardProductsSeller"
import ListCardProduct from "../../components/listCardProducts"
import { makeStyles } from '@mui/styles'
import Report from "../../utils/dummy/Report"
import { useEffect } from "react"
import router from "next/router"
import { dispatch } from "../../utils/redux/store"
import { useSelector } from "react-redux"

const useStyles = makeStyles({
    root: {
        boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.4)"
    }
});

export default function Home() {
    const authenticated = useSelector((state) => state.user.authenticated)
    const isUser = useSelector((state) => state.user.current.is_user)
    const isSeller = useSelector((state) => state.user.current.is_seller)

    useEffect(() => {
        if (authenticated) {
            if (isUser) router.replace("/");
        } else {
            router.replace('/login');
        }
    }, [authenticated, isUser, isSeller]);

    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <LayoutSeller>
                <Head>
                    <title>Nama Toko | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Grid container spacing={4} mt={1}>
                    <CardTokoSeller id={Toko.id} nama={Toko.nama} displayPicture={Toko.displayPicture} lokasi={Toko.lokasi} contact={Toko.contact} terjual={Toko.terjual} rating={Toko.rating} />
                    <Grid item xs={8}>
                        <Typography variant="h6">
                            <b> Fitur </b>
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Link href="/seller/products" passHref >
                                    <Card>
                                        <CardActionArea sx={{ height: "inherit", display: 'flex' }}>
                                            <Grid item xs={4}>
                                                <Typography variant="button">
                                                    Produk
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={5}>
                                                <CardMedia
                                                    component="img"
                                                    image="/images/box.png"
                                                    alt="box"
                                                    height={100}
                                                    width={100}
                                                />
                                            </Grid>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Link href="/seller/orders" passHref >
                                    <Card>
                                        <CardActionArea sx={{ height: "inherit", display: 'flex' }}>
                                            <Grid item xs={4}>
                                                <Typography variant="button">
                                                    Pesanan
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={5}>
                                                <CardMedia
                                                    component="img"
                                                    image="/images/ArrowFatLineDown.png"
                                                    alt="arrow"
                                                    height={100}
                                                    width={100}
                                                />
                                            </Grid>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Link href="/seller/orders" passHref >
                                    <Card>
                                        <CardActionArea sx={{ height: "inherit", display: 'flex' }}>
                                            <Grid item xs={5} mr={1}>
                                                <Typography variant="button">
                                                    Pengiriman
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={5}>
                                                <CardMedia
                                                    component="img"
                                                    image="/images/Truck.png"
                                                    alt="arrow"
                                                    height={100}
                                                    width={100}
                                                />
                                            </Grid>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} mt={1}>
                            <Grid item xs={10}>
                                <Typography variant="h6">
                                    <b> Yang Perlu Dilakukan </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardContent>
                                        <Grid container alignItems="center" justifyContent="center" direction='column'>
                                            <Typography variant="h6" >
                                                <b>{Report.BelumBayar}</b>
                                            </Typography>
                                            <Typography variant="h7">
                                                Belum Bayar
                                            </Typography>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardContent>
                                        <Grid container alignItems="center" justifyContent="center" direction='column'>
                                            <Typography variant="h6">
                                                <b>{Report.PerluDiproses}</b>
                                            </Typography>
                                            <Typography variant="h7">
                                                Pengiriman Perlu Diproses
                                            </Typography>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardContent>
                                        <Grid container alignItems="center" justifyContent="center" direction='column'>
                                            <Typography variant="h6">
                                                <b>{Report.TelahDiproses}</b>
                                            </Typography>
                                            <Typography variant="h7">
                                                Pengiriman Telah Diproses
                                            </Typography>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} mt={1}>
                            <Grid item xs={10}>
                                <Typography variant="h6">
                                    <b> Detail Toko </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardContent>
                                        <Grid container alignItems="center" justifyContent="center" direction='column'>
                                            <Typography variant="h6">
                                                <b>{Report.TotalProduk}</b>
                                            </Typography>
                                            <Typography variant="h7">
                                                Total Produk
                                            </Typography>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardContent>
                                        <Grid container alignItems="center" justifyContent="center" direction='column'>
                                            <Typography variant="h6">
                                                <b>{Report.TotalPenjualan}</b>
                                            </Typography>
                                            <Typography variant="h7">
                                                Total Penjualan
                                            </Typography>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardContent>
                                        <Grid container alignItems="center" justifyContent="center" direction='column'>
                                            <Typography variant="h6">
                                                <b>{Report.PenjualanBulanIni}</b>
                                            </Typography>
                                            <Typography variant="h7">
                                                Penjualan Bulan Ini
                                            </Typography>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </LayoutSeller>
        </ThemeProvider>
    )
}