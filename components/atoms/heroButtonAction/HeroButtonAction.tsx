import { Button } from "@mantine/core";
import React, { FC } from "react";

import styles from "./HeroButtonAction.module.scss";

interface IHeroButtonActionProps {
  text: string;
  onClick: () => void;
  isLoading: boolean;
}

export const HeroButtonAction: FC<IHeroButtonActionProps> = (props) => {
  const { text, onClick, isLoading } = props;

  return (
    <Button
      classNames={{
        root: styles.heroButtonActionRoot,
      }}
      loading={isLoading}
      onClick={onClick}
      className={styles.heroButtonAction}
    >
      {text}
    </Button>
  );
};
