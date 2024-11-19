import Image from "next/image";
import React, { FC } from "react";
import styles from "./CharacterCoins.module.scss";

interface ICharacterCoinsProps {
  coins: {
    copper_coins: number;
    silver_coins: number;
    electrum_coins: number;
    gold_coins: number;
    platinum_coins: number;
  };
}

export const CharacterCoins: FC<ICharacterCoinsProps> = (props) => {
  const { coins } = props;

  const coinData = [
    {
      key: "copper_coins",
      name: "Copper",
      imageSrc: "/images/cooperCoin.png",
    },
    {
      key: "silver_coins",
      name: "Silver",
      imageSrc: "/images/silverCoin.png",
    },
    {
      key: "electrum_coins",
      name: "Electrum",
      imageSrc: "/images/electrumCoin.png",
    },
    {
      key: "gold_coins",
      name: "Gold",
      imageSrc: "/images/goldCoin.png",
    },
    {
      key: "platinum_coins",
      name: "Platinum",
      imageSrc: "/images/platinumCoin.png",
    },
  ];

  return (
    <div className={styles.characterCoinsContainer}>
      {coinData.map((coin) => (
        <div key={coin.key} className={styles.characterCoinsContent}>
          <div className={styles.characterCoinsImageContainer}>
            <Image
              className={styles.characterCoinsImage}
              src={coin.imageSrc}
              alt={coin.name}
              width={1920}
              height={1080}
            />
          </div>
          <span>{coin.name}:</span>
          <span>{coins[coin.key as keyof typeof coins]}</span>
        </div>
      ))}
    </div>
  );
};
