import { combineReducers } from "@reduxjs/toolkit"
import user from './slice/user'

const rootReducer = combineReducers({
    user,
});

export default rootReducer;