import { ThemeProvider } from "@emotion/react"
import { Box, Breadcrumbs, Button, Container, Grid, Link as MUILink, Typography } from '@mui/material'
import Layout from "../../layout/default"
import theme from "../../themes/default"
import Head from 'next/head'
import FilterCard from "../../components/filterCard"
import ListCardProductFilter from "../../components/listCardProductFilter"

export default function ProductInCategoryPage() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Nama Kategori | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width: "fit-content", marginX: { xs: 1, md: 2, xl: 4 }, marginY: 4 }}>
                    <Breadcrumbs separator="›" color="text.primary" aria-label="breadcrumb">
                        <MUILink underline="hover" href="/" color="text.primary">
                            Home
                        </MUILink>
                        <Typography color="text.quaternary">Nama Kategori</Typography>
                    </Breadcrumbs>
                </Container>
                <Container maxWidth="1920" id="list-product" sx={{ width: "fit-content", marginX: { xs: 1, md: 2, xl: 4 }, marginY: 4 }}>
                    <Grid container spacing={{ xs:2, lg: 3, xl: 4 }} direction="row">
                        <Grid item md={4.25} lg={2.5} xl={2}>
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
                        </Grid>
                        <Grid item md={7.75} lg={9.5} xl={10}>
                            <Grid container spacing={3} direction="column">
                                <Grid item xs={12}>
                                    <ListCardProductFilter />
                                </Grid>
                                <Grid item xs={12}>
                                    <ListCardProductFilter />
                                </Grid>
                                <Grid item xs={12}>
                                    <ListCardProductFilter />
                                </Grid>
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