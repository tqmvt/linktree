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
        px="66px"
        py="16px"
        border="2px"
        position="relative"
        boxShadow="rgb(0, 0, 0) 8px 8px 0px 0px"
        onMouseEnter={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
        _hover={{
          boxShadow: "rgb(0, 0, 0) 4px 4px 0px 0px",
          transform: "translate(4px, 4px)",
        }}
        background="white"
      >
        {!!data.image && (
          <Box
            position="absolute"
            top="50%"
            translateY="-50%"
            transform="auto"
            left="1"
          >
            <CImage width={48} height={48} src={data.image} />
          </Box>
        )}

        <Box fontWeight="semibold">{data.title}</Box>

        <Box
          position="absolute"
          top="50%"
          right="4"
          translateY="-50%"
          transform="auto"
          opacity={mouse ? 1 : 0}
          transition="all 120ms ease-out 0s"
        >
          <ExternalLinkIcon />
        </Box>
      </Box>
    </ChakraLink>
  );
};
