import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import { CImage } from "../CImage";

type MagicAvatarProps = {
  src: string;
  userId: string;
  isVisible: boolean;
};

export const MagicAvatar = ({ src, userId, isVisible }: MagicAvatarProps) => {
  return (
    <Flex
      my={3}
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      top="3"
      left="0px"
      right="0px"
      rounded="full"
      zIndex="10"
      width={{ base: "96%", lg: "912px" }}
      borderWidth="1px"
      borderColor="rgb(235, 238, 241)"
      backgroundColor="rgba(255, 255, 255, 0.5)"
      backdropFilter="blur(10px)"
      transition="all 120ms ease-out 0s"
      mx="auto"
      p="12px"
      opacity={isVisible ? 0 : 1}
    >
      <Box>
        <CImage src={src} width={48} height={48} />
      </Box>
      <Flex
        fontWeight="bold"
        fontSize="md"
        alignItems="center"
        justifyContent="center"
      >
        <Box mr="1">@{userId}</Box>
        <Image
          src="/images/svgs/check.svg"
          alt="check"
          width="16"
          height="16"
        />
      </Flex>
      <Flex
        background="black"
        width="40px"
        height="40px"
        alignItems="center"
        justifyContent="center"
        rounded="full"
      >
        <Image
          src="/images/svgs/ellipsis-solid.svg"
          alt="dots"
          width="16"
          height="16"
        />
      </Flex>
    </Flex>
  );
};
