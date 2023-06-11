export interface VideoCompProps {
  title: string;
  subtitle: string;
  backgroundColor: string;
}

export const defaultVideoCompProps: VideoCompProps = {
  title: "Text on video",
  subtitle:
    "To view real-time changes on the video, please update the content accordingly.",
  backgroundColor: "transparent",
};
