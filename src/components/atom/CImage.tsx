import Image from "next/image";
import { Box } from "@chakra-ui/react";

type CImageProps = {
  src: string;
  width: number;
  height: number;
};

export const CImage = ({ src, width, height }: CImageProps) => {
  return (
    <Box
      rounded="full"
      overflow="hidden"
      width={`${width}px`}
      height={`${height}px`}
      mx="auto"
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="avatar"
        placeholder="blur"
        blurDataURL="/images/blur.png"
        style={{ height }}
      />
    </Box>
  );
};
