import {
  setHeroById,
  useAppDispatch,
  useHeroControllerGetHeroByIdQuery,
  UsersControllerFindOneApiArg,
} from "@/lib";
import { useEffect } from "react";

export const useHeroById = (id: number) => {
  const {
    data: hero,
    isLoading,
    error,
    refetch,
  } = useHeroControllerGetHeroByIdQuery({ id });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (hero) {
      dispatch(setHeroById(hero));
    }
  }, [hero]);

  return {
    hero: hero || null,
    isLoading,
    error,
    refetch,
  };
};
