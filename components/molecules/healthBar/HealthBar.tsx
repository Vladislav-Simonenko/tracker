"use client";
import React, { FC, useState } from "react";
import { Progress, Tooltip } from "@mantine/core";

import styles from "./HealthBar.module.scss";

interface IHealthBarProps {
  currentPercent: number;
  buffPercent: number;
  tempPercent: number;
  effectiveCurrent: number;
  buffHp: number;
  tempHp: number;
}

export const HealthBar: FC<IHealthBarProps> = (props) => {
  const {
    currentPercent,
    buffPercent,
    tempPercent,
    effectiveCurrent,
    buffHp,
    tempHp,
  } = props;
  const [opened, setOpened] = useState(true);

  return (
    <Progress.Root className={styles.healthBarContainer}>
      <Tooltip
        onClick={() => setOpened((open) => !open)}
        opened={opened}
        transitionProps={{ transition: "scale", duration: 300 }}
        label={`Основное - ${effectiveCurrent}, Забафанное - ${buffHp}, Временное - ${tempHp}`}
      >
        <Progress.Section
          value={currentPercent}
          color="green"
        ></Progress.Section>
      </Tooltip>
      <Progress.Section value={buffPercent} color="blue"></Progress.Section>
      <Progress.Section value={tempPercent} color="red"></Progress.Section>
    </Progress.Root>
  );
};
