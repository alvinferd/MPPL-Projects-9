import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import router from "next/router";
import baseApi from "../../api";
import { alertSetError, alertSetMessage } from "./alert";
import { loadingSet } from "./loading";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchResult: []
    },
    reducers: {
        searchResultSet: (state, action) => ({
            ...state,
            searchResult: action.payload ?? [],
        }),
    },
});

export const { searchResultSet } = searchSlice.actions;
export default searchSlice.reducer;

export const getSearchResult = createAsyncThunk(
    'cart/getSearchResult',
    async (keyword, { dispatch }) => {
        dispatch(loadingSet(true));
        const params = new URLSearchParams([['search', keyword]]);
        return baseApi
            .get("/api/v1/product/searchProducts", { params })
            .then((res) => {
                dispatch(searchResultSet(res.Products));
                router.push("/searchResult");
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