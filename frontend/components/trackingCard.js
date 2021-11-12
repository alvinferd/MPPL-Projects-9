import { Box, Card, CardContent, Grid, Typography, Link as MUILink } from '@mui/material'
import Image from 'next/image'
import CircleIcon from '@mui/icons-material/Circle'
import TrackingResult from '../utils/dummy/Tracking'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'


const useStyles = makeStyles({
    root: {
        boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.4)"
    }
});

export default function TrackingCard() {
    const chronological = TrackingResult.chronological;
    // console.log(TrackingResult.chronological);
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={7} lg={8}>
                <Card className={classes.root} sx={{ maxWidth: 1040, maxHeight: 777 }} style={{ height: '100%', bolghadow: 3 }} >
                    <CardContent style={{ height: 'inherit', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                        <Grid container rowSpacing={6} direction="column">
                            {chronological.map(item => {
                                return (
                                    <Grid item key={item.id}>
                                        <Grid container spacing={2} direction="row">
                                            <Grid item xs={1}>
                                                <CircleIcon color='secondary' />
                                            </Grid>
                                            <Grid item xs={11}>
                                                <Grid container columnSpacing={2}>
                                                    <Grid item xs={1.75}>
                                                        <Typography variant="body1" gutterBottom>
                                                            {item.time}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={10.25}>
                                                        <Typography variant="body1" gutterBottom>
                                                            {item.detail}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <Card className={classes.root} sx={{ maxWidth: 453 }} style={{ height: 'fit-content', boxShadow: 3 }} >
                    <CardContent style={{ height: 'fit-content', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                        <Grid container rowSpacing={2} direction="column" justifyContent="space-around">
                            <Grid item>
                                <Grid container columnSpacing={2} direction="row" alignItems="center">
                                    <Grid item xs={3}>
                                        <Image
                                            src={TrackingResult.seller.displayPicture}
                                            alt={TrackingResult.seller.nama}
                                            height={102}
                                            width={102} />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography variant="body1" gutterBottom>
                                            {TrackingResult.seller.nama}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Box display="flex" flexDirection="row" justifyContent="right" sx={{ paddingTop: 1 }}>
                                    <Link href={`/shop/${TrackingResult.seller.nama}`} passHref >
                                        <MUILink variant="body1" underline="none" color="text.tertiary">
                                            Lihat toko
                                        </MUILink>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Grid container columnSpacing={2} direction="row" alignItems="center">
                                    <Grid item xs={4}>
                                        <Image
                                            src={TrackingResult.product.images[0].image}
                                            alt={TrackingResult.product.name}
                                            height={102}
                                            width={102} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Grid container rowSpacing={0} direction="column">
                                            <Grid item>
                                                <Typography variant="body1" gutterBottom>
                                                    {TrackingResult.product.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body1" gutterBottom>
                                                    {TrackingResult.quantity}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h6" color="text.secondary" gutterBottom>
                                                    RP {TrackingResult.totalPrice}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Box display="flex" flexDirection="row" justifyContent="right">
                                    <Link href='/#' passHref >
                                        <MUILink variant="body1" underline="none" color="text.tertiary">
                                            Lihat detail pembelian
                                        </MUILink>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={1} direction="row">
                                    <Grid item xs={12}>
                                        <Typography variant="body1" gutterBottom>
                                            <b> Detail Pembelian</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Typography variant="body1" gutterBottom>
                                            {TrackingResult.product.name} {TrackingResult.quantity}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography variant="body1" gutterBottom>
                                            RP 1.000.000
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Typography variant="body1" gutterBottom>
                                            {TrackingResult.quantity} untuk packing
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography variant="body1" gutterBottom>
                                            RP 75.000
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Typography variant="body1" gutterBottom>
                                            Ongkos Kirim
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography variant="body1" gutterBottom>
                                            RP 50.000
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Typography variant="body1" gutterBottom>
                                            Biaya Admin
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography variant="body1" gutterBottom>
                                            RP 10.000
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={7} marginTop={1}>
                                        <Typography variant="body1" gutterBottom>
                                            TOTAL
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5} marginTop={1}>
                                        <Typography variant="h6" color="text.secondary" gutterBottom>
                                            RP {TrackingResult.totalPrice}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box display="flex" flexDirection="row" justifyContent="right">
                                            <Link href='/#' passHref >
                                                <MUILink variant="body1" underline="none" color="text.tertiary">
                                                    Lihat lebih sedikit
                                                </MUILink>
                                            </Link>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid >
    )
}