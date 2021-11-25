import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import baseApi, { TOKEN_KEY, csrftoken, sessionid} from '../../api';
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
            };
        },
        userLoggedOut: (state, _action) => {
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
                dispatch(userLoggedIn(res.key));
                console.log(res);
            })
            .catch((err) => {
                // dispatch(alertError(err.message));
                console.log(err);
            })
        .finally(() => {
            // dispatch(loadingSet(false));
            dispatch(userGetData(data.username));
            console.log('finnaly');
        });
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