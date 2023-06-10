import { Text } from "@chakra-ui/react";
import { GetStaticProps } from "next/types";

import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Avatar } from "../components/atom/Avatar";
import { LinkButton } from "../components/atom/LinkButton";
import { Socials } from "../components/atom/Socials";
import { LINKS, SOCIAL_LINKS } from "../constants";

type LinkTreeProps = {
  links: LinkT[];
  socialLinks: SocialLinkT[];
};

export const getStaticProps: GetStaticProps<LinkTreeProps> = async () => {
  return { props: { links: LINKS, socialLinks: SOCIAL_LINKS } };
};

const LinkTree = ({ links, socialLinks }) => (
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

export default LinkTree;
