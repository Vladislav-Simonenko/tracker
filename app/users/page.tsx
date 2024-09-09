import React from "react";
import { MainTemplate, MainTitle, UserTable } from "@/components";

export default function users() {
  return (
    <MainTemplate>
      <MainTitle text={"Users"} />
      <UserTable />
    </MainTemplate>
  );
}
