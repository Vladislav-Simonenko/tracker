"use client";
import React, { FC } from "react";

import styles from "./HeroTemplate.module.scss";

interface IHeroTemplateProps {
  children: React.ReactNode;
}

export const HeroTemplate: FC<IHeroTemplateProps> = ({ children }) => {
  return <div className={styles.heroTemplateContainer}>{children}</div>;
};
