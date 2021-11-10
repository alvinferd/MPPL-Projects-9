import * as React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Link as MUILink, Typography, Toolbar, Box, AppBar, TextField, IconButton } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import LogoPoncolapak from '../public/PoncolapakLogo.svg'
import LocationLogo from '../public/LocationLogo.svg'
import ChatLogo from '../public/ChatLogo.svg'
import ShoppingCartLogo from '../public/ShoppingCartLogo.svg'
import theme from '../themes/default'

export default function Header() {
    return (
        <Box sx={{ flexGrow: 6}}>
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
                        <Box sx={{ flexGrow: 2.5, padding: theme.spacing(1,0,1,0)}}>
                        <TextField
                            id="search" label="Search" variant="outlined" fullWidth color="common" size="small"
                            InputLabelProps={{
                                style: { color: '#000000' },
                              }}
                        />
                        </Box>
                        <IconButton aria-label="search" size="large" >
                            <SearchIcon />
                        </IconButton>
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
                        <Link href="/chat" passHref>
                            <MUILink variant="body1" underline="none" color="inherit">
                                <Image
                                    src={ChatLogo}
                                    alt="Chat Penjual"
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
