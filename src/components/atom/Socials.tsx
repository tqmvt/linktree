import { Box, Flex, chakra } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const socials = {
  facebook: "/images/svgs/facebook.svg",
  github: "/images/svgs/github.svg",
  instagram: "/images/svgs/instagram.svg",
  linkedin: "/images/svgs/linkedin.svg",
  pinterest: "/images/svgs/pinterest.svg",
  twitter: "/images/svgs/twitter.svg",
};

type SocialsProps = {
  items: SocialLinkT[];
};

const CoverImg = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export const Socials = ({ items }: SocialsProps) => {
  return (
    <Flex alignItems="center" justifyContent="center">
      {items.map((item) => {
        return (
          <Flex
            key={item.title}
            mx="2"
            w="80px"
            h="50px"
            alignItems="center"
            justifyContent="center"
          >
            <CoverImg
              as={Image}
              src={socials[item.title]}
              width={8}
              height={8}
              alt={item.title}
              _hover={{ width: "40px", height: "40px" }}
            />
          </Flex>
        );
      })}
    </Flex>
  );
};
