"use client";

import {
  deleteStateWithUserId,
  trackerSprilApi,
  useUsersControllerRemoveMutation,
} from "@/lib";
import { useDispatch } from "react-redux";
import { useIsAuthorized } from "@/lib/store/auth";

export const useDeleteUser = () => {
  const [deleteUserRequest] = useUsersControllerRemoveMutation();

  const isAuthorized = useIsAuthorized();

  const dispatch = useDispatch();

  const removeUser = async (payload: any) => {
    try {
      if (isAuthorized) {
        const response = await deleteUserRequest(payload);

        if (response && response.data) {
          dispatch(trackerSprilApi.util.resetApiState());
          dispatch(deleteStateWithUserId(payload));
        } else {
          console.error("Failed to delete the user, no data in response.");
        }
      }
    } catch (err) {
      console.error("Error during user deletion:", err);
    }
  };

  return {
    removeUser,
  };
};
