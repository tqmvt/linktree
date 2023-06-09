import Image from "next/image";
import { Box } from "@chakra-ui/react";

type AvatarProps = {
  src: string;
};
export const Avatar = ({ src }: AvatarProps) => {
  return (
    <Box rounded="full" overflow="hidden" width="100px" height="100px">
      <Image
        src={src}
        alt="avatar"
        width={100}
        height={100}
        placeholder="blur"
        blurDataURL="/images/blur.png"
      />
    </Box>
  );
};
