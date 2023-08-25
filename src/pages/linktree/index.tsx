import { Box, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next/types";

import { Container } from "../../components/Container";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { LinkButton, Socials, Avatars } from "../../components/atom";
import { LINKS, SOCIAL_LINKS, USER_PROFILE } from "../../constants";

type LinkTreeProps = {
  links: LinkT[];
  socialLinks: SocialLinkT[];
  userProfile: UserProfileT;
};

export const getStaticProps: GetStaticProps<LinkTreeProps> = async () => {
  return {
    props: {
      links: LINKS,
      socialLinks: SOCIAL_LINKS,
      userProfile: USER_PROFILE,
    },
  };
};

const LinkTree = ({ links, socialLinks, userProfile }: LinkTreeProps) => (
  <Container minHeight="100vh">
    <Box
      background="linear-gradient(rgb(255, 206, 3), rgb(255, 92, 23))"
      position="fixed"
      minHeight="100lvh"
      inset="0px"
      zIndex="-1"
    />
    <Main>
      <Avatars userProfile={userProfile} />
      {links.map((link) => {
        return <LinkButton key={link.link} data={link} />;
      })}
      <Socials items={socialLinks} />
    </Main>

    <Footer justifyContent="flex-start" alignItems="flex-start" width="100%">
      <Text fontSize="2xs" fontWeight="thin">
        Cookie Preferences
      </Text>
    </Footer>
  </Container>
);

export default LinkTree;
