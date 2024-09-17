import React, { FC } from "react";
import { Button } from "@mantine/core";

interface IButtonLayoutProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
}

export const ButtonLayout: FC<IButtonLayoutProps> = (props) => {
  const { text, onClick, type, disabled } = props;
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};
