import React from "react";
import { CharacterModal, MainTemplate } from "@/components";

export default function character({ params }: { params: { id: number } }) {
  return (
    <MainTemplate>
      <CharacterModal id={params.id} />
    </MainTemplate>
  );
}
