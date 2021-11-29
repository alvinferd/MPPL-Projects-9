import { combineReducers } from "@reduxjs/toolkit"
import user from './slice/user'
import cart from "./slice/cart";
import loading from "./slice/loading";
import alert from "./slice/alert";
import order from "./slice/order";
import search from "./slice/search";

const rootReducer = combineReducers({
    alert,
    cart,
    loading,
    order,
    search,
    user,
});

export default rootReducer;