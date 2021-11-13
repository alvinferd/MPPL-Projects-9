import * as React from 'react'
import { Box, Card, CardContent, Grid, Typography, Link as MUILink, Button, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MyCart from '../utils/dummy/MyCart'
import ItemCart from './itemCart'
import { useRouter } from "next/router"
import { AllCheckerCheckbox, CheckboxGroup } from '@createnl/grouped-checkboxes';
import styles from '../styles/cart.module.css'

const useStyles = makeStyles({
    root: {
        boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.4)"
    }
});

const label = { inputProps: { 'aria-label': 'Checkbox Keranjang' } };

export default function CartCard() {
    const [isAllChecked, setIsAllChecked] = React.useState(false);

    const handleAllChecked = () => {
        isAllChecked ? setIsAllChecked(false) : setIsAllChecked(true);
    }


    const router = useRouter();
    const classes = useStyles();
    return (
        <Grid container spacing={2} sx={{ width: '100%' }}>
            <Grid item xs={12} md={8} lg={8}>
                <Card className={classes.root} sx={{ maxWidth: 1151 }} style={{ height: '100%', boxShadow: 3 }} >
                    <CardContent style={{ height: '100%' }}>
                        <Grid container rowSpacing={{ xs: 4, xl: 5 }} columnSpacing={2}>
                            <CheckboxGroup>
                                <Grid item xs={12}>
                                    <Grid container spacing={0} direction="row" alignItems="center">
                                        <Grid item xs={0.75}>
                                            <Grid container spacing={0} justifyContent="center">
                                                <AllCheckerCheckbox className={styles.cb} />
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Typography variant="h6">
                                                Semua barang
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {MyCart.map(product => {
                                    return (
                                        <Grid item xs={12} key={product.id}>
                                            <ItemCart id={product.id} images={product.images[0]} name={product.name} price={product.price} seller={product.seller} isAll={isAllChecked} />
                                        </Grid>
                                    )
                                })}
                            </CheckboxGroup>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
                <Card className={classes.root} sx={{ maxWidth: 461 }} style={{ height: 'fit-content', boxShadow: 3 }} >
                    <CardContent style={{ height: 'fit-content', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                        <Grid container spacing={2} direction="column">
                            <Grid item>
                                <Typography gutterBottom>
                                    <b> Checkout Barang</b>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    Apel Poncokusumo Toko Abdi Makmur Super Manis
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    Apel Poncokusumo Toko Abdi Makmur Super Manis
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Box sx={{ width: '100%', height: 3, backgroundColor: '#000000' }}>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Typography>
                                            <b>Total Harga</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography color="text.secondary">
                                            <b>RP 1.000.000</b>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container justifyContent="center">
                                    <Button variant="contained" color="secondary" size="large" onClick={() => router.push(`/cart/pay`)}>
                                        Bayar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid >
    )
}