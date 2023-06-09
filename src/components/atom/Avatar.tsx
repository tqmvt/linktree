import Image from "next/image";
import { Box, Icon, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

type AvatarProps = {
  src: string;
  userId: string;
};
export const Avatar = ({ src, userId }: AvatarProps) => {
  return (
    <Box my={3}>
      <Box
        rounded="full"
        overflow="hidden"
        width="100px"
        height="100px"
        mx="auto"
      >
        <Image
          src={src}
          alt="avatar"
          width={100}
          height={100}
          placeholder="blur"
          blurDataURL="/images/blur.png"
        />
      </Box>
      <Box fontWeight="bold" mt={3}>
        @{userId}
        <Icon as={CheckCircleIcon} color="blue.500" ml={1} />
      </Box>
    </Box>
  );
};
