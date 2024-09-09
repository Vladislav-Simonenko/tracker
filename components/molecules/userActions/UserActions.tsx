import Image from "next/image";
import React, { FC } from "react";

interface IUserActionsProps {
  id: number;
}

export const UserActions: FC<IUserActionsProps> = (props) => {
  const { id } = props;

  const confirmAction = () => {
    alert(`Confirm your action by id's ${id}`);
  };

  return (
    <div>
      <Image
        onClick={confirmAction}
        src={"/svg/edit.svg"}
        alt={"edit"}
        width={24}
        height={24}
      />
      <Image
        onClick={confirmAction}
        src={"/svg/trash-x.svg"}
        alt={"delete"}
        width={24}
        height={24}
      />
    </div>
  );
};
