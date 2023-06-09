import {
  Link as ChakraLink,
  Text,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Avatar } from "../components/atom/Avatar";
import { LinkButton } from "../components/atom/LinkButton";

const links: LinkT[] = [
  {
    image: "/images/thumbnail.jpg",
    title: "Twitter",
    link: "",
  },
  {
    image: "",
    title: "Github",
    link: "",
  },
  {
    image: "/images/thumbnail2.jpg",
    title: "Linkedin",
    link: "",
  },
  {
    image: "",
    title: "Stackoverflow",
    link: "",
  },
];
const Index = () => (
  <Container height="100vh">
    <Main>
      <Avatar src="/images/img_avatar.png" userId="pharrell" />

      {links.map((link) => {
        return <LinkButton key={link.link} data={link} />;
      })}
      <List spacing={3} my={0} color="text">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Cookie Preferences</Text>
    </Footer>
  </Container>
);

export default Index;
