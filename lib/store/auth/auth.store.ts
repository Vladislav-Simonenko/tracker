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
  accessToken: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: AUTH_SLICE_KEY,
  initialState,
  reducers: {
    // FIXME: change any type
    login(state, { payload: loginResp }: PayloadAction<any>) {
      const {
        id: id,
        email: email,
        access_token: accessToken,
        refresh_token: refreshToken,
      } = loginResp;
      return {
        ...state,
        id,
        email,
        accessToken,
        refreshToken,
      };
    },
    logout(state) {
      return {
        ...state,
        id: "",
        email: null,
        accessToken: null,
        refreshToken: null,
      };
    },
  },
});

export const selectAuth = (state: RootState): AuthState => state.auth;
export const selectAccessToken = (state: RootState): string | null =>
  selectAuth(state).accessToken;
export const selectRefreshToken = (state: RootState): string | null =>
  selectAuth(state).refreshToken;

export const useIsAuthorized = (): boolean => {
  const accessToken = useAppSelector(selectAccessToken);
  return Boolean(accessToken);
};

export const { login, logout } = authSlice.actions;

export const setAuthTokenToRequest: (
  headers: Headers,
  api: Pick<BaseQueryApi, "getState" | "extra" | "endpoint" | "type" | "forced">
) => MaybePromise<Headers> = (headers, { getState }) => {
  const rootState = getState() as RootState;
  const token = selectAccessToken(rootState);
  addAuthHeader(headers, token);
  return headers;
};
