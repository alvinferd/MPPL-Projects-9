import { ThemeProvider } from "@emotion/react"
import { Box, Breadcrumbs, Button, Container, Grid, Link as MUILink, Typography, TextField } from '@mui/material'
import Layout from "../layout/default"
import theme from "../themes/default"
import Head from 'next/head'
import TrackingCard from "../components/trackingCard"

export default function TrackingPage() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Lacak Barangmu | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product-terlaris" sx={{ marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <Typography variant="h6" marginY={3}>
                        <b>Lacak</b>
                    </Typography>
                    <Grid container spacing={0.5} direction="row" alignItems="center" justifyContent="center" sx={{ width: '100%' }}>
                        <Grid item xs={10}>
                            <TextField id="search-resi" size="small" variant="outlined" color="secondary" fullWidth placeholder="Masukan kode lacakmu disini"
                                // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                InputLabelProps={{
                                    style: { color: '#000000' },
                                }} />
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="secondary" size="large">
                                Lacak
                            </Button>
                        </Grid>
                    </Grid>

                </Container>
                <Container maxWidth="1920" id="list-product" sx={{ width: "fit-content", marginX: { xs: 1, md: 4 }, marginY: 4 }}>
                    <TrackingCard />
                </Container>
            </Layout>
        </ThemeProvider>
    )
}