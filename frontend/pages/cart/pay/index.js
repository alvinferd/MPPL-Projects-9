import * as React from 'react'
import { ThemeProvider } from "@emotion/react"
import { Button, Card, CardContent, Container, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useForm, Controller } from "react-hook-form";
import Layout from "../../../layout/default"
import theme from "../../../themes/default"
import Head from 'next/head'
import { makeStyles } from '@mui/styles'
import { useRouter } from "next/router"

const onSubmit = (data) => {
    console.log(data);
    // dispatch(userLogin(data));
};

const useStyles = makeStyles({
    root: {
        boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.4)"
    }
});

export default function PayForm() {
    const [jenisPengiriman, setJenisPengiriman] = React.useState('');

    const handleChange = (event) => {
        setJenisPengiriman(event.target.value);
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
                                        name="nama-pembeli"
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
                                        name="nohp-pembeli"
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
                                        name="email-pembeli"
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
                                        name="alamat-lengkap-pembeli"
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
                                        name="catatan-pembeli"
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
                                        name="jenis-pengiriman"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: { onChange, value } }) => (
                                            <Select
                                                fullWidth
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={jenisPengiriman}
                                                placeholder="Pilih Disini"
                                                color="secondary"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={1}>Jenis 1</MenuItem>
                                                <MenuItem value={2}>Jenis 2</MenuItem>
                                                <MenuItem value={3}>Jenis 3</MenuItem>
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
                                                <Grid container spacing={2} direction="row">
                                                    <Grid item xs={7}>
                                                        <Typography>
                                                            Apel Poncokusumo Toko Abdi Makmur Super Manis
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                        <Grid container rowSpacing={0} direction="column" alignItems="end">
                                                            <Grid item>
                                                                <Typography>
                                                                    RP 1.000.000
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography>
                                                                    X2
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={7}>
                                                        <Typography>
                                                            Apel Poncokusumo Toko Abdi Makmur Super Manis
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                        <Grid container rowSpacing={0} direction="column" alignItems="end">
                                                            <Grid item>
                                                                <Typography>
                                                                    RP 1.000.000
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography>
                                                                    X2
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={7}>
                                                        <Typography>
                                                            Biaya Admin
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                        <Grid container rowSpacing={0} direction="column" alignItems="end">
                                                            <Grid item>
                                                                <Typography>
                                                                    RP 25.000
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={7}>
                                                        <Typography>
                                                            Biaya Pengiriman
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                        <Grid container rowSpacing={0} direction="column" alignItems="end">
                                                            <Grid item>
                                                                <Typography>
                                                                    RP 25.000
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
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
                                                                <Typography color="text.secondary">
                                                                    <b>RP 1.050.000</b>
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