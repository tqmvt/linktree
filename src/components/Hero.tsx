import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    height="50vh"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    px={5}
  >
    <Heading fontSize="3xl">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "Sweeeet linktree & video editor",
};
