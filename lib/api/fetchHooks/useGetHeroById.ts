"use client";

import {
  setHeroById,
  useAppDispatch,
  useHeroControllerGetHeroByIdQuery,
} from "@/lib";
import { useEffect } from "react";

export const useHeroById = (id: number) => {
  const {
    data: heroList,
    isLoading,
    error,
    refetch,
  } = useHeroControllerGetHeroByIdQuery({ id });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (heroList) {
      dispatch(setHeroById(heroList));
    }
  }, [heroList]);

  return {
    heroList: heroList || null,
    isLoading,
    error,
    refetch,
  };
};
