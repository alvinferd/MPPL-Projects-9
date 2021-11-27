import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import baseApi, { TOKEN_KEY } from '../../api';
import Cookies from 'js-cookie'
import { CastForEducationOutlined } from '@mui/icons-material';

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
        return baseApi
            .get("/api/v1/cart/userCart")
            .then((res) => {
                dispatch(cartSet(res));
                console.log(res);
            })
            .catch((err) => {
                // dispatch(alertError(err.message));
                console.log(err);
            })
        // .finally(() => {
        //     dispatch(loadingSet(false));
        //     dispatch(userGetData(data.username));
        //     console.log('finnaly');
        // });
    }
);

export const cartGetDataCheck = createAsyncThunk(
    'cart/cartGetDataCheck',
    async (_, { dispatch }) => {
        return baseApi
            .get("/api/v1/cart/userCartCentang")
            .then((res) => {
                dispatch(cartSetCheck(res));
                console.log(res);
            })
            .catch((err) => {
                // dispatch(alertError(err.message));
                console.log(err);
            })
        // .finally(() => {
        //     dispatch(loadingSet(false));
        //     dispatch(userGetData(data.username));
        //     console.log('finnaly');
        // });
    }
);

export const cartAddProduct = createAsyncThunk(
    'cart/cartAddProduct',
    async (data, { dispatch }) => {
        return baseApi
            .post("/api/v1/cart/addCart", data)
            .then((res) => {
                // dispatch(userLoggedIn(res.key));
                console.log(res);
            })
            .catch((err) => {
                // dispatch(alertError(err.message));
                console.log(err);
            })
        // .finally(() => {
        //     dispatch(loadingSet(false));
        //     dispatch(userGetData(data.username));
        //     console.log('finnaly');
        // });
    }
);

export const cartCentangCheckout = createAsyncThunk(
    'cart/cartCentangCheckout',
    async (id, { dispatch }) => {
        return baseApi
            .post("/api/v1/cart/checkoutTrue/" + id,)
            .then((res) => {
                console.log(res);
                // dispatch(cartEdit(res));
            })
            .catch((err) => {
                // dispatch(alertError(err.message));
                console.log(err);
            })
        // .finally(() => {
        //     dispatch(loadingSet(false));
        //     dispatch(userGetData(data.username));
        //     console.log('finnaly');
        // });
    }
);

export const cartUnCentangCheckout = createAsyncThunk(
    'cart/cartUnCentangCheckout',
    async (id, { dispatch }) => {
        return baseApi
            .post("/api/v1/cart/checkoutFalse/" + id,)
            .then((res) => {
                console.log(res);
                // dispatch(cartEdit(res));
            })
            .catch((err) => {
                // dispatch(alertError(err.message));
                console.log(err);
            })
        // .finally(() => {
        //     dispatch(loadingSet(false));
        //     dispatch(userGetData(data.username));
        //     console.log('finnaly');
        // });
    }
);

export const cartDeleteProduct = createAsyncThunk(
    'cart/cartDeleteProduct',
    async (id, { dispatch }) => {
        return baseApi
            .delete("/api/v1/cart/deleteCart/" + id)
            .then((res) => {
                // dispatch(userLoggedIn(res.key));
                console.log(res);
            })
            .catch((err) => {
                // dispatch(alertError(err.message));
                console.log(err);
            })
        // .finally(() => {
        //     dispatch(loadingSet(false));
        //     dispatch(userGetData(data.username));
        //     console.log('finnaly');
        // });
    }
);