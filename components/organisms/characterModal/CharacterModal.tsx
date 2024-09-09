import React, { FC } from "react";

interface ICharacterModalProps {
  id: number | string;
}

export const CharacterModal: FC<ICharacterModalProps> = (props) => {
  const { id } = props;

  return <div>characters {id}</div>;
};
