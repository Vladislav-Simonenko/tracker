"use client";
import React, { FC, useState } from "react";
import { Progress, Tooltip } from "@mantine/core";

import styles from "./HealthBar.module.scss";
import { HealthButtons } from "@/components";

interface IHealthBarProps {
  currentPercent: number;
  buffPercent: number;
  tempPercent: number;
  effectiveCurrent: number;
  buffHp: number;
  tempHp: number;
  heroId: number;
}

export const HealthBar: FC<IHealthBarProps> = (props) => {
  const {
    currentPercent,
    buffPercent,
    tempPercent,
    effectiveCurrent,
    buffHp,
    tempHp,
    heroId,
  } = props;
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <Progress.Root
        onClick={() => setOpened((open) => !open)}
        className={styles.healthBarContainer}
      >
        <Tooltip
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
      <HealthButtons heroId={heroId} />
    </div>
  );
};
