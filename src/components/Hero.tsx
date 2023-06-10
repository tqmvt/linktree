import { Flex, Heading, Text, Code } from "@chakra-ui/react";

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
    <Text color="text">
      <Code>Next.js</Code> + <Code>chakra-ui</Code> + <Code>TypeScript</Code> +{" "}
      <Code>functional components</Code>
    </Text>
  </Flex>
);

Hero.defaultProps = {
  title: "Sweet linktree & video editor for Tibo",
};
