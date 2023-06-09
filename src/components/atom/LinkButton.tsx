import { useState } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { CImage } from "./CImage";

type LinkButtonProps = {
  data: LinkT;
};
export const LinkButton = ({ data }: LinkButtonProps) => {
  const [mouse, setMouse] = useState<boolean>(false);

  return (
    <ChakraLink isExternal href={data.link} _hover={{ textDecoration: "none" }}>
      <Box
        rounded="full"
        px="10"
        py="3"
        border="2px"
        position="relative"
        onMouseEnter={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
      >
        {!!data.image && (
          <Box position="absolute" top="5px" left="1">
            <CImage width={38} height={38} src={data.image} />
          </Box>
        )}

        <Box fontWeight="semibold">{data.title}</Box>

        {mouse && (
          <Box position="absolute" top="2" right="2">
            <ExternalLinkIcon />
          </Box>
        )}
      </Box>
    </ChakraLink>
  );
};
