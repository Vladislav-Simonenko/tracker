import React, { FC } from "react";
import styles from "./LoginTemplate.module.scss";

interface ILoginTemplateProps {
  children: React.ReactNode;
}

export const LoginTemplate: FC<ILoginTemplateProps> = (props) => {
  const { children } = props;
  return <div className={styles.loginContainer}>{children}</div>;
};
