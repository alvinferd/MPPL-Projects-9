import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FDFDFD',
        },
        secondary: {
            main: '#29A867',
            light: '#23CC75',
            dark: '#1F8A53',
        },
        tertiary: {
            main: '#F9D100',
            light: '#FFDB1F',
            dark: '#F9B208',
        },
        text: {
            primary: '#000000',
            secondary: '#FF7158',
            tertiary: '#23CC75'
        }
    },
    typography: {
        fontFamily: 'Inter',
        fontWeightLight: '300',
        fontWeightRegular: '400',
        fontWeightMedium: '500',
        fontWeightBold: '600',
        secondary: {
            fontFamily: 'Poppins',
            fontWeightLight: '300',
            fontWeightRegular: '400',
            fontWeightMedium: '500',
            fontWeightBold: '600',
        },
    }
})

export default theme;