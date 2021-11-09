import CardProduct from './cardProduct'
import { Grid } from '@mui/material'
import { ListProducts } from '../utils/dummy/ListProduct';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ListCardProductSeller() {
    var count = 0;

    if (useMediaQuery('(min-width:0px)')) {
        count = 2;
    }
    if (useMediaQuery('(min-width:900px)')) {
        count = 2;
    }
    if (useMediaQuery('(min-width:1200px)')) {
        count = 3;
    }
    if (useMediaQuery('(min-width:1536px)')) {
        count = 4;
    }
    // console.log(ListProducts[0].images[0]);
    return (
        <Grid container spacing={{ md: 4, xs: 3 }} alignItems="stretch" sx={{ xs: {margin: 0}, md: { p: 1 } }}>
            {ListProducts.slice(0, count).map(product => {
                return (
                    <Grid item key={product.id} style={{ display: 'flex' }} columns={60} xs={30} lg={20} xl={15}>
                        <CardProduct id={product.id} images={product.images[0].image} name={product.name} description={product.description.short} price={product.price} rating={product.rating} />
                    </Grid>
                )
            })}
        </Grid>
    )
}