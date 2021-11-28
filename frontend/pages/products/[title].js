import * as React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@emotion/react'
import theme from '../../themes/default'
import Layout from '../../layout/default'
import { Container, Typography, Breadcrumbs, Box, Button, Link as MUILink, Grid, TextField } from '@mui/material'
import Link from 'next/link'
import ListCardProduct from '../../components/listCardProducts'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import ApiURL from "../../utils/constant"
import ProductLainDiToko from '../../components/productLaindiToko'
import { dispatch } from '../../utils/redux/store'
import { cartAddProduct } from '../../utils/redux/slice/cart'
import { loadingSet } from '../../utils/redux/slice/loading'

export default function ProductDetail({ product, listImages, productLainToko, productLain }) {
    // console.log(product);
    const [jumlahBarang, setJumlahBarang] = React.useState(1);
    const [longDisplay, setLongDisplay] = React.useState(false);

    const inc = () => {
        setJumlahBarang(jumlahBarang + 1);
    }

    const dec = () => {
        if (jumlahBarang > 1) {
            setJumlahBarang(jumlahBarang - 1);
        }
    }

    const handleChange = (event) => {
        if (Number(event.target.value) < 1) {
            setJumlahBarang(1);
        } else {
            setJumlahBarang(Number(event.target.value));
        }
    }

    const addToCart = () => {
        console.log(product, jumlahBarang);
        dispatch(cartAddProduct({
            "item": product.id,
            "quantity": jumlahBarang
        }));
    }

    const LongDesc = () => {
        return (
            <Typography variant="body2">
                {product.description}
            </Typography>
        )
    }

    const ShortDesc = () => {
        return (
            <Typography variant="body2"
                sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                }}>
                {product.description}
            </Typography>
        )
    }

    const Collapse = () => {
        return (
            <MUILink variant="body2" color="text.tertiary" onClick={() => setLongDisplay(false)} sx={{ cursor: 'pointer' }}>
                Lihat lebih sedikit
            </MUILink>
        )
    }

    const Expand = () => {
        return (
            <MUILink variant="body2" color="text.tertiary" onClick={() => setLongDisplay(true)} sx={{ cursor: 'pointer' }}>
                Lihat lebih banyak
            </MUILink>
        )
    }

    console.log(productLainToko);
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>{product.title} | Poncolapak</title>
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
                            href={`/category/${product.category_name}`}
                        >
                            {product.category_name}
                        </MUILink>
                        <Typography color="text.quaternary">{product.title}</Typography>
                    </Breadcrumbs>
                </Container>

                <Container maxWidth="1920" id="list-product" sx={{ width: "85vw", marginX: { xs: 1, md: 2 }, marginY: 4 }}>
                    <Grid container columnSpacing={{ xs: 2, md: 4, lg: 8 }} direction="row">

                        {/* KOLOM PERTAMA */}
                        <Grid item xs={12} md={5} lg={4} xl={4}>
                            <Grid container spacing={2} direction="column">
                                <Grid item width="100%">
                                    {listImages.length == 1 ?
                                        <Carousel showStatus={false} showArrows={false} swipeable={true} dynamicHeight showIndicators={false} showThumbs={false} >
                                            {listImages.map(item => {
                                                return (
                                                    <div key={item.id}
                                                        style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                                                        <img src={ApiURL + item.image} alt={product.name} />
                                                    </div>
                                                )
                                            })}
                                        </Carousel>
                                        :
                                        <Carousel showStatus={false} showArrows={false} swipeable={true} dynamicHeight >
                                            {listImages.map(item => {
                                                return (
                                                    <div key={item.id}
                                                        style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                                                        <img src={ApiURL + item.image} alt={product.name} />
                                                    </div>
                                                )
                                            })}
                                        </Carousel>
                                    }

                                </Grid>
                                <Grid item>
                                    <Grid container rowSpacing={2} direction="column" >
                                        <Grid item>
                                            <Grid container columnSpacing={2} direction="row" alignItems="center">
                                                <Grid item>
                                                    <Button variant="contained" color="tertiary" size="small" onClick={dec} disabled={jumlahBarang == 1}>
                                                        <b>-</b>
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Box sx={{ width: 90, maxWidth: '100%' }}>
                                                        <TextField id="product-count" variant="outlined" type="number" size="small" color="secondary" fullWidth value={jumlahBarang} onChange={handleChange}
                                                            // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                                            InputLabelProps={{
                                                                style: { color: '#000000' },
                                                            }} />
                                                    </Box>
                                                </Grid>
                                                <Grid item>
                                                    <Button variant="contained" color="tertiary" size="small" onClick={inc}>
                                                        <b>+</b>
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" color="secondary" sx={{ width: { xs: '50%', lg: '70%', xl: '50%' }, }}
                                                onClick={addToCart}>
                                                Add to Cart
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item display={{ xs: 'none', md: 'flex' }}>
                                    <Grid container direction="row" alignItems="center" justifyContent="space-between">
                                        <Grid item xs={4}>
                                            <Typography variant="h4">
                                                <b>Rating</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Grid container direction="row" columnSpacing={1} alignItems="center" justifyContent="flex-end">
                                                <Grid item>
                                                    <Box display="flex" justifyContent="flex-start" flexDirection="row">
                                                        <StarBorderOutlinedIcon fontSize="large" sx={{ color: "#FFF626" }} />
                                                        <Typography variant="h5" color="text.primary" sx={{ paddingInline: 0.5 }}>
                                                            {product.rating.toFixed(1)} / 5.0
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h6">
                                                        (100 Ulasan)
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item display={{ xs: 'none', md: 'flex' }}>
                                    <Grid container direction="row" alignItems="center">
                                        <Grid item xs={1}>
                                            <Typography variant="h5">
                                                <b>5</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Box sx={{ width: '90%', height: 5, backgroundColor: '#F9D100' }}>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item display={{ xs: 'none', md: 'flex' }}>
                                    <Grid container direction="row" alignItems="center">
                                        <Grid item xs={1}>
                                            <Typography variant="h5">
                                                <b>4</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Box sx={{ width: '75%', height: 5, backgroundColor: '#F9D100' }}>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item display={{ xs: 'none', md: 'flex' }}>
                                    <Grid container direction="row" alignItems="center">
                                        <Grid item xs={1}>
                                            <Typography variant="h5">
                                                <b>3</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Box sx={{ width: '60%', height: 5, backgroundColor: '#F9D100' }}>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item display={{ xs: 'none', md: 'flex' }}>
                                    <Grid container direction="row" alignItems="center">
                                        <Grid item xs={1}>
                                            <Typography variant="h5">
                                                <b>2</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Box sx={{ width: '30%', height: 5, backgroundColor: '#F9D100' }}>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item display={{ xs: 'none', md: 'flex' }}>
                                    <Grid container direction="row" alignItems="center">
                                        <Grid item xs={1}>
                                            <Typography variant="h5">
                                                <b>1</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Box sx={{ width: '10%', height: 5, backgroundColor: '#F9D100' }}>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* KOLOM KEDUA */}
                        <Grid item xs={12} md={7} lg={4.5} xl={5}>
                            <Grid container spacing={2} direction="column">
                                <Grid item>
                                    <Typography variant="h5">
                                        <b>{product.title}</b>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={2} direction="row" justifyContent="space-between">
                                        <Grid item>
                                            <Grid container spacing={2} direction="row">
                                                <Grid item>
                                                    <Typography variant="body2">
                                                        Rating
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Box display="flex" justifyContent="flex-start" flexDirection="row">
                                                        <StarBorderOutlinedIcon fontSize="small" sx={{ color: "#FFF626" }} />
                                                        <Typography variant="body2" color="text.primary" sx={{ paddingInline: 0.5 }}>
                                                            {product.rating.toFixed(1)} / 5.0
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2">
                                                {product.pemilik}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5" color="text.quaternary">
                                        <b> {product.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })} </b>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        <b>Deskripsi Produk</b>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    {longDisplay ? <LongDesc /> : <ShortDesc />}
                                </Grid>
                                <Grid item>
                                    {longDisplay ? <Collapse /> : <Expand />}
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* RATING UNTUK XS */}
                        <Grid item xs={12} display={{ xs: 'flex', md: 'none' }}>
                            <Grid container rowSpacing={2} direction="column">
                                <Grid item>
                                    <Grid container direction="row" alignItems="center" justifyContent="space-between">
                                        <Grid item xs={4}>
                                            <Typography variant="h4">
                                                <b>Rating</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Grid container direction="row" columnSpacing={1} alignItems="center" justifyContent="flex-end">
                                                <Grid item>
                                                    <Box display="flex" justifyContent="flex-start" flexDirection="row">
                                                        <StarBorderOutlinedIcon fontSize="large" sx={{ color: "#FFF626" }} />
                                                        <Typography variant="h5" color="text.primary" sx={{ paddingInline: 0.5 }}>
                                                            {product.rating.toFixed(1)} / 5.0
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h6">
                                                        (100 Ulasan)
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row" alignItems="center">
                                        <Grid item xs={1}>
                                            <Typography variant="h5">
                                                <b>5</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Box sx={{ width: '90%', height: 5, backgroundColor: '#F9D100' }}>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row" alignItems="center">
                                        <Grid item xs={1}>
                                            <Typography variant="h5">
                                                <b>4</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Box sx={{ width: '75%', height: 5, backgroundColor: '#F9D100' }}>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row" alignItems="center">
                                        <Grid item xs={1}>
                                            <Typography variant="h5">
                                                <b>3</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Box sx={{ width: '60%', height: 5, backgroundColor: '#F9D100' }}>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row" alignItems="center">
                                        <Grid item xs={1}>
                                            <Typography variant="h5">
                                                <b>2</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Box sx={{ width: '30%', height: 5, backgroundColor: '#F9D100' }}>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row" alignItems="center">
                                        <Grid item xs={1}>
                                            <Typography variant="h5">
                                                <b>1</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Box sx={{ width: '10%', height: 5, backgroundColor: '#F9D100' }}>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* KOLOM KETIGA */}
                        <Grid item display={{ xs: 'none', lg: 'block' }} lg={3.5} xl={3}>
                            <Grid container spacing={2} direction="column">
                                <Grid item>
                                    <Typography variant="h6">
                                        <b>Produk lain dari toko ini</b>
                                    </Typography>
                                </Grid>
                                {productLainToko.map(productToko => {
                                    return (
                                        <Grid item key={productToko.id}  >
                                            <ProductLainDiToko productToko={productToko} />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

                <Container maxWidth="1920" id="list-product" sx={{ width: "85vw", marginX: { xs: 1, md: 4 }, marginY: 4 }}>
                    <Typography variant="h5" color="text.primary" gutterBottom>
                        Produk lainnya
                    </Typography>
                    <ListCardProduct dataProducts={productLain} />
                    <Box display="flex" flexDirection="row" justifyContent="right" sx={{ paddingTop: 1 }}>
                        <Link href="/products" passHref >
                            <MUILink variant="h6" underline="none" color="text.tertiary">
                                Lihat lebih banyak
                            </MUILink>
                        </Link>
                    </Box>
                </Container>
            </Layout>
        </ThemeProvider>
    )
}

export async function getStaticPaths() {
    dispatch(loadingSet(true));
    const response = await fetch(`http://103.41.205.191:10001/api/v1/product/allNoWisata`);
    const dataProduct = await response.json();

    const paths = dataProduct.Products.map((product) => ({
        params: { title: product.title + '' },
    }))
    dispatch(loadingSet(false));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    dispatch(loadingSet(true));
    const response = await fetch(`http://103.41.205.191:10001/api/v1/product/allNoWisata`);
    const dataProduct = await response.json();

    var id = 0;
    {
        dataProduct.Products.map(product => {
            if (product.title == params.title) {
                id = product.id;
            };
        })
    }

    const response2 = await fetch(`http://103.41.205.191:10001/api/v1/product/detailProduct/${id}`);
    const product = await response2.json();

    const img = [];
    if (product.ProductsDetail[0].image != null) {
        img[0] = { image: product.ProductsDetail[0].image }
    }
    if (product.ProductsDetail[0].image2 != null) {
        img[1] = { image: product.ProductsDetail[0].image2 }
    }
    if (product.ProductsDetail[0].image3 != null) {
        img[2] = { image: product.ProductsDetail[0].image3 }
    }
    if (product.ProductsDetail[0].image4 != null) {
        img[3] = { image: product.ProductsDetail[0].image4 }
    }
    if (product.ProductsDetail[0].image5 != null) {
        img[4] = { image: product.ProductsDetail[0].image5 }
    }

    dispatch(loadingSet(false));
    return {
        props: {
            product: product.ProductsDetail[0],
            listImages: img,
            productLainToko: product.ProductsLain,
            productLain: product.ProductsGlobal,
        }
    };
}