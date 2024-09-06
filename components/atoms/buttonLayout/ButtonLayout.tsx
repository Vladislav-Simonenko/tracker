import React from "react";
import { Button } from "@mantine/core";

interface IButtonLayoutProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export const ButtonLayout = (props: IButtonLayoutProps) => {
  const { text, onClick, type } = props;
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
};
