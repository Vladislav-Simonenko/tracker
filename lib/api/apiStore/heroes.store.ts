import { GetHeroDto, GetUserByIdDto, RootState } from "@/lib";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HeroesState {
  HeroData: any[] | [];
}

const initialState: HeroesState = {
  HeroData: [],
};

export const HEROES_SLICE_KEY = "heroes";

export const heroSlice = createSlice({
  name: HEROES_SLICE_KEY,
  initialState,
  reducers: {
    setHeroById(state, { payload: heroById }: PayloadAction<any>) {
      return {
        ...state,
        heroById,
      };
    },
  },
});

export const selectHeroes = (state: RootState): HeroesState => state.heroes;

export const { setHeroById } = heroSlice.actions;
