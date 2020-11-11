import React from "react";
import { Image } from "./ImageCard.styled";

type ImageCardProps = React.HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
  shadowColor: string;
};

export const ImageCard = ({
  imgSrc,
  shadowColor,
  ...props
}: ImageCardProps) => {
  return <Image src={imgSrc} shadowColor={shadowColor} />;
};
