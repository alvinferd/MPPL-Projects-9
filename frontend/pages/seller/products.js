import { ThemeProvider } from "@emotion/react"
import { Breadcrumbs, Button, Container, Grid, Link as MUILink, Typography } from '@mui/material'
import LayoutSeller from "../../layout/defaultSeller"
import theme from "../../themes/default"
import Head from 'next/head'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import MyProductsTable from "../../components/seller/myProductsTable"

export default function MyProducts() {
    return (
        <ThemeProvider theme={theme}>
            <LayoutSeller>
                <Head>
                    <title>Toko Saya | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="br-product-seller" sx={{ width: '95vw', marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <Breadcrumbs separator="›" color="text.primary" aria-label="breadcrumb">
                        <MUILink underline="hover" href="/seller" color="text.primary">
                            Home
                        </MUILink>
                        <Typography color="text.quaternary">Produk</Typography>
                    </Breadcrumbs>
                </Container>
                <Container maxWidth="1920" id="br-product-seller" sx={{ width: '95vw', marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item>
                            <Typography>
                                5 Produk
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color='secondary'>
                                5 / 50
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color='secondary' startIcon={<ControlPointIcon />}>
                                Tambah produk baru
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="1920" id="br-product-seller" sx={{ width: '95vw', marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <MyProductsTable />
                </Container>
            </LayoutSeller>
        </ThemeProvider>
    )
}