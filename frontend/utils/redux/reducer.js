import { combineReducers } from "@reduxjs/toolkit"
import user from './slice/user'
import cart from "./slice/cart";
import loading from "./slice/loading";
import alert from "./slice/alert";
import order from "./slice/order";
import search from "./slice/search";
import category from "./slice/category";

const rootReducer = combineReducers({
    alert,
    cart,
    category,
    loading,
    order,
    search,
    user,
});

export default rootReducer;