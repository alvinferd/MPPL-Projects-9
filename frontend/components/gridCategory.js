import { Grid, Typography, Link as MUILink } from "@mui/material"
import Image from 'next/image'
import Link from 'next/link'
import { Category } from "../utils/dummy/Category"

export default function GridCategory() {
    return (
        <Grid container spacing={4} sx={{ p: 1 }} columns={{ xl: 12 }}>
            {Category.map(kategori => {
                return (
                    <Link key={kategori.id} href={`/category/${kategori.name}`} passHref >
                        <Grid item style={{ display: 'flex' }} xl={3}>
                            <Grid container style={{ cursor: 'pointer' }} spacing={4} direction="row" alignItems="center" justifyContent="flex-start">
                                <Grid item>
                                    <Image
                                        src={kategori.img}
                                        alt={kategori.name}
                                        height={120}
                                        width={120} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" color="text.primary" textAlign="center">
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