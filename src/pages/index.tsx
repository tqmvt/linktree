import {
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Box,
  Flex,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { CTA } from "../components/CTA";
import { USERS } from "../constants";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <List spacing={3} my={0} color="text" textAlign="left">
        {USERS.map((user) => {
          return (
            <ListItem
              as={Flex}
              key={user.username}
              bg="green.100"
              alignItems="center"
              justifyContent="center"
              py={1}
            >
              <Box width="80px">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <ChakraLink
                  href={`/linktree/${user.username}`}
                  flexGrow={1}
                  mr={2}
                >
                  {user.username}
                </ChakraLink>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Main>

    <CTA />
  </Container>
);

export default Index;
