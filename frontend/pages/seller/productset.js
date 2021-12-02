import * as React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@emotion/react'
import theme from '../../themes/default'
import SellerLayout from '../../layout/defaultSeller'
import { Container, Typography, Breadcrumbs, Box, Button, Link as MUILink, Grid, TextField, InputLabel, FormControl, InputAdornment, SliderUnstyledComponentsPropsOverrides, MenuItem, Select } from '@mui/material'
import { spacing } from '@mui/system'
import Toko from "../../utils/dummy/Toko"
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react"
import { addNewProduct } from '../../utils/redux/slice/product'
import { dispatch } from '../../utils/redux/store'

export default function ProductSettings({ dataCategory }) {
    const router = useRouter();
    const { control, handleSubmit } = useForm();

    const [kategori, setKategori] = React.useState('');
    // console.log(kategori);
    const handleChange = (event) => {
        setKategori(event.target.value);
    };

    const addProduct = (data) => {
        // var bodyFormData = new FormData();
        data.category = kategori;
        // bodyFormData.append('title', data.title);
        // bodyFormData.append('description', data.description);
        // bodyFormData.append('harga', data.harga);
        // bodyFormData.append('rating', (data.rating) ? data.rating : 0);
        // bodyFormData.append('category', data.category);
        // console.dir(bodyFormData);
        dispatch(addNewProduct(data));
        router.push("/seller/products")
    };
    return (
        <ThemeProvider theme={theme}>
            <SellerLayout>
                <Head>
                    <title>Tambah Produk | Poncolapak</title>
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
                <form onSubmit={handleSubmit(addProduct)} style={{ width: "100%", alignItems: "center" }}>
                    <Grid container mb={3} ml={7}>
                        <Grid item xs={4}>
                            <Typography variant="h6">
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
                                <Controller
                                    name="title"
                                    control={control}
                                    defaultValue=""
                                    render={({ field: { onChange, value } }) => (
                                        <TextField
                                            fullWidth
                                            required
                                            color="secondary"
                                            type="text"
                                            value={value}
                                            onChange={onChange}
                                        />
                                    )}
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
                                <Controller
                                    name="description"
                                    control={control}
                                    defaultValue=""
                                    render={({ field: { onChange, value } }) => (
                                        <TextField
                                            multiline
                                            rows={4}
                                            fullWidth
                                            required
                                            color="secondary"
                                            type="text"
                                            value={value}
                                            onChange={onChange}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container ml={7}>
                        <Grid item xs={4}>
                            <Typography variant="h6">
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
                                <Controller
                                    name="harga"
                                    control={control}
                                    defaultValue=""
                                    render={({ field: { onChange, value } }) => (
                                        <TextField
                                            fullWidth
                                            required
                                            color="secondary"
                                            type="number"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
                                            }}
                                            value={value}
                                            onChange={onChange}
                                        />
                                    )}
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
                                <Controller
                                    name="stock"
                                    control={control}
                                    defaultValue=""
                                    render={({ field: { onChange, value } }) => (
                                        <TextField
                                            fullWidth
                                            required
                                            color="secondary"
                                            type="number"
                                            value={value}
                                            onChange={onChange}
                                        />
                                    )}
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
                                    <Controller
                                        name="category"
                                        control={control}
                                        defaultValue=""
                                        render={({ field: { onChange, value } }) => (
                                            <Select
                                                fullWidth
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Pilih Kategori"
                                                value={kategori}
                                                placeholder="Pilih Disini"
                                                required
                                                color="secondary"
                                                onChange={handleChange}
                                            >
                                                {dataCategory.map(kategori => {
                                                    return (
                                                        <MenuItem key={kategori.id} value={kategori.id}>{kategori.title}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                        )}
                                    />
                                    <InputLabel>Pilih Kategori</InputLabel>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <Button variant="contained" color="primary" size="large"
                                    onClick={() => router.push(`/seller/products`)}
                                >
                                    Buang Perubahan
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="secondary" size="large"
                                type="submit"
                                // onClick={() => router.push(`/order/pending`)}
                                >
                                    Simpan
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </SellerLayout>
        </ThemeProvider>
    )
}

export async function getServerSideProps() {
    const response3 = await fetch(`http://103.41.205.191:10001/api/v1/category/allCategorys`);
    const jsonCategory = await response3.json();

    return {
        props: {
            dataCategory: jsonCategory.Categorys,
        },
    };
}