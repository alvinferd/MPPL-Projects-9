import { Grid } from '@mui/material'
import { ListWisata } from '../utils/dummy/ListWisata';
import CardWisata from './cardWisata';

export default function ListCardWisata() {
    return (
        <Grid container spacing={4} alignItems="stretch" sx={{ p: 1 }}>
            {ListWisata.map(wisata => {
                return (
                    <Grid item key={wisata.id} style={{ display: 'flex'}}>
                        <CardWisata images={wisata.images} name={wisata.name} description={wisata.description} price={wisata.price} rating={wisata.rating} />
                    </Grid>
                )
            })}
        </Grid>
    )
}