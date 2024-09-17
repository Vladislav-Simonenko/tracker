import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { AuthState } from ".";
import { RootState, useAppSelector } from "@/lib";
import { addAuthHeader } from "@/utils";

export const AUTH_SLICE_KEY = "auth";
type MaybePromise<T> = T | Promise<T>;

export const initialState: AuthState = {
  id: "",
  email: null,
  access_token: null,
  refresh_token: null,
};

export const authSlice = createSlice({
  name: AUTH_SLICE_KEY,
  initialState,
  reducers: {
    login(state, { payload: loginResp }: PayloadAction<any>) {
      const {
        id: id,
        email: email,
        access_token: access_token,
        refresh_token: refresh_token,
      } = loginResp;
      return {
        ...state,
        id,
        email,
        access_token,
        refresh_token,
      };
    },
    logout(state) {
      return {
        ...state,
        id: "",
        email: null,
        access_token: null,
        refresh_token: null,
      };
    },
  },
});

export const selectAuth = (state: RootState): AuthState => state.auth;
export const selectaccess_token = (state: RootState): string | null =>
  selectAuth(state).access_token;
export const selectrefresh_token = (state: RootState): string | null =>
  selectAuth(state).refresh_token;

export const useIsAuthorized = (): boolean => {
  const access_token = useAppSelector(selectaccess_token);
  return Boolean(access_token);
};

export const { login, logout } = authSlice.actions;

export const setAuthTokenToRequest: (
  headers: Headers,
  api: Pick<BaseQueryApi, "getState" | "extra" | "endpoint" | "type" | "forced">
) => MaybePromise<Headers> = (headers, { getState }) => {
  const rootState = getState() as RootState;
  const token = selectaccess_token(rootState);
  addAuthHeader(headers, token);
  return headers;
};
