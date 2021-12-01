import { combineReducers } from "@reduxjs/toolkit"
import alert from "./slice/alert";
import cart from "./slice/cart";
import loading from "./slice/loading";
import order from "./slice/order";
import search from "./slice/search";
import user from './slice/user'

const rootReducer = combineReducers({
    alert,
    cart,
    loading,
    order,
    search,
    user,
});

export default rootReducer;