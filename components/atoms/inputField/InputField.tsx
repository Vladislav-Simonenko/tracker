import { Input } from "@mantine/core";
import React from "react";
import styles from "./Input.module.scss";

interface IInputProps {
  type: string;
  name: string;
  placeholder: string;
  value?: () => void;
}

export const InputField = (props: IInputProps) => {
  const { type, name, placeholder, value } = props;

  return (
    <Input
      className={styles.inputFields}
      required
      type={type}
      name={name}
      placeholder={placeholder}
    ></Input>
  );
};
