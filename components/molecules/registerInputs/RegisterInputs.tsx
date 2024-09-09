import React, { ChangeEventHandler, FC } from "react";
import styles from "./RegisterInputs.module.scss";
import { InputField } from "@/components";

interface IRegisterInputsProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: ChangeEventHandler<HTMLInputElement>;
  value: {
    email: string;
    login: string;
    password: string;
    confirmPassword: string;
  };
  name: {
    email: string;
    login: string;
    password: string;
    confirmPassword: string;
  };
}

export const RegisterInputs: FC<IRegisterInputsProps> = (props) => {
  const { onChange, onBlur, value, name } = props;
  return (
    <div className={styles.registerInputsContainer}>
      <InputField
        type="email"
        name={name.email}
        value={value.email}
        onBlur={onBlur}
        onChange={onChange}
        placeholder="Your Email"
      />
      <InputField
        type="text"
        name={name.login}
        value={value.login}
        onBlur={onBlur}
        onChange={onChange}
        placeholder="Login"
      />
      <InputField
        type="password"
        name={name.password}
        value={value.password}
        onBlur={onBlur}
        onChange={onChange}
        placeholder="Your Password"
      />
      <InputField
        type="password"
        name={name.confirmPassword}
        value={value.confirmPassword}
        onBlur={onBlur}
        onChange={onChange}
        placeholder="Confirm Password"
      />
    </div>
  );
};
