import { GetUserDto, RootState } from "@/lib";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UsersState {
  clientsData: GetUserDto[] | [];
}

const initialState: UsersState = {
  clientsData: [],
};

export const USERS_SLICE_KEY = "users";

export const usersSlice = createSlice({
  name: USERS_SLICE_KEY,
  initialState,
  reducers: {
    setUsersClients(state, { payload: usersData }: PayloadAction<any>) {
      return {
        ...state,
        usersData,
      };
    },
    deleteStateWithUserId(state, { payload: clientId }: PayloadAction<string>) {
      return {
        ...state,
        clientId,
      };
    },
  },
});

export const selectClients = (state: RootState): UsersState => state.users;

export const { setUsersClients, deleteStateWithUserId } = usersSlice.actions;
