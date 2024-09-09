import Image from "next/image";
import React, { FC } from "react";
import styles from "./Logo.module.scss";

export const Logo: FC = () => {
  return (
    <Image
      className={styles.logo}
      src={"/images/logoT.png"}
      alt={""}
      width={150}
      height={150}
    />
  );
};
