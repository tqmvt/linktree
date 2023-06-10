import { Flex, chakra, Link as ChakraLink } from "@chakra-ui/react";
import Image from "next/image";
import { SOCIAL_ICONS } from "../../constants";

type SocialsProps = {
  items: SocialLinkT[];
};

const CoverImg = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export const Socials = ({ items }: SocialsProps) => {
  return (
    <Flex alignItems="center" justifyContent="center" mb="10">
      {items.map((item) => {
        return (
          <ChakraLink
            isExternal
            key={item.title}
            href={item.url}
            _hover={{ textDecoration: "none" }}
          >
            <Flex
              key={item.title}
              mx="2"
              w="40px"
              h="50px"
              alignItems="center"
              justifyContent="center"
            >
              <CoverImg
                as={Image}
                src={SOCIAL_ICONS[item.title]}
                width={8}
                height={8}
                alt={item.title}
                _hover={{ width: "36px", height: "36px" }}
              />
            </Flex>
          </ChakraLink>
        );
      })}
    </Flex>
  );
};
