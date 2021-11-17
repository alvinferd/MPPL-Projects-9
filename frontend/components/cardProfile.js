import * as React from 'react'
import { Box, Button, Card, CardContent, Grid, Input, Link as MUILink, MenuItem, Select, Tab, Tabs, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
import Image from 'next/image'
import User from '../utils/dummy/User'
import { useForm, Controller } from "react-hook-form"
import theme from '../themes/default'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import Link from 'next/link'
import { red } from "@mui/material/colors"

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
                <Box sx={{ paddingX: 3, paddingY: 1, maxWidth: { lg: '890px', xl: '1170px' }, width: 'fit-content' }}>
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

const onSubmit = (data) => {
    console.log(data);
    // dispatch(userLogin(data));
};

export default function CardProfile() {
    const [value, setValue] = React.useState(0);
    const [isEdited, setIsEdited] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const jk = User.jenis_kelamin;
    const [jenisKelamin, setJenisPengiriman] = React.useState(jk);

    const handleChangeSelector = (event) => {
        setJenisPengiriman(event.target.value);
    };
    const edited = () => {
        setIsEdited(!isEdited);
    }

    const classes = useStyles();
    const { control, handleSubmit } = useForm();
    return (
        <Card className={classes.root} sx={{ maxWidth: 1512 }} style={{ height: '100%', boxShadow: 3 }} >
            <CardContent style={{ height: '100%' }}>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                        orientation="vertical" textColor="secondary" indicatorColor="secondary"
                    >
                        <Tab label="Biodata Diri" {...a11yProps(0)}/>
                        <Tab label="Daftar Alamat" {...a11yProps(1)} />
                        <Tab label="Upload Pembayaran" {...a11yProps(2)}/>
                        <Tab label="Riwayat Pemesanan" {...a11yProps(3)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        {/* TIDAK SEDANG DIEDIT */}
                        <Grid container spacing={4} display={isEdited ? 'none' : 'flex'}>
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
                                            {jenisKelamin}
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
                                            <Button variant="contained" color="secondary" onClick={edited}>
                                                Edit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* SEDANG DIEDIT */}
                        <Grid container spacing={4} display={isEdited ? 'flex' : 'none'}>
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
                                <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", alignItems: "center" }}>
                                    <Grid container rowSpacing={2} direction="row" alignItems='center'>
                                        <Grid item xs={4}>
                                            <Typography>
                                                <b>Nama</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Controller
                                                name="nama"
                                                control={control}
                                                defaultValue={User.nama}
                                                render={({ field: { onChange, value } }) => (
                                                    <TextField
                                                        fullWidth
                                                        required
                                                        size="small"
                                                        color="secondary"
                                                        type="text"
                                                        value={value}
                                                        onChange={onChange}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography>
                                                <b>Tanggal Lahir</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Controller
                                                name="tanggal_lahir"
                                                control={control}
                                                defaultValue={User.tanggal_lahir}
                                                render={({ field: { onChange, value } }) => (
                                                    <TextField
                                                        fullWidth
                                                        required
                                                        type="date"
                                                        size="small"
                                                        color="secondary"
                                                        value={value}
                                                        onChange={onChange}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography>
                                                <b>Jenis Kelamin</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Controller
                                                name="jenis-kelamin"
                                                control={control}
                                                defaultValue={User.jenis_kelamin}
                                                render={({ field: { onChange, value } }) => (
                                                    <Select
                                                        fullWidth
                                                        labelId="jenis-kelamin-selector"
                                                        id="jenis-kelamin-selector"
                                                        value={jenisKelamin}
                                                        placeholder="Pilih Disini"
                                                        color="secondary"
                                                        size='small'
                                                        onChange={handleChangeSelector}
                                                    >
                                                        <MenuItem value={'Laki-Laki'}>Laki-Laki</MenuItem>
                                                        <MenuItem value={'Perempuan'}>Perempuan</MenuItem>
                                                    </Select>
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography>
                                                <b>Email</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Controller
                                                name="email"
                                                control={control}
                                                defaultValue={User.email}
                                                render={({ field: { onChange, value } }) => (
                                                    <TextField
                                                        fullWidth
                                                        required
                                                        size="small"
                                                        color="secondary"
                                                        type="text"
                                                        value={value}
                                                        onChange={onChange}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography>
                                                <b>Nomor Handphone</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Controller
                                                name="no_hp"
                                                control={control}
                                                defaultValue={User.no_hp}
                                                render={({ field: { onChange, value } }) => (
                                                    <TextField
                                                        fullWidth
                                                        required
                                                        size="small"
                                                        color="secondary"
                                                        type="text"
                                                        value={value}
                                                        onChange={onChange}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: '60%', paddingTop: 2 }}>
                                                <Button type='submit' variant="contained" color="secondary" onClick={edited}>
                                                    Save
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid container spacing={4} >
                            <Grid item xs={12}>
                                <Button variant="contained" color="secondary">
                                    Tambah Daftar Alamat
                                </Button>
                            </Grid>
                            {User.alamat_tersimpan.map(alamat => {
                                return (
                                    <Grid item xs={12} key={alamat.id}>
                                        <Card className={classes.root} style={{ width: '100%', boxShadow: 3 }} >
                                            <CardContent style={{ height: '100%' }}>
                                                <Grid container spacing={2} >
                                                    <Grid item xs={11}>
                                                        <Grid container columnSpacing={2} alignItems="center">
                                                            <Grid item>
                                                                <Typography variant="body1">
                                                                    <b>{alamat.nama_penerima}</b>
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography variant="body2" color="text.disabled" display={alamat.isPrimary ? 'block' : 'none'}>
                                                                    Alamat Utama
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={1} alignContent="end" display={alamat.isPrimary ? 'none' : 'block'}>
                                                        <DeleteOutlineIcon color="error" />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid container columnSpacing={4} alignItems="center">
                                                            <Grid item>
                                                                <Typography variant="body1">
                                                                    {alamat.no_hp}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography variant="body1">
                                                                    {alamat.email}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="body1">
                                                            {alamat.alamat}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid container columnSpacing={4} alignItems="center">
                                                            <Grid item>
                                                                <Link href={`/#`} passHref >
                                                                    <MUILink variant="body2" underline="none" color="text.tertiary">
                                                                        Edit alamat
                                                                    </MUILink>
                                                                </Link>
                                                            </Grid>
                                                            <Grid item display={alamat.isPrimary ? 'none' : 'block'}>
                                                                <Link href={`/#`} passHref >
                                                                    <MUILink variant="body2" underline="none" color="text.tertiary">
                                                                        Jadikan alamat utama
                                                                    </MUILink>
                                                                </Link>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })}

                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Grid container spacing={2} direction="column">
                            <Grid item>
                                <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", alignItems: "center" }}>
                                    <Card className={classes.root} sx={{ maxWidth: 1546 }} style={{ height: 'fit-content', boxShadow: 3 }} >
                                        <CardContent style={{ height: 'fit-content', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                                            <Grid container spacing={2} direction="row">
                                                <Grid item xs={3.5} md={2} lg={1} sx={{ position: 'relative' }}>
                                                    <Image
                                                        src="/images/apel.png"
                                                        alt="Apel"
                                                        height={138}
                                                        width={156}
                                                    // layout='fill'
                                                    // objectFit='fill'
                                                    />
                                                </Grid>
                                                <Grid item xs={8.5} md={5} lg={5.5}>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12}>
                                                            <Typography>
                                                                Apel Poncokusumo Toko Abdi Makmur Super Manis
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography>
                                                                Total Pembayaran : RP 1.050.000
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12} md={5} lg={5.5}>
                                                    <Grid container>
                                                        <Grid item xs={12}>
                                                            <label htmlFor="contained-button-file">
                                                                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                                                {/* <Button variant="contained" component="span">
                                                    Upload
                                                </Button> */}
                                                            </label>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography variant="body2" color={red[500]}>
                                                                Ukuran maksimum file : 2MB, Format file : PDF, JPG, JPEG, PNG.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid container justifyContent="center" paddingTop={4}>
                                                <Button type="submit" variant="contained" color="secondary" size="large"
                                                // onClick={() => router.push(`/cart/pay/confirm`)}
                                                >
                                                    Konfirmasi
                                                </Button>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </form>
                            </Grid>
                            <Grid item>
                                <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", alignItems: "center" }}>
                                    <Card className={classes.root} sx={{ maxWidth: 1546 }} style={{ height: 'fit-content', boxShadow: 3 }} >
                                        <CardContent style={{ height: 'fit-content', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                                            <Grid container spacing={2} direction="row">
                                                <Grid item xs={3.5} md={2} lg={1} sx={{ position: 'relative' }}>
                                                    <Image
                                                        src="/images/apel.png"
                                                        alt="Apel"
                                                        height={138}
                                                        width={156}
                                                    // layout='fill'
                                                    // objectFit='fill'
                                                    />
                                                </Grid>
                                                <Grid item xs={8.5} md={5} lg={5.5}>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12}>
                                                            <Typography>
                                                                Apel Poncokusumo Toko Abdi Makmur Super Manis
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography>
                                                                Total Pembayaran : RP 1.050.000
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12} md={5} lg={5.5}>
                                                    <Grid container>
                                                        <Grid item xs={12}>
                                                            <label htmlFor="contained-button-file">
                                                                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                                                {/* <Button variant="contained" component="span">
                                                    Upload
                                                </Button> */}
                                                            </label>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography variant="body2" color={red[500]}>
                                                                Ukuran maksimum file : 2MB, Format file : PDF, JPG, JPEG, PNG.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid container justifyContent="center" paddingTop={4}>
                                                <Button type="submit" variant="contained" color="secondary" size="large" disabled
                                                // onClick={() => router.push(`/cart/pay/confirm`)}
                                                >
                                                    Konfirmasi
                                                </Button>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </form>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Typography>Item Four</Typography>
                    </TabPanel>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                        textColor="secondary" indicatorColor="secondary"
                    >
                        <Tab label="Biodata Diri" {...a11yProps(0)}/>
                        <Tab label="Daftar Alamat" {...a11yProps(1)} />
                        <Tab label="Upload Pembayaran" {...a11yProps(2)}/>
                        <Tab label="Riwayat Pemesanan" {...a11yProps(3)} />
                    </Tabs>

                </Box>
                <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
                <TabPanel value={value} index={0} >
                    {/* TIDAK SEDANG DIEDIT */}
                    <Grid container spacing={4} display={isEdited ? 'none' : 'flex'} marginTop={1}>
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
                                        {jenisKelamin}
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
                                        <Button variant="contained" color="secondary" onClick={edited}>
                                            Edit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* SEDANG DIEDIT */}
                    <Grid container spacing={4} display={isEdited ? 'flex' : 'none'}>
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
                            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", alignItems: "center" }}>
                                <Grid container rowSpacing={2} direction="row" alignItems='center'>
                                    <Grid item xs={4}>
                                        <Typography>
                                            <b>Nama</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Controller
                                            name="nama"
                                            control={control}
                                            defaultValue={User.nama}
                                            render={({ field: { onChange, value } }) => (
                                                <TextField
                                                    fullWidth
                                                    required
                                                    size="small"
                                                    color="secondary"
                                                    type="text"
                                                    value={value}
                                                    onChange={onChange}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography>
                                            <b>Tanggal Lahir</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Controller
                                            name="tanggal_lahir"
                                            control={control}
                                            defaultValue={User.tanggal_lahir}
                                            render={({ field: { onChange, value } }) => (
                                                <TextField
                                                    fullWidth
                                                    required
                                                    type="date"
                                                    size="small"
                                                    color="secondary"
                                                    value={value}
                                                    onChange={onChange}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography>
                                            <b>Jenis Kelamin</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Controller
                                            name="jenis-kelamin"
                                            control={control}
                                            defaultValue={User.jenis_kelamin}
                                            render={({ field: { onChange, value } }) => (
                                                <Select
                                                    fullWidth
                                                    labelId="jenis-kelamin-selector"
                                                    id="jenis-kelamin-selector"
                                                    value={jenisKelamin}
                                                    placeholder="Pilih Disini"
                                                    color="secondary"
                                                    size='small'
                                                    onChange={handleChangeSelector}
                                                >
                                                    <MenuItem value={'Laki-Laki'}>Laki-Laki</MenuItem>
                                                    <MenuItem value={'Perempuan'}>Perempuan</MenuItem>
                                                </Select>
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography>
                                            <b>Email</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Controller
                                            name="email"
                                            control={control}
                                            defaultValue={User.email}
                                            render={({ field: { onChange, value } }) => (
                                                <TextField
                                                    fullWidth
                                                    required
                                                    size="small"
                                                    color="secondary"
                                                    type="text"
                                                    value={value}
                                                    onChange={onChange}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography>
                                            <b>Nomor Handphone</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Controller
                                            name="no_hp"
                                            control={control}
                                            defaultValue={User.no_hp}
                                            render={({ field: { onChange, value } }) => (
                                                <TextField
                                                    fullWidth
                                                    required
                                                    size="small"
                                                    color="secondary"
                                                    type="text"
                                                    value={value}
                                                    onChange={onChange}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: '60%', paddingTop: 2 }}>
                                            <Button type='submit' variant="contained" color="secondary" onClick={edited}>
                                                Save
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} >
                    <Grid container spacing={4} marginTop={1} >
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary">
                                Tambah Daftar Alamat
                            </Button>
                        </Grid>
                        {User.alamat_tersimpan.map(alamat => {
                            return (
                                <Grid item xs={12} key={alamat.id}>
                                    <Card className={classes.root} style={{ width: '100%', boxShadow: 3 }} >
                                        <CardContent style={{ height: '100%' }}>
                                            <Grid container spacing={2} >
                                                <Grid item xs={11}>
                                                    <Grid container columnSpacing={2} alignItems="center">
                                                        <Grid item>
                                                            <Typography variant="body1">
                                                                <b>{alamat.nama_penerima}</b>
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="body2" color="text.disabled" display={alamat.isPrimary ? 'block' : 'none'}>
                                                                Alamat Utama
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={1} alignContent="end" display={alamat.isPrimary ? 'none' : 'block'}>
                                                    <DeleteOutlineIcon color="error" />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container columnSpacing={4} alignItems="center">
                                                        <Grid item>
                                                            <Typography variant="body1">
                                                                {alamat.no_hp}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="body1">
                                                                {alamat.email}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography variant="body1">
                                                        {alamat.alamat}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container columnSpacing={4} alignItems="center">
                                                        <Grid item>
                                                            <Link href={`/#`} passHref >
                                                                <MUILink variant="body2" underline="none" color="text.tertiary">
                                                                    Edit alamat
                                                                </MUILink>
                                                            </Link>
                                                        </Grid>
                                                        <Grid item display={alamat.isPrimary ? 'none' : 'block'}>
                                                            <Link href={`/#`} passHref >
                                                                <MUILink variant="body2" underline="none" color="text.tertiary">
                                                                    Jadikan alamat utama
                                                                </MUILink>
                                                            </Link>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })}

                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2} >
                    <Grid container spacing={2} direction="column" marginTop={1}>
                        <Grid item>
                            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", alignItems: "center" }}>
                                <Card className={classes.root} sx={{ maxWidth: 1546 }} style={{ height: 'fit-content', boxShadow: 3 }} >
                                    <CardContent style={{ height: 'fit-content', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                                        <Grid container spacing={2} direction="row">
                                            <Grid item xs={3.5} md={2} lg={1} sx={{ position: 'relative' }}>
                                                <Image
                                                    src="/images/apel.png"
                                                    alt="Apel"
                                                    height={138}
                                                    width={156}
                                                // layout='fill'
                                                // objectFit='fill'
                                                />
                                            </Grid>
                                            <Grid item xs={8.5} md={5} lg={5.5}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12}>
                                                        <Typography>
                                                            Apel Poncokusumo Toko Abdi Makmur Super Manis
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography>
                                                            Total Pembayaran : RP 1.050.000
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} md={5} lg={5.5}>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <label htmlFor="contained-button-file">
                                                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                                            {/* <Button variant="contained" component="span">
                                                    Upload
                                                </Button> */}
                                                        </label>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="body2" color={red[500]}>
                                                            Ukuran maksimum file : 2MB, Format file : PDF, JPG, JPEG, PNG.
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container justifyContent="center" paddingTop={4}>
                                            <Button type="submit" variant="contained" color="secondary" size="large"
                                            // onClick={() => router.push(`/cart/pay/confirm`)}
                                            >
                                                Konfirmasi
                                            </Button>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </form>
                        </Grid>
                        <Grid item>
                            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%", alignItems: "center" }}>
                                <Card className={classes.root} sx={{ maxWidth: 1546 }} style={{ height: 'fit-content', boxShadow: 3 }} >
                                    <CardContent style={{ height: 'fit-content', display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                                        <Grid container spacing={2} direction="row">
                                            <Grid item xs={3.5} md={2} lg={1} sx={{ position: 'relative' }}>
                                                <Image
                                                    src="/images/apel.png"
                                                    alt="Apel"
                                                    height={138}
                                                    width={156}
                                                // layout='fill'
                                                // objectFit='fill'
                                                />
                                            </Grid>
                                            <Grid item xs={8.5} md={5} lg={5.5}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12}>
                                                        <Typography>
                                                            Apel Poncokusumo Toko Abdi Makmur Super Manis
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography>
                                                            Total Pembayaran : RP 1.050.000
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} md={5} lg={5.5}>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <label htmlFor="contained-button-file">
                                                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                                            {/* <Button variant="contained" component="span">
                                                    Upload
                                                </Button> */}
                                                        </label>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="body2" color={red[500]}>
                                                            Ukuran maksimum file : 2MB, Format file : PDF, JPG, JPEG, PNG.
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container justifyContent="center" paddingTop={4}>
                                            <Button type="submit" variant="contained" color="secondary" size="large" disabled
                                            // onClick={() => router.push(`/cart/pay/confirm`)}
                                            >
                                                Konfirmasi
                                            </Button>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </form>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3} >
                    <Typography marginTop={1}>Item Four</Typography>
                </TabPanel>
                </Box>
            </CardContent>
        </Card>
    )
}