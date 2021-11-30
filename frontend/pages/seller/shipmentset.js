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
                <Grid container mb={3} ml={7} xs={6}>
                    <Grid item xs={4}>
                        <Typography variant = "h6">
                         <b>   Informasi Produk </b>
                        </Typography>
                    </Grid>
                    <Grid container spacing={1} ml={4} mt={2} alignItems='center' justifyItems='center'>
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
                    <Grid container spacing={1} ml={4} mt={2} alignItems='center' justifyItems='center'>
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
            </SellerLayout>
        </ThemeProvider>
    )
}