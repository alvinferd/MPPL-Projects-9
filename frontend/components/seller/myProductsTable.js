import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';

const columns = [
    {
        id: 'produk',
        label: 'Produk',
        align: 'left',
        minWidth: 275
    },
    {
        id: 'deskripsi',
        label: 'Deskripsi',
        align: 'left',
        minWidth: 425
    },
    {
        id: 'harga',
        label: 'Harga',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }),
    },
    {
        id: 'stok',
        label: 'Stok',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'penjualan',
        label: 'Penjualan',
        minWidth: 100,
        align: 'left',

        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'pengaturan',
        label: 'Pengaturan',
        minWidth: 100,
        align: 'left',
    },
];

function createData(produk, deskripsi, harga, stok, penjualan, pengaturan) {
    return { produk, deskripsi, harga, stok, penjualan, pengaturan };
}

const SettingButton = () => {
    return (
        <IconButton size='small' sx={{padding: 0}}>
            <SettingsOutlinedIcon color='secondary' />
        </IconButton>
    )
}

const GridProduk = ({ produk }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={5} sx={{ position: 'relative' }}>
                <Image
                    src="/images/ojolali banner.png"
                    alt={produk}
                    height={150}
                    width={150}
                // layout='fill'
                // objectFit='cover'
                />
            </Grid>
            <Grid item xs={7}>
                <Typography variant='body1'>
                    {produk}
                </Typography>
            </Grid>
        </Grid>
    )
}

const rows = [
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" />, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, amet lorem nibh adipiscing nunc ac. Vitae libero, cras at nulla tortor velit. Commodo quis cursus diam urna pharetra, bibendum. Consectetur cursus cursus tincidunt orci, in. Ut nibh porttitor varius sit diam orci sed sed ultricies', 1324171354, 3287263, 12, <SettingButton />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" />, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, amet lorem nibh adipiscing nunc ac. Vitae libero, cras at nulla tortor velit. Commodo quis cursus diam urna pharetra, bibendum. Consectetur cursus cursus tincidunt orci, in. Ut nibh porttitor varius sit diam orci sed sed ultricies', 1324171354, 3287263, 12, <SettingButton />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" />, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, amet lorem nibh adipiscing nunc ac. Vitae libero, cras at nulla tortor velit. Commodo quis cursus diam urna pharetra, bibendum. Consectetur cursus cursus tincidunt orci, in. Ut nibh porttitor varius sit diam orci sed sed ultricies', 1324171354, 3287263, 12, <SettingButton />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" />, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, amet lorem nibh adipiscing nunc ac. Vitae libero, cras at nulla tortor velit. Commodo quis cursus diam urna pharetra, bibendum. Consectetur cursus cursus tincidunt orci, in. Ut nibh porttitor varius sit diam orci sed sed ultricies', 1324171354, 3287263, 12, <SettingButton />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" />, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, amet lorem nibh adipiscing nunc ac. Vitae libero, cras at nulla tortor velit. Commodo quis cursus diam urna pharetra, bibendum. Consectetur cursus cursus tincidunt orci, in. Ut nibh porttitor varius sit diam orci sed sed ultricies', 1324171354, 3287263, 12, <SettingButton />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" />, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, amet lorem nibh adipiscing nunc ac. Vitae libero, cras at nulla tortor velit. Commodo quis cursus diam urna pharetra, bibendum. Consectetur cursus cursus tincidunt orci, in. Ut nibh porttitor varius sit diam orci sed sed ultricies', 1324171354, 3287263, 12, <SettingButton />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" />, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, amet lorem nibh adipiscing nunc ac. Vitae libero, cras at nulla tortor velit. Commodo quis cursus diam urna pharetra, bibendum. Consectetur cursus cursus tincidunt orci, in. Ut nibh porttitor varius sit diam orci sed sed ultricies', 1324171354, 3287263, 12, <SettingButton />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" />, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, amet lorem nibh adipiscing nunc ac. Vitae libero, cras at nulla tortor velit. Commodo quis cursus diam urna pharetra, bibendum. Consectetur cursus cursus tincidunt orci, in. Ut nibh porttitor varius sit diam orci sed sed ultricies', 1324171354, 3287263, 12, <SettingButton />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" />, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, amet lorem nibh adipiscing nunc ac. Vitae libero, cras at nulla tortor velit. Commodo quis cursus diam urna pharetra, bibendum. Consectetur cursus cursus tincidunt orci, in. Ut nibh porttitor varius sit diam orci sed sed ultricies', 1324171354, 3287263, 12, <SettingButton />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" />, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, amet lorem nibh adipiscing nunc ac. Vitae libero, cras at nulla tortor velit. Commodo quis cursus diam urna pharetra, bibendum. Consectetur cursus cursus tincidunt orci, in. Ut nibh porttitor varius sit diam orci sed sed ultricies', 1324171354, 3287263, 12, <SettingButton />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" />, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, amet lorem nibh adipiscing nunc ac. Vitae libero, cras at nulla tortor velit. Commodo quis cursus diam urna pharetra, bibendum. Consectetur cursus cursus tincidunt orci, in. Ut nibh porttitor varius sit diam orci sed sed ultricies', 1324171354, 3287263, 12, <SettingButton />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" />, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, amet lorem nibh adipiscing nunc ac. Vitae libero, cras at nulla tortor velit. Commodo quis cursus diam urna pharetra, bibendum. Consectetur cursus cursus tincidunt orci, in. Ut nibh porttitor varius sit diam orci sed sed ultricies', 1324171354, 3287263, 12, <SettingButton />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" />, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, amet lorem nibh adipiscing nunc ac. Vitae libero, cras at nulla tortor velit. Commodo quis cursus diam urna pharetra, bibendum. Consectetur cursus cursus tincidunt orci, in. Ut nibh porttitor varius sit diam orci sed sed ultricies', 1324171354, 3287263, 12, <SettingButton />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" />, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, amet lorem nibh adipiscing nunc ac. Vitae libero, cras at nulla tortor velit. Commodo quis cursus diam urna pharetra, bibendum. Consectetur cursus cursus tincidunt orci, in. Ut nibh porttitor varius sit diam orci sed sed ultricies', 1324171354, 3287263, 12, <SettingButton />),
];

export default function MyProductsTable({ myProducts }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    console.log(myProducts);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} color='text.primary' style={{ verticalAlign: 'top' }}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export async function getServerSideProps() {
    const response = await fetch(`http://103.41.205.191:10001/api/v1/product/getProducts`);
    const myProducts = await response.json();

    return {
        props: {
            myProducts,
        },
    };
}
