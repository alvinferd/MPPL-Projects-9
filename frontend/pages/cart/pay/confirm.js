import { ThemeProvider } from "@emotion/react"
import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import Layout from "../../../layout/default"
import theme from "../../../themes/default"
import Head from 'next/head'
import { makeStyles } from '@mui/styles'
import { useRouter } from "next/router"
import { red } from "@mui/material/colors"

import { useSelector } from "react-redux"
import { dispatch } from '../../../utils/redux/store';
import { makeOrderSet } from '../../../utils/redux/slice/order';

const useStyles = makeStyles({
    root: {
        boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.4)"
    }
});

export default function ConfirmPay() {
    const MyCartCheckout = useSelector((state) => state.cart.dataCheck);
    const DetailsOrder = useSelector((state) => state.order.makeOrder);
    console.log(DetailsOrder);

    const classes = useStyles();
    const router = useRouter();
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Detail Pembayaran | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width: '85vw', marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <Typography variant="h6" marginY={3}>
                        <b>Detail Pembayaran</b>
                    </Typography>
                    <Card className={classes.root} sx={{ maxWidth: 1546 }} style={{ height: 'fit-content', boxShadow: 3 }} >
                        <CardContent style={{ height: 'fit-content', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                            <Grid container spacing={4} direction="column" paddingX={4}>
                                <Grid item>
                                    <Grid container spacing={2} direction="row">
                                        <Grid item xs={12} lg={6}>
                                            <Grid container spacing={2} direction="row" columns={11}>
                                                <Grid item xs={11}>
                                                    <Typography variant="h6">
                                                        <b>Data Pengirim</b>
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="body1">
                                                        Nama Pembeli
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="body1">
                                                        : {DetailsOrder.namaPembeli}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="body1">
                                                        Nomor Handphone Pembeli
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="body1">
                                                        : {DetailsOrder.noHP}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="body1">
                                                        Email Pembeli
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="body1">
                                                        : {DetailsOrder.emailPembeli}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="body1">
                                                        Alamat Pembeli
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="body1">
                                                        : {DetailsOrder.alamat}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>


                                        <Grid item xs={12} lg={6}>
                                            <Grid container spacing={2} direction="row" columns={11}>
                                                <Grid item xs={11}>
                                                    <Typography variant="h6">
                                                        <b>Data Pembelian</b>
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={5}>
                                                    <Typography variant="body1">
                                                        Nama Produk
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Grid container>
                                                        {MyCartCheckout.Carts.map((item, index) => {
                                                            if (index == 0) {
                                                                return (
                                                                    <Typography key={item.id} variant="body1">
                                                                        : {item.namaItem},
                                                                    </Typography>
                                                                )
                                                            } else if (index == MyCartCheckout.Carts.length - 1) {
                                                                return (
                                                                    <Typography key={item.id} variant="body1">
                                                                        &nbsp;{item.namaItem}
                                                                    </Typography>
                                                                )
                                                            } else {
                                                                return (
                                                                    <Typography key={item.id} variant="body1">
                                                                        &nbsp;{item.namaItem},
                                                                    </Typography>
                                                                )
                                                            }
                                                        })}
                                                    </Grid>

                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="body1">
                                                        Jumlah Produk
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="body1">
                                                        : {MyCartCheckout.Carts.length}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="body1">
                                                        Total Pembayaran
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="body1" color={red[500]}>
                                                        : {MyCartCheckout.totalHarga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <Grid container spacing={2} direction="column">
                                        <Grid item>
                                            <Typography>
                                                <b>Catatan dari kami</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color={red[500]}>
                                                <b>Untuk melakukan pembayaran silahkan hubungi penjual terlebih dahulu </b>, setelah anda klik tombol konfirmasi kami akan meminta anda untuk upload bukti transfer kepada penjual. <b>Anda memiliki waktu 1x24 jam untuk melakukan pembayaran.</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <Grid container justifyContent="center">
                                        <Button variant="contained" color="secondary" size="large"
                                            onClick={() => router.push(`/order/pending`)}
                                        >
                                            Konfirmasi
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </Layout>
        </ThemeProvider>
    )
}