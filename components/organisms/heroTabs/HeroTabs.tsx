"use client";

import React, { FC, useEffect, useState } from "react";
import { Tabs } from "@mantine/core";
import { CharacterModal, HeroStats } from "@/components";
import socket from "@/lib/socket";

import styles from "./HeroTabs.module.scss";

interface IHeroTabsProps {
  heroId: number;
}

export const HeroTabs: FC<IHeroTabsProps> = ({ heroId }) => {
  const [hero, setHero] = useState<any>(null);

  useEffect(() => {
    socket.on("heroUpdated", (updatedHero) => {
      if (updatedHero.id === heroId) {
        setHero((prevHero: any) => ({
          ...prevHero,
          ...updatedHero,
        }));
      }
    });

    return () => {
      socket.off("heroUpdated");
    };
  }, [heroId]);

  return (
    <Tabs
      defaultValue="mainInfo"
      inverted
      classNames={{
        root: styles.heroTabsPanelRoot,
        panel: styles.heroTabsPanelPanel,
      }}
    >
      <Tabs.Panel value="mainInfo" pb="xs">
        <CharacterModal id={heroId} hero={hero} setHero={setHero} />
      </Tabs.Panel>
      <Tabs.Panel value="gallery" pb="xs">
        Gallery panel
      </Tabs.Panel>
      <Tabs.Panel value="fight" pb="xs">
        Бой
      </Tabs.Panel>
      <Tabs.Panel value="stats" pb="xs">
        <HeroStats hero={hero} />
      </Tabs.Panel>

      <Tabs.List>
        <Tabs.Tab value="mainInfo">Главная</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="fight">Бой</Tabs.Tab>
        <Tabs.Tab value="stats">Характеристики</Tabs.Tab>

        <Tabs.Tab value="back">Назад</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
