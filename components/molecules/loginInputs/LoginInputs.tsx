import React, { ChangeEventHandler, FC } from "react";
import styles from "./LoginInputs.module.scss";
import { InputField } from "@/components";

interface ILoginInputsProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: ChangeEventHandler<HTMLInputElement>;
  value: { email: string; password: string };
  name: { email: string; password: string };
}

export const LoginInputs: FC<ILoginInputsProps> = (props) => {
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
        value={value.password}
        onBlur={onBlur}
        onChange={onChange}
        placeholder="Your Password"
      />
    </div>
  );
};
