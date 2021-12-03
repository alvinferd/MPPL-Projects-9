import * as React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@emotion/react'
import theme from '../../themes/default'
import SellerLayout from '../../layout/defaultSeller'
import { Divider, CardContent, Card, Container, Typography, Breadcrumbs, Box, Button, Link as MUILink, Grid, TextField, InputLabel, FormControl, InputAdornment, SliderUnstyledComponentsPropsOverrides, MenuItem, Select} from '@mui/material'
import Toko from "../../utils/dummy/Toko"
import Image from 'next/image'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import CircleIcon from '@mui/icons-material/Circle'
import { makeStyles } from '@mui/styles'
import TrackingResult from '../../utils/dummy/Tracking'

const useStyles = makeStyles({
    root: {
        boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.4)"
    }
});

export default function OrderDetails() {
    const chronological = TrackingResult.chronological;
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <SellerLayout>
                <Head>
                    <title> Rincian Pengiriman | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width: "85vw", marginX: { xs: 1, md: 4 }, marginY: 4 }}>
                    <Breadcrumbs separator="›" color="text.primary" aria-label="breadcrumb">
                        <MUILink underline="hover" href="/seller/Home" color="text.primary">
                            Home
                        </MUILink>
                        {/* <MUILink
                            underline="hover"
                            color="text.primary"
                            href={`/category/${product.category_name}`}
                        >
                            {product.category_name}
                        </MUILink> */}
                        <Typography color="text.quaternary">Rincian Pengiriman</Typography>
                    </Breadcrumbs>
                </Container>
                <Grid container mt={1} ml={5}>
                    <Grid item xs={6}>
                        <Grid container ml={5} direction='row' mb={2}>
                            <Grid item xs={0.75}>
                                <Image
                                    src='/images/Notepad.png'
                                    alt='Notepad'
                                    height={50}
                                    width={50}
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container direction='column'>
                                    <Grid item>
                                        <Typography variant = "body1">
                                        <b> Sudah Kirim </b>
                                        </Typography>
                                    </Grid>
                                    <Grid item mt={0.5} xs={9}>
                                        <Typography variant = "body2">
                                        Menunggu konfirmasi pembeli terima produk sebelum {TrackingResult.receivedDate}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container ml={5} direction='row' mb={2}>
                            <Grid item xs={0.75}>
                                <Image
                                    src='/images/Hash.png'
                                    alt='Hashtag'
                                    height={50}
                                    width={50}
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container direction='column'>
                                    <Grid item>
                                        <Typography variant = "body1">
                                        <b> No. Pesanan </b>
                                        </Typography>
                                    </Grid>
                                    <Grid item mt={0.5} xs={9}>
                                        <Typography variant = "body2">
                                        {TrackingResult.orderNo}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container ml={5} direction='row' mb={2}>
                            <Grid item xs={0.75}>
                                <Image
                                    src='/images/Wallet.png'
                                    alt='Wallet'
                                    height={35}
                                    width={35}
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container direction='column'>
                                    <Grid item>
                                        <Typography variant = "body1">
                                        <b> Jenis Pembayaran </b>
                                        </Typography>
                                    </Grid>
                                    <Grid item mt={0.5} xs={9}>
                                        <Typography variant = "body2">
                                        {TrackingResult.payment}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container ml={5} direction='row' mb={2}>
                            <Grid item xs={0.75}>
                                <Image
                                    src='/images/Truck.png'
                                    alt='Truck'
                                    height={40}
                                    width={40}
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container direction='column'>
                                    <Grid item>
                                        <Typography variant = "body1">
                                        <b> Jenis Ekspedisi </b>
                                        </Typography>
                                    </Grid>
                                    <Grid item mt={0.5} xs={9}>
                                        <Typography variant = "body2">
                                        {TrackingResult.deliveryService}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container ml={5} direction='row' mb={2}>
                            <Grid item xs={0.75}>
                                <Image
                                    src='/images/Receipt.png'
                                    alt='Receipt'
                                    height={40}
                                    width={40}
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container direction='column'>
                                    <Grid item>
                                        <Typography variant = "body1">
                                        <b> No. Resi </b>
                                        </Typography>
                                    </Grid>
                                    <Grid item mt={0.5} xs={9}>
                                        <Typography variant = "body2">
                                        {TrackingResult.receiptNo}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container ml={5} mb={5}>
                            <Grid item xs={0.75}>
                                <Image
                                    src='/images/MapPin.png'
                                    alt='MapPin'
                                    height={40}
                                    width={40}
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <Grid container direction='column'>
                                    <Grid item>
                                        <Typography variant = "body1">
                                        <b> Alamat Pengiriman </b>
                                        </Typography>
                                    </Grid>
                                    <Grid item mt={0.5} xs={8}>
                                        <Typography variant = "body2">
                                        {TrackingResult.buyer.name}, {TrackingResult.buyer.phoneNumber}
                                        </Typography>
                                    </Grid>
                                    <Grid item mt={0.5}>
                                        <Typography variant = "body2">
                                        {TrackingResult.buyer.address}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container ml={5} mb={2}>
                            <Grid container>
                                <Typography variant = 'h6'>
                                    <b> Informasi Pembayaran </b>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container ml={5} mb={1}>
                            <Grid item xs={5}>
                                <Typography variant = 'body1'>
                                    <b> Produk </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant = 'body1'>
                                    <b> Harga </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant = 'body1'>
                                    <b> Jumlah </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant = 'body1'>
                                    <b> Subtotal </b>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider light />
                        <Grid container ml={5} mb={1} mt={1}>
                            <Grid item xs={2}>
                                <Image
                                    src='/images/apel.png'
                                    alt={TrackingResult.product.name}
                                    height={110}
                                    width={110}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant = 'body1'>
                                    {TrackingResult.product.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant = 'body1'>
                                    {TrackingResult.totalPrice}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant = 'body1'>
                                    {TrackingResult.quantity}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant = 'body1'>
                                    {TrackingResult.fixPrice}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider light />
                        <Grid container justifyContent='flex-end' mt={2}>
                            <Grid item xs={3}>
                                <Grid container spacing={1} direction='column'>
                                    <Grid item xs>  
                                        <Typography variant='body1'>
                                            Total Pesanan
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='body1'>
                                            Ongkos Kirim
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='body1'>
                                            Biaya Admin
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='body1' color="text.quaternary">
                                            <b> Total </b>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider orientation="vertical" flexItem/>
                            <Grid item xs={3} ml={1}>
                                <Grid container spacing={1} direction='column'>
                                    <Grid item xs>  
                                        <Typography variant='body1'>
                                            Rp 127.000
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='body1'>
                                            Rp 10.000
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant='body1'>
                                            Rp 10.000
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body1" color="text.quaternary" gutterBottom>
                                           <b> Rp 147.000 </b>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid item xs={12} md={7} lg={8}>
                            <Card className={classes.root} sx={{ maxWidth: 1920, maxHeight: 777 }} style={{ height: '100%', bolghadow: 3 }} >
                                <CardContent style={{ height: 'inherit', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                                    <Timeline sx={{margin: 0}}>
                                        {chronological.map((item, index) => {
                                            return (
                                                <TimelineItem key={item.id}>
                                                    <TimelineOppositeContent style={{ maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px' }} />
                                                    <TimelineSeparator>
                                                        <TimelineDot color='secondary' />
                                                        {index === chronological.length - 1 ? null : <TimelineConnector color='secondary' />}
                                                    </TimelineSeparator>
                                                    <TimelineContent>
                                                        <Grid item xs={12}>
                                                            <Grid container columnSpacing={2}>
                                                                <Grid item xs={2}>
                                                                    <Typography variant="body1" gutterBottom>
                                                                        {item.time}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={10}>
                                                                    <Typography variant="body1" gutterBottom>
                                                                        {item.detail}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </TimelineContent>
                                                </TimelineItem>
                                            )
                                        })}
                                    </Timeline>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </SellerLayout>
        </ThemeProvider>
    )
}