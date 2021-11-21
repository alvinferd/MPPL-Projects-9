import * as React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Link as MUILink, Typography, Toolbar, Box, AppBar, TextField, IconButton, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import LogoPoncolapak from '../public/PoncolapakLogo.svg'
import LocationLogo from '../public/LocationLogo.svg'
import OrderLogo from '../public/Receipt.svg'
import ShoppingCartLogo from '../public/ShoppingCartLogo.svg'
import theme from '../themes/default'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
       [`& fieldset`]: {
             borderRadius: '5px 0px 0px 5px',
       },
    },
 });

export default function Header() {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 6 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href="/" passHref >
                            <MUILink variant="body1" underline="none" color="inherit">
                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image
                                        src={LogoPoncolapak}
                                        alt="Logo Poncolapak"
                                        height={30}
                                    />
                                    <Typography
                                        fontFamily="Poppins"
                                        variant="h6"
                                        noWrap
                                        component="div">
                                        Poncolapak
                                    </Typography>
                                </Box>
                            </MUILink>
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 3, justifyContent: 'center', display: { xs: 'none', sm: 'flex' }, flexDirection: 'row', padding: theme.spacing(1, 1, 1, 1) }}>
                        <Box sx={{ flexGrow: 2.5, padding: theme.spacing(1, 0, 1, 0) }}>
                            <TextField
                                id="search" className={classes.root} label="Search" variant="outlined" fullWidth color="common" size="small"
                                InputLabelProps={{
                                    style: { color: '#000000' },
                                }}
                            />
                        </Box>
                        <Box sx={{padding: theme.spacing(1, 0, 1, 0) }}>
                            <Button aria-label='search' color='secondary' variant='contained' size='large' sx={{borderRadius: "0px 5px 5px 0px"}}>
                                <SearchIcon />
                            </Button>
                        </Box>
                        
                    </Box>
                    <Box sx={{ flexGrow: 2, justifyContent: 'space-evenly', alignItems: 'center', display: { xs: 'none', sm: 'flex' }, flexDirection: 'row' }}>
                        <Link href="/cart" passHref>
                            <MUILink variant="body1" underline="none" color="inherit">
                                <Image
                                    src={ShoppingCartLogo}
                                    alt="Keranjang Belanja"
                                    height={25}
                                />
                            </MUILink>
                        </Link>
                        <Link href="/tracking" passHref>
                            <MUILink variant="body1" underline="none" color="inherit">
                                <Image
                                    src={LocationLogo}
                                    alt="Lokasi Kamu"
                                    height={25}
                                />
                            </MUILink>
                        </Link>
                        <Link href="/my-order" passHref>
                            <MUILink variant="body1" underline="none" color="inherit">
                                <Image
                                    src={OrderLogo}
                                    alt="Pesanan Saya"
                                    height={25}
                                />
                            </MUILink>
                        </Link>
                        <Link href="/profile" passHref>
                            <MUILink variant="body1" underline="none" color="inherit">Profile</MUILink>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}
