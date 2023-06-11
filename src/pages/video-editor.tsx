import { Box, Text, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Player } from "@remotion/player";

import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

import { VideoComposition } from "../remotion/VideoComp/Composition";
import { defaultVideoCompProps } from "../types/VideoComp";
import { useLambda } from "../hooks/useLambda";

const VideoEditor = () => {
  const [props, setProps] = useState(defaultVideoCompProps);
  const [text, setText] = useState(JSON.stringify(props, null, 2));

  useEffect(() => {
    setProps(JSON.parse(text));
  }, [text]);
  const { renderMedia, progress, status, price, url, renderId } = useLambda(
    "VideoComp",
    props
  );

  return (
    <Container minHeight="100vh">
      <Box
        background="linear-gradient(rgb(255, 206, 3), rgb(255, 92, 23))"
        position="fixed"
        minHeight="100lvh"
        inset="0px"
        zIndex="-1"
      />
      <Main>
        <Box mb="10">
          <Box className="max-w-screen-md m-auto mb-20">
            <Player
              component={VideoComposition}
              inputProps={props}
              durationInFrames={120}
              fps={30}
              compositionHeight={1080}
              compositionWidth={1920}
              style={{ width: "100%" }}
              controls
              autoPlay
              loop
            />
            <div className="grid grid-cols-2 h-60">
              <Textarea
                name="props"
                id="props"
                mt={3}
                rows={8}
                value={text}
                onChange={(e) => setText(e.currentTarget.value)}
              />
              <div className=" flex flex-col items-center">
                <button
                  onClick={renderMedia}
                  disabled={true}
                  className="rounded-lg bg-blue-400 text-white uppercase px-4 py-2 m-2 disabled:bg-gray-400"
                >
                  Render
                </button>
                {status && (
                  <div className="w-full items-center flex flex-col">
                    <p
                      className={`uppercase text-xl font-bold  ${
                        status === "done"
                          ? "text-green-500"
                          : status === "error"
                          ? "text-red-500"
                          : "text-blue-500"
                      }`}
                    >
                      {status}
                    </p>
                    <div className="h-8 w-full bg-gray-500 rounded-full overflow-hidden relative">
                      <div
                        className="h-full left-0 top-0 bg-green-400"
                        style={{ width: `${(progress ?? 0) * 100}%` }}
                      ></div>
                    </div>
                    <p>Price: {price}</p>
                    {status !== "rendering" && (
                      <div className="text-green-500 space-x-4 uppercase">
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className=""
                        >
                          Open
                        </a>
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          download={renderId}
                        >
                          Download
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Box>
        </Box>
      </Main>

      <Footer justifyContent="flex-start" alignItems="flex-start" width="100%">
        <Text fontSize="2xs" fontWeight="thin">
          Cookie Preferences
        </Text>
      </Footer>
    </Container>
  );
};

export default VideoEditor;
