import { Text } from "@chakra-ui/react";

import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Avatar } from "../components/atom/Avatar";
import { LinkButton } from "../components/atom/LinkButton";
import { Socials } from "../components/atom/Socials";

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

const socialLinks: SocialLinkT[] = [
  {
    title: "twitter",
    url: "https://twitter.com/_scentforest",
  },
  {
    title: "github",
    url: "https://github.com/gofixgo",
  },
  {
    title: "instagram",
    url: "https://twitter.com/_scentforest",
  },
  {
    title: "facebook",
    url: "https://twitter.com/_scentforest",
  },
];
const Index = () => (
  <Container minHeight="100vh">
    <Main>
      <Avatar src="/images/img_avatar.png" userId="pharrell" />

      {links.map((link) => {
        return <LinkButton key={link.link} data={link} />;
      })}
      <Socials items={socialLinks} />
    </Main>

    {/* <DarkModeSwitch /> */}
    <Footer justifyContent="flex-start" alignItems="flex-start" width="100%">
      <Text fontSize="xs">Cookie Preferences</Text>
    </Footer>
  </Container>
);

export default Index;
