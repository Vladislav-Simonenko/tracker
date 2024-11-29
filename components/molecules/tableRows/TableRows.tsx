import React, { FC } from "react";
import { Table } from "@mantine/core";
import { UserActions } from "@/components";
import Link from "next/link";
import { GetUserDto } from "@/lib";

interface ITableRowsProps {
  users: GetUserDto[];
}

export const TableRows: FC<ITableRowsProps> = (props) => {
  const { users } = props;

  return users.map((user) => (
    <Table.Tr key={user.id}>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>{<Link href={`/user/${user.id}`}>{user.login}</Link>}</Table.Td>
      <Table.Td>
        {user.heroes.length > 0
          ? user.heroes.map((hero) => (
              <Link key={hero.id} href={`/character/${hero.id}`}>
                {hero.name + " "}
              </Link>
            ))
          : "Нет активных персонажей"}
      </Table.Td>
      <Table.Td>
        <UserActions id={user.id} />
      </Table.Td>
    </Table.Tr>
  ));
};
