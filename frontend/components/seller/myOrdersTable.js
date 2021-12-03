import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Grid, IconButton, Link as MUILink, Typography } from '@mui/material';
import Image from 'next/image';

const columns = [
    {
        id: 'produk',
        label: 'Produk',
        align: 'left',
        minWidth: 275
    },
    {
        id: 'jmldibayar',
        label: 'Jumlah Harus Dibayar',
        align: 'left',
        minWidth: 220,
        format: (value) => value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }),
    },
    {
        id: 'jenisbayar',
        label: 'Jenis Pembayaran',
        minWidth: 200,
        align: 'left'
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'left'
    },
    {
        id: 'jasakirim',
        label: 'Jasa Kirim',
        minWidth: 200,
        align: 'left'
    },
    {
        id: 'aksi',
        label: 'Aksi',
        minWidth: 150,
        align: 'left'
    },
];

function createData(produk, jmldibayar, jenisbayar, status, jasakirim, aksi) {
    return { produk, jmldibayar, jenisbayar, status, jasakirim, aksi };
}

const AksiCTA = () => {
    return (
        <MUILink href='/seller/orderdetails' color='secondary'>
            Rincian Pesanan
        </MUILink>
    )
}

const AksiCTA2 = () => {
    return (
        <MUILink href='/seller/shipmentset' color='secondary'>
            Atur Pengiriman
        </MUILink>
    )
}

const GridProduk = ({ produk, penjual }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='body2'>
                    {penjual}
                </Typography>
            </Grid>
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
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" penjual='si_kepala_desa' />, 1000000, 'Transfer Bank - BCA', 'Sudah Dikirim', 'J&T Express (Reguler)', <AksiCTA />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" penjual='si_kepala_desa' />, 1000000, 'Transfer Bank - BCA', 'Perlu Dikirim', '-', <AksiCTA2 />),
    createData(<GridProduk produk="Apel Merah Khas Poncokusumo" penjual='si_kepala_desa' />, 1000000, '-', 'Belum Dibayar', '-', <AksiCTA />),
];

export default function MyOrdersTable({ myProducts }) {
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
