/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import { BoxInfo, UserAvatar } from "@/components/atoms";
import { UserInfo } from "@/components/molecules";
import { UsersResponse } from "@/services/Users/Users.types";
import { Box, Button, Flex, HStack } from "@chakra-ui/react";

export function DevBody({
  avatar_url,
  name,
  login,
  bio,
  followers,
  following,
  html_url,
  public_repos,
}: UsersResponse): JSX.Element {
  return (
    <Box background="gray.900" p="1rem">
      <Flex flexDir={["column", "row"]} alignItems={["center", "initial"]}>
        <Box marginRight="1rem">
          <UserAvatar imageSrc={avatar_url} name={name} />
        </Box>

        <Box width="100%">
          <Flex
            justifyContent="space-between"
            flexDir={["column", "row"]}
            alignItems={["center", "initial"]}
            gap="1rem"
            marginBottom="5rem"
          >
            <Box>
              <UserInfo bio={bio} completeName={name} user={login} />
            </Box>
            <Box>
              <Button
                borderRadius="none"
                colorScheme="gray"
                onClick={() => window.open(html_url)}
              >
                View on GitHub
              </Button>
            </Box>
          </Flex>

          <HStack
            background="gray.800"
            borderRadius="6px"
            p="1rem"
            justifyContent="space-around"
            flexDir={["column", "row"]}
            textAlign="center"
            gap="1rem"
          >
            <BoxInfo title="Public Repos" content={public_repos} />
            <BoxInfo title="Followers" content={followers} />
            <BoxInfo title="Following" content={following} />
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
