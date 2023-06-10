import {
  Link as ChakraLink,
  Text,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { USERS } from "../constants";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <List spacing={3} my={0} color="text">
        {USERS.map((user) => {
          return (
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <ChakraLink
                href={`/linktree/${user.username}`}
                flexGrow={1}
                mr={2}
              >
                {user.username} <LinkIcon />
              </ChakraLink>
            </ListItem>
          );
        })}
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>
        TODO: to use dynamic pages, should have multiple users for link tree
      </Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
