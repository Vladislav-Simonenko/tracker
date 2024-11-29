"use client";

import React, { FC, Suspense } from "react";
import { TableHead, TableRows } from "@/components";
import { Table } from "@mantine/core";
import { useAllUsers } from "@/lib";

export const UserTable: FC = () => {
  const { userList, isLoading, error } = useAllUsers();

  const rowFields = {
    email: "Почта",
    login: "Логин",
    characters: "Персонажи",
    actions: "Действия",
  };

  return (
    <Table>
      <TableHead fields={rowFields} />
      <Suspense fallback={<div>load</div>}>
        <Table.Tbody>{<TableRows users={userList} />}</Table.Tbody>
      </Suspense>
    </Table>
  );
};
