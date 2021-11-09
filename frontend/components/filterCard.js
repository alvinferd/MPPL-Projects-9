import { Card, CardContent, Checkbox, Grid, Typography, Button, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Image from 'next/image'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import { green, pink } from '@mui/material/colors';

const useStyles = makeStyles({
    root: {
        boxShadow: "2px 4px rgba(0,0,0,0.4)"
    }
});

const label = { inputProps: { 'aria-label': 'Checkbox Filter' } };

export default function FilterCard() {
    const classes = useStyles();
    return (
        <Card className={classes.root} sx={{ maxWidth: 305, maxHeight: 505 }} style={{ height: '100%', boxShadow: 3 }} >
            <CardContent style={{ height: 'inherit', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                <Typography variant="h6" paddingX={2}>
                    Harga
                </Typography>
                <Grid container direction="row" alignItems="center" paddingX={2} justifyContent="space-between">
                    <Grid item xs={10}>
                        <Typography variant="body1">
                            Harga Terendah
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Checkbox
                            {...label}
                            sx={{
                                color: "text.primary",
                                '&.Mui-checked': {
                                    color: green[600],
                                },
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" paddingX={2} justifyContent="space-between">
                    <Grid item xs={10}>
                        <Typography variant="body1">
                            Harga Tertinggi
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Checkbox
                            {...label}
                            sx={{
                                color: "text.primary",
                                '&.Mui-checked': {
                                    color: green[600],
                                },
                            }}
                        />
                    </Grid>
                </Grid>
                <TextField id="min-price" variant="outlined" size="small" color="secondary" fullWidth placeholder="harga minimum"
                    sx={{
                        paddingX: 2, paddingY: 1,
                    }}
                    // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    InputLabelProps={{
                        style: { color: '#000000' },
                    }}
                />
                <TextField id="max-price" variant="outlined" size="small" color="secondary" fullWidth placeholder="harga maksimum"
                    sx={{
                        paddingX: 2, paddingBottom: 1,
                    }}
                    // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    InputLabelProps={{
                        style: { color: '#000000' },
                    }}
                />
                <Typography variant="h6" paddingX={2}>
                    Jenis
                </Typography>
                <Grid container direction="row" alignItems="center" paddingX={2} justifyContent="space-between">
                    <Grid item xs={10}>
                        <Typography variant="body1">
                            Kalung
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Checkbox
                            {...label}
                            sx={{
                                color: "text.primary",
                                '&.Mui-checked': {
                                    color: green[600],
                                },
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" paddingX={2} justifyContent="space-between">
                    <Grid item xs={10}>
                        <Typography variant="body1">
                            Gelang
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Checkbox
                            {...label}
                            sx={{
                                color: "text.primary",
                                '&.Mui-checked': {
                                    color: green[600],
                                },
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" paddingX={2} justifyContent="space-between">
                    <Grid item xs={10}>
                        <Typography variant="body1">
                            Tas Rajutan
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Checkbox
                            {...label}
                            sx={{
                                color: "text.primary",
                                '&.Mui-checked': {
                                    color: green[600],
                                },
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" paddingX={2} justifyContent="space-between">
                    <Grid item xs={10}>
                        <Typography variant="body1">
                            Cincin
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Checkbox
                            {...label}
                            sx={{
                                color: "text.primary",
                                '&.Mui-checked': {
                                    color: green[600],
                                },
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" paddingX={2} justifyContent="space-between">
                    <Grid item xs={10}>
                        <Typography variant="body1">
                            Dompet
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Checkbox
                            {...label}
                            sx={{
                                color: "text.primary",
                                '&.Mui-checked': {
                                    color: green[600],
                                },
                            }}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}