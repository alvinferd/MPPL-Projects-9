import * as React from 'react'
import { Box, Card, CardContent, Grid, Typography, Link as MUILink } from '@mui/material'
import Image from 'next/image'
import CircleIcon from '@mui/icons-material/Circle'
import TrackingResult from '../utils/dummy/Tracking'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'

const useStyles = makeStyles({
    root: {
        boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.4)"
    }
});

export default function TrackingCard() {
    const chronological = TrackingResult.chronological;
    const [isDetail, setIsDetail] = React.useState(false);

    const Detail = () => {
        return (
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
                    <Typography variant="h6" color="text.quaternary" gutterBottom>
                        RP {TrackingResult.totalPrice}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" flexDirection="row" justifyContent="right">
                        <MUILink variant="body1" underline="none" color="text.tertiary" onClick={() => setIsDetail(false)} sx={{ cursor: 'pointer' }}>
                            Lihat lebih sedikit
                        </MUILink>
                    </Box>
                </Grid>
            </Grid>
        )
    }

    const NotDetail = () => {
        return (
            <Box display="flex" flexDirection="row" justifyContent="right">
                <MUILink variant="body2" color="text.tertiary" onClick={() => setIsDetail(true)} sx={{ cursor: 'pointer' }}>
                    Lihat detail pembelian
                </MUILink>
            </Box>
        )
    }

    // console.log(TrackingResult.chronological);
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={7} lg={8}>
                <Card className={classes.root} sx={{ maxWidth: 1040, maxHeight: 777 }} style={{ height: '100%', bolghadow: 3 }} >
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
                                            <Grid item xs={11}>
                                                <Grid container columnSpacing={2}>
                                                    <Grid item xs={1.1}>
                                                        <Typography variant="body1" gutterBottom>
                                                            {item.time}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={10.9}>
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
                                                <Typography variant="h6" color="text.quaternary" gutterBottom>
                                                    RP {TrackingResult.totalPrice}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                {isDetail ? <Detail /> : <NotDetail />}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid >
    )
}