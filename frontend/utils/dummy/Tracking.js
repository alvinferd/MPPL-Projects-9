const TrackingResult = {
    seller: {
        id: 0,
        nama: 'Toko Pak Makmur',
        lokasi: 'Desa Poncokusumo Barat',
        displayPicture: "/images/dp toko pak makmur.png",
        terjual: 100,
        rating: 4.9,
        contact: '+6289507153745',
    },
    product: {
        id: 2,
        name: "Apel Poncokusumo",
        images: [
            {
                id: 0,
                image: "/images/apel.png",
            },
        ],
    },
    totalPrice: '1.000.000',
    quantity: '3 Box',
    chronological: [
        {
            id: 0,
            time: '17.45',
            detail: 'Pembayaran sudah di terima oleh penjual'
        },
        {
            id: 1,
            time: '18.50',
            detail: 'Barang sedang dikirim ke JNE dekat desa Poncokusumo'
        },
        {
            id: 2,
            time: '19.50',
            detail: 'Barang sudah sampai ke JNE dekat desa Poncokusumo'
        },
        {
            id: 3,
            time: '20.00',
            detail: 'Barang sedang di kemas oleh JNE dekat desa Poncokusumo'
        },
        {
            id: 4,
            time: '21.00',
            detail: 'Barang sedang di sortir oleh JNE Dekat desa Poncokusumo'
        },
        {
            id: 5,
            time: '22.00',
            detail: 'Barang sedang di kirim oleh JNE Dekat desa Poncokusumo ke Jakarta'
        },
        {
            id: 6,
            time: '23.00',
            detail: 'Barang sudah sampai dan terkirim ke Pak Sofyan (Jakarta)'
        },
    ],
    fixPrice: '3.000.000',
    receivedDate: '19/11/2021',
    orderNo: '183701203024014',
    payment: 'Transfer Bank - BCA',
    deliveryService: 'J&T Express',
    receiptNo: '#12030292039231',
    buyer: {
        name: 'Si Gadis',
        phoneNumber: '628222324241',
        email: 'sigadis@email.com',
        address: 'Jalan Puncaksari, Tambakaji-Ngaliyan, Semarang , KOTA SEMARANG, NGALIYAN, JAWA TENGAH, ID, 50185'
    }
}

export default TrackingResult;