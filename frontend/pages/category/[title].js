import { ThemeProvider } from "@emotion/react"
import { Box, Breadcrumbs, Button, Container, Grid, Link as MUILink, Typography } from '@mui/material'
import Layout from "../../layout/default"
import theme from "../../themes/default"
import Head from 'next/head'
import FilterCard from "../../components/filterCard"
import CardProduct from "../../components/cardProduct"
import { ApiURL } from "../../utils/constant"
import { dispatch } from "../../utils/redux/store"
import { loadingSet } from "../../utils/redux/slice/loading"

export default function ProductInCategoryPage({ productInCategory, category }) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>{category[0].title} | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width: "fit-content", marginX: { xs: 1, md: 2, xl: 4 }, marginY: 4 }}>
                    <Breadcrumbs separator="›" color="text.primary" aria-label="breadcrumb">
                        <MUILink underline="hover" href="/" color="text.primary">
                            Home
                        </MUILink>
                        <Typography color="text.quaternary">{category[0].title}</Typography>
                    </Breadcrumbs>
                </Container>
                <Container maxWidth="1920" id="list-product" sx={{ width: "85vw", marginX: { xs: 1, md: 2, xl: 4 }, marginY: 4 }}>
                    <Grid container spacing={{ xs: 2, lg: 3, xl: 4 }} direction="row">
                        {/* <Grid item md={4.25} lg={2.5} xl={2}>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Typography variant="h5" paddingLeft={2}>
                                        Filter
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <FilterCard />
                                </Grid>
                            </Grid>
                        </Grid> */}
                        <Grid item xs={12}>
                            <Grid container spacing={3} direction="row">
                                {productInCategory.Products.map(product => {
                                    return (
                                        <Grid item key={product.id} columns={60} xs={30} md={20} lg={15} xl={12}>
                                            <CardProduct id={product.id} images={product.image} name={product.title} description={product.description} price={product.harga} rating={product.rating} />
                                        </Grid>
                                    )
                                })}
                                <Grid item xs={12}>
                                    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%', paddingTop: 4 }}>
                                        <Button variant="outlined" color="secondary" size="large">
                                            Muat Lebih Banyak
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Layout>
        </ThemeProvider>
    )
}

export async function getStaticPaths() {
    dispatch(loadingSet(true));
    const response = await fetch(`http://103.41.205.191:10001/api/v1/category/allCategorys`);
    const dataCategory = await response.json();

    const paths = dataCategory.Categorys.map((category) => ({
        params: { title: category.title + '' },
    }))
    dispatch(loadingSet(false));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    dispatch(loadingSet(true));
    const response = await fetch(`http://103.41.205.191:10001/api/v1/category/allCategorys`);
    const dataCategory = await response.json();

    var id = 0;
    {
        dataCategory.Categorys.map(category => {
            if (category.title == params.title) {
                id = category.id;
            };
        })
    }

    const response2 = await fetch(`http://103.41.205.191:10001/api/v1/product/categoryProduct/${id}`);
    const productInCategory = await response2.json();

    const response3 = await fetch(`http://103.41.205.191:10001/api/v1/category/detailCategory/${id}`);
    const categoryDetails = await response3.json();

    dispatch(loadingSet(false));
    return {
        props: {
            productInCategory: productInCategory,
            category: categoryDetails.Categorys,
        }
    };
}