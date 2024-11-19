import {
  combineReducers,
  configureStore,
  StateFromReducersMapObject,
} from "@reduxjs/toolkit";
import { AUTH_SLICE_KEY, authSlice, AuthState } from "./store/auth";
import {
  API_KEY,
  HEROES_SLICE_KEY,
  heroSlice,
  trackerSprilApi,
  USERS_SLICE_KEY,
  usersSlice,
} from "./api";
import { persistReducer, persistStore } from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";
import { storage } from "./storage";

const reducer = {
  [API_KEY]: trackerSprilApi.reducer,
  [AUTH_SLICE_KEY]: authSlice.reducer,
  [USERS_SLICE_KEY]: usersSlice.reducer,
  [HEROES_SLICE_KEY]: heroSlice.reducer,
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
