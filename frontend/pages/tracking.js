import { ThemeProvider } from "@emotion/react"
import { Box, Breadcrumbs, Button, Container, Grid, Link as MUILink, Typography, TextField } from '@mui/material'
import Layout from "../layout/default"
import theme from "../themes/default"
import Head from 'next/head'
import TrackingCard from "../components/trackingCard"
import Script from 'next/script'
import { Controller, useForm } from "react-hook-form"
import router from "next/router"

const onSubmit = (data) => {
    router.push(`https://cekresi.com/?noresi=+${data.noResi}`);
};

export default function TrackingPage() {
    const { control, handleSubmit } = useForm();
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Lacak Barangmu | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="lacak-produk" sx={{ width: "85vw", marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <Typography variant="h6" marginY={3}>
                        <b>Lacak</b>
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", alignItems: "center" }} target="_blank">
                        <Grid container spacing={0.5} direction="row" alignItems="center" justifyContent="center" sx={{ width: '100%' }}>
                            <Grid item xs={10}>
                                <Controller
                                    name="noResi"
                                    control={control}
                                    defaultValue=""
                                    render={({ field: { onChange, value } }) => (
                                        <TextField id="search-resi" size="small" variant="outlined" color="secondary" fullWidth placeholder="Masukan nomor resimu disini"
                                            value={value}
                                            onChange={onChange}
                                            InputLabelProps={{
                                                style: { color: '#000000' },
                                            }} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Button type="submit" variant="contained" color="secondary" size="large">
                                    Lacak
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%', paddingTop: 4 }}>
                        <Typography>
                            Layanan ini didukung oleh cekresi.com
                        </Typography>
                    </Grid>
                    {/* <div id="cekresicom_id"></div>
                    <Script type="text/javascript" src="https://cekresi.com/widget/widgetcekresicom_v1.js"></Script>
                    <script type="text/javascript">
                        init_widget_cekresicom('w2',370,100)
                    </script> */}

                </Container>
                {/* <Container maxWidth="1920" id="tracking-product" sx={{ width: '85vw', marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <TrackingCard />
                </Container> */}
            </Layout>
        </ThemeProvider>
    )
}