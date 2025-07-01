import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (build) => ({
    login: build.mutation<any, string>({
      query: (body: any) => ({
        url: 'login',
        body,
        method: 'POST'
      }),
      transformResponse: (response: { token: string }) => response.token,
    }),
  }),
})

export const { useLoginMutation } = baseApi;