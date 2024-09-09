import React, { FC } from "react";
import styles from "./MainTemplate.module.scss";

interface IMainTemplateProps {
  children: React.ReactNode;
}

export const MainTemplate: FC<IMainTemplateProps> = (props) => {
  const { children } = props;
  return <div className={styles.usersContainer}>{children}</div>;
};
