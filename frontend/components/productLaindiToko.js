import { Grid, Link, Typography } from "@mui/material"
import { ApiURL } from "../utils/constant"
import Image from 'next/image'

export default function ProductLainDiToko({ productToko }) {
    return (
        <Link key={productToko.id} href={`/products/${productToko.title}`} passHref >
            <Grid container style={{ cursor: 'pointer' }} spacing={4} direction="row" alignItems="center" justifyContent="flex-start">
                <Grid item>
                    <Image
                        src={(productToko.image) ? ApiURL + productToko.image : "/images/dp toko pak makmur.png"}
                        alt={productToko.title}
                        height={70}
                        width={70}
                    />
                </Grid>
                <Grid item>
                    <Typography variant="body1" color="text.primary" textAlign="left" >
                        <b> {productToko.title}</b>
                    </Typography>
                </Grid>
            </Grid>
        </Link>
    )
}