import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib";
import {
  HeroControllerApplyDamageApiResponse,
  HeroControllerApplyHealingApiResponse,
  HeroControllerAddTempHpApiResponse,
  HeroControllerAddBuffHpApiResponse,
  AddCoinsDto,
} from "@/lib/api";

export interface HeroesState {
  heroById?: any;
  damageData?: HeroControllerApplyDamageApiResponse;
  healingData?: HeroControllerApplyHealingApiResponse;
  tempHpData?: HeroControllerAddTempHpApiResponse;
  buffHpData?: HeroControllerAddBuffHpApiResponse;
  coinData?: AddCoinsDto;
}

const initialState: HeroesState = {};

export const HEROES_SLICE_KEY = "heroes";

export const heroSlice = createSlice({
  name: HEROES_SLICE_KEY,
  initialState,
  reducers: {
    setHeroById(state, { payload }: PayloadAction<any>) {
      state.heroById = payload;
    },
    setDamageData(
      state,
      { payload }: PayloadAction<HeroControllerApplyDamageApiResponse>
    ) {
      state.damageData = payload;
    },
    setHealingData(
      state,
      { payload }: PayloadAction<HeroControllerApplyHealingApiResponse>
    ) {
      state.healingData = payload;
    },
    setTempHpData(
      state,
      { payload }: PayloadAction<HeroControllerAddTempHpApiResponse>
    ) {
      state.tempHpData = payload;
    },
    setBuffHpData(
      state,
      { payload }: PayloadAction<HeroControllerAddBuffHpApiResponse>
    ) {
      state.buffHpData = payload;
    },
    setCoinData(state, { payload }: PayloadAction<AddCoinsDto>) {
      state.coinData = payload;
    },
  },
});

export const {
  setHeroById,
  setDamageData,
  setHealingData,
  setTempHpData,
  setBuffHpData,
  setCoinData,
} = heroSlice.actions;

export const selectHeroDamageData = (
  state: RootState
): HeroControllerApplyDamageApiResponse | undefined => state.heroes.damageData;

export const selectHeroHealingData = (
  state: RootState
): HeroControllerApplyHealingApiResponse | undefined =>
  state.heroes.healingData;

export const selectHeroTempHpData = (
  state: RootState
): HeroControllerAddTempHpApiResponse | undefined => state.heroes.tempHpData;

export const selectHeroBuffHpData = (
  state: RootState
): HeroControllerAddBuffHpApiResponse | undefined => state.heroes.buffHpData;

export const selectHeroCoinData = (state: RootState): AddCoinsDto | undefined =>
  state.heroes.coinData;

export default heroSlice.reducer;
