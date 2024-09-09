import React, { FC } from "react";
import { Button } from "@mantine/core";

interface IButtonLayoutProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export const ButtonLayout: FC<IButtonLayoutProps> = (props) => {
  const { text, onClick, type } = props;
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
};
