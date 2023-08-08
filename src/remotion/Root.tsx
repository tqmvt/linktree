import { Composition } from "remotion";
import { VideoComposition } from "./VideoComp/Composition";
import "../styles/global.css";
import { defaultVideoCompProps } from "../types/VideoComp";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="VideoComp"
        component={VideoComposition}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
        defaultProps={defaultVideoCompProps}
      />
    </>
  );
};
