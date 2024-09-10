"use client";

import React, { FC } from "react";
import { TableHead, TableRows } from "@/components";

import { Table } from "@mantine/core";

export const UserTable: FC = () => {
  const rowFields = {
    email: "Почта",
    login: "Логин",
    characters: "Персонажи",
    actions: "Действия",
  };

  return (
    <Table>
      <TableHead fields={rowFields} />
      <Table.Tbody>{<TableRows />}</Table.Tbody>
    </Table>
  );
};
