import { interpolate } from "remotion";
import { useCurrentFrame } from "remotion";
import { Heading } from "@chakra-ui/react";

export const Title = ({ title }: { title: string }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <Heading
      fontSize="7xl"
      style={{ opacity }}
      className="text-gray-700 text-5xl font-bold leading-relaxed"
      mt="10"
    >
      {title}
    </Heading>
  );
};
