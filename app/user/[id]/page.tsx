import React from "react";
import { MainTemplate, UserChangeActions } from "@/components";

import styles from "./user.module.scss";

export default function character({ params }: { params: { id: number } }) {
  return (
    <MainTemplate>
      <div className={styles.userContainer}>
        <div className={styles.userInfo}>
          <h2>Hero Name</h2>
        </div>
        <UserChangeActions />
      </div>
    </MainTemplate>
  );
}
