"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
import styles from "./CharacterCoins.module.scss";
import { NumberInput, Button } from "@mantine/core";
import { useHeroCoins } from "@/lib";

interface ICharacterCoinsProps {
  heroId: number;
  coins: {
    copper_coins: number;
    silver_coins: number;
    electrum_coins: number;
    gold_coins: number;
    platinum_coins: number;
  };
}

export const CharacterCoins: FC<ICharacterCoinsProps> = (props) => {
  const { heroId, coins } = props;

  const [coinValues, setCoinValues] = useState(coins);
  const [activeInput, setActiveInput] = useState<string>(" ");
  const [tempValue, setTempValue] = useState<number>(0);

  const { updateHeroCoins, isLoading } = useHeroCoins({
    heroId,
    coinDto: {
      type: activeInput ? activeInput.replace("_coins", "") : "",
      amount: tempValue,
    },
  });

  const handleInputChange = (value: number) => {
    setTempValue(value);
  };

  const handleConfirm = () => {
    if (activeInput) {
      setCoinValues((prev) => ({
        ...prev,
        [activeInput]: tempValue,
      }));
      setActiveInput("");
      updateHeroCoins();
    }
  };

  const coinData = [
    { key: "copper_coins", name: "Copper", imageSrc: "/images/cooperCoin.png" },
    { key: "silver_coins", name: "Silver", imageSrc: "/images/silverCoin.png" },
    {
      key: "electrum_coins",
      name: "Electrum",
      imageSrc: "/images/electrumCoin.png",
    },
    { key: "gold_coins", name: "Gold", imageSrc: "/images/goldCoin.png" },
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
          <div
            className={styles.characterCoinsImageContainer}
            onClick={() => {
              setActiveInput(coin.key);
              setTempValue(coinValues[coin.key as keyof typeof coinValues]);
            }}
          >
            <Image
              className={styles.characterCoinsImage}
              src={coin.imageSrc}
              alt={coin.name}
              width={1920}
              height={1080}
            />
          </div>
          {isLoading ? (
            <div>load</div>
          ) : (
            <span>
              {coin.name}: <span>{coins[coin.key as keyof typeof coins]}</span>
            </span>
          )}

          {activeInput === coin.key && (
            <div className={styles.inputContainer}>
              <NumberInput
                onChange={(value) =>
                  handleInputChange(typeof value === "number" ? value : 0)
                }
                hideControls
                placeholder={`Enter ${coin.name}`}
                rightSection={<Button onClick={handleConfirm}>OK</Button>}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
