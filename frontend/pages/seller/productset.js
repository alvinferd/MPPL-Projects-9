import * as React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@emotion/react'
import theme from '../../themes/default'
import SellerLayout from '../../layout/defaultSeller'
import { Container, Typography, Breadcrumbs, Box, Button, Link as MUILink, Grid, TextField, InputLabel, FormControl, InputAdornment, SliderUnstyledComponentsPropsOverrides, MenuItem, Select} from '@mui/material'
import { spacing } from '@mui/system'
import Toko from "../../utils/dummy/Toko"
import Image from 'next/image'

export default function ProductSettings() {

    const [kategori, setKategori] = React.useState('');

    const handleChange = (event) => {
      setKategori(event.target.value);
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
                        <MUILink underline="hover" href="/" color="text.primary">
                            Home
                        </MUILink>
                        <MUILink
                            underline="hover"
                            color="text.primary"
                            // href={`/category/${product.category_name}`}
                        >
                            {/* {product.category_name} */}
                        </MUILink>
                        <Typography color="text.quaternary">Pengaturan Produk</Typography>
                    </Breadcrumbs>
                </Container>
                <Grid container mb={3} ml={7}>
                    <Grid item xs={4}>
                        <Typography variant = "h6">
                         <b>   Informasi Produk </b>
                        </Typography>
                    </Grid>
                    <Grid container spacing={1} ml={4} mt={2}>
                        <Grid item xs={2}>
                            <Typography>
                                Foto Produk
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>
                                <Image
                                    src={Toko.displayPicture}
                                    alt={Toko.nama}
                                    height={110}
                                    width={110}
                                />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} ml={4} mt={2}>
                        <Grid item xs={2}>
                            <Typography>
                                Nama Produk *
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                                fullWidth
                                required
                                color="secondary"
                                type="text"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} ml={4} mt={2}>
                        <Grid item xs={2}>
                            <Typography>
                                Deskripsi Produk *
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
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
                </Grid>
                <Grid container ml={7}>
                    <Grid item xs={4}>
                        <Typography variant = "h6">
                        <b>    Informasi Penjualan </b>
                        </Typography>
                    </Grid>
                    <Grid container spacing={1} ml={4} mt={2}>
                        <Grid item xs={2}>
                            <Typography>
                                Harga
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                required
                                color="secondary"
                                type="text"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                                  }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} ml={4} mt={2}>
                        <Grid item xs={2}>
                            <Typography>
                                Stok *
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                required
                                color="secondary"
                                type="number"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} ml={4} mt={2} mb={4}>
                        <Grid item xs={2}>
                            <Typography>
                                Jenis Produk *
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                        <FormControl fullWidth>
                            <InputLabel>Pilih Kategori</InputLabel>
                                <Select
                                    value={kategori}
                                    onChange={handleChange}
                                    label="Pilih Kategori"
                                >
                                    <MenuItem value={1}>Anyaman</MenuItem>
                                    <MenuItem value={2}>Kerajinan Tangan</MenuItem>
                                    <MenuItem value={3}>Makanan</MenuItem>
                                    <MenuItem value={4}>Minuman</MenuItem>
                                    <MenuItem value={5}>Baju</MenuItem>
                                    <MenuItem value={6}>Perabotan</MenuItem>
                                    <MenuItem value={7}>Celana</MenuItem>
                                    <MenuItem value={8}>Wisata</MenuItem>
                                </Select>
                        </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <Button variant="contained" color="primary" size="large"
                            // onClick={() => router.push(`/order/pending`)}
                            >
                                Buang Perubahan
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary" size="large"
                            // onClick={() => router.push(`/order/pending`)}
                            >
                                Simpan
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </SellerLayout>
        </ThemeProvider>
    )
}