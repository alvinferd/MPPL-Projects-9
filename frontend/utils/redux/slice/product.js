import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import baseApi from '../../api';
import { loadingSet } from './loading';
import { alertSetError, alertSetMessage, alertSetSuccess } from './alert';
import router from 'next/router';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        myProduct: [],
    },
    reducers: {
        myProductSet: (state, action) => ({
            ...state,
            myProduct: action.payload ?? [],
        }),
    }
});

export const { myProductSet } = productSlice.actions;
export default productSlice.reducer;

export const readMyProduct = createAsyncThunk(
    'product/readMyProduct',
    async (_, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .get("/api/v1/product/getProducts",)
            .then((res) => {
                // console.log(res);
                dispatch(myProductSet(res.Products));
            })
            .catch((err) => {
                dispatch(alertSetError(true));
                dispatch(alertSetMessage(err.message));
            })
            .finally(() => {
                dispatch(loadingSet(false));
            })
    }
)

export const addNewProduct = createAsyncThunk(
    'product/addNewProduct',
    async (data, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .post("/api/v1/product/addProduct", data)
            .then((res) => {
                // console.log(res);
                dispatch(alertSetSuccess(true));
                dispatch(alertSetMessage("Produk berhasil ditambahkan!"));
                // dispatch(readMyProduct());
            })
            .catch((err) => {
                // console.log(err);
                dispatch(alertSetError(true));
                dispatch(alertSetMessage(err.message));
            })
            .finally(() => {
                dispatch(loadingSet(false));
            })
    }
)

// export const successAddProduct = createAsyncThunk(
//     'product/successAddProduct',
//     async (data, { dispatch }) => {
//         // dispatch(loadingSet(true));
//         dispatch(alertSetSuccess(true));
//         dispatch(alertSetMessage("Produk berhasil ditambahkan!"));
//     }
// )


// export const addNewProduct = createAsyncThunk(
//     'product/addNewProduct',
//     async (data, { dispatch }) => {
//         const token = Cookies.get(TOKEN_KEY);
//         // dispatch(loadingSet(true));
//         return axios({
//             method: "post",
//             url: "http://103.41.205.191:10001/api/v1/product/addProduct",
//             data: data,
//             headers: {
//                 "Content-Type": "multipart/form-data",
//                 "Authorization": token,
//             },
//         })
//             .then(function (response) {
//                 //handle success
//                 console.log(response);
//             })
//             .catch(function (err) {
//                 //handle error
//                 console.log("error");
//             });
//     }
// )