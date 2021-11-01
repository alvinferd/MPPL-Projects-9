import CardProduct from './cardProduct'
import { Grid } from '@mui/material'
import { ListProducts } from '../utils/dummy/ListProduct';

export default function ListCardProduct() {
    return (
        <Grid container spacing={4} alignItems="stretch" sx={{ p: 1 }}>
            {ListProducts.map(product => {
                return (
                    <Grid item key={product.id} style={{ display: 'flex'}}>
                        <CardProduct images={product.images} name={product.name} description={product.description} price={product.price} rating={product.rating} />
                    </Grid>
                )
            })}
        </Grid>
    )
}