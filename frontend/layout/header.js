import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Link as MUILink, InputBase, Typography, Toolbar, Box, AppBar } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import LogoPoncolapak from '../public/PoncolapakLogo.svg';
import LocationLogo from '../public/LocationLogo.svg';
import ChatLogo from '../public/ChatLogo.svg';
import ShoppingCartLogo from '../public/ShoppingCartLogo.svg';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.20),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Header() {
    return (
        <Box sx={{ flexGrow: 6 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href="/" passHref >
                            <MUILink variant="body1" underline="none" color="inherit">
                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image
                                        src={LogoPoncolapak}
                                        alt="Logo Poncolapak"
                                        height={35}
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
                    <Search
                        sx={{ flexGrow: 3, display: { xs: 'none', sm: 'block' } }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 2, justifyContent: 'space-evenly', alignItems: 'center', display: { xs: 'none', sm: 'flex' }, flexDirection: 'row' }}>
                        <Link href="/keranjang" passHref>
                            <MUILink variant="body1" underline="none" color="inherit">
                                <Image
                                    src={ShoppingCartLogo}
                                    alt="Keranjang Belanja"
                                    height={30}
                                />
                            </MUILink>
                        </Link>
                        <Link href="/lokasi" passHref>
                            <MUILink variant="body1" underline="none" color="inherit">
                                <Image
                                    src={LocationLogo}
                                    alt="Lokasi Kamu"
                                    height={30}
                                />
                            </MUILink>
                        </Link>
                        <Link href="/chat" passHref>
                            <MUILink variant="body1" underline="none" color="inherit">
                                <Image
                                    src={ChatLogo}
                                    alt="Chat Penjual"
                                    height={30}
                                />
                            </MUILink>
                        </Link>
                        <Link href="/profile" passHref>
                            <MUILink variant="body1" underline="none" color="inherit">Profile</MUILink>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
