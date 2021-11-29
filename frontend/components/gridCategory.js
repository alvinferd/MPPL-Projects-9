import { Grid, Typography, Link as MUILink } from "@mui/material"
import Image from 'next/image'
import Link from 'next/link'

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function GridCategory({ dataCategory }) {
    return (
        <Grid container spacing={4} sx={{ p: 1 }} columns={12}>
            {dataCategory.map(kategori => {
                return (
                    <Link key={kategori.id} href={`/category/${kategori.title}`} passHref >
                        <Grid item style={{ display: 'flex' }} xs={6} md={6} lg={4} xl={3}>
                            <Grid container style={{ cursor: 'pointer' }} spacing={4} direction="row" alignItems="center" justifyContent="flex-start">
                                <Grid item xs={4} xl={5}>
                                    <Image
                                        src="/images/categories.png"
                                        alt={kategori.title}
                                        height={120}
                                        width={120} />
                                </Grid>
                                <Grid item xs={8} xl={7}>
                                    <Typography variant="h6" color="text.primary" textAlign="left" >
                                        {capitalizeFirstLetter(kategori.title)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Link>
                )
            })}
        </Grid>
    )
}