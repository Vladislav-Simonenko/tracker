import React, { FC } from "react";
import { Table } from "@mantine/core";
import { UserActions } from "@/components";
import Link from "next/link";

interface ITableRowsProps {}

export const TableRows: FC<ITableRowsProps> = (props) => {
  const {} = props;

  return elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.login}</Table.Td>
      <Table.Td>
        {element.characters.length > 0
          ? element.characters.map((e) => (
              <Link key={e.id} href={`/character/${e.id}`}>
                {e.name + " "}
              </Link>
            ))
          : "Нет активных персонажей"}
      </Table.Td>
      <Table.Td>
        <UserActions id={element.id} />
      </Table.Td>
    </Table.Tr>
  ));
};

const elements = [
  {
    id: 1,
    email: "user",
    login: "test",
    characters: [
      {
        id: 1,
        type: "warrior",
        name: "atray",
      },
      {
        id: 2,
        type: "warrior",
        name: "god",
      },
      {
        id: 3,
        type: "warrior",
        name: "zeus",
      },
    ],
  },
  {
    id: 2,
    email: "user",
    login: "test",
    characters: [
      {
        id: 4,
        type: "warrior",
        name: "atray",
      },
      {
        id: 5,
        type: "warrior",
        name: "god",
      },
      {
        id: 6,
        type: "warrior",
        name: "zeus",
      },
    ],
  },
  {
    id: 3,
    email: "user",
    login: "test",
    characters: [],
  },
];
