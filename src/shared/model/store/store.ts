import { authSlice } from '@entities/auth'
import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@shared/api/baseApi'

export const store = configureStore({
  reducer: {
    api: baseApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch