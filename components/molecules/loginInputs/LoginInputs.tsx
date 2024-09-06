import React, { ChangeEventHandler } from "react";
import styles from "./LoginInputs.module.scss";
import { InputField } from "@/components";

interface ILoginInputsProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: ChangeEventHandler<HTMLInputElement>;
  value: { email: string; pass: string };
  name: { email: string; password: string };
}

export const LoginInputs = (props: ILoginInputsProps) => {
  const { onChange, onBlur, value, name } = props;
  return (
    <div className={styles.loginInputsContainer}>
      <InputField
        type="email"
        name={name.email}
        value={value.email}
        onBlur={onBlur}
        onChange={onChange}
        placeholder="Your Email"
      />
      <InputField
        type="password"
        name={name.password}
        value={value.pass}
        onBlur={onBlur}
        onChange={onChange}
        placeholder="Your Password"
      />
    </div>
  );
};
