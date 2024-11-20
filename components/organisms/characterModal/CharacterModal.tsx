"use client";
import React, { FC } from "react";
import { useHeroById } from "@/lib";
import { CharacterCoins, HealthBar, ImageContainer } from "@/components";
import {
  calculateHealthSegments,
  calculateLevel,
  getHealthImage,
} from "@/utils";

import styles from "./CharacterModal.module.scss";
import Image from "next/image";

interface ICharacterModalProps {
  id: number;
}

export const CharacterModal: FC<ICharacterModalProps> = (props) => {
  const { id } = props;
  const { hero, isLoading, error } = useHeroById(id);

  const coins = {
    copper_coins: hero?.copper_coins || 0,
    silver_coins: hero?.silver_coins || 0,
    electrum_coins: hero?.electrum_coins || 0,
    gold_coins: hero?.gold_coins || 0,
    platinum_coins: hero?.platinum_coins || 0,
  };

  const maxHp = hero?.max_hp || 0;
  const buffHp = hero?.buff_hp || 0;
  const tempHp = hero?.temp_hp || 0;
  const currentHp = hero?.current_hp || 0;

  const {
    currentPercent,
    buffPercent,
    tempPercent,
    totalHp,
    effectiveCurrent,
  } = calculateHealthSegments(currentHp, maxHp, buffHp, tempHp);
  console.log(effectiveCurrent);

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div className={styles.characterContainer}>
      <div className={styles.characterHeader}>
        <div className={styles.characterHeaderImage}>
          <ImageContainer imagePath={hero?.image_url} />
        </div>
        <div className={styles.characterMainInfo}>
          <h2>{hero?.name}</h2>
          <h3>
            {hero?.races.name} {hero?.subraces.name}
          </h3>
          <h4>Опыт: {hero?.experience}</h4>
          <h4>Уровень: {calculateLevel(hero?.experience || 0)}</h4>
        </div>
      </div>
      <div className={styles.characterBody}>
        <CharacterCoins coins={coins} />
        <HealthBar
          currentPercent={currentPercent}
          buffPercent={buffPercent}
          tempPercent={tempPercent}
          effectiveCurrent={effectiveCurrent}
          buffHp={buffHp}
          tempHp={tempHp}
        />
        <p>Всего хп: {totalHp}</p>
        <Image
          src={getHealthImage(currentPercent)}
          alt="Health Status"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.characterFooter}></div>
    </div>
  );
};
