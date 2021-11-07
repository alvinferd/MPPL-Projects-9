import { Grid, Typography, Link as MUILink } from "@mui/material"
import Image from 'next/image'
import Link from 'next/link'
import { Category } from "../utils/dummy/Category"

export default function GridCategory() {
    return (
        <Grid container spacing={4} sx={{ p: 1 }} columns={12}>
            {Category.map(kategori => {
                return (
                    <Link key={kategori.id} href={`/category/${kategori.name}`} passHref >
                        <Grid item style={{ display: 'flex' }} xs={6} md={6} lg={4} xl={3}>
                            <Grid container style={{ cursor: 'pointer' }} spacing={4} direction="row" alignItems="center" justifyContent="flex-start">
                                <Grid item xs={4} xl={5}>
                                    <Image
                                        src={kategori.img}
                                        alt={kategori.name}
                                        height={120}
                                        width={120} />
                                </Grid>
                                <Grid item xs={8} xl={7}>
                                    <Typography variant="h6" color="text.primary" textAlign="left" >
                                        {kategori.name}
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