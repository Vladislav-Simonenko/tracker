import Image from "next/image";
import React, { FC } from "react";
import classNames from "classnames";

import styles from "./HeroStatsIcon.module.scss";

interface IHeroStatsIconProps {
  src: string;
  alt: string;
  stat?: number;
  buff: number;
  topPos: string;
  leftPos: string;
  topPosBuff: string;
  leftPosBuff: string;
}

export const HeroStatsIcon: FC<IHeroStatsIconProps> = (props) => {
  const { src, alt, stat, buff, topPos, leftPos, topPosBuff, leftPosBuff } =
    props;

  return (
    <div className={styles.heroStatsIconContainer}>
      <Image
        className={styles.heroStatsIconImage}
        src={src}
        alt={alt}
        width={160}
        height={160}
      />
      <p
        className={classNames(
          styles.heroStatsIconStat,
          styles[topPos],
          styles[leftPos]
        )}
      >
        {stat}
      </p>
      <p
        className={classNames(
          styles.heroStatsIconBuff,
          styles[topPosBuff],
          styles[leftPosBuff]
        )}
      >
        +{buff}
      </p>
    </div>
  );
};
