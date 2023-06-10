import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import { CImage } from "../CImage";
import { RefObject, forwardRef } from "react";

type AvatarProps = {
  src: string;
  userId: string;
};

export const Avatar = forwardRef(
  ({ src, userId }: AvatarProps, ref: RefObject<HTMLDivElement>) => {
    return (
      <Box my={3} ref={ref}>
        <CImage src={src} width={100} height={100} />
        <Flex
          fontWeight="bold"
          fontSize="xl"
          mt={3}
          alignItems="center"
          justifyContent="center"
        >
          <Box mr="1">@{userId}</Box>
          <Image
            src="/images/svgs/check.svg"
            alt="img"
            width="16"
            height="16"
          />
        </Flex>
      </Box>
    );
  }
);
