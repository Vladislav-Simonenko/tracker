import Image from "next/image";
import React from "react";
import styles from "./Logo.module.scss";

export const Logo = () => {
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
