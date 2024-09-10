import React, { FC } from "react";
import { Table } from "@mantine/core";

interface ITableHeadProps {
  fields: {
    email: string;
    login: string;
    characters: string;
    actions: string;
  };
}

export const TableHead: FC<ITableHeadProps> = (props) => {
  const { fields } = props;

  return (
    <Table.Thead>
      <Table.Tr>
        <Table.Th>{fields.email}</Table.Th>
        <Table.Th>{fields.login}</Table.Th>
        <Table.Th>{fields.characters}</Table.Th>
        <Table.Th>{fields.actions}</Table.Th>
      </Table.Tr>
    </Table.Thead>
  );
};
