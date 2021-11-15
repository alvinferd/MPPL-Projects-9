import * as React from 'react'
import { Box, Button, Card, CardContent, Grid, Link as MUILink, Tab, Tabs, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
import Image from 'next/image'
import User from '../utils/dummy/User'

const useStyles = makeStyles({
    root: {
        boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.4)"
    }
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                // <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%', paddingX: 3, paddingY: 1 }}>
                //     {children}
                // </Grid>
                <Box sx={{ paddingX: 3, paddingY: 1, maxWidth: { lg: '890px', xl:'1170px' }, width: 'fit-content' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function CardProfile() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classes = useStyles();
    return (
        <Card className={classes.root} sx={{ maxWidth: 1512 }} style={{ height: '100%', boxShadow: 3 }} >
            <CardContent style={{ height: '100%' }}>
                <Box sx={{ flexGrow: 1, display: 'flex' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                        orientation="vertical" textColor="secondary" indicatorColor="secondary"
                    >
                        <Tab label="Biodata Diri" {...a11yProps(0)} style={{ width: "100%" }} />
                        <Tab label="Daftar Alamat" {...a11yProps(1)} />
                        <Tab label="Upload Pembayaran" {...a11yProps(2)} style={{ width: "100%" }} />
                        <Tab label="Riwayat Pemesanan" {...a11yProps(3)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Grid container spacing={4}>
                            <Grid item xs={4}>
                                <Grid container rowSpacing={2} direction="column">
                                    <Grid item>
                                        <Image
                                            src={User.photo}
                                            alt={User.nama}
                                            // layout='fill'
                                            height={100}
                                            width={100}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <MUILink variant="body1" underline="none" color="text.tertiary">
                                            Ganti Foto
                                        </MUILink>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" color="text.secondary">
                                            Ukuran maksimal gambar 5 MB (Ekstensi gambar JPEG, JPG, PNG)
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={8}>
                                <Grid container rowSpacing={2} direction="row" >
                                    <Grid item xs={4}>
                                        <Typography>
                                            <b>Nama</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>
                                            {User.nama}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography>
                                            <b>Tanggal Lahir</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>
                                            {User.tanggal_lahir}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography>
                                            <b>Jenis Kelamin</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>
                                            {User.jenis_kelamin}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography>
                                            <b>Email</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>
                                            {User.email}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography>
                                            <b>Nomor Handphone</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>
                                            {User.no_hp}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: '60%', paddingTop: 2 }}>
                                            <Button variant="contained" color="secondary">
                                                Edit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Typography>Item Three</Typography>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Typography>Item Three</Typography>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Typography>Item Four</Typography>
                    </TabPanel>
                </Box>
            </CardContent>
        </Card>
    )
}