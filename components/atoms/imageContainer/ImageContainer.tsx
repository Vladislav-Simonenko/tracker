import React, { FC } from "react";
import Image from "next/image";

import styles from "./ImageContainer.module.scss";

interface IImageContainerProps {
  imagePath?: string;
}

export const ImageContainer: FC<IImageContainerProps> = (props) => {
  const { imagePath } = props;
  const baseUrl = "http://localhost:3000";
  const fullPath = imagePath.startsWith("http")
    ? imagePath
    : `${baseUrl}${imagePath}`;

  return (
    <Image
      className={styles.imageContainer}
      src={fullPath}
      alt="Hero Image"
      width={1920}
      height={1080}
    />
  );
};
