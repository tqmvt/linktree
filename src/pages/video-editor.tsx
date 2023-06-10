import { Box, Text } from "@chakra-ui/react";

import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

const VideoEditor = () => (
  <Container minHeight="100vh">
    <Box
      background="linear-gradient(rgb(255, 206, 3), rgb(255, 92, 23))"
      position="fixed"
      minHeight="100lvh"
      inset="0px"
      zIndex="-1"
    />
    <Main>
      <Box>Coming soon.</Box>
    </Main>

    {/* <DarkModeSwitch /> */}
    <Footer justifyContent="flex-start" alignItems="flex-start" width="100%">
      <Text fontSize="2xs" fontWeight="thin">
        Cookie Preferences
      </Text>
    </Footer>
  </Container>
);

export default VideoEditor;
