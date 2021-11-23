import { Grid } from '@mui/material'
import CardWisata from './cardWisata';
import useMediaQuery from '@mui/material/useMediaQuery';
import ApiURL from "../utils/constant"

export default function ListCardWisata({ dataWisata }) {
    var count = 0;
    // console.log(dataWisata);
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
        <Grid container spacing={{ md: 4, xs: 3 }} alignItems="stretch" sx={{ xs: { margin: 0 }, md: { p: 1 } }}>
            {dataWisata.Products.slice(0, count).map(wisata => {
                return (
                    <Grid item key={wisata.id} style={{ display: 'flex'}} columns={6} xs={6} md={3} xl={2}>
                        <CardWisata id={wisata.id} images={ApiURL + wisata.image} name={wisata.title} description={wisata.description} price={wisata.harga} rating={wisata.rating} />
                    </Grid>
                )
            })}
        </Grid>
    )
}