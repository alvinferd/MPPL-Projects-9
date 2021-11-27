import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import baseApi, { TOKEN_KEY } from '../../api';
import Cookies from 'js-cookie'
import { CastForEducationOutlined } from '@mui/icons-material';
import router from 'next/router';
import { loadingSet } from './loading';
import { alertSetError, alertSetMessage, alertSetSuccess } from './alert';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        dataCheck: [],
    },
    reducers: {
        cartSet: (state, action) => ({
            ...state,
            data: action.payload ?? [],
        }),
        cartSetCheck: (state, action) => ({
            ...state,
            dataCheck: action.payload ?? [],
        }),
        cartReset: (state, action) => {
            return {
                ...state,
                data: [],
                dataCheck: [],
            };
        }
    },
});

export const { cartSet, cartSetCheck, cartReset } = cartSlice.actions;
export default cartSlice.reducer;

export const cartGetData = createAsyncThunk(
    'cart/cartGetData',
    async (_, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .get("/api/v1/cart/userCart")
            .then((res) => {
                dispatch(cartSet(res));
                // console.log(res);
            })
            .catch((err) => {
                dispatch(alertSetError(true));
                dispatch(alertSetMessage(err.message));
                // console.log(err);
            })
            .finally(() => {
                dispatch(loadingSet(false));
            });
    }
);

export const cartGetDataCheck = createAsyncThunk(
    'cart/cartGetDataCheck',
    async (_, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .get("/api/v1/cart/userCartCentang")
            .then((res) => {
                dispatch(cartSetCheck(res));
                // console.log(res);
            })
            .catch((err) => {
                dispatch(alertSetError(true));
                dispatch(alertSetMessage(err.message));
                // console.log(err);
            })
            .finally(() => {
                dispatch(loadingSet(false));
            });
    }
);

export const cartAddProduct = createAsyncThunk(
    'cart/cartAddProduct',
    async (data, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .post("/api/v1/cart/addCart", data)
            .then((res) => {
                dispatch(alertSetSuccess(true));
                dispatch(alertSetMessage("Produk berhasil ditambahkan ke keranjang!"));
                // console.log(res);
            })
            .catch((err) => {
                dispatch(alertSetError(true));
                dispatch(alertSetMessage(err.message));
                // console.log(err);
            })
            .finally(() => {
                dispatch(loadingSet(false));
            });
    }
);

export const cartCentangCheckout = createAsyncThunk(
    'cart/cartCentangCheckout',
    async (id, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .post("/api/v1/cart/checkoutTrue/" + id,)
            .then((res) => {
                dispatch(cartGetDataCheck());
                dispatch(cartGetData());
                // console.log(res);
            })
            .catch((err) => {
                dispatch(alertSetError(true));
                dispatch(alertSetMessage(err.message));
                // console.log(err);
            })
            .finally(() => {
                dispatch(loadingSet(false));
            });
    }
);

export const cartUnCentangCheckout = createAsyncThunk(
    'cart/cartUnCentangCheckout',
    async (id, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .post("/api/v1/cart/checkoutFalse/" + id,)
            .then((res) => {
                dispatch(cartGetDataCheck());
                dispatch(cartGetData());
                // console.log(res);
            })
            .catch((err) => {
                dispatch(alertSetError(true));
                dispatch(alertSetMessage(err.message));
                // console.log(err);
            })
            .finally(() => {
                dispatch(loadingSet(false));
            });
    }
);

export const cartDeleteProduct = createAsyncThunk(
    'cart/cartDeleteProduct',
    async (id, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .delete("/api/v1/cart/deleteCart/" + id)
            .then((res) => {
                dispatch(cartGetData());
                dispatch(cartGetDataCheck());
                // console.log(res);
            })
            .catch((err) => {
                dispatch(alertSetError(true));
                dispatch(alertSetMessage(err.message));
                // console.log(err);
            })
            .finally(() => {
                dispatch(loadingSet(false));
            });
    }
);