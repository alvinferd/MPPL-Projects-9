import * as React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@emotion/react'
import theme from '../../themes/default'
import SellerLayout from '../../layout/defaultSeller'
import { Container, Typography, Breadcrumbs, Box, Button, Link as MUILink, Grid, TextField, InputLabel, FormControl, InputAdornment, SliderUnstyledComponentsPropsOverrides, MenuItem, Select} from '@mui/material'
import { spacing } from '@mui/system'
import Toko from "../../utils/dummy/Toko"
import Image from 'next/image'

export default function ShipmentSettings() {

    const [jenisEkspedisi, setEkspedisi] = React.useState('');

    const handleChange = (event) => {
      setEkspedisi(event.target.value);
    };
  
    return (
        <ThemeProvider theme={theme}>
            <SellerLayout>
                <Head>
                    <title> Nama Toko | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width: "85vw", marginX: { xs: 1, md: 4 }, marginY: 4 }}>
                    <Breadcrumbs separator="›" color="text.primary" aria-label="breadcrumb">
                        <MUILink underline="hover" href="/seller/Home" color="text.primary">
                            Home
                        </MUILink>
                        <MUILink
                            underline="hover"
                            color="text.primary"
                            // href={`/category/${product.category_name}`}
                        >
                            {/* {product.category_name} */}
                        </MUILink>
                        <Typography color="text.quaternary">Pengaturan Pengiriman</Typography>
                    </Breadcrumbs>
                </Container>
                <Grid container mt={1} ml={5}>
                    <Grid item xs={6}>
                        <Grid container spacing={1} ml={2} mt={2}>
                            <Typography variant = "h6">
                            <b>   Informasi Produk </b>
                            </Typography>
                        </Grid>
                        <Grid container spacing={1} ml={2} mt={2} alignItems='center' justifyItems='center'>
                            <Grid item xs={3}>
                                <Typography>
                                    Jasa Pengiriman *
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <FormControl fullWidth>
                                    <InputLabel>Pilih Ekspedisi</InputLabel>
                                        <Select
                                            value={jenisEkspedisi}
                                            onChange={handleChange}
                                            label="Pilih Ekspedisi"
                                        >
                                            <MenuItem value={1}>JNE YES</MenuItem>
                                            <MenuItem value={2}>JNE REG</MenuItem>
                                            <MenuItem value={3}>JNE OKE</MenuItem>
                                            <MenuItem value={4}>JNT Express</MenuItem>
                                            <MenuItem value={5}>JNT Reguler</MenuItem>
                                        </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} ml={2} mt={2} alignItems='center' justifyItems='center'>
                            <Grid item xs={3}>
                                <Typography>
                                    Nomor Resi *
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    multiline
                                    rows={4}
                                    fullWidth
                                    required
                                    color="secondary"
                                    type="text"
                                />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center" spacing={2} mt={1}>
                            <Grid item>
                                <Button variant="contained" color="secondary" size="large"
                                // onClick={() => router.push(`/order/pending`)}
                                >
                                    Simpan
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} mt={9}>
                        <Grid container ml={5} direction='row' mb={2}>
                            <Grid item xs={1}>
                                <Image
                                    src='/images/MapPin.png'
                                    alt='MapPin'
                                    height={30}
                                    width={30}
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container direction='column'>
                                    <Grid item>
                                        <Typography variant = "body1">
                                        <b> Alamat Pengiriman </b>
                                        </Typography>
                                    </Grid>
                                    <Grid item mt={0.5} xs={8}>
                                        <Typography variant = "body2">
                                        Kepala Desa, 628222324241
                                        </Typography>
                                    </Grid>
                                    <Grid item mt={0.5}>
                                        <Typography variant = "body2">
                                        Jalan Pagedangan, Tambakaji-Ngaliyan, Semarang , KOTA SEMARANG, NGALIYAN, JAWA TENGAH, ID, 50185
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container ml={5} direction='row'>
                            <Grid item xs={1}>
                                <Image
                                    src='/images/Storefront.png'
                                    alt='Toko'
                                    height={30}
                                    width={30}
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container direction='column'>
                                    <Grid item>
                                        <Typography variant = "body1">
                                        <b> Alamat Toko </b>
                                        </Typography>
                                    </Grid>
                                    <Grid item mt={0.5}>
                                        <Typography variant = "body2">
                                        {Toko.nama}, {Toko.contact}
                                        </Typography>
                                    </Grid>
                                    <Grid item mt={0.5}>
                                        <Typography variant = "body2">
                                        {Toko.lokasi}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid> 
                        </Grid>
                    </Grid>
                </Grid>
            </SellerLayout>
        </ThemeProvider>
    )
}