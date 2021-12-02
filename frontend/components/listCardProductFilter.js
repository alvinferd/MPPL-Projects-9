import CardProduct from './cardProduct'
import { Grid } from '@mui/material'
import { ListProducts } from '../utils/dummy/ListProduct';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ListCardProductFilter({ dataProducts }) {
    var count = 0;

    if (useMediaQuery('(min-width:0px)')) {
        count = 2;
    }
    if (useMediaQuery('(min-width:900px)')) {
        count = 2;
    }
    if (useMediaQuery('(min-width:1200px)')) {
        count = 4;
    }
    if (useMediaQuery('(min-width:1536px)')) {
        count = 5;
    }
    // console.log(ListProducts[0].images[0]);
    return (
        <Grid container spacing={{ md: 4, xs: 3 }} alignItems="stretch" sx={{ xs: {margin: 0}, md: { p: 1 } }}>
            {ListProducts.slice(0, count).map(product => {
                return (
                    <Grid item key={product.id} columns={60} xs={30} lg={15} xl={12}>
                        <CardProduct id={product.id} images={product.image} name={product.title} description={product.description} price={product.harga} rating={product.rating} />
                    </Grid>
                )
            })}
        </Grid>
    )
}