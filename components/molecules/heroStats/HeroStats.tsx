import React, { FC } from "react";
import { HeroStatsIcon } from "@/components/atoms";
import { useAppSelector } from "@/lib";
import styles from "./HeroStats.module.scss";

import { calculateBuff } from "@/utils";

interface IHeroStatsProps {}

export const HeroStats: FC<IHeroStatsProps> = () => {
  const heroInfo = useAppSelector((state) => state.heroes.heroById);

  return (
    <div className={styles.heroStatsContainer}>
      <HeroStatsIcon
        src={"/svg/str.svg"}
        alt={"str"}
        stat={heroInfo?.str}
        buff={calculateBuff(heroInfo?.str)}
        topPos={"top57"}
        leftPos={"left50"}
        topPosBuff={""}
        leftPosBuff={""}
      />
      <HeroStatsIcon
        src={"/svg/dex.svg"}
        alt={"dex"}
        stat={heroInfo?.dex}
        buff={calculateBuff(heroInfo?.dex)}
        topPos={"top47"}
        leftPos={"left53"}
        topPosBuff={"top72"}
        leftPosBuff={"left51"}
      />
      <HeroStatsIcon
        src={"/svg/con.svg"}
        alt={"con"}
        stat={heroInfo?.con}
        buff={calculateBuff(heroInfo?.con)}
        topPos={"top50"}
        leftPos={"left50"}
        topPosBuff={"top75"}
        leftPosBuff={"left48"}
      />
      <HeroStatsIcon
        src={"/svg/int.svg"}
        alt={"int"}
        stat={heroInfo?.int}
        buff={calculateBuff(heroInfo?.int)}
        topPos={"top50"}
        leftPos={"left45"}
        topPosBuff={"top75"}
        leftPosBuff={"left44"}
      />
      <HeroStatsIcon
        src={"/svg/wis.svg"}
        alt={"wis"}
        stat={heroInfo?.wis}
        buff={calculateBuff(heroInfo?.wis)}
        topPos={"top57"}
        leftPos={"left53"}
        topPosBuff={"top81"}
        leftPosBuff={"left51"}
      />
      <HeroStatsIcon
        src={"/svg/cha.svg"}
        alt={"cha"}
        stat={heroInfo?.cha}
        buff={calculateBuff(heroInfo?.cha)}
        topPos={"top63"}
        leftPos={"left51"}
        topPosBuff={"top87"}
        leftPosBuff={"left50"}
      />
    </div>
  );
};
