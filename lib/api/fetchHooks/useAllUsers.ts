import { setUsersClients, useUsersControllerFindAllQuery } from "@/lib";
import { useIsAuthorized } from "@/lib/store/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useAllUsers = () => {
  const {
    data: usersList,
    isLoading,
    error,
  } = useUsersControllerFindAllQuery();

  const isAuthorized = useIsAuthorized();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthorized) {
      dispatch(setUsersClients(usersList));
    }
  }, [usersList]);

  return {
    userList: usersList || [],
    isLoading,
    error,
  };
};
