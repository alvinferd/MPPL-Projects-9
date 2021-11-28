import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import baseApi from '../../api';
import { loadingSet } from './loading';
import { alertSetError, alertSetMessage, alertSetSuccess } from './alert';

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

export const { makeOrderSet } = orderSlice.actions;
export default orderSlice.reducer;

export const createNewOrder = createAsyncThunk(
    'order/createNewOrder',
    async (data, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .post("/api/v1/order/makeOrder", data)
            .then((res) => {
                dispatch(lastConfirmedOrder(res));
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