import {
  combineReducers,
  configureStore,
  StateFromReducersMapObject,
} from "@reduxjs/toolkit";
import { AUTH_SLICE_KEY, authSlice, AuthState } from "./store/auth";
import { API_KEY, trackerSprilApi } from "./api";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { setupListeners } from "@reduxjs/toolkit/query";

const reducer = {
  [API_KEY]: trackerSprilApi.reducer,
  [AUTH_SLICE_KEY]: authSlice.reducer,
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  blacklist: [],
};

const rootReducer = combineReducers(reducer);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = StateFromReducersMapObject<typeof reducer>;

export const makeStore = (preloadedState?: any) =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // @FIXME: throws an error when using form data
      }).concat(trackerSprilApi.middleware),
    preloadedState,
  });

let preloadedAuthState: AuthState | undefined;

export const store = makeStore({
  auth: preloadedAuthState,
});

export const persistor = persistStore(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
