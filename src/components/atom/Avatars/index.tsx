import React, { useRef } from "react";
import { Avatar } from "./Avatar";
import { MagicAvatar } from "./MagicAvatar";
import { useIsVisible } from "../../../hooks/useIsVisible";

type AvatarsProps = {
  userProfile: UserProfileT;
};

export const Avatars = ({ userProfile }: AvatarsProps) => {
  const ref = useRef<HTMLDivElement>();
  const isVisible = useIsVisible(ref);

  return (
    <>
      <Avatar src={userProfile.image} userId={userProfile.username} ref={ref} />
      <MagicAvatar
        src={userProfile.image}
        userId={userProfile.username}
        isVisible={isVisible}
      />
    </>
  );
};
