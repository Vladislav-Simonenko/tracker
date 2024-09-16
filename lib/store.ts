import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AUTH_SLICE_KEY, authSlice } from "./store/auth";
import { API_KEY, trackerSprilApi } from "./api";

const reducer = {
  [API_KEY]: trackerSprilApi.reducer,
  [AUTH_SLICE_KEY]: authSlice.reducer,
};

const rootReducer = combineReducers(reducer);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // @FIXME: throws an error when using form data
      }).concat(trackerSprilApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
