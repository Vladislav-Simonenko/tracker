"use client";

import React, { FC, useState } from "react";
import styles from "./Login.module.scss";
import { LoginForm, Logo, RegisterForm, SwitchButton } from "@/components";

export const LoginModal: FC = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className={styles.loginModal}>
      <div className={styles.loginModalHeader}>
        <Logo />
      </div>
      <div className={styles.diagonalLine}></div>
      <SwitchButton
        isRegister={isRegister}
        onClick={() => setIsRegister(!isRegister)}
      />
      {isRegister ? <RegisterForm /> : <LoginForm />}
    </div>
  );
};
