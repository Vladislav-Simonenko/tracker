import { Input } from "@mantine/core";
import React, { ChangeEventHandler } from "react";
import styles from "./Input.module.scss";

interface IInputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onBlur: ChangeEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const InputField = (props: IInputProps) => {
  const { type, name, placeholder, value, onBlur, onChange } = props;

  return (
    <Input
      className={styles.inputFields}
      required
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
