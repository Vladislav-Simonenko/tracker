"use client";

import {
  selectHeroDamageData,
  setDamageData,
  useAppDispatch,
  useAppSelector,
  useHeroControllerApplyDamageMutation,
} from "@/lib";
import { useEffect } from "react";
import { useIsAuthorized } from "@/lib/store/auth";

interface UseHeroDamageProps {
  heroId: number;
  damageDto: { damage: number };
}

export const useHeroDamage = ({ heroId, damageDto }: UseHeroDamageProps) => {
  const [applyDamage, { data, isLoading, error }] =
    useHeroControllerApplyDamageMutation();
  const isAuthorized = useIsAuthorized();
  const dispatch = useAppDispatch();
  const damageData = useAppSelector(selectHeroDamageData);

  useEffect(() => {
    if (isAuthorized && data) {
      dispatch(setDamageData(data));
    }
  }, [data, isAuthorized, dispatch]);

  const applyHeroDamage = async () => {
    try {
      await applyDamage({
        id: heroId,
        getDamageDto: { damage: damageDto.damage },
      });
    } catch (e) {
      console.error("Failed to apply damage:", e);
    }
  };

  return {
    applyHeroDamage,
    damageData,
    isLoading,
    error,
  };
};
