import type { RootState } from '@shared/model'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '@shared/libs'

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('x-access-token', token)
    }

    return headers
  },
})