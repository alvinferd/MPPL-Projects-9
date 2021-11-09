import Toko from "../utils/dummy/Toko"
import { Box, Card, CardActionArea, CardMedia, CardContent, Grid, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Image from 'next/image'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'

const useStyles = makeStyles({
    root: {
        boxShadow: "2px 4px rgba(0,0,0,0.4)"
    }
});

export default function CardToko() {
    // const dp = {Toko.}
    // console.log(Toko.displayPicture);
    const classes = useStyles();
    return (
        <Card className={classes.root} sx={{ maxWidth: 488, maxHeight: 541 }} style={{ height: '100%', boxShadow: 3 }} >
            <CardContent style={{ height: 'inherit', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                <Grid container spacing={2} direction="row" alignItems="center" paddingY={2}>
                    <Grid item xs={4}>
                        <Image
                            src={Toko.displayPicture}
                            alt={Toko.nama}
                            // layout="fill"
                            height={110}
                            width={110}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>
                            <b>{Toko.nama}</b>
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="body1" gutterBottom>
                    Lokasi: {Toko.lokasi}
                </Typography>
                <Grid container spacing={2} direction="row" alignItems="center" paddingTop={2} paddingBottom={4}>
                    <Grid item xs={6}>
                        <Typography variant="body1">
                            Produk Terjual
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">
                            {Toko.terjual}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">
                            Rating
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display="flex" justifyContent="flex-start" flexDirection="row">
                            <StarBorderOutlinedIcon fontSize="small" sx={{ color: "#FFF626" }} />
                            <Typography variant="body2" color="text.primary" sx={{ paddingInline: 0.5 }}>
                                {Toko.rating} / 5.0
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center">
                    <Button variant="contained" color="secondary" sx={{ width: '60%' }}>
                        Hubungi Penjual
                    </Button>
                </Grid>
            </CardContent>
        </Card>
    )
}