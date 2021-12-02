import * as React from 'react';
import { ThemeProvider } from "@emotion/react"
import { Button, Card, CardContent, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Input, Link as MUILink, Typography } from '@mui/material'
import Layout from "../../layout/default"
import theme from "../../themes/default"
import Head from 'next/head'
import Image from 'next/image'
import { makeStyles } from '@mui/styles'
import { useRouter } from "next/router"
import { useForm, Controller } from "react-hook-form"
import { red } from "@mui/material/colors"
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { dispatch } from '../../utils/redux/store';
import { getMyItemOrder } from '../../utils/redux/slice/order';
import { ApiURL } from '../../utils/constant';

const useStyles = makeStyles({
    root: {
        boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.4)"
    }
});

const onSubmit = (data) => {
    console.log(data);
    // dispatch(userLogin(data));
};

export default function OrderPending() {
    const authenticated = useSelector((state) => state.user.authenticated)
    const isUser = useSelector((state) => state.user.current.is_user)
    const isSeller = useSelector((state) => state.user.current.is_seller)
    const myItemOrder = useSelector((state) => state.order.allMyItemOrder)
    console.log(myItemOrder);

    React.useEffect(() => {
        if (authenticated) {
            if (isSeller) router.replace("/seller/Home");
            dispatch(getMyItemOrder());
        } else {
            router.replace('/login');
        }
    }, [authenticated, isUser, isSeller]);

    const { control, handleSubmit } = useForm();

    const [openCancelDialog, setOpenCancelDialog] = React.useState(false);
    const [openDelivDialog, setOpenDelivDialog] = React.useState(false);
    const [openCantCancelDialog, setOpenCantCancelDialog] = React.useState(false);

    const handleOpenCancel = () => {
        setOpenCancelDialog(true);
    };

    const handleCloseCancel = () => {
        setOpenCancelDialog(false);
    };

    const handleOpenCantCancel = () => {
        setOpenCantCancelDialog(true);
    };

    const handleCloseCantCancel = () => {
        setOpenCantCancelDialog(false);
    };

    const handleOpenDeliv = () => {
        setOpenDelivDialog(true);
    };

    const handleCloseDeliv = () => {
        setOpenDelivDialog(false);
    };

    const classes = useStyles();
    const router = useRouter();
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Head>
                    <title>Pesanan Kamu | Poncolapak</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container maxWidth="1920" id="list-product" sx={{ width: '85vw', marginX: { xs: 1, md: 2, lg: 4 }, marginY: 4 }}>
                    <Typography variant="h6" marginY={3}>
                        <b>Pesanan Anda</b>
                    </Typography>
                    <Grid container spacing={2} direction="column">
                        {myItemOrder.map((item) => {
                            return (
                                <Grid item key={item.id}>
                                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", alignItems: "center" }}>
                                        <Card className={classes.root} sx={{ maxWidth: 1546 }} style={{ height: 'fit-content', boxShadow: 3 }} >
                                            <CardContent style={{ height: 'fit-content', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                                                <Grid container spacing={2} direction="row">
                                                    <Grid item xs={3.5} md={2} lg={1} sx={{ position: 'relative' }}>
                                                        <Image
                                                            src={(item.imageUrl) ? ApiURL + item.imageUrl : "/images/dp toko pak makmur.png"}
                                                            alt={item.namaItem}
                                                            height={138}
                                                            width={156}
                                                        // layout='fill'
                                                        // objectFit='fill'
                                                        />
                                                    </Grid>
                                                    <Grid item xs={8.5} md={7} lg={9}>
                                                        <Grid container spacing={1}>
                                                            <Grid item xs={12}>
                                                                <Typography fontWeight='600'>
                                                                    {item.namaItem}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="body2">
                                                                    {item.namaToko}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Grid container columnSpacing={1}>
                                                                    <Grid item>
                                                                        <Typography fontWeight='600'>
                                                                            Total Pembayaran :
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Typography color="text.quaternary" fontWeight='600'>
                                                                            {item.totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item xs={12} display={{ md: 'block', xs: 'none' }}>
                                                                <Grid container columnSpacing={1}>
                                                                    <Grid item>
                                                                        <Typography fontWeight='600'>
                                                                            Status :
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item marginRight={1}>
                                                                        <Typography fontWeight='600'>
                                                                            {(item.status) == 1 ? "Menunggu Pembayaran"
                                                                                : (item.status) == 2 ? "Telah Dibayar"
                                                                                    : (item.status) == 3 ? "Sedang Dikirim"
                                                                                        : "Pesanan Telah Diterima"
                                                                            }
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item display={item.status == 3 ? 'inherit' : 'none'}>
                                                                        <Link href={`/tracking`} passHref >
                                                                            <MUILink variant="body1" underline="none" color="text.tertiary">
                                                                                <b>Lacak</b>
                                                                            </MUILink>
                                                                        </Link>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} md={3} lg={2}>
                                                        <Grid container spacing={2} alignItems='center' justifyContent='center'>
                                                            <Grid item xs={12} display={{ md: 'none', xs: 'block' }}>
                                                                <Grid container columnSpacing={1}>
                                                                    <Grid item>
                                                                        <Typography fontWeight='600'>
                                                                            Status :
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item marginRight={1}>
                                                                        <Typography fontWeight='600'>
                                                                            {(item.status) == 1 ? "Menunggu Pembayaran"
                                                                                : (item.status) == 2 ? "Telah Dibayar"
                                                                                    : (item.status) == 3 ? "Sedang Dikirim"
                                                                                        : "Pesanan Telah Diterima"
                                                                            }
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Link href={`/tracking`} passHref >
                                                                            <MUILink variant="body1" underline="none" color="text.tertiary">
                                                                                <b>Lacak</b>
                                                                            </MUILink>
                                                                        </Link>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item xs={12} display={{ md: 'block', xs: 'none' }}>
                                                                <Button variant='contained' color='secondary' onClick={handleOpenDeliv} disabled={item.status == 4}>
                                                                    Barang Diterima
                                                                </Button>
                                                            </Grid>
                                                            <Grid item xs={12} display={{ md: 'block', xs: 'none' }}>
                                                                <Button variant='text' color='error' onClick={handleOpenCantCancel} disabled={item.status >= 2}>
                                                                    Batalkan Pesanan
                                                                </Button>
                                                            </Grid>
                                                            <Grid item xs={12} marginTop={2} display={{ md: 'none', xs: 'block' }}>
                                                                <Grid container columnSpacing={2} justifyContent='center' sx={{ height: '100%' }}>
                                                                    <Grid item>
                                                                        <Button variant='contained' color='secondary' onClick={handleOpenDeliv} disabled={item.status == 4}>
                                                                            Barang Diterima
                                                                        </Button>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Button variant='text' color='error' onClick={handleOpenCantCancel} disabled={item.status >= 2}>
                                                                            Batalkan Pesanan
                                                                        </Button>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>

                                            </CardContent>
                                        </Card>
                                    </form>
                                </Grid>
                            )
                        })}

                    </Grid>

                </Container>
            </Layout>

            {/* DIALOG OR MODAL UNTUK BATALKAN PESANAN */}
            <Dialog
                open={openCancelDialog}
                onClose={handleCloseCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Anda yakin batalkan pemesanan anda ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Pesanan Apel Poncokusumo Toko Abdi Makmur Super Manis akan dibatalkan.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' color='secondary' onClick={handleCloseCancel}>Ya</Button>
                    <Button variant='contained' color='error' onClick={handleCloseCancel} autoFocus>
                        Tidak
                    </Button>
                </DialogActions>
            </Dialog>

            {/* DIALOG OR MODAL UNTUK TERIMA PESANAN */}
            <Dialog
                open={openDelivDialog}
                onClose={handleCloseDeliv}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Pastikan pesanan anda telah sesuai"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Setelah ini, anda tidak dapat mengajukan komplain apapun terkait pesanan anda.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='secondary' onClick={handleCloseDeliv}>Ya</Button>
                    <Button variant='outlined' color='error' onClick={handleCloseDeliv} autoFocus>
                        Tidak
                    </Button>
                </DialogActions>
            </Dialog>

            {/* DIALOG OR MODAL UNTUK PESANAN YANG GABISA DI CANCEL */}
            <Dialog
                open={openCantCancelDialog}
                onClose={handleCloseCantCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/* <DialogTitle id="alert-dialog-title">
                    {"Pastikan pesanan anda telah sesuai"}
                </DialogTitle> */}
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" color='error' justifyContent='center'>
                        Pemesanan tidak bisa dibatalkan karena barang sudah dikirim ke alamat anda.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='error' onClick={handleCloseCantCancel}>OK</Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>

    )
}