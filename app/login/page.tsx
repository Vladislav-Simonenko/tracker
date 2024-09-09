import React from "react";
import styles from "./login.module.scss";
import { LoginModal } from "@/components";

export default function login() {
  return (
    <div className={styles.loginContainer}>
      <LoginModal />
    </div>
  );
}
