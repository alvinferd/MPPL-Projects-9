import { Grid, Link, Typography } from "@mui/material"
import ApiURL from "../utils/constant"
import Image from 'next/image'

export default function ProductLainDiToko({ productToko }) {
    return (
        <Link key={productToko.id} href={`/products/${productToko.title}`} passHref >
            <Grid item style={{ display: 'flex' }} xs={6} md={6} lg={4} xl={3}>
                <Grid container style={{ cursor: 'pointer' }} spacing={4} direction="row" alignItems="center" justifyContent="flex-start">
                    <Grid item>
                        <Image
                            src={ApiURL + productToko.image}
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
            </Grid>
        </Link>
    )
}