"use client";

import React, { FC } from "react";
import { Tabs } from "@mantine/core";
import { CharacterModal, HeroStats } from "@/components";

import styles from "./HeroTabs.module.scss";

interface IHeroTabsProps {
  heroId: number;
}

export const HeroTabs: FC<IHeroTabsProps> = (props) => {
  const { heroId } = props;
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
        <CharacterModal id={heroId} />
      </Tabs.Panel>
      <Tabs.Panel value="gallery" pb="xs">
        Gallery panel
      </Tabs.Panel>
      <Tabs.Panel value="account" pb="xs">
        Account panel
      </Tabs.Panel>
      <Tabs.Panel value="stats" pb="xs">
        <HeroStats />
      </Tabs.Panel>

      <Tabs.List>
        <Tabs.Tab value="mainInfo">Главная</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
        <Tabs.Tab value="stats">Характеристики</Tabs.Tab>

        <Tabs.Tab value="back">Назад</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
