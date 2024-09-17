import React, { FC, MouseEventHandler } from "react";
import { ChangeEmail } from "@/components/organisms";
import { Button, Collapse } from "@mantine/core";

import styles from "./UserChangeAction.module.scss";

interface IUserChangeActionProps {
  toggleEmail: MouseEventHandler<HTMLButtonElement>;
  openEmail: boolean;
}

export const UserChangeAction: FC<IUserChangeActionProps> = (props) => {
  const { toggleEmail, openEmail } = props;
  return (
    <div className={styles.userAction}>
      <Button onClick={toggleEmail}>Email</Button>

      <Collapse in={openEmail}>
        <ChangeEmail />
      </Collapse>
    </div>
  );
};
