import * as React from 'react'
import { Box, Checkbox, Grid, IconButton, TextField, Typography } from "@mui/material";
import { green } from '@mui/material/colors';
import Image from 'next/image'
import CancelIcon from '@mui/icons-material/Cancel';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const label = { inputProps: { 'aria-label': 'Checkbox Keranjang' } };

export default function ItemCart({id, name, images, price, seller, isAll}) {
    // console.log(images);
    const [jumlahBarang, setJumlahBarang] = React.useState(1);

    const inc = () => {
        setJumlahBarang(jumlahBarang + 1);
    }

    const dec = () => {
        if (jumlahBarang > 0) {
            setJumlahBarang(jumlahBarang - 1);
        }
    }

    const handleChange = (event) => {
        setJumlahBarang(Number(event.target.value));
    }

    // const handleClick = () => {
    //     if (isAll == true) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    return (
        <Grid container columnSpacing={2} direction="row">
            <Grid item xs={1} >
                <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
                    <Checkbox
                        {...label}
                        // checked={handleClick}
                        disabled={jumlahBarang == 0}
                        
                        sx={{
                            color: "text.primary",
                            '&.Mui-checked': {
                                color: green[600],
                            },
                            '&.Mui-disabled': {
                                color: "text.disabled",
                            },
                        }}
                    />
                </Grid>
            </Grid>
            <Grid item xs={3} lg={2.5} xl={1.75} sx={{position: 'relative'}}>
                <Image
                    src={images.image}
                    alt={name}
                    // height={175}
                    // width={175}
                    layout='fill'
                    objectFit='fill'
                />
            </Grid>
            <Grid item xs={6.75} lg={7} xl={8.25}>
                <Grid container columnSpacing={2} direction="column" >
                    <Grid item>
                        <Typography variant="body1">
                            <b>{name}</b>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" gutterBottom>
                            {seller}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" color="text.secondary" gutterBottom>
                           RP {price}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={0} direction="row" alignItems="center">
                            <Grid item>
                                <IconButton aria-label="add" color="success" onClick={dec} disabled={jumlahBarang == 0}>
                                    <RemoveCircleIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <Box sx={{ width: 70, maxWidth: '100%' }}>
                                    <TextField id="product-count" type="number" variant="outlined" size="small" color="secondary" fullWidth value={jumlahBarang} onChange={handleChange}
                                        // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                        InputLabelProps={{
                                            style: { color: '#000000' },
                                        }} />
                                </Box>
                            </Grid>
                            <Grid item>
                                <IconButton aria-label="add" color="success" onClick={inc}>
                                    <AddCircleIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1.25} lg={1}>
                <IconButton aria-label="remove from cart" color='error' sx={{ paddingTop: 0 }}>
                    <CancelIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}