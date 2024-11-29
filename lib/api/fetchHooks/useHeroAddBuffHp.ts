"use client";

import {
  selectHeroBuffHpData,
  setBuffHpData,
  useAppDispatch,
  useAppSelector,
  useHeroControllerAddBuffHpMutation,
} from "@/lib";
import { useEffect } from "react";
import { useIsAuthorized } from "@/lib/store/auth";

interface UseHeroBuffHpProps {
  heroId: number;
  buffHpDto: { buffHp: number };
}

export const useHeroBuffHp = ({ heroId, buffHpDto }: UseHeroBuffHpProps) => {
  const [addBuffHp, { data, isLoading, error }] =
    useHeroControllerAddBuffHpMutation();
  const isAuthorized = useIsAuthorized();
  const dispatch = useAppDispatch();
  const buffHpData = useAppSelector(selectHeroBuffHpData);

  useEffect(() => {
    if (isAuthorized && data) {
      dispatch(setBuffHpData(data));
    }
  }, [data, isAuthorized, dispatch]);

  const applyBuffHp = async () => {
    try {
      await addBuffHp({
        id: heroId,
        addBuffHpDto: { buffHp: buffHpDto.buffHp },
      });
    } catch (e) {
      console.error("Failed to apply buff HP:", e);
    }
  };

  return {
    applyBuffHp,
    buffHpData,
    isLoading,
    error,
  };
};
