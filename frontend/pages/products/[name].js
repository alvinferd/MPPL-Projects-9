import * as React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@emotion/react'
import theme from '../../themes/default'
import Layout from '../../layout/default'
import { Container, Typography, Breadcrumbs, Box, Button, Link as MUILink, Grid, TextField } from '@mui/material'
import Link from 'next/link'
import ListCardProduct from '../../components/listCardProducts'
import { ListProducts } from '../../utils/dummy/ListProduct'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'

export default function ProductDetail({ product }) {
    const [jumlahBarang, setJumlahBarang] = React.useState(1);
    const [longDisplay, setLongDisplay] = React.useState(false);

    const inc = () => {
        setJumlahBarang(jumlahBarang + 1);
    }

    const dec = () => {
        if (jumlahBarang > 0) {
            setJumlahBarang(jumlahBarang - 1);
        }
    }

    const handleChange = (event) => {
        setJumlahBarang(Number(event.target.value));
    }

    const addToCart = () => {
        console.log(product, jumlahBarang);
    }

    const LongDesc = () => {
        return (
            <Typography variant="body2">
                {product.description.long}
            </Typography>
        )
    }

    const ShortDesc = () => {
        return (
            <Typography variant="body2">
                {product.description.short}
            </Typography>
        )
    }

    const Collapse = () => {
        return (
            <MUILink variant="body2" color="text.tertiary" onClick={() => setLongDisplay(false)} sx={{cursor: 'pointer'}}>
                Lihat lebih sedikit
            </MUILink>
        )
    }

    const Expand = () => {
        return (
            <MUILink variant="body2" color="text.tertiary" onClick={() => setLongDisplay(true)} sx={{cursor: 'pointer'}}>
                Lihat lebih banyak
            </MUILink>
        )
    }

    const ListImages = product.images;
    // console.log(jumlahBarang);
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>{product.name} | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width: "fit-content", marginX: { xs: 1, md: 4 }, marginY: 4 }}>
                    <Breadcrumbs separator="›" color="text.primary" aria-label="breadcrumb">
                        <MUILink underline="hover" href="/" color="text.primary">
                            Home
                        </MUILink>
                        <MUILink
                            underline="hover"
                            color="text.primary"
                            href="/category/nama-kategori/"
                        >
                            Category
                        </MUILink>
                        <Typography color="text.secondary">{product.name}</Typography>
                    </Breadcrumbs>
                </Container>

                <Container maxWidth="1920" id="list-product" sx={{ width: "fit-content", marginX: { xs: 1, md: 2 }, marginY: 4 }}>
                    <Grid container spacing={{ xs: 2, md: 4, lg: 8 }} direction="row">

                        {/* KOLOM PERTAMA */}
                        <Grid item xs={12} md={5} lg={4} xl={4}>
                            <Grid container spacing={2} direction="column">
                                <Grid item width="100%">
                                    <Carousel showStatus={false} showArrows={false} swipeable={true}>
                                        {ListImages.map(item => {
                                            return (
                                                <div key={item.id}
                                                    style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                                                    <img src={item.image} alt={product.name} />
                                                </div>
                                            )
                                        })}
                                    </Carousel>
                                </Grid>
                                <Grid item>
                                    <Grid container rowSpacing={2} direction="column" >
                                        <Grid item>
                                            <Grid container columnSpacing={2} direction="row" alignItems="center">
                                                <Grid item>
                                                    <Button variant="contained" color="tertiary" size="small" onClick={dec} disabled={jumlahBarang == 0}>
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
                                                            {product.rating} / 5.0
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h6">
                                                        ({product.reviews.total} Ulasan)
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
                                        <b>{product.name}</b>
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
                                                            {product.rating} / 5.0
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2">
                                                Toko Pak Makmur
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5" color="text.secondary">
                                        <b> RP {product.price} </b>
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
                                                            {product.rating} / 5.0
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h6">
                                                        ({product.reviews.total} Ulasan)
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
                                {ListProducts.map(productToko => {
                                    return (
                                        <Link key={productToko.id} href={`/products/${productToko.name}`} passHref >
                                            <Grid item style={{ display: 'flex' }} xs={6} md={6} lg={4} xl={3}>
                                                <Grid container style={{ cursor: 'pointer' }} spacing={4} direction="row" alignItems="center" justifyContent="flex-start">
                                                    <Grid item>
                                                        <Image
                                                            src={productToko.images[0].image}
                                                            alt={productToko.name}
                                                            height={70}
                                                            width={70}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="body1" color="text.primary" textAlign="left" >
                                                            <b> {productToko.name}</b>
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Link>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

                <Container maxWidth="1920" id="list-product" sx={{ width: "fit-content", marginX: { xs: 1, md: 4 }, marginY: 4 }}>
                    <Typography variant="h5" color="text.primary" gutterBottom>
                        Produk lain yang mirip
                    </Typography>
                    <ListCardProduct />
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
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    // const dataPost = await response.json();
    const dataProduct = ListProducts;

    const paths = dataProduct.map((product) => ({
        params: { name: product.name + '' },
    }))

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    // const post = await response.json();
    const dataProduct = ListProducts;
    var id = 0;
    {
        dataProduct.map(product => {
            if (product.name == params.name) {
                id = product.id;
            };
        })
    }

    const product = ListProducts[id];

    return {
        props: {
            product,
        }
    };
}