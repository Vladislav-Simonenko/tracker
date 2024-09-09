import React, { FC } from "react";

import styles from "./MainTitle.module.scss";

interface IMainTitleProps {
  text: string;
}

export const MainTitle: FC<IMainTitleProps> = (props) => {
  const { text } = props;
  return <h2 className={styles.mainTitleText}>{text}</h2>;
};
