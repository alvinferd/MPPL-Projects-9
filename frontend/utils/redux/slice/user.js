import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import baseApi, { TOKEN_KEY } from '../../api';
import Cookies from 'js-cookie'
import { loadingSet } from './loading';
import { alertSetError, alertSetMessage, alertSetSuccess } from './alert';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        authenticated: false,
        current: {
            is_user: false,
            is_seller: false,
        },
        generalData: [],
        detailedData: [],
    },
    reducers: {
        userLoggedIn: (state, action) => {
            Cookies.set(TOKEN_KEY, action.payload);
            return {
                ...state,
                authenticated: true,
                current: {
                    is_user: true,
                    is_seller: false,
                },
            };
        },
        userLoggedOut: (state, action) => {
            Cookies.remove(TOKEN_KEY);
            return {
                ...state,
                authenticated: false,
                current: {
                    is_user: false,
                    is_seller: false,
                },
            };
        },
        userGeneralDataSet: (state, action) => ({
            ...state,
            generalData: action.payload ?? [],
        }),
        userDetailedDataSet: (state, action) => ({
            ...state,
            detailedData: action.payload ?? [],
        }),
        sellerLoggedIn: (state, action) => {
            Cookies.set(TOKEN_KEY, action.payload);
            return {
                ...state,
                authenticated: true,
                current: {
                    is_user: false,
                    is_seller: true,
                },
                generalData: [],
                detailedData: [],
            };
        },
    }
});

export const { userLoggedIn, userLoggedOut, userGeneralDataSet, userDetailedDataSet, sellerLoggedIn } = userSlice.actions;
export default userSlice.reducer;

export const userLogin = createAsyncThunk(
    'user/userLogin',
    async (data, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .post("/auth/login/", data)
            .then((res) => {
                dispatch(userLoggedIn(res.key));
                // console.log(res);
            })
            .catch((err) => {
                dispatch(alertSetError(true));
                dispatch(alertSetMessage(err.message));
                // console.log(err);
            })
            .finally(() => {
                dispatch(loadingSet(false));
                // dispatch(userGetGeneralData());
                // dispatch(userGetDetailedData());
            });
    }
);

export const sellerLogin = createAsyncThunk(
    'seller/sellerLogin',
    async (data, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .post("/auth/login/", data)
            .then((res) => {
                dispatch(sellerLoggedIn(res.key));
                console.log(res);
            })
            .catch((err) => {
                dispatch(alertSetError(true));
                dispatch(alertSetMessage(err.message));
                // console.log(err);
            })
            .finally(() => {
                dispatch(userGetGeneralData());
                dispatch(userGetDetailedData());
            });
    }
);

export const userLogout = createAsyncThunk(
    "user/userLogout",
    async (_, { dispatch }) => {
        dispatch(loadingSet(true));
        dispatch(userLoggedOut());
        dispatch(loadingSet(false));
    }
);

export const userGetDetailedData = createAsyncThunk(
    "user/userGetData",
    async (_, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .get("/rest-auth/detailCustomer")
            .then((res) => {
                dispatch(userDetailedDataSet(res.Profile[0]));
                // console.log(res);
            })
            .catch((err) => {
                dispatch(alertSetError(true));
                dispatch(alertSetMessage(err.message));
            })
            .finally(() => dispatch(loadingSet(false)));
    }
);


export const userGetGeneralData = createAsyncThunk(
    "user/userGetData",
    async (_, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .get("/auth/user/")
            .then((res) => {
                dispatch(userGeneralDataSet(res));
                console.log(res);
            })
            .catch((err) => {
                dispatch(alertSetError(true));
                dispatch(alertSetMessage(err.message));
            })
            .finally(() => dispatch(loadingSet(false)));
    }
);

export const userRegister = createAsyncThunk(
    'user/userRegister',
    async (data, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .post("/rest-auth/addCustomer", data)
            .then((res) => {
                dispatch(alertSetSuccess(true));
                dispatch(alertSetMessage("Register berhasil, silahkan login!"));
                console.log(res);
            })
            .catch((err) => {
                dispatch(alertSetError(true));
                dispatch(alertSetMessage(err.message));
                console.log(err);
            })
            .finally(() => {
                dispatch(loadingSet(false));
            });
    }
);

export const updateDetailedData = createAsyncThunk(
    'user/updateDetailedData',
    async (data, { dispatch }) => {
        dispatch(loadingSet(true));
        return baseApi
            .put("/rest-auth/updateCustomer", data)
            .then((res) => {
                dispatch(userDetailedDataSet(res.Customer));
                dispatch(alertSetSuccess(true));
                dispatch(alertSetMessage("Data Berhasil Diperbaharui!"));
                // console.log(res);
            })
            .catch((err) => {
                dispatch(alertSetError(true));
                dispatch(alertSetMessage(err.message));
                console.log(err);
            })
            .finally(() => {
                dispatch(loadingSet(false));
            });
    }
);