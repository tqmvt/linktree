import { Box, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { CImage } from "./CImage";

type AvatarProps = {
  src: string;
  userId: string;
};
export const Avatar = ({ src, userId }: AvatarProps) => {
  return (
    <Box my={3}>
      <CImage src={src} width={100} height={100} />
      <Box fontWeight="bold" mt={3}>
        @{userId}
        <Icon as={CheckCircleIcon} color="blue.500" ml={1} />
      </Box>
    </Box>
  );
};
