// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { buildBaseQueryWithReauthFunc } from "@/utils/rtkUtils/buildBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
export const API_KEY = "api";

// initialize an empty api service that we'll inject endpoints into later as needed
export const trackerSprilApi = createApi({
  reducerPath: API_KEY,
  refetchOnFocus: false,
  refetchOnMountOrArgChange: true,
  baseQuery: buildBaseQueryWithReauthFunc(""),
  endpoints: () => ({}),
});
