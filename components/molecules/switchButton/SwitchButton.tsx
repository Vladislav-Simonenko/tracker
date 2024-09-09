import React, { FC } from "react";
import { ButtonLayout } from "@/components/atoms";
import styles from "./SwitchButton.module.scss";

interface SwitchButtonProps {
  isRegister: boolean;
  onClick: () => void;
}

export const SwitchButton: FC<SwitchButtonProps> = ({
  isRegister,
  onClick,
}) => (
  <div className={styles.loginSwitchButton}>
    <ButtonLayout
      text={isRegister ? "Вход" : "Регистрация"}
      type="button"
      onClick={onClick}
    />
  </div>
);
