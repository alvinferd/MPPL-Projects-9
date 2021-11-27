import { combineReducers } from "@reduxjs/toolkit"
import user from './slice/user'
import cart from "./slice/cart";

const rootReducer = combineReducers({
    cart,
    user,
});

export default rootReducer;