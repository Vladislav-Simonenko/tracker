"use client";
import React, { FC } from "react";
import { useHeroById } from "@/lib";

import styles from "./CharacterModal.module.scss";
import { CharacterCoins } from "@/components";

interface ICharacterModalProps {
  id: number;
}

export const CharacterModal: FC<ICharacterModalProps> = (props) => {
  const { id } = props;
  const { hero, isLoading, error } = useHeroById(id);
  console.log(hero);

  const coins = {
    copper_coins: hero?.copper_coins || 0,
    silver_coins: hero?.silver_coins || 0,
    electrum_coins: hero?.electrum_coins || 0,
    gold_coins: hero?.gold_coins || 0,
    platinum_coins: hero?.platinum_coins || 0,
  };

  return (
    <div className={styles.characterContainer}>
      <div className={styles.characterHeader}></div>
      <div className={styles.characterBody}>
        <CharacterCoins coins={coins} />
      </div>
      <div className={styles.characterFooter}></div>
    </div>
  );
};
