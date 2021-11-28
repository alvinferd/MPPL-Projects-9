import * as React from 'react'
import { ThemeProvider } from "@emotion/react"
import { Button, Card, CardContent, Container, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useForm, Controller } from "react-hook-form";
import Layout from "../../../layout/default"
import theme from "../../../themes/default"
import Head from 'next/head'
import { makeStyles } from '@mui/styles'
import { useRouter } from "next/router"

import { useEffect } from "react"
import { useSelector } from "react-redux"
import { dispatch } from '../../../utils/redux/store';
import { cartGetDataCheck } from "../../../utils/redux/slice/cart"
import { alertSetError, alertSetMessage } from '../../../utils/redux/slice/alert';



const useStyles = makeStyles({
    root: {
        boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.4)"
    }
});

export default function PayForm() {

    useEffect(() => {
        dispatch(cartGetDataCheck());
    }, []);

    const MyCartCheckout = useSelector((state) => state.cart.dataCheck);
    const [jenisPengiriman, setJenisPengiriman] = React.useState(0);

    const handleChange = (event) => {
        console.log(event.target.value)
        setJenisPengiriman(event.target.value);
    };

    const onSubmit = (data) => {
        data.jenisPengiriman = jenisPengiriman
        if (data.jenisPengiriman == 0) {
            dispatch(alertSetError(true));
            dispatch(alertSetMessage("Silahkan pilih jenis Pengiriman!"));
        } else {
            console.log(data);
        }
        // dispatch(userLogin(data));
    };

    const router = useRouter();
    const { control, handleSubmit } = useForm();
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Form Pembayaran | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width: '85vw', marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <Typography variant="h6" marginY={3}>
                        <b>Form Pembayaran</b>
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", alignItems: "center" }}>
                        <Grid container spacing={4} direction="row">
                            <Grid item xs={12} md={5.5}>
                                <Typography variant="body1" color="text.primary">
                                    Nama Pembeli *
                                </Typography>
                                <Grid style={{ marginTop: theme.spacing(1) }}>
                                    <Controller
                                        name="namaPembeli"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                fullWidth
                                                required
                                                color="secondary"
                                                type="text"
                                                placeholder="Cth: Berly Setiawan"
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Typography variant="body1" color="text.primary" style={{ marginTop: theme.spacing(4) }}>
                                    Nama Handphone Pembeli *
                                </Typography>
                                <Grid style={{ marginTop: theme.spacing(1) }}>
                                    <Controller
                                        name="noHP"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                fullWidth
                                                required
                                                color="secondary"
                                                type="text"
                                                placeholder="Cth: 089512345678"
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Typography variant="body1" color="text.primary" style={{ marginTop: theme.spacing(4) }}>
                                    Email Pembeli *
                                </Typography>
                                <Grid style={{ marginTop: theme.spacing(1) }}>
                                    <Controller
                                        name="emailPembeli"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                fullWidth
                                                required
                                                color="secondary"
                                                type="text"
                                                placeholder="Cth: berly@gmail.com"
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Typography variant="body1" color="text.primary" style={{ marginTop: theme.spacing(4) }}>
                                    Alamat Lengkap Pembeli *
                                </Typography>
                                <Grid style={{ marginTop: theme.spacing(1) }}>
                                    <Controller
                                        name="alamat"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={4}
                                                required
                                                color="secondary"
                                                type="text"
                                                placeholder="Cth: Jalan Nangka, no 21, RT03 RW03, Margajaya, Bekasi Selatan, Kota Bekasi, Jawa Barat, 17141"
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Typography variant="body1" color="text.primary" style={{ marginTop: theme.spacing(4) }}>
                                    Catatan untuk Penjual *
                                </Typography>
                                <Grid style={{ marginTop: theme.spacing(1) }}>
                                    <Controller
                                        name="catatanPenjual"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: { onChange, value } }) => (
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={4}
                                                required
                                                color="secondary"
                                                type="text"
                                                placeholder="Cth: apelnya harus manis ya :)"
                                                value={value}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Typography variant="body1" color="text.primary" style={{ marginTop: theme.spacing(4) }}>
                                    Pilih Jenis Pengiriman *
                                </Typography>
                                <Grid style={{ marginTop: theme.spacing(1) }}>
                                    <Controller
                                        name="jenisPengiriman"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: { onChange, value } }) => (
                                            <Select
                                                fullWidth
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={jenisPengiriman}
                                                placeholder="Pilih Disini"
                                                required
                                                color="secondary"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={1}>Beda Kota (Rp 15.000)</MenuItem>
                                                <MenuItem value={2}>Beda Provinsi (Rp 20.000)</MenuItem>
                                                <MenuItem value={3}>Beda Pulau (Rp 25.000)</MenuItem>
                                            </Select>
                                        )}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6.5}>
                                <Card className={classes.root} sx={{ maxWidth: 825 }} style={{ height: 'fit-content', boxShadow: 3 }} >
                                    <CardContent style={{ height: 'fit-content', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                                        <Grid container spacing={2} direction="column">
                                            <Grid item>
                                                <Typography>
                                                    <b>List Barang</b>
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                {MyCartCheckout.Carts.map((item) => {
                                                    return (
                                                        <Grid container key={item.id} spacing={2} direction="row">
                                                            <Grid item xs={7}>
                                                                <Typography>
                                                                    {item.namaItem}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={5}>
                                                                <Grid container rowSpacing={0} direction="column" alignItems="end">
                                                                    <Grid item>
                                                                        <Typography>
                                                                            {item.totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Typography>
                                                                            (x{item.quantity})
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    )
                                                })}
                                            </Grid>

                                            <Grid item>
                                                <Grid container spacing={2} direction="row" paddingTop={2}>
                                                    <Grid item xs={7}>
                                                        <Typography>
                                                            <b>Total Biaya</b>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                        <Grid container rowSpacing={0} direction="column" alignItems="end">
                                                            <Grid item>
                                                                <Typography color="text.quaternary">
                                                                    <b>{MyCartCheckout.totalHarga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</b>
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Grid container justifyContent="center">
                                                    <Button type="submit" variant="contained" color="secondary" size="large"
                                                    // onClick={() => router.push(`/cart/pay/confirm`)}
                                                    >
                                                        Bayar
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Layout>
        </ThemeProvider>
    )
}