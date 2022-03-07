import { Heading, Text } from "@chakra-ui/react";

import { UserInfoProps } from "./UserInfo.types";

export function UserInfo({
  completeName,
  bio,
  user,
}: UserInfoProps): JSX.Element {
  return (
    <>
      <Heading>{completeName}</Heading>
      <Text color="gray.300">{bio}</Text>
      <Text color="purple.800" fontSize="sm">
        @{user}
      </Text>
    </>
  );
}
