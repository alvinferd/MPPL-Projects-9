import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import router from "next/router";
import baseApi from "../../api";
import { alertSetError, alertSetMessage } from "./alert";
import { loadingSet } from "./loading";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categoryResult: []
    },
    reducers: {
        categoryData: (state, action) => ({
            ...state,
            categoryResult: action.payload ?? [],
        }),
    },
});

export const { categoryData } = categorySlice.actions;
export default categorySlice.reducer;

export const getCategoryData = createAsyncThunk(
    'cart/getCategoryData',
    async (id, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .get("http://103.41.205.191:10001/api/v1/product/categoryProduct/" + id,)
            .then((res) => {
                dispatch(CategoryDataSet(res.Products));
                // console.log(res.Products);
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