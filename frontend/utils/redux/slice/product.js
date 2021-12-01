import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import baseApi from '../../api';
import { loadingSet } from './loading';
import { alertSetError, alertSetMessage, alertSetSuccess } from './alert';

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