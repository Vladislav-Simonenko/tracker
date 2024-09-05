import React from "react";
import styles from "./login.module.scss";
import { LoginInputs, Logo } from "@/components";

export default function login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginModal}>
        <div className={styles.loginModalHeader}>{/* <Logo /> */}</div>
        <div className={styles.diagonalLine}></div>
        <div className={styles.loginModalMain}>
          <LoginInputs />
        </div>
      </div>
    </div>
  );
}
