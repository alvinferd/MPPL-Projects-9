import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import baseApi, { TOKEN_KEY } from '../../api';
import Cookies from 'js-cookie'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        authenticated: false,
        current: {
            id: null,
            is_user: false,
            is_seller: false,
        },
    },
    reducers: {
        userLoggedIn: (state, action) => {
            Cookies.set(TOKEN_KEY, action.payload);
            // Cookies.set(csrftoken, action.payload);
            // Cookies.set(sessionid, action.payload);
            return {
                ...state,
                authenticated: true,
                current: {
                    id: null,
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
                    id: null,
                    is_user: false,
                    is_seller: false,
                },
            };
        },
        userCurrent: (state, action) => ({
            ...state,
            current: action.payload ?? {},
        }),
    }
});

export const { userLoggedIn, userLoggedOut, userCurrent } = userSlice.actions;
export default userSlice.reducer;

export const userLogin = createAsyncThunk(
    'user/userLogin',
    async (data, { dispatch }) => {
        return baseApi
            .post("/auth/login/", data)
            .then((res) => {
                // Cookies.set('csrftoken', 'OhR3NFty4ojSjPJdISK5c0SBiamxpQfUC9XHpAj0ExYUcdMyqIKUDEZXgluVTwR9');
                // Cookies.set('sessionid', '0kdfsbf1vrom2bf3jvra1fz2dopx1p6z');
                dispatch(userLoggedIn(res.key));
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

export const userLogout = createAsyncThunk(
    "user/userLogout",
    async (data, { dispatch }) => {
        // dispatch(loadingSet(true));
        dispatch(userLoggedOut());
        // dispatch(loadingSet(false));
    }
);

export const userGetData = createAsyncThunk(
    "user/userGetData",
    async (username, { dispatch }) => {
        //   dispatch(loadingSet(true));
        return baseApi
            .get("/rest-auth/detailCustomer")
            .then((res) => {
                //   dispatch(
                //     userCurrent(res.filter((item) => item.username === username)[0])
                //   );
                console.log(res);
            })
            .catch((err) => {
                // console.log(err.message);
            })
        // .finally(() => dispatch(loadingSet(false)));
    }
);