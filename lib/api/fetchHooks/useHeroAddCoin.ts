"use client";

import {
  selectHeroCoinData,
  setCoinData,
  useAppDispatch,
  useAppSelector,
  useHeroControllerAddCoinsMutation,
} from "@/lib";
import { useEffect } from "react";
import { useIsAuthorized } from "@/lib/store/auth";

interface UseHeroCoinsProps {
  heroId: number;
  coinDto: {
    type: string;
    amount: number;
  };
}

export const useHeroCoins = ({ heroId, coinDto }: UseHeroCoinsProps) => {
  const [updateCoins, { data, isLoading, error }] =
    useHeroControllerAddCoinsMutation();
  const isAuthorized = useIsAuthorized();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthorized && data) {
      dispatch(setCoinData(data));
    }
  }, [data, isAuthorized, dispatch]);

  const updateHeroCoins = async () => {
    try {
      await updateCoins({
        id: heroId,
        addCoinsDto: {
          [coinDto.type]: coinDto.amount,
        },
      });
    } catch (e) {
      console.error("Failed to update coins:", e);
    }
  };

  return {
    updateHeroCoins,
    isLoading,
    error,
  };
};
