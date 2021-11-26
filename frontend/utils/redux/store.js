import { configureStore } from '@reduxjs/toolkit'
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducer'
import logger from 'redux-logger'

const persistDefaultMiddlewareConfig = {
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
};

const rootPersistConfig = {
    key: 'poncolapak:root',
    storage,
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware(persistDefaultMiddlewareConfig).concat(logger);
    },
})

export default store;
export const persistor = persistStore(store);
export const { dispatch } = store;