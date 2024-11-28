"use client";

import {
  selectHeroTempHpData,
  setTempHpData,
  useAppDispatch,
  useAppSelector,
  useHeroControllerAddTempHpMutation,
} from "@/lib";
import { useEffect } from "react";
import { useIsAuthorized } from "@/lib/store/auth";

interface UseHeroTempHpProps {
  heroId: number;
  tempHpDto: { tempHp: number };
}

export const useHeroTempHp = ({ heroId, tempHpDto }: UseHeroTempHpProps) => {
  const [addTempHp, { data, isLoading, error }] =
    useHeroControllerAddTempHpMutation();
  const isAuthorized = useIsAuthorized();
  const dispatch = useAppDispatch();
  const tempHpData = useAppSelector(selectHeroTempHpData);

  useEffect(() => {
    if (isAuthorized && data) {
      dispatch(setTempHpData(data));
    }
  }, [data, isAuthorized, dispatch]);

  const applyTempHp = async () => {
    try {
      await addTempHp({
        id: heroId,
        addTempHpDto: { tempHp: tempHpDto.tempHp },
      });
    } catch (e) {
      console.error("Failed to apply temp HP:", e);
    }
  };

  return {
    applyTempHp,
    tempHpData,
    isLoading,
    error,
  };
};
