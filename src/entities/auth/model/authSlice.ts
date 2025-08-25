import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthSliceState } from "./types";
import { authApi } from "../api";

const initialState: AuthSliceState = {
  isAuth: false,
  token: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthState: (
      state: AuthSliceState,
      { payload }: PayloadAction<Pick<AuthSliceState, "token">>,
    ) => {
      state.token = payload.token;
      state.isAuth = Boolean(payload.token);
    },
    logout: (state) => {
      state.token = initialState.token;
      state.isAuth = initialState.isAuth;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.isAuth = Boolean(payload.token);
      },
    );
  },
});

export const { setAuthState, logout } = authSlice.actions;
