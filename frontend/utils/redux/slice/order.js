import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import baseApi from '../../api';
import { loadingSet } from './loading';
import { alertSetError, alertSetMessage, alertSetSuccess } from './alert';
import router from 'next/router';

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        makeOrder: [],
        lastConfirmedOrder: [],
    },
    reducers: {
        makeOrderSet: (state, action) => ({
            ...state,
            makeOrder: action.payload ?? [],
        }),
        lastConfirmedOrderSet: (state, action) => ({
            ...state,
            lastConfirmedOrder: action.payload ?? [],
        }),
    }
});

export const { makeOrderSet, lastConfirmedOrderSet } = orderSlice.actions;
export default orderSlice.reducer;

export const createNewOrder = createAsyncThunk(
    'order/createNewOrder',
    async (data, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .post("/api/v1/order/makeOrder", data)
            .then((res) => {
                dispatch(lastConfirmedOrderSet(res));
                router.push("/profile");
                dispatch(alertSetSuccess(true));
                dispatch(alertSetMessage("Pemesanan Berhasil, silahkan upload bukti pembayaran pada Laman Profile!"))
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