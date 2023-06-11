import React from "react";
import { Box } from "@chakra-ui/react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import Image from "next/image";

export const Logo: React.FC = () => {
  const frame = useCurrentFrame();
  const { height, fps } = useVideoConfig();

  const entrance = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    durationInFrames: 30,
  });

  const entranceOffset = interpolate(entrance, [0, 1], [height, 0]);

  const wave1 = Math.cos(frame / 15) * 10 + entranceOffset;
  // const wave2 = Math.cos((frame - 5) / 15) * 10 + entranceOffset;

  return (
    <Box mx="auto" my="10">
      <Box style={{ transform: `translateY(${wave1}px)` }} height={120}>
        <Image
          src="/images/svgs/hashtag-solid.svg"
          width={120}
          height={120}
          alt="hashtag"
        />
      </Box>
      {/* <Box
        style={{ transform: `translateY(${wave2}px)` }}
        className="absolute"
        height={120}
      >
        <Image
          src="/images/hunter.png"
          width={120}
          height={120}
          alt="hashtag"
        />
      </Box> */}
    </Box>
  );
};
