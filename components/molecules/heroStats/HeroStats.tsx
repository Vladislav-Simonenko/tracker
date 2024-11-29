import React, { FC } from "react";
import { HeroStatsIcon } from "@/components/atoms";
import styles from "./HeroStats.module.scss";

import { calculateBuff } from "@/utils";

interface IHeroStatsProps {
  hero: any;
}
export const HeroStats: FC<IHeroStatsProps> = ({ hero }) => {
  if (!hero) return <div>Loading...</div>;

  return (
    <div className={styles.heroStatsContainer}>
      <HeroStatsIcon
        src={"/svg/str.svg"}
        alt={"str"}
        stat={hero?.str}
        buff={calculateBuff(hero?.str)}
        topPos={"top57"}
        leftPos={"left50"}
        topPosBuff={""}
        leftPosBuff={""}
      />
      <HeroStatsIcon
        src={"/svg/dex.svg"}
        alt={"dex"}
        stat={hero?.dex}
        buff={calculateBuff(hero?.dex)}
        topPos={"top47"}
        leftPos={"left53"}
        topPosBuff={"top72"}
        leftPosBuff={"left51"}
      />
      <HeroStatsIcon
        src={"/svg/con.svg"}
        alt={"con"}
        stat={hero?.con}
        buff={calculateBuff(hero?.con)}
        topPos={"top50"}
        leftPos={"left50"}
        topPosBuff={"top75"}
        leftPosBuff={"left48"}
      />
      <HeroStatsIcon
        src={"/svg/int.svg"}
        alt={"int"}
        stat={hero?.int}
        buff={calculateBuff(hero?.int)}
        topPos={"top50"}
        leftPos={"left45"}
        topPosBuff={"top75"}
        leftPosBuff={"left44"}
      />
      <HeroStatsIcon
        src={"/svg/wis.svg"}
        alt={"wis"}
        stat={hero?.wis}
        buff={calculateBuff(hero?.wis)}
        topPos={"top57"}
        leftPos={"left53"}
        topPosBuff={"top81"}
        leftPosBuff={"left51"}
      />
      <HeroStatsIcon
        src={"/svg/cha.svg"}
        alt={"cha"}
        stat={hero?.cha}
        buff={calculateBuff(hero?.cha)}
        topPos={"top63"}
        leftPos={"left51"}
        topPosBuff={"top87"}
        leftPosBuff={"left50"}
      />
    </div>
  );
};
