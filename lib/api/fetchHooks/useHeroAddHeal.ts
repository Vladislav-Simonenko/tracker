"use client";

import {
  selectHeroHealingData,
  setHealingData,
  useAppDispatch,
  useAppSelector,
  useHeroControllerApplyHealingMutation,
} from "@/lib";
import { useEffect } from "react";
import { useIsAuthorized } from "@/lib/store/auth";

interface UseHeroHealingProps {
  heroId: number;
  healingDto: { healing: number };
}

export const useHeroHealing = ({ heroId, healingDto }: UseHeroHealingProps) => {
  const [applyHealing, { data, isLoading, error }] =
    useHeroControllerApplyHealingMutation();
  const isAuthorized = useIsAuthorized();
  const dispatch = useAppDispatch();
  const healingData = useAppSelector(selectHeroHealingData);

  useEffect(() => {
    if (isAuthorized && data) {
      dispatch(setHealingData(data));
    }
  }, [data, isAuthorized, dispatch]);

  const applyHeroHealing = async () => {
    try {
      await applyHealing({
        id: heroId,
        getHealingDto: { healing: healingDto.healing },
      });
    } catch (e) {
      console.error("Failed to apply healing:", e);
    }
  };

  return {
    applyHeroHealing,
    healingData,
    isLoading,
    error,
  };
};
