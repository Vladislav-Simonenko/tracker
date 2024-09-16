import { Mutex } from "async-mutex";
import { getEndpointUrl } from "..";
import {
  login,
  logout,
  setAuthTokenToRequest,
} from "@/lib/store/auth/auth.store";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  retry,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";

const mutex = new Mutex();

export const buildBaseQueryWithReauthFunc =
  (
    endpointRoute: string
  ): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =>
  async (args, api, extraOptions) => {
    const baseQuery = retry(
      fetchBaseQuery({
        baseUrl: getEndpointUrl(endpointRoute),
        prepareHeaders: setAuthTokenToRequest,
      }),
      { maxRetries: 2 }
    );

    // wait until the mutex is available without locking it
    await mutex.waitForUnlock();

    let result = await baseQuery(args, api, extraOptions);

    if (result.error) {
      const isNotAuthorized = [401, 422].includes(
        result.error.status as unknown as number
      );

      const errorMessage = (
        (result.error?.data as any)?.message as string
      )?.toLowerCase();
      const isTokenMissing = errorMessage?.includes("no auth token");
      const isInvalidSignature = errorMessage?.includes("invalid signature");
      const isJwtExpired = errorMessage?.includes("jwt expired");

      const isTokenError = Boolean(
        isNotAuthorized || isTokenMissing || isInvalidSignature || isJwtExpired
      );

      if (!isTokenError) {
        return result;
      }

      // checking whether the mutex is locked
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();

        api.dispatch(logout());

        release();

        try {
          const refreshResult = await baseQuery(
            "/auth/refresh-token",
            api,
            extraOptions
          );
          if (refreshResult.data) {
            api.dispatch(login(refreshResult.data));
            // retry the initial query
            result = await baseQuery(args, api, extraOptions);
          } else {
            api.dispatch(logout());
          }
        } finally {
          // release must be called once the mutex should be released again.
          release();
        }
      } else {
        // wait until the mutex is available without locking it
        await mutex.waitForUnlock();
        result = await baseQuery(args, api, extraOptions);
      }
    }
    return result;
  };
