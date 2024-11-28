import React, { FC } from "react";
import Image from "next/image";
import styles from "./ImageContainer.module.scss";

interface IImageContainerProps {
  imagePath?: string;
}

export const ImageContainer: FC<IImageContainerProps> = (props) => {
  const { imagePath } = props;

  // If imagePath is undefined or an empty string, fallback to a default or empty URL
  const baseUrl = "http://localhost:3000";
  const fullPath = imagePath
    ? imagePath.startsWith("http")
      ? imagePath
      : `${baseUrl}${imagePath}`
    : ""; // Or use a fallback URL like `baseUrl + "/default-image.jpg"`

  // Optional: Check if fullPath is valid
  if (!fullPath) {
    return <p>No image available</p>; // or any fallback UI
  }

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
