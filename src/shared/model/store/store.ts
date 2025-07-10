import { authSlice } from '@entities/auth'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { rtkQueryErrorLogger } from '@shared/api'
import { baseApi } from '@shared/api/baseApi'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: [authSlice.reducerPath]
}

const reducer = persistReducer(rootPersistConfig, combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [authSlice.reducerPath]: authSlice.reducer,
}))

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(
      rtkQueryErrorLogger,
      baseApi.middleware
    ),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch