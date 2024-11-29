import React from "react";
import { HeroTabs, HeroTemplate } from "@/components";

export default function character({ params }: { params: { id: number } }) {
  return (
    <HeroTemplate>
      <HeroTabs heroId={params.id} />
    </HeroTemplate>
  );
}
