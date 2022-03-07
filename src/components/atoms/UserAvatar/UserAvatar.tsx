import { Avatar, WrapItem } from "@chakra-ui/react";

import { UserAvatarProps } from "./UserAvatar.types";

export function UserAvatar({ name, imageSrc }: UserAvatarProps): JSX.Element {
  return (
    <WrapItem>
      <Avatar size="2xl" name={name} src={imageSrc} />
    </WrapItem>
  );
}
