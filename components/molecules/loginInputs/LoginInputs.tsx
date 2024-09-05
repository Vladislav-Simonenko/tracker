import React from "react";
import styles from "./LoginInputs.module.scss";
import { InputField } from "@/components";

export const LoginInputs = () => {
  return (
    <div className={styles.loginInputsContainer}>
      <InputField type={"email"} name={"email"} placeholder={"Your Email"} />
      <InputField
        type={"password"}
        name={"password"}
        placeholder={"Your Pass"}
      />
    </div>
  );
};
