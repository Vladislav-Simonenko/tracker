"use client";

import { useDeleteUser } from "@/lib";
import Image from "next/image";
import React, { FC } from "react";

import styles from "./UserActions.module.scss";

interface IUserActionsProps {
  id: React.Key | number | string;
}

export const UserActions: FC<IUserActionsProps> = (props) => {
  const { id } = props;

  const { removeUser } = useDeleteUser();

  const confirmAction = () => {
    alert(`Confirm your action by id's ${id}`);
  };

  const deleteUser = () => {
    removeUser({ id });
  };

  return (
    <div>
      <Image
        onClick={confirmAction}
        src={"/svg/edit.svg"}
        alt={"edit"}
        width={24}
        height={24}
        className={styles.userActionsButton}
      />
      <Image
        onClick={deleteUser}
        src={"/svg/trash-x.svg"}
        alt={"delete"}
        width={24}
        height={24}
        className={styles.userActionsButton}
      />
    </div>
  );
};
