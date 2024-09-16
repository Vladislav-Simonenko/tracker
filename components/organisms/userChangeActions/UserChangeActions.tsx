"use client";

import React, { FC } from "react";
import { Button, Collapse, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ChangeEmail, ChangePass, UserChangeAction } from "@/components";

import styles from "./UserChangeActions.module.scss";

export const UserChangeActions: FC = () => {
  const [openEmail, { toggle: toggleEmail }] = useDisclosure(false);
  const [openPass, { toggle: togglePass }] = useDisclosure(false);
  return (
    <div className={styles.userActions}>
      <UserChangeAction toggleEmail={toggleEmail} openEmail={openEmail} />
      <div className={styles.userAction}>
        <Button onClick={togglePass}>Password</Button>

        <Collapse in={openPass}>
          <ChangePass />
        </Collapse>
      </div>
      <Image
        radius="md"
        h={200}
        w="auto"
        fit="contain"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      />
    </div>
  );
};
