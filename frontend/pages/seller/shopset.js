import { ThemeProvider } from "@emotion/react"
import { Box, Button, Card, CardContent, CardActionArea, Container, Grid, Link as MUILink, Typography, CardMedia, TextField } from '@mui/material'
import LayoutSeller from "../../layout/defaultSeller"
import theme from "../../themes/default"
import Head from 'next/head'
import CardTokoSeller from "../../components/cardTokoSeller"
import Toko from "../../utils/dummy/Toko"
import Link from 'next/link'
import ListCardProductSeller from "../../components/listCardProductsSeller"
import ListCardProduct from "../../components/listCardProducts"
import image from "../../public/images/box.png"
import { makeStyles } from '@mui/styles'
import CardTokoNonButton from "../../components/cardTokoNonButton"
import Image from 'next/image'
import router from "next/router"

const useStyles = makeStyles({
    root: {
        boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.4)"
    }
});

export default function ShopSettings() {
const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <LayoutSeller>
                <Head>
                    <title>Nama Toko | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width: "85vw", marginX: { xs: 1, md: 2 }, marginY: 4 }}>
                    <Grid container mt={1} xs={12}>
                        <CardTokoNonButton id={Toko.id} nama={Toko.nama} displayPicture={Toko.displayPicture} lokasi={Toko.lokasi} contact={Toko.contact} terjual={Toko.terjual} rating={Toko.rating}/>
                        <Grid item xs={8} ml={2}>
                            <Grid container spacing={1} ml={1} mt={1} direction='column'>
                                <Typography variant = "h6">
                                <b>   Informasi Produk </b>
                                </Typography>
                                <Grid container spacing={1} ml={1} mt={1} direction='row' alignItems='center' justifyItems='center'>
                                    <Grid item xs={2}>
                                        <Typography>
                                            Foto Toko *
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Image
                                            src={Toko.displayPicture}
                                            alt={Toko.nama}
                                            height={110}
                                            width={110}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} ml={1} mt={1} direction='row' alignItems='center' justifyItems='center'>
                                    <Grid item xs={2}>
                                        <Typography>
                                            Nama Toko *
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <TextField
                                            fullWidth
                                            required
                                            color="secondary"
                                            type="text"
                                            value={Toko.nama}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} ml={1} mt={1} direction='row' alignItems='center' justifyItems='center'>
                                    <Grid item xs={2}>
                                        <Typography>
                                            Nomor Telepon *
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <TextField
                                            fullWidth
                                            required
                                            color="secondary"
                                            type="text"
                                            value={Toko.contact}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} ml={1} mt={1} direction='row' alignItems='center' justifyItems='center'>
                                    <Grid item xs={2}>
                                        <Typography>
                                            Lokasi Toko *
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <TextField
                                            fullWidth
                                            required
                                            color="secondary"
                                            type="text"
                                            value={Toko.lokasi}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center" spacing={2} mt={2}>
                                <Grid item>
                                    <Button variant="contained" color="primary" size="large"
                                    onClick={() => router.push(`/seller/Home`)}
                                    >
                                        Buang Perubahan
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary" size="large"
                                    onClick={() => router.push(`/seller/Home`)}
                                    >
                                        Simpan
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </LayoutSeller>
        </ThemeProvider>
    )
}