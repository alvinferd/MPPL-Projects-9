import { Grid } from '@mui/material'
import { ListWisata } from '../utils/dummy/ListWisata';
import CardWisata from './cardWisata';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ListCardWisata() {
    var count = 0;

    if (useMediaQuery('(min-width:0px)')) {
        count = 1;
    }
    if (useMediaQuery('(min-width:900px)')) {
        count = 2;
    }
    if (useMediaQuery('(min-width:1536px)')) {
        count = 3;
    }

    return (
        <Grid container spacing={{ md: 4, xs: 3 }} alignItems="stretch" sx={{ xs: {margin: 0}, md: { p: 1 } }}>
            {ListWisata.slice(0, count).map(wisata => {
                return (
                    <Grid item key={wisata.id} style={{ display: 'flex'}} columns={6} xs={6} md={3} xl={2}>
                        <CardWisata images={wisata.images} name={wisata.name} description={wisata.description} price={wisata.price} rating={wisata.rating} />
                    </Grid>
                )
            })}
        </Grid>
    )
}