import { baseApi } from '@shared/baseApi'

export type LoginParams = {
    email: string;
    password: string;
};

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ token: string }, LoginParams>({
      query: (body: LoginParams) => ({
        url: 'login',
        method: 'POST',
        body,
      })
    }),
  }),
});

export const { useLoginMutation } = authApi;