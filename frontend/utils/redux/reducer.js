import { combineReducers } from "@reduxjs/toolkit"
import user from './slice/user'
import cart from "./slice/cart";
import loading from "./slice/loading";
import alert from "./slice/alert";

const rootReducer = combineReducers({
    alert,
    cart,
    loading,
    user,
});

export default rootReducer;